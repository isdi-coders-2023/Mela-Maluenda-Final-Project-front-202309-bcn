import { PhotosStructure } from "../../store/types";

export const ghostMock = {
  _id: "65635f70e627443259cf3ce2",
  title: "Ghost",
  author: "Enrique Muda",
  year: 2018,
  location: "Sicily",
  publicSpace: "Street",
  category: "Long shot",
  portfolioUrl: "eldelasfotos.com",
  whatMadeYouClick:
    "I was in the middle of Times Square surrounded by huge ads, cars, people. I was over stimulated, looking everywhere searching for something unique and magic when I saw that woman in white feathers, the rest of the world disappear in a sudden, I only could look at her.",
  photoUrl: "https://i.ibb.co/r3PQynN/ghost.webp",
};

export const urbanAngelMock = {
  _id: "656360dae627443259cf3ce4",
  title: "Urban angel",
  author: "Bruce Gilden",
  year: 2014,
  location: "New York",
  publicSpace: "Street",
  category: "Long shot",
  portfolioUrl: "https://www.brucegilden.com/",
  whatMadeYouClick:
    "I find the Jew dress sol elegant and photogenic, and he was so deep in his thoughts and finally, what made me click is the yellow string that reminded me like he was peeing. All that solemnity in contrast to the pee was definitely a reason to take that image.",
  photoUrl: "https://i.ibb.co/3pDTh18/urban-angel.webp",
};

export const deepThoughtsMock = {
  _id: "6563642be627443259cf3ce8",
  title: "Deep thoughts",
  author: "Matt stuart",
  year: 2012,
  location: "London",
  publicSpace: "Subway",
  category: "Medium shot",
  portfolioUrl: "https://www.mattstuart.com/",
  whatMadeYouClick:
    "I am really interested in emotions. In the same picture we have someone laughing and crying, both extremes taking place in the same frame, love it!",
  photoUrl: "https://i.ibb.co/Zz7VMfC/deep-thoughts.webp",
};

export const caravaggioRoutinesMock = {
  _id: "656366e0e627443259cf3cee",
  title: "Caravaggio routines",
  author: "Trent Parke",
  year: 2009,
  location: "Camprodon",
  publicSpace: "Bar",
  category: "Long shot",
  portfolioUrl: "https://www.magnumphotos.com/photographer/trent-parke/",
  whatMadeYouClick:
    "These are old pals from my village. Every second day, they are playing cards. But that day the sun got in the bar and that light remind me a Caravaggio painting, I unwrapped my camera as fast as I could to capture this photograph that looks like a painting.",
  photoUrl: "https://i.ibb.co/tm1jNMY/caravaggio.webp",
};

export const modifiedDeepThoughtsMock = {
  _id: "6563642be627443259cf3ce8",
  title: "Deep thoughts",
  author: "Matt stuart",
  year: 2012,
  location: "Antártida",
  publicSpace: "Bus station",
  category: "Medium shot",
  portfolioUrl: "https://www.mattstuart.com/",
  whatMadeYouClick:
    "I am really interested in emotions. In the same picture we have someone laughing and crying, both extremes taking place in the same frame, love it!",
  photoUrl: "https://i.ibb.co/Zz7VMfC/deep-thoughts.webp",
};

export const photosMock: PhotosStructure[] = [
  ghostMock,
  urbanAngelMock,
  deepThoughtsMock,
  caravaggioRoutinesMock,
];

export const photoAddMock: PhotosStructure[] = [
  ghostMock,
  urbanAngelMock,
  deepThoughtsMock,
  caravaggioRoutinesMock,
];

export const photosModifiedMocks: PhotosStructure[] = [
  ghostMock,
  urbanAngelMock,
  modifiedDeepThoughtsMock,
  caravaggioRoutinesMock,
];

export const photosAddMock: PhotosStructure[] = [
  ghostMock,
  urbanAngelMock,
  deepThoughtsMock,
];
