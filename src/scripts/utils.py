import re

def fix_blog_formatting(text):
    # Step 1: Remove extra blank lines inside numbered lists
    lines = text.splitlines()
    new_lines = []
    inside_list = False

    for line in lines:
        if re.match(r'^\d+\.\s', line.strip()):
            inside_list = True
            new_lines.append(line.strip())
        else:
            if inside_list and line.strip() == "":
                # Skip blank line inside a list
                continue
            else:
                inside_list = False
                new_lines.append(line)

    # Step 2: Bold the title after the number
    def bold_title(match):
        number = match.group(1)
        title = match.group(2).strip()
        separator = match.group(3)
        rest = match.group(4)
        return f"{number} **{title}**{separator} {rest}"

    final_text = "\n".join(new_lines)

    # Important change: match optional whitespace after separator
    final_text = re.sub(
        r'^(\d+\.)\s+([^:\-—]+)([:\-—])\s*(.*)',
        bold_title,
        final_text,
        flags=re.MULTILINE
    )

    return final_text