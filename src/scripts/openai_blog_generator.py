# Let's generate the Python script that:
# 1. Takes a topic.
# 2. Sends a request to OpenAI to generate a blog post.
# 3. Fetches a relevant image from Unsplash using their API.
# 4. Combines the blog and image into a dictionary.

# script = '''
import os
import openai
import re
import firebase_admin
import json
import sys
from slugify import slugify
from datetime import datetime
from dotenv import load_dotenv
from firebase_admin import credentials, firestore
from utils import fix_blog_formatting

print(f"🛠 Python version: {sys.version}")

# Load environment variables
if os.getenv("GITHUB_ACTIONS"):
    # Running in GitHub Actions
    openai_api_key = os.getenv("OPENAI_API_KEY")
    pexels_api_key = os.getenv("PEXELS_API_KEY")
    firebase_project_id = os.getenv("FIREBASE_PROJECT_ID")
    firebase_private_key = os.getenv("FIREBASE_PRIVATE_KEY").replace("\\n", "\n")
    firebase_client_email = os.getenv("FIREBASE_CLIENT_EMAIL")
else:
    # Running locally
    load_dotenv(verbose=True, override=True)
    openai_api_key = os.getenv("OPENAI_API_KEY")
    pexels_api_key = os.getenv("PEXELS_API_KEY")
    firebase_project_id = os.getenv("FIREBASE_PROJECT_ID")
    firebase_private_key = os.getenv("FIREBASE_PRIVATE_KEY").replace("\\n", "\n")
    firebase_client_email = os.getenv("FIREBASE_CLIENT_EMAIL")

print('PEXELS_API_KEY', pexels_api_key)
print('OPENAI_API_KEY', openai_api_key)
print('FIREBASE_PROJECT_ID', firebase_project_id)
print('FIREBASE_PRIVATE_KEY', firebase_private_key)
print('FIREBASE_CLIENT_EMAIL', firebase_client_email)

# Initialize Firebase
cred_dict = {
    "type": "service_account",
    "project_id": firebase_project_id,
    "private_key": firebase_private_key,
    "client_email": firebase_client_email,
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/v1/certs",
    "client_x509_cert_url": f"https://www.googleapis.com/robot/v1/metadata/x509/{firebase_client_email.replace('@', '%40')}"
}

cred = credentials.Certificate(cred_dict)
firebase_admin.initialize_app(cred)
db = firestore.client()

def get_pexels_image(topic):
    import os
    import requests

    pexels_api_key = os.getenv("PEXELS_API_KEY")  # Set this in your .env
    url = "https://api.pexels.com/v1/search"
    headers = {
        "Authorization": pexels_api_key
    }
    params = {
        "query": topic,
        "per_page": 1,
        "orientation": "landscape"
    }
    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    data = response.json()
    return data["photos"][0]["src"]["large"]


def clean_markdown_json_block(text):
    """Cleans a messy OpenAI 'JSON' block and makes it safe to parse."""
    # 1. Remove code block wrappers ```json ... ```
    cleaned = re.sub(r'^```(?:json)?\s*', '', text.strip(), flags=re.IGNORECASE | re.MULTILINE)
    cleaned = re.sub(r'\s*```$', '', cleaned.strip(), flags=re.MULTILINE)

    # 2. Find the body field manually to fix inner bad characters
    match = re.search(r'"body"\s*:\s*"([\s\S]*?)"\s*}', cleaned)
    if not match:
        raise ValueError("Couldn't find 'body' field in the response!")

    body_content = match.group(1)

    # 3. Escape critical characters
    body_fixed = body_content.replace('\\', '\\\\')  # Escape backslashes first!
    body_fixed = body_fixed.replace('"', '\\"')       # Escape quotes
    body_fixed = body_fixed.replace('\n', '\\n')      # Escape newlines
    body_fixed = fix_blog_formatting(body_fixed)
    
    # 4. Rebuild the fixed JSON
    cleaned_fixed = re.sub(
        r'"body"\s*:\s*"([\s\S]*?)"\s*}',
        f'"body": "{body_fixed}"}}',
        cleaned
    )
    # 5. Parse the result
    data = json.loads(cleaned_fixed)

    # 6. Decode escaped newlines back into real ones
    # data["body"] = bytes(data["body"], "utf-8").decode("unicode_escape")
    # ^commented out because it was converting latin characters to other characters

    return {
        "title": data["title"].strip(),
        "body": data["body"].strip()
    }

def generate_blog_post(topic):
    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    prompt = f"""
You are a fun and trendy travel blogger writing in the style of BuzzFeed. Write a current blog post about: {topic}.

- The post should be ~300 words.
- Your entire response must be valid JSON with two keys: "title" and "body".
- Title should be catchy and relevant to the topic.
- The body should be written in Markdown and should NOT contain the title.
- Escape all line breaks as "\\n" inside the "body" field.
- Do not include any unescaped raw newlines inside the JSON fields.
- Wrap the JSON output inside a Markdown-style code block like ```json ... ```.
"""

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.8,
        max_tokens=1100
    )

    print('OPENAIresponse------')
    content = response.choices[0].message.content.strip()
    print('content------', content)

    cleaned_content = clean_markdown_json_block(content)
    print('cleaned_content------', cleaned_content)

    return cleaned_content

def save_to_firestore(title, body, image_url):
    doc_ref = db.collection("blogPosts").document()
    doc_ref.set({
        "author": "The Traveller",
        "title": title,
        "excerpt": body,
        "imageUrl": image_url,
        "readingTime": "5 min",
        "slug": slugify(title),
        "tags": ["travel", "adventure"],
        "date": datetime.utcnow().isoformat()
    })
    print(f"Post saved with ID: {doc_ref.id}")

def create_and_store_blog(topic):
    image_url = get_pexels_image(topic)
    print('image_url------', image_url)
    blog = generate_blog_post(topic)
    save_to_firestore(blog["title"], blog["body"], image_url)

def get_next_city():
    try:
        # Reference to the 'cities' collection
        cities_ref = db.collection('cities')
        
        # Get the first document in the collection
        docs = cities_ref.limit(1).stream()
        
        for doc in docs:
            city = doc.to_dict()
            city['id'] = doc.id  # Add the document ID to the city data
            print(f"Next city: {city['name']}, Created: {city['created']}, ID: {city['id']}")
            return city
        
        print("No cities found.")
        return None

    except Exception as e:
        print(f"Error fetching city: {e}")
        return None

def delete_city_by_id(city_id):
    try:
        # Reference to the 'cities' collection
        cities_ref = db.collection('cities')
        
        # Reference to the specific document by ID
        doc_ref = cities_ref.document(city_id)
        
        # Delete the document
        doc_ref.delete()
        
        print(f"✅ Successfully deleted city with ID: {city_id}")
        return True

    except Exception as e:
        print(f"❌ Error deleting city with ID {city_id}: {e}")
        return False


try:
    # Fetch the next city
    next_city = get_next_city()
    
    # Ensure next_city is not None before proceeding
    if next_city is None:
        raise ValueError("No city found to process.")
    
    # Create and store the blog post
    create_and_store_blog(next_city['name'])
    
    # Delete the city by ID only if the above operations succeed
    delete_city_by_id(next_city['id'])

except Exception as e:
    print(f"An error occurred: {e}")
    sys.exit(1)  # Exit with a non-zero status to indicate failure

