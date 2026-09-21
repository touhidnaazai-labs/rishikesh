# Hero background video — sourcing

`hero-rishikesh.mp4` is a ~27-second, muted, looping 1080p background
video for the homepage hero, built from two real, high-quality,
**moving** (not locked-off) clips of Rishikesh — both Pexels, free
license, no attribution required:

| Segment | Source |
|---|---|
| 0–12s: The suspension bridge lit up at night, reflecting in the Ganga — camera slowly pans/drifts, bridge dominates the frame | Pexels, creator Sanjay Singh (@vfxdelhi) — [source](https://www.pexels.com/video/bridge-at-night-12366998/) |
| 12–27s: Golden-hour drone flythrough continuing past the Ganga, Trayambakeshwar Temple and the bridge | Pexels, creator Nitin Khajotia — [source](https://www.pexels.com/video/a-river-with-rocks-and-buildings-in-the-background-19096741/) (4K original, this is a ~15s excerpt from a longer clip) |

Re-encoded with ffmpeg (h264, crf 26, ~12MB, 1920×1080).
`hero-rishikesh-poster.jpg` is the first frame, used as the
`<video poster>` and as the static fallback shown instead of the video
when the visitor has `prefers-reduced-motion` set (see
`components/Hero.tsx`).

### Why this specific pairing

Earlier versions used a wide valley/town flythrough as the first
segment — moving, but the bridge itself was small and distant, not the
clear subject. This version leads with a shot where the bridge fills
the frame (per feedback that the first clip should specifically be
Ram Jhula / Laxman Jhula / Bajrang Setu, not a generic establishing
shot), while keeping real camera movement rather than a fully static
lock-off.

## Missing: Bajrang Setu (the glass-floor bridge)

Checked repeatedly — still no stock video of Bajrang Setu exists on
Pexels/Unsplash/Pixabay. It's too new (opened publicly in late 2025)
for stock footage libraries to have caught up; searches only return
news-article pages and YouTube videos, none of which are licensed for
reuse here. If the hotel has (or can get) real video of Bajrang Setu,
drop it in here and it can be added as a third segment.
