import os
import firebase_admin
import sys
from dotenv import load_dotenv
from firebase_admin import credentials, firestore
from utils import fix_blog_formatting

print(f"🛠 Python version: {sys.version}")

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


def update_blog_posts():
    # Fetch all blog posts
    blog_posts_ref = db.collection('blogPosts')
    blog_posts = blog_posts_ref.stream()
    
    # Update a single blog post
    # blog_posts = blog_posts_ref.document('EK5SpvLuNhlNqbT4CaZV')
    # blog = blog_posts.get()
    # print("blog----------", blog)
    # x = blog.to_dict()
    # print("x----------", x)
    # original_body = x['excerpt']
    # print("original_body----------", original_body)
    # # Process the body
    # modified_body = fix_blog_formatting(original_body)
    # print("modified_body----------", modified_body)
    # # Update the blog post with the modified body
    # blog_posts_ref.document(blog.id).update({'excerpt': modified_body})
    # print(f"Updated post {blog.id} with new body.")

    for post in blog_posts:
        post_data = post.to_dict()
        original_body = post_data.get('excerpt', '')
        print("original_body----------", original_body)

        # Process the body
        modified_body = fix_blog_formatting(original_body)
        print("modified_body----------", modified_body)
        # Update the blog post with the modified body
        blog_posts_ref.document(post.id).update({'excerpt': modified_body})
        print(f"Updated post {post.id} with new body.")

if __name__ == "__main__":
    update_blog_posts()