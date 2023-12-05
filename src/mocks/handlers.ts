import { http, HttpResponse } from "msw";
import photosMock from "./photosMock/photosMock";

const apiUrl = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${apiUrl}/photos`, () => {
    return HttpResponse.json(photosMock);
  }),

  http.delete(`${apiUrl}/photos/:_id`, () => {
    return HttpResponse.json({});
  }),
];

export default handlers;
