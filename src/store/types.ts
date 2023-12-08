export interface PhotosStructure {
  _id: string;
  title: string;
  author: string;
  year: string;
  location: string;
  publicSpace: string;
  category: string;
  portfolioUrl: string;
  whatMadeYouClick: string;
  photoUrl: string;
}

export type PhotStructureWithoutId = Omit<PhotosStructure, "_id">;
