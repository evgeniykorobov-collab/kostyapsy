"""
Regenerate 4 portraits of Konstantin Albertovich for kostyapsy.ru
using Gemini 3.1 Flash Image Preview with two REAL selfies as reference.

Previous AI v3/v4 photos had long hair — Konstantin's real appearance
is short side-parted hair, narrow trimmed beard, slim high-cheekbone face,
dark earring, slim build, ~42 years old.

Selfies:  z:/VIBE/Kostya/photo_2026-04-20_21-04-52.jpg
          z:/VIBE/Kostya/photo_2026-04-20_21-05-14.jpg
Targets:  public/kostya-portrait-v3-2026-04-19.png  (/about hero)
          public/kostya-armchair-2026-04-19.png     (/about middle)
          public/kostya-working-v3-2026-04-19.png   (/about bottom)
          public/kostya-working-v4-2026-04-19.png   (main page)
"""
import os
import base64
import time
import requests

API_KEY = "<REMOVED_LEAKED_KEY_ROTATED>"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key={API_KEY}"

ROOT = "z:/VIBE/Kostya"
PUBLIC = f"{ROOT}/public"
SELFIE_1 = f"{ROOT}/photo_2026-04-20_21-04-52.jpg"
SELFIE_2 = f"{ROOT}/photo_2026-04-20_21-05-14.jpg"


def load_b64(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("ascii")


SELFIE_1_B64 = load_b64(SELFIE_1)
SELFIE_2_B64 = load_b64(SELFIE_2)

FACE_DESCRIPTION = (
    "The man in the two attached reference photos. Preserve his EXACT facial features: "
    "short dark-brown hair with a clear side parting on the left, "
    "narrow trimmed dark beard and moustache framing a slender face with pronounced high cheekbones, "
    "deep expressive brown eyes, dark well-defined eyebrows, "
    "a small dark earring in the left ear, slim athletic build, "
    "mid-40s age. Do NOT give him long hair, do NOT give him a full bushy beard, "
    "do NOT make his face rounder or younger. Keep the exact identity from the reference photos."
)

compositions = [
    (
        "kostya-portrait-v3-2026-04-19.png",
        (
            f"Professional studio portrait photograph, vertical 3:4 aspect ratio, of {FACE_DESCRIPTION} "
            "He is wearing a dark fine-knit sweater or soft jacket in charcoal/navy tone. "
            "Soft warm Rembrandt lighting from the left, deep shadows on the right, "
            "background is a blurred dark wooden bookshelf with old books and a warm lamp, "
            "creating an intelligent psychotherapist office atmosphere. "
            "Calm confident gaze directly into the camera, slight serious smile, "
            "hands not visible, head-and-shoulders crop. "
            "Photorealistic, 85mm lens, shallow depth of field, cinematic color grading, "
            "premium editorial quality. No text, no watermarks."
        ),
    ),
]

_unused_compositions = [
    (
        "kostya-armchair-2026-04-19.png",
        (
            f"Environmental portrait photograph, vertical 3:4 aspect ratio, of {FACE_DESCRIPTION} "
            "He is sitting relaxed in a deep leather armchair in a cozy psychotherapy consulting room, "
            "leaning slightly forward with one hand resting on the armrest, "
            "wearing a dark grey knitted sweater over a plain shirt. "
            "Warm amber side lighting from a table lamp, soft bokeh of bookshelves and a floor lamp behind him, "
            "a small side table with a tea cup and an open notebook beside him. "
            "Calm empathic expression, looking slightly off-camera as if listening to a client. "
            "Photorealistic, 50mm lens, natural warm color palette, intimate therapeutic atmosphere. "
            "No text, no watermarks."
        ),
    ),
    (
        "kostya-working-v3-2026-04-19.png",
        (
            f"Candid documentary photograph, landscape 16:9 aspect ratio, of {FACE_DESCRIPTION} "
            "He is seated at a wooden desk writing notes by hand in an open leather notebook with a fountain pen, "
            "wearing a dark navy sweater with shirt collar visible. "
            "A ceramic mug of tea nearby, a small green plant, an old brass desk lamp casting warm light on his hands and face. "
            "Background: blurred tall bookshelves filled with psychology and philosophy books. "
            "He is looking down at the notebook, concentrated and calm, a thoughtful slight frown. "
            "Photorealistic, wide cinematic framing, warm golden-hour indoor lighting, "
            "premium editorial quality. No text, no watermarks."
        ),
    ),
    (
        "kostya-working-v4-2026-04-19.png",
        (
            f"Wide hero photograph, landscape 16:9 aspect ratio, of {FACE_DESCRIPTION} "
            "He is standing by a large window in a warm-toned library-office, half-leaning against a wooden bookshelf, "
            "arms crossed relaxed, wearing a dark charcoal sweater and dark trousers. "
            "Soft natural window light illuminates his face from the right, "
            "background: a wall of books, a leather armchair in the distance, warm brass reading lamp. "
            "He is looking directly at the camera with a grounded, trustworthy expression, "
            "subtle confident smile, full figure from mid-thigh up. "
            "Photorealistic, 35mm lens, cinematic warm color grading, editorial magazine quality. "
            "No text, no watermarks."
        ),
    ),
]


def generate(prompt, output_path, retries=3):
    payload = {
        "contents": [{
            "parts": [
                {"text": prompt},
                {"inlineData": {"mimeType": "image/jpeg", "data": SELFIE_1_B64}},
                {"inlineData": {"mimeType": "image/jpeg", "data": SELFIE_2_B64}},
            ]
        }],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"]
        }
    }

    for attempt in range(retries):
        try:
            print(f"  [{attempt+1}/{retries}] Generating {os.path.basename(output_path)} ...")
            resp = requests.post(URL, json=payload, timeout=180)
            if resp.status_code != 200:
                print(f"    HTTP {resp.status_code}: {resp.text[:400]}")
                time.sleep(4)
                continue
            data = resp.json()

            for candidate in data.get("candidates", []):
                for part in candidate.get("content", {}).get("parts", []):
                    if "inlineData" in part:
                        img_bytes = base64.b64decode(part["inlineData"]["data"])
                        with open(output_path, "wb") as f:
                            f.write(img_bytes)
                        print(f"    OK -> {output_path} ({len(img_bytes)} bytes)")
                        return True
                    elif "text" in part:
                        print(f"    (text only): {part['text'][:200]}")

            print("    No image in response, retrying...")
            time.sleep(3)
        except Exception as e:
            print(f"    Error: {e}")
            time.sleep(4)

    print(f"  FAILED: {output_path}")
    return False


def main():
    print("=" * 70)
    print("Regenerating Konstantin's portraits with REAL selfies as reference")
    print("=" * 70)
    print(f"Selfie 1: {SELFIE_1} ({len(SELFIE_1_B64)} b64 chars)")
    print(f"Selfie 2: {SELFIE_2} ({len(SELFIE_2_B64)} b64 chars)")
    print()

    results = []
    for fname, prompt in compositions:
        out = os.path.join(PUBLIC, fname)
        ok = generate(prompt, out)
        results.append((fname, ok))
        time.sleep(2)

    print()
    print("=" * 70)
    print("SUMMARY")
    print("=" * 70)
    for fname, ok in results:
        print(f"  {'OK  ' if ok else 'FAIL'}  {fname}")


if __name__ == "__main__":
    main()
