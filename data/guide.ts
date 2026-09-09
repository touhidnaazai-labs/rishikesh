export type GuideSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type GuideArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  updated: string; // ISO date
};

export const guideArticles: GuideArticle[] = [
  {
    slug: "things-to-do-in-rishikesh",
    title: "Things to Do in Rishikesh",
    seoTitle: "Things to Do in Rishikesh — A Practical Guide",
    description:
      "From Ganga aarti at the ghats to yoga, white-water rafting and the Beatles Ashram — a practical guide to what to actually do in Rishikesh.",
    intro:
      "Rishikesh packs an unusual amount of variety into a small town on the banks of the Ganga — spiritual, adventurous, and simply relaxing, often in the same day. Here's a practical rundown of what most travelers spend their time doing.",
    sections: [
      {
        heading: "Watch the Ganga Aarti",
        paragraphs: [
          "The evening Ganga Aarti — a ceremony of lamps, chanting and bells performed as the sun sets over the river — is one of the most-repeated Rishikesh experiences for a reason. Triveni Ghat is the most well-known spot for it, drawing both pilgrims and travelers to the riverbank each evening.",
          "Arrive a little early to find a good spot by the water, and dress modestly out of respect for what is, first and foremost, a religious ritual rather than a show.",
        ],
      },
      {
        heading: "Walk across Laxman Jhula and Ram Jhula",
        paragraphs: [
          "These two suspension bridges over the Ganga are as much a Rishikesh landmark as the river itself. Both connect the town's two banks and are lined with small shops, cafés and temples — a good way to get a feel for the town on foot.",
        ],
      },
      {
        heading: "Try yoga and meditation",
        paragraphs: [
          "Rishikesh is widely known as a center for yoga, with everything from single drop-in classes to multi-week teacher training courses on offer at ashrams and studios across town. Even travelers with no prior practice can usually find a beginner-friendly class.",
        ],
      },
      {
        heading: "Go white-water rafting",
        paragraphs: [
          "The stretch of the Ganga around Rishikesh is a popular white-water rafting spot, with operators offering runs of varying length and difficulty depending on the season and water levels. Rafting is typically available outside the monsoon months — check current conditions and choose a licensed operator.",
        ],
      },
      {
        heading: "Visit the Beatles Ashram (Chaurasi Kutia)",
        paragraphs: [
          "The former ashram where The Beatles famously stayed in 1968 is now open to visitors as a heritage and art space inside the Rajaji National Park buffer zone, with murals, old meditation cells and forest walking paths.",
        ],
      },
      {
        heading: "Explore local markets and cafés",
        paragraphs: [
          "Between activities, Rishikesh's laid-back café culture and small markets around Ram Jhula and Tapovan are worth wandering — a good way to slow down between more structured sightseeing.",
        ],
      },
    ],
    updated: "2026-01-01",
  },
  {
    slug: "best-time-to-visit-rishikesh",
    title: "Best Time to Visit Rishikesh",
    seoTitle: "Best Time to Visit Rishikesh — Season by Season",
    description:
      "A season-by-season look at Rishikesh's weather, so you can plan your trip around yoga, rafting, or a quieter riverside stay.",
    intro:
      "Rishikesh has a distinct seasonal rhythm — hot summers, a monsoon that changes the character of the river, and a long, pleasant stretch of autumn and winter that suits most travelers best. Here's what to expect through the year.",
    sections: [
      {
        heading: "October to February — generally the most comfortable",
        paragraphs: [
          "Days are mild and sunny, nights turn cool to cold (carry a warm layer, especially in December–January), and this stretch is generally considered the most comfortable time to explore the town, do outdoor yoga sessions and walk around the ghats.",
        ],
      },
      {
        heading: "March to June — warmer, active season",
        paragraphs: [
          "Temperatures climb through this period, with peak summer heat in May–June. Mornings and evenings remain pleasant, and this season also overlaps with popular yoga festivals and events in Rishikesh.",
        ],
      },
      {
        heading: "July to September — monsoon",
        paragraphs: [
          "The monsoon brings heavy rain and a fast, swollen Ganga. River activities like rafting are typically paused during this period, and travel in the surrounding hills can be affected by landslides — worth checking conditions before planning a monsoon trip.",
        ],
      },
      {
        heading: "Choosing dates around your plans",
        paragraphs: [
          "If rafting or trekking is the priority, aim for the post-monsoon and winter/spring windows. If yoga and a quieter riverside stay is the goal, October through March tends to work well for most travelers.",
        ],
      },
    ],
    updated: "2026-01-01",
  },
  {
    slug: "rishikesh-trip-guide",
    title: "Rishikesh Trip Guide",
    seoTitle: "Rishikesh Trip Guide — Planning the Basics",
    description:
      "How to plan a Rishikesh trip: how long to stay, getting there, getting around, and choosing where to base yourself.",
    intro:
      "Planning a first trip to Rishikesh mostly comes down to a few practical questions: how long to stay, how to get there, how to move around once you're there, and where to base yourself. Here's a straightforward run-through.",
    sections: [
      {
        heading: "How long to stay",
        paragraphs: [
          "Two to four nights is enough to cover the main ghats, a yoga class or two, and one activity like rafting or a short trek. Travelers combining Rishikesh with a longer yoga course or a Char Dham trip often stay considerably longer.",
        ],
      },
      {
        heading: "Getting there",
        paragraphs: [
          "Rishikesh is well connected by road and rail from Delhi and other North Indian cities, with the nearest major airport at Dehradun (Jolly Grant). Overnight trains and buses from Delhi are a common, budget-friendly option.",
        ],
      },
      {
        heading: "Getting around once you're there",
        paragraphs: [
          "Central Rishikesh — the ghats, Ram Jhula, Laxman Jhula area — is largely walkable. Auto-rickshaws and local taxis cover longer distances, including out to Neelkanth Mahadev or the Beatles Ashram.",
        ],
      },
      {
        heading: "Choosing where to stay",
        paragraphs: [
          "Location matters more in Rishikesh than in many towns, since so much of the experience revolves around proximity to the river and the ghats. A comfortable, well-located room with reliable basics — hot water, a clean attached bathroom, and (if you need it) air conditioning — goes a long way after a day of walking, yoga or rafting.",
        ],
      },
    ],
    updated: "2026-01-01",
  },
  {
    slug: "places-to-visit-in-rishikesh",
    title: "Places to Visit in Rishikesh",
    seoTitle: "Places to Visit in Rishikesh",
    description:
      "The essential list of ghats, temples, bridges and nearby spots that make up a Rishikesh itinerary.",
    intro:
      "Beyond the well-known highlights, Rishikesh has a handful of specific spots worth building an itinerary around. Here's the essential list.",
    sections: [
      {
        heading: "Triveni Ghat",
        paragraphs: [
          "The main ghat in Rishikesh and the site of the evening Ganga Aarti — usually the busiest and most atmospheric riverside spot in town.",
        ],
      },
      {
        heading: "Laxman Jhula and Ram Jhula",
        paragraphs: [
          "Two iconic suspension bridges across the Ganga, each surrounded by temples, shops and cafés on both banks.",
        ],
      },
      {
        heading: "Parmarth Niketan",
        paragraphs: [
          "One of Rishikesh's largest ashrams, on the banks of the Ganga near Ram Jhula, known for its own evening aarti and yoga programs.",
        ],
      },
      {
        heading: "Neelkanth Mahadev Temple",
        paragraphs: [
          "A Shiva temple in the hills above Rishikesh, reachable by road or on foot, popular with pilgrims and offering views over the surrounding forest.",
        ],
      },
      {
        heading: "Beatles Ashram (Chaurasi Kutia)",
        paragraphs: [
          "The former Maharishi Mahesh Yogi ashram, now a heritage site with Beatles-themed murals inside the Rajaji National Park buffer area.",
        ],
      },
      {
        heading: "Rajaji National Park",
        paragraphs: [
          "A short drive from town, this national park offers wildlife safaris and is one of the easier nature escapes near Rishikesh.",
        ],
      },
    ],
    updated: "2026-01-01",
  },
  {
    slug: "rishikesh-for-families",
    title: "Rishikesh for Families",
    seoTitle: "Rishikesh Travel Guide for Families",
    description:
      "Practical tips for visiting Rishikesh with family — what to plan around, easier activities, and choosing a comfortable place to stay.",
    intro:
      "Rishikesh isn't only a backpacker or yoga-retreat destination — it also works well for family trips, as long as you plan around a few practical things.",
    sections: [
      {
        heading: "Easier, family-friendly activities",
        paragraphs: [
          "Walking across Ram Jhula or Laxman Jhula, watching the evening Ganga Aarti, and gentle riverside walks are all low-effort, high-impact experiences that work for most ages. Milder rafting stretches are also offered by some operators for families with older children — check age and safety requirements directly with the operator.",
        ],
      },
      {
        heading: "Pace the trip",
        paragraphs: [
          "Rishikesh's terrain is hilly in parts and the town can get crowded, especially near the main ghats in the evening. Building in rest time between activities tends to work better with families than a packed itinerary.",
        ],
      },
      {
        heading: "What to look for in a place to stay",
        paragraphs: [
          "For families, a straightforward double-bed room with an attached bathroom and reliable hot water covers the essentials without unnecessary complexity — and a location that isn't too far from the ghats cuts down on daily travel time with kids in tow.",
        ],
      },
    ],
    updated: "2026-01-01",
  },
  {
    slug: "rishikesh-travel-guide",
    title: "Rishikesh Travel Guide",
    seoTitle: "Rishikesh Travel Guide — Everything to Know Before You Go",
    description:
      "A general overview of Rishikesh for first-time visitors — what the town is known for, when to go, and how to plan around it.",
    intro:
      "Rishikesh, on the banks of the Ganga in Uttarakhand, is known internationally as a center for yoga and meditation, and locally as a pilgrimage town and gateway to the Himalayas. This overview pulls together the essentials for a first visit.",
    sections: [
      {
        heading: "What Rishikesh is known for",
        paragraphs: [
          "The Ganga runs through the middle of town, and much of daily life — the aartis, the ghats, the ashrams — is built around it. Rishikesh is also one of India's best-known yoga destinations, and a starting point for the Char Dham pilgrimage route and various Himalayan treks.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "October to March is generally the most comfortable window for sightseeing and yoga; the monsoon (July–September) is better avoided if river activities are the priority. See our dedicated guide on the best time to visit Rishikesh for a full seasonal breakdown.",
        ],
      },
      {
        heading: "Where to base yourself",
        paragraphs: [
          "Areas like Chandreshwar Nagar, Tapovan and around Ram Jhula/Laxman Jhula are common places for travelers to base themselves, generally within reasonable reach of the main ghats and markets.",
        ],
      },
      {
        heading: "Planning your stay",
        paragraphs: [
          "Whatever the reason for the trip — the Ganga, yoga, family time, or simply a break — most travelers are looking for the same basics from where they stay: a comfortable double-bed room, a clean attached bathroom, hot water, and straightforward direct booking with the hotel.",
        ],
      },
    ],
    updated: "2026-01-01",
  },
];

export function getGuideArticleBySlug(slug: string) {
  return guideArticles.find((a) => a.slug === slug);
}
