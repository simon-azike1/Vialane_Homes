with open('src/components/Nav.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make navbar always solid - remove transparency
old = """<nav className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 bg-navy/90 md:bg-transparent md:backdrop-blur-md md:py-3.5 py-5 px-6 sm:px-12 ${
        scrolled ? 'md:bg-[rgba(8,15,30,0.93)]' : ''
      }`}>"""

new = """<nav className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 bg-navy md:bg-navy py-5 px-6 sm:px-12 ${
        scrolled ? 'md:bg-navy-deep md:backdrop-blur-md md:py-3.5' : 'md:bg-navy'
      }`}>"""

content = content.replace(old, new)

with open('src/components/Nav.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Navbar updated: always solid background, darker on scroll")
