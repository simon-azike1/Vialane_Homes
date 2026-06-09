with open('src/app/layout.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    "title: 'Vialane Homes',",
    "title: 'Vialane',"
)

content = content.replace(
    "siteName: 'Vialane Homes',",
    "siteName: 'Vialane',"
)

with open('src/app/layout.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated browser tab title to 'Vialane'")
