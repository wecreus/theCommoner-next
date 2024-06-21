import { type GalleryType, ReviewType } from "./definitions";

export const mockGallery: GalleryType[] = [
  {
    title: "Best",
    url: "https://live.staticflickr.com/65535/53702745672_829a55ffef_b.jpg",
  },
  {
    title: "Cold",
    url: " https://live.staticflickr.com/65535/53704075105_7d4002f024_b.jpg",
  },
  {
    title: "Fragile",
    url: "https://live.staticflickr.com/65535/53703642421_1f0fbd96e1_b.jpg",
  },
  {
    title: "Stare",
    url: "https://live.staticflickr.com/65535/53704189880_85317dc5b3_b.jpg",
  },
  {
    title: "AT-AT",
    url: "https://live.staticflickr.com/65535/53703858408_ddbbfea3a3_b.jpg",
  },
];

export const mockReviews: ReviewType[] = [
  {
    id: '1',
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg",
    description:
      "MOCK MOCK MOCK",
    name: "Baldurs Gate 3 mock",
    score: "95",
    funFact:
      "I have completed solo honour mode run and you can [watch the finale](https://youtu.be/WdgwqteDS88?si=v6vcjnLKH-h8zxJp&t=14) of it",
  },
  {
    id: '2',
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b7/Slay_the_spire_cover.jpg",
    description:
      "My first game that I spent more than 1000 hours on, and I usually hate card games. IMHO this is the best phone game ever",
    name: "Slay the Spire",
    score: "88",
    funFact: "My A20 rotating win streak is 7💪",
  },
  {
    id: "3",
    description:
      "People think this is just a fun game for 50 hours, and they could not be more wrong. There are so many sick (even if unintentional) mechanics here that make you play it for thousands of hours",
    name: "Risk of Rain 2",
    score: "89",
    funFact:
      "I am a former [World Record](https://www.speedrun.com/ror2?h=Gauntlet-commando&x=w20mm7jk-wley0yrn.10v63ewl) holder for Commando speedrun :)",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Risk_of_Rain_2.jpg",
  },
];
