/**
 * Well-known Rishikesh landmarks near the hotel's Chandreshwar Nagar
 * location. Deliberately no distances or travel times — those aren't
 * verified yet (see data/hotel.ts geo.verified and the Location page).
 * Order is roughly by how commonly travelers visit each one.
 */
export type Attraction = {
  name: string;
  description: string;
};

export const nearbyAttractions: Attraction[] = [
  {
    name: "Triveni Ghat",
    description:
      "Rishikesh's main ghat on the Ganga, and the site of the evening Ganga Aarti — the most popular spot in town to watch it.",
  },
  {
    name: "Laxman Jhula",
    description:
      "An iconic suspension bridge across the Ganga, lined with small shops, cafés and temples on both banks.",
  },
  {
    name: "Ram Jhula",
    description:
      "The other of Rishikesh's two famous suspension bridges, close to several ashrams including Parmarth Niketan.",
  },
  {
    name: "Parmarth Niketan",
    description:
      "One of Rishikesh's largest ashrams on the riverbank, known for its own evening aarti and yoga programs.",
  },
  {
    name: "Beatles Ashram (Chaurasi Kutia)",
    description:
      "The former Maharishi Mahesh Yogi ashram where The Beatles stayed in 1968, now open as a heritage and art space.",
  },
  {
    name: "Neelkanth Mahadev Temple",
    description:
      "A Shiva temple in the hills above Rishikesh, popular with pilgrims and reachable by road.",
  },
  {
    name: "Rajaji National Park",
    description: "A national park a short drive from town, offering wildlife safaris and forest scenery.",
  },
  {
    name: "Swarg Ashram",
    description:
      "A riverside stretch dotted with smaller ashrams, bookshops and cafés — a popular area for an evening walk along the Ganga.",
  },
  {
    name: "Trayambakeshwar Temple (Tera Manzil)",
    description:
      "A distinctive 13-storey temple near Laxman Jhula, easy to spot and a common stop while exploring that side of the river.",
  },
  {
    name: "Local markets near Ram Jhula & Tapovan",
    description: "Small markets and cafés worth wandering between sightseeing and yoga classes.",
  },
];
