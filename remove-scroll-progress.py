with open('src/app/layout.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove ScrollProgress import
content = content.replace(
    "import ScrollProgress from '@/components/ScrollProgress';\n",
    ''
)

# Remove ScrollProgress component from body
content = content.replace(
    '        <ScrollProgress />\n',
    ''
)

with open('src/app/layout.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Removed ScrollProgress from layout")
