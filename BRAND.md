# Kyreon — Colour System

Brand palette for logo & identity. Derived from the live website tokens
(`src/app/globals.css`), so anything built from this matches the site out of the box.

**One accent — Azure — on a cool ink-and-paper neutral base.**

---

## 01 · Core colours

Three workhorses. Azure is the only accent; the mark reads in Azure on light, and
reverses to Paper or Azure&nbsp;400 on dark.

| Role | Name | Hex | RGB | OKLCH | Use for |
|------|------|-----|-----|-------|---------|
| Accent | **Azure** | `#2F6BF6` | `47, 107, 246` | `0.56 0.176 254` | The logo mark · primary accent |
| Near-black | **Ink** | `#131722` | `19, 23, 34` | `0.19 0.014 262` | Wordmark · one-colour logo |
| Near-white | **Paper** | `#F8FAFC` | `248, 250, 252` | `0.981 0.004 250` | Reverse logo · backgrounds |
| On dark | **Azure 400** | `#5B9BFF` | `91, 155, 255` | `0.72 0.15 252` | The mark when placed on Ink |

---

## 02 · Azure scale

Tints and shades of the accent — for gradients, depth in a layered/3D mark, hover
states, and duotone treatments. **500** is the canonical brand blue; **400** is the
brighter tone used on dark grounds.

| Step | Hex | Notes |
|------|-----|-------|
| 50  | `#EEF4FF` | Lightest tint · quiet backgrounds |
| 100 | `#DBE7FF` | |
| 200 | `#BAD0FF` | |
| 300 | `#8FB2FF` | |
| 400 | `#5B9BFF` | **Accent on dark** |
| 500 | `#2F6BF6` | **Brand blue** |
| 600 | `#1E54DB` | Hover / pressed |
| 700 | `#1A43AD` | |
| 800 | `#1A3A8A` | |
| 900 | `#1B336E` | Deepest shade · shadows |

---

## 03 · Cool neutrals

A slate ramp biased slightly toward blue — never pure grey — so neutrals feel chosen
and sit naturally beside Azure.

| Step | Hex | Typical use |
|------|-----|-------------|
| 50  | `#F8FAFC` | Paper / page background |
| 100 | `#EEF1F6` | Subtle surface |
| 200 | `#E2E6EE` | Borders / hairlines |
| 300 | `#CBD2E0` | Strong borders |
| 400 | `#9AA3B8` | Disabled text |
| 500 | `#6B7387` | Muted / secondary text |
| 600 | `#4C5468` | |
| 700 | `#333B4D` | |
| 800 | `#212838` | Dark surface |
| 900 | `#131722` | Ink / dark background |

---

## 04 · Logo on colour

How the lockup should sit on each ground. Keep clear space around the mark equal to
the height of the mark itself.

| Application | Background | Mark | Wordmark |
|-------------|-----------|------|----------|
| Primary | Paper `#F8FAFC` | Azure `#2F6BF6` | Ink `#131722` |
| Reverse | Ink `#131722` | Azure 400 `#5B9BFF` | Paper `#F8FAFC` |
| Solid | Azure `#2F6BF6` | White `#FFFFFF` | White `#FFFFFF` |
| One-colour (light) | Paper `#F8FAFC` | Ink `#131722` | Ink `#131722` |
| One-colour (dark) | Ink `#131722` | Paper `#F8FAFC` | Paper `#F8FAFC` |
| Tint | Azure 50 `#EEF4FF` | Azure `#2F6BF6` | Azure 700 `#1A43AD` |

---

## 05 · Usage rules

### ✅ Do
- Use **Azure `#2F6BF6`** as the single brand colour — one accent, held consistently.
- Reverse to **Paper** or **Azure 400** when placing the mark on Ink or photography.
- Keep the wordmark in **Ink** (light) / **Paper** (dark) — let only the mark carry colour.
- Provide a **one-colour** version (all Ink or all Paper) for stamps, favicons, embroidery.

### ❌ Don't
- Don't introduce a second accent hue — no purple/teal gradients competing with Azure.
- Don't place Azure on Ink below **4.5:1** contrast at small sizes; switch to Azure 400.
- Don't recolour the wordmark in Azure — it weakens the accent's impact.
- Don't use pure grey (`#808080`) for neutrals — always the cool slate ramp.

---

## Typography

| Role | Typeface |
|------|----------|
| Display / wordmark | **Bricolage Grotesque** (800) |
| Body | **Inter** |
| Data / captions | **JetBrains Mono** |

---

## Quick reference

```
Azure       #2F6BF6   rgb(47, 107, 246)     ← logo mark
Azure 400   #5B9BFF   rgb(91, 155, 255)     ← mark on dark
Ink         #131722   rgb(19, 23, 34)       ← wordmark
Paper       #F8FAFC   rgb(248, 250, 252)    ← background
Muted       #6B7387   rgb(107, 115, 135)    ← secondary text
Border      #E2E6EE   rgb(226, 230, 238)    ← hairlines
```
