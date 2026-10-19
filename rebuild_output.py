import os
import shutil

base = r"C:\Users\Torie Almaraz\Downloads\WEB DEVELOPMENT\brightsmile_dental"
out = os.path.join(base, "output")

if os.path.exists(out):
    shutil.rmtree(out)
os.makedirs(out)

# Copy css, js, svg, root files into output/
for item in os.listdir(base):
    s = os.path.join(base, item)
    d = os.path.join(out, item)
    if os.path.isdir(s):
        shutil.copytree(s, d)
    else:
        shutil.copy2(s, d)

print("output/ rebuilt from source")
print("Files in output:", len(os.listdir(out)))
