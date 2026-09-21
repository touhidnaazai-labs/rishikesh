# Hero background video — sourcing

`hero-rishikesh.mp4` is a ~29-second, muted, looping 1080p background
video for the homepage hero, built from two real, high-quality,
**moving** (not locked-off/static) drone clips of Rishikesh — both
Pexels, free license, no attribution required:

| Segment | Source |
|---|---|
| 0–14s: Golden-hour drone flythrough of the Ganga valley, flying toward the bridge and riverside temples | Pexels, creator Nitin Khajotia — [source](https://www.pexels.com/video/aerial-view-of-the-city-19096677/) (4K original) |
| 14–29s: Golden-hour aerial continuing past the Ganga, Trayambakeshwar Temple and the bridge | Pexels, creator Nitin Khajotia — [source](https://www.pexels.com/video/a-river-with-rocks-and-buildings-in-the-background-19096741/) (4K original, this is a ~15s excerpt from a longer clip) |

Both sourced at 4K, scaled to 1920×1080, crossfaded together, and
re-encoded with ffmpeg (h264, crf 26, ~11MB). An earlier version used a
static, locked-off shot of Lakshman Jhula lit up at night for the first
segment — replaced because a moving establishing shot reads better and
was specifically requested. `hero-rishikesh-poster.jpg` is the first
frame, used as the `<video poster>` and as the static fallback shown
instead of the video when the visitor has `prefers-reduced-motion` set
(see `components/Hero.tsx`).

## Missing: Bajrang Setu (the glass-floor bridge)

Checked again — still no stock video of Bajrang Setu exists on
Pexels/Unsplash/Pixabay. It's too new (opened publicly in late 2025)
for stock footage libraries to have caught up; searches for "Bajrang
Setu", "glass bridge Rishikesh" etc. only return news-article pages and
YouTube videos, none of which are licensed for reuse here. The hero
video currently only cycles two Ganga/temple/bridge establishing shots.
If the hotel has (or can get) real video of Bajrang Setu, drop it in
here and it can be added as a third segment.
