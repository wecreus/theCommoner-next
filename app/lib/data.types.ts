export type GalleryType = {
  title: string;
  url: string;
}

export type ReviewType = {
  id: string;
  /* should be an external url with picture */
  coverUrl: string;
  /* Name of the game */
  name: string;
  /* Description can have markdown that needs to be parsed */
  description: string;
  /* Optional fun fact with markdown */
  funFact?: string;
  /* Score */
  score: string;
}