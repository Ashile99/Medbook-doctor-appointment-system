import xml.etree.ElementTree as ET
import re
from collections import Counter

svg_file = 'e:/Code/MedBook Project/Medbook Off/referance/Home.svg'

try:
    with open(svg_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    colors = re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', content)
    font_sizes = re.findall(r'font-size="(\d+(?:\.\d+)?)"', content)
    font_families = re.findall(r'font-family="([^"]+)"', content)
    
    print('Top Colors:')
    for c, count in Counter(c.upper() for c in colors).most_common(15):
        print(f"  {c}: {count}")
        
    print('\nFont Sizes:')
    for s, count in Counter(font_sizes).most_common(10):
        print(f"  {s}: {count}")
        
    print('\nFont Families:')
    for f, count in Counter(font_families).most_common(10):
        print(f"  {f}: {count}")

except Exception as e:
    print('Error:', e)
