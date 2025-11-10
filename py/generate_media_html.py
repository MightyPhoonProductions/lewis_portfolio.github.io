import os

# Define media folders
media_folders = {
    "Blender": "media/blender",
    "Unity": "media/unity",
    "Substance": "media/substance",
    "Experience": "media/experience"
}

output_file = "generated_media.html"

def generate_media_html():
    html = ""
    for project, folder in media_folders.items():
        html += f"<h3>🎨 {project} Projects</h3>\n<div class='media-grid'>\n"
        if os.path.exists(folder):
            for file in os.listdir(folder):
                if file.lower().endswith(('.png', '.jpg', '.jpeg', '.mp4', '.webm')):
                    file_path = f"{folder}/{file}"
                    caption = os.path.splitext(file)[0].replace("_", " ").title()
                    if file.lower().endswith(('.mp4', '.webm')):
                        html += f"  <div class='media-item' data-caption='{caption}'><video src='{file_path}' controls></video></div>\n"
                    else:
                        html += f"  <div class='media-item' data-caption='{caption}'><img src='{file_path}' alt='{caption}'></div>\n"
        html += "</div>\n\n"
    with open(output_file, "w") as f:
        f.write(html)
    print(f"Media HTML generated in {output_file}")

if __name__ == "__main__":
    generate_media_html()
