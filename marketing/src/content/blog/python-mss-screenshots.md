---
title: 'How to Take Screenshots with Python MSS'
description: 'Complete guide to the MSS Python screen capture library. Learn installation, capturing monitors, regions, performance optimization, and common errors like xgetimage() failed.'
pubDate: 'Jan 15 2026'
heroImage: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop'
tags: ['python', 'screenshots', 'automation', 'desktop capture']
---

Python MSS stands for Multiple Screen Shot, and it lives up to the name. It handles multi-monitor setups natively, runs on Windows, macOS, and Linux, and delivers solid performance.

## Installation and Basic Usage

Install the library using pip:

```bash
pip install mss
```

And then:

```python
import mss

with mss.mss() as sct:
    # Capture the first monitor
    screenshot = sct.grab(sct.monitors[1])

    # Save to file
    mss.tools.to_png(screenshot.rgb, screenshot.size, output='screenshot.png')
```

## Understanding Monitors

MSS uses an index system for monitors:

```python
import mss

with mss.mss() as sct:
    # monitors[0] = all monitors combined
    # monitors[1] = first monitor
    # monitors[2] = second monitor (if exists)

    for i, monitor in enumerate(sct.monitors):
        print(f"Monitor {i}: {monitor}")
```

Output:

```
Monitor 0: {'left': 0, 'top': 0, 'width': 3840, 'height': 1080}
Monitor 1: {'left': 0, 'top': 0, 'width': 1920, 'height': 1080}
Monitor 2: {'left': 1920, 'top': 0, 'width': 1920, 'height': 1080}
```

## Capturing Specific Monitors

```python
import mss

with mss.mss() as sct:
    # First monitor
    first_monitor = sct.grab(sct.monitors[1])

    # Second monitor
    second_monitor = sct.grab(sct.monitors[2])

    # All monitors combined
    all_monitors = sct.grab(sct.monitors[0])
```

## Capturing Specific Regions

Define a region with a dictionary:

```python
import mss

with mss.mss() as sct:
    region = {
        'left': 100,    # X coordinate
        'top': 100,     # Y coordinate
        'width': 500,   # Width in pixels
        'height': 500   # Height in pixels
    }

    screenshot = sct.grab(region)
    mss.tools.to_png(screenshot.rgb, screenshot.size, output='region.png')
```

## Saving Screenshots

### To PNG File

```python
import mss

with mss.mss() as sct:
    screenshot = sct.grab(sct.monitors[1])
    mss.tools.to_png(screenshot.rgb, screenshot.size, output='screenshot.png')
```

### To PIL Image

```python
import mss
from PIL import Image

with mss.mss() as sct:
    screenshot = sct.grab(sct.monitors[1])

    # Convert BGRA to RGB
    img = Image.frombytes('RGB', screenshot.size, screenshot.bgra, 'raw', 'BGRX')
    img.save('screenshot.png')
```

### To NumPy Array

```python
import mss
import numpy as np

with mss.mss() as sct:
    screenshot = sct.grab(sct.monitors[1])
    img_array = np.array(screenshot)  # BGRA format

    # Convert to RGB if needed
    rgb_array = img_array[:, :, :3][:, :, ::-1]  # Remove alpha, BGR to RGB
```

## Understanding Color Formats

MSS returns BGRA (Blue, Green, Red, Alpha) format:

```python
import mss

with mss.mss() as sct:
    screenshot = sct.grab(sct.monitors[1])

    # Raw bytes (BGRA)
    bgra_bytes = screenshot.bgra

    # RGB bytes (for saving)
    rgb_bytes = screenshot.rgb

    # Size tuple
    width, height = screenshot.size
```

### BGRA to RGB Conversion

```python
import mss
import numpy as np

with mss.mss() as sct:
    screenshot = sct.grab(sct.monitors[1])

    # Method 1: Using numpy
    bgra = np.array(screenshot)
    rgb = bgra[:, :, [2, 1, 0]]  # Swap B and R channels

    # Method 2: Using PIL
    from PIL import Image
    img = Image.frombytes('RGB', screenshot.size, screenshot.bgra, 'raw', 'BGRX')
```

## Performance Optimization

### Reuse the mss Instance

```python
import mss

# Bad: Creating new instance each time
for i in range(100):
    with mss.mss() as sct:
        screenshot = sct.grab(sct.monitors[1])

# Good: Reuse instance
with mss.mss() as sct:
    for i in range(100):
        screenshot = sct.grab(sct.monitors[1])
```

### Capture Only What You Need

```python
import mss

with mss.mss() as sct:
    # Capturing a smaller region is faster
    small_region = {'left': 0, 'top': 0, 'width': 100, 'height': 100}
    screenshot = sct.grab(small_region)
```

