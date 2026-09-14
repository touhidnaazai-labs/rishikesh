/**
 * Well-known Rishikesh landmarks near the hotel's Chandreshwar Nagar
 * location. Deliberately no distances or travel times — those aren't
 * verified yet (see data/hotel.ts geo.verified and the Location page).
 * Order is roughly by how commonly travelers visit each one.
 *
 * Photos are NOT hotel-supplied — the hotel has no photos of these
 * public landmarks. Each image is sourced from Wikimedia Commons under
 * a Creative Commons license that permits reuse with attribution; the
 * `credit` field is that required attribution and must stay reachable
 * wherever the image is shown. It is rendered by components/PhotoCredit
 * as an ⓘ badge on the image (one tap to open, labelled for screen
 * readers) rather than as body text, to keep the cards clean. Do not
 * swap an image without also updating its credit, and do not drop the
 * credit entirely to "clean up" the UI — that would violate the license.
 */
export type Attraction = {
  name: string;
  description: string;
  image?: string;
  credit?: {
    photographer: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
  };
};

export const nearbyAttractions: Attraction[] = [
  {
    name: "Triveni Ghat",
    description:
      "Rishikesh's main ghat on the Ganga, and the site of the evening Ganga Aarti — the most popular spot in town to watch it.",
    image: "/images/attractions/triveni-ghat.jpg",
    credit: {
      photographer: "ArmouredCyborg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Triveni_Ghat_Rishikesh_02.jpg",
    },
  },
  {
    name: "Laxman Jhula",
    description:
      "An iconic suspension bridge across the Ganga, lined with small shops, cafés and temples on both banks.",
    image: "/images/attractions/laxman-jhula.jpg",
    credit: {
      photographer: "Deepanshu Mittall",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Laxman_Jhula,_Rishikesh,_Uttarkhand,_India.jpg",
    },
  },
  {
    name: "Ram Jhula",
    description:
      "The other of Rishikesh's two famous suspension bridges, close to several ashrams including Parmarth Niketan.",
    image: "/images/attractions/ram-jhula.jpg",
    credit: {
      photographer: "Paradise Chronicle",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ram_Jhula_footbridge_-_Rishikesh.jpg",
    },
  },
  {
    name: "Parmarth Niketan",
    description:
      "One of Rishikesh's largest ashrams on the riverbank, known for its own evening aarti and yoga programs.",
    image: "/images/attractions/parmarth-niketan.jpg",
    credit: {
      photographer: "Billjones94",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Front_entrance_of_the_Parmarth_Niketan,_in_Rishikesh,_Uttarakhand.jpg",
    },
  },
  {
    name: "Beatles Ashram (Chaurasi Kutia)",
    description:
      "The former Maharishi Mahesh Yogi ashram where The Beatles stayed in 1968, now open as a heritage and art space.",
    image: "/images/attractions/beatles-ashram.jpg",
    credit: {
      photographer: "Guy P Atkinson",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Beatles_Ashram_Satsang_Hall_Rishikesh.JPG",
    },
  },
  {
    name: "Neelkanth Mahadev Temple",
    description:
      "A Shiva temple in the hills above Rishikesh, popular with pilgrims and reachable by road.",
    image: "/images/attractions/neelkanth-mahadev.jpg",
    credit: {
      photographer: "Anurodhraghuwanshi",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Neelkanth_mahadev_mandir.jpg",
    },
  },
  {
    name: "Rajaji National Park",
    description: "A national park a short drive from town, offering wildlife safaris and forest scenery.",
    image: "/images/attractions/rajaji-national-park.jpg",
    credit: {
      photographer: "Tarun802",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Safari_at_Rajaji_National_Park_(Haridwar).jpg",
    },
  },
  {
    name: "Swarg Ashram",
    description:
      "A riverside stretch dotted with smaller ashrams, bookshops and cafés — a popular area for an evening walk along the Ganga.",
    image: "/images/attractions/swarg-ashram.jpg",
    credit: {
      photographer: "Ken Wieland",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Temples_across_the_Ganges_near_Swargashram,_Muni_Ki_Reti,_Rishikesh.jpg",
    },
  },
  {
    name: "Trayambakeshwar Temple (Tera Manzil)",
    description:
      "A distinctive 13-storey temple near Laxman Jhula, easy to spot and a common stop while exploring that side of the river.",
    image: "/images/attractions/trayambakeshwar.jpg",
    credit: {
      photographer: "VikramSingh Valera",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:13_Manzil_Temple_Rishikesh_2021.jpg",
    },
  },
  {
    name: "Local markets near Ram Jhula & Tapovan",
    description: "Small markets and cafés worth wandering between sightseeing and yoga classes.",
    // No suitably-licensed, clearly-matching photo found yet — left
    // without an image rather than guessing.
  },
];
