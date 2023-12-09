export interface PhotosStructure {
  _id: string;
  title: string;
  author: string;
  year: number;
  location: string;
  publicSpace: string;
  category: string;
  portfolioUrl: string;
  whatMadeYouClick: string;
  photoUrl: string;
}

export type PhotoStructureWithoutId = Omit<PhotosStructure, "_id">;
