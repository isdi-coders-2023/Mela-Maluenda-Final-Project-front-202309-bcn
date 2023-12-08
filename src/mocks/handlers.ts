import { http, HttpResponse } from "msw";
import { photosMock } from "./photosMock/photosMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/photos`, async () => HttpResponse.json(photosMock)),
  http.delete(`${apiUrl}/photos/:_id`, async () => HttpResponse.json({})),
];

export const errorHandlers = [
  http.get(`${apiUrl}/photos`, async () => HttpResponse.error()),
  http.delete(`${apiUrl}/photos/:_id`, async () => HttpResponse.error()),
];
