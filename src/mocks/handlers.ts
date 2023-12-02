import { http, HttpResponse } from "msw";
import photosMock from "./photosMock/photosMock";

const apiUrl = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${apiUrl}/photos`, () => {
    return HttpResponse.json(photosMock);
  }),
];

export default handlers;
