# Hero background video — sourcing

`hero-rishikesh.mp4` is a 28-second, muted, looping 1080p background
video for the homepage hero, built from two real, high-quality
Rishikesh clips (both Pexels, free license, no attribution required):

| Segment | Source |
|---|---|
| 0–14s: Lakshman Jhula bridge lit up at dusk, reflecting in the Ganga | Pexels, creator shalender kumar — [source](https://www.pexels.com/video/lakshman-jhula-bridge-over-ganges-river-6595724/) (4K original) |
| 14–28s: Golden-hour aerial of the Ganga, Trayambakeshwar Temple and the bridge | Pexels, creator Nitin Khajotia — [source](https://www.pexels.com/video/a-river-with-rocks-and-buildings-in-the-background-19096741/) (4K original, this is a ~15s excerpt from a longer clip) |

Both sourced at 4K, scaled to 1920×1080, crossfaded together, and
re-encoded with ffmpeg (h264, crf 26, ~12MB) — a deliberately higher
quality/size target than the first version of this file, which was
over-compressed to 720p/crf28 and looked visibly soft.
`hero-rishikesh-poster.jpg` is the first frame, used as the
`<video poster>` and as the static fallback shown instead of the video
when the visitor has `prefers-reduced-motion` set (see
`components/Hero.tsx`).

## Missing: Bajrang Setu (the glass-floor bridge)

No stock video of Bajrang Setu exists yet on Pexels/Unsplash/Pixabay —
it's too new (opened publicly in late 2025) for stock footage libraries
to have caught up. The hero video currently only cycles Lakshman Jhula
and a wider Ganga/temple shot. If the hotel has (or can get) real video
of Bajrang Setu, drop it in here and it can be added as a third segment.
