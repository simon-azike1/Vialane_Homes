with open('src/app/layout.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add ScrollProgress import
content = content.replace(
    "import ScrollToTop from '@/components/ScrollToTop';",
    "import ScrollToTop from '@/components/ScrollToTop';\nimport ScrollProgress from '@/components/ScrollProgress';"
)

# Add ScrollProgress component after Nav
content = content.replace(
    '        <Nav />\n        <main>{children}</main>',
    '        <Nav />\n        <ScrollProgress />\n        <main>{children}</main>'
)

with open('src/app/layout.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Added ScrollProgress to layout")
