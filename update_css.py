import sys

with open("c:/Users/User/Desktop/Antigrav proj/proj2.css", 'r', encoding='utf-8') as f:
    content = f.read()

# Dark Theme
content = content.replace("123, 92, 255", "230, 57, 70")  # rgba
content = content.replace("#7b5cff", "#e63946")           # hex accent
content = content.replace("#a78bfa", "#ef233c")           # hex accent glow
content = content.replace("#00d4aa", "#457b9d")           # hex accent 2
content = content.replace("0, 212, 170", "69, 123, 157")  # rgba accent 2
content = content.replace("#ff6b9d", "#fca311")           # hex accent 3
content = content.replace("255, 107, 157", "252, 163, 17")# rgba accent 3
content = content.replace("#9b7bff", "#ff4d6d")           # secondary accent

# Light Theme
content = content.replace("100, 68, 229", "217, 4, 41")   # rgba for light
content = content.replace("#6344e5", "#d90429")           # hex for light
content = content.replace("#00a887", "#1d3557")           # hex accent 2 light
content = content.replace("#e0447a", "#fb8500")           # hex accent 3 light

with open("c:/Users/User/Desktop/Antigrav proj/proj2.css", 'w', encoding='utf-8') as f:
    f.write(content)