### Benchmark

```python
import mss
import time

with mss.mss() as sct:
    monitor = sct.monitors[1]

    start = time.time()
    frames = 0

    while time.time() - start < 5:
        sct.grab(monitor)
        frames += 1

    fps = frames / 5
    print(f"FPS: {fps:.1f}")
```

Typical results: **30-60 FPS** depending on resolution and system.

## Continuous Capture

```python
import mss
import time

def record_screen(duration_seconds, output_dir='frames'):
    import os
    os.makedirs(output_dir, exist_ok=True)

    frames = []

    with mss.mss() as sct:
        monitor = sct.monitors[1]
        start = time.time()

        while time.time() - start < duration_seconds:
            screenshot = sct.grab(monitor)
            frames.append(screenshot)

    # Save frames
    for i, frame in enumerate(frames):
        mss.tools.to_png(frame.rgb, frame.size, output=f'{output_dir}/frame_{i:05d}.png')

    print(f"Captured {len(frames)} frames")
    return frames

record_screen(2)  # Record 2 seconds
```

## Common Errors and Solutions

### ScreenShotError: xgetimage() failed

This error occurs on Linux when the X display isn't accessible.

**Solution 1:** Set the DISPLAY variable

```bash
export DISPLAY=:0
python your_script.py
```

**Solution 2:** Use Xvfb for headless servers

```bash
apt-get install xvfb
xvfb-run python your_script.py
```

**Solution 3:** Check display access in code

```python
import os
import mss

# Ensure DISPLAY is set
if 'DISPLAY' not in os.environ:
    os.environ['DISPLAY'] = ':0'

with mss.mss() as sct:
    screenshot = sct.grab(sct.monitors[1])
```

### Import Error on Linux

```bash
# Install required system dependencies
apt-get install python3-xlib
```

## MSS vs DXcam

| Feature | MSS | DXcam |
|---------|-----|-------|
| Platform | Windows, macOS, Linux | Windows only |
| FPS | 30-60 | 240+ |
| Multi-monitor | Excellent | Good |
| Dependencies | Pure Python | DirectX |
| Best for | Cross-platform | Gaming |

**Use MSS when:** You need cross-platform support or don't need extreme performance.

**Use DXcam when:** You are on Windows and need maximum FPS.

Note: DXcam is not actively maintained at the moment of writing this guide.

## Complete Example

```python
import mss
import time
from PIL import Image
from pathlib import Path

class ScreenCapture:
    def __init__(self, output_dir='captures'):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)

    def capture_monitor(self, monitor_index=1, filename='screenshot.png'):
        """Capture a specific monitor."""
        with mss.mss() as sct:
            if monitor_index >= len(sct.monitors):
                raise ValueError(f"Monitor {monitor_index} not found")

            screenshot = sct.grab(sct.monitors[monitor_index])
            output_path = self.output_dir / filename
            mss.tools.to_png(screenshot.rgb, screenshot.size, output=str(output_path))
            return output_path

    def capture_region(self, left, top, width, height, filename='region.png'):
        """Capture a specific region."""
        region = {'left': left, 'top': top, 'width': width, 'height': height}

        with mss.mss() as sct:
            screenshot = sct.grab(region)
            output_path = self.output_dir / filename
            mss.tools.to_png(screenshot.rgb, screenshot.size, output=str(output_path))
            return output_path

    def list_monitors(self):
        """List available monitors."""
        with mss.mss() as sct:
            return sct.monitors

# Usage
capture = ScreenCapture()
print("Monitors:", capture.list_monitors())
capture.capture_monitor(1, 'monitor1.png')
capture.capture_region(0, 0, 500, 500, 'region.png')
```

## Summary

Python MSS is the best general-purpose screen capture library for Python:

- **Cross-platform** (Windows, macOS, Linux)
- **Fast enough** for most use cases (30-60 FPS)
- **Native multi-monitor support**
- **Simple API** with no complex dependencies

## Frequently Asked Questions

### Is MSS faster than DXcam for screen capture?

No, DXcam is faster (240+ FPS vs 30-60 FPS), but it only works on Windows. MSS is the best choice for cross-platform code or when you don't need extreme performance.

### How to fix MSS ScreenShotError xgetimage() failed?

This error occurs on Linux when the display isn't accessible. Make sure the DISPLAY environment variable is set, or run with a display server. For headless servers, use Xvfb.

### What format does MSS grab() return?

MSS returns a ScreenShot object with BGRA pixel data. Use `screenshot.rgb` for RGB data, or convert with PIL/numpy for other formats.
