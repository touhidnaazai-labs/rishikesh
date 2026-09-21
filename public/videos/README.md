# Hero background video — sourcing

`hero-rishikesh.mp4` is a 15-second, muted, looping background video for
the homepage hero, built from two real Rishikesh clips (both Pexels,
free license, no attribution required):

| Segment | Source |
|---|---|
| 0–7s: Laxman Jhula bridge over the Ganga (aerial) | Pexels, creator Nitin Khajotia — [source](https://www.pexels.com/video/the-river-is-flowing-through-a-city-and-a-bridge-16195456/) |
| 8–15s: The Ganga flowing through Rishikesh (ground level) | Pexels, creator sakshi sharma — [source](https://www.pexels.com/video/spectacular-views-of-ganges-river-in-rishikesh-33910176/) |

Cropped to 16:9, scaled to 1280×720, crossfaded together, re-encoded
with ffmpeg (h264, crf 28) to ~3.6MB. `hero-rishikesh-poster.jpg` is the
first frame, used as the `<video poster>` and as the static fallback
shown instead of the video when the visitor has `prefers-reduced-motion`
set (see `components/Hero.tsx`).

## Missing: Bajrang Setu (the glass-floor bridge)

No stock video of Bajrang Setu exists yet on Pexels/Unsplash/Pixabay —
it's too new (opened publicly in late 2025) for stock footage libraries
to have caught up. The hero video currently only cycles Laxman Jhula and
the Ganga. If the hotel has (or can get) real video of Bajrang Setu,
drop it in here and it can be added as a third segment.
