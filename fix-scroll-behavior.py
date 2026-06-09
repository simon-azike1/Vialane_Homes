with open('src/app/layout.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add data-scroll-behavior="smooth" to html tag
content = content.replace(
    '<html lang="en">',
    '<html lang="en" data-scroll-behavior="smooth">'
)

with open('src/app/layout.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Added data-scroll-behavior to html tag")
