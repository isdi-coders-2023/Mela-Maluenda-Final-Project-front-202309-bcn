export type Category = "Long shot" | "Medium shot";

export interface PhotosStructure {
  _id: string;
  title: string;
  author: string;
  year: string;
  location: string;
  publicSpace: string;
  category: Category;
  portfolioUrl: string;
  whatMadeYouClick: string;
  photoUrl: string;
}

export type PhotStructureWithoutId = Omit<PhotosStructure, "_id">;
