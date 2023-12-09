import { http, HttpResponse } from "msw";
import { photoAddMock, photosMock } from "./photosMock/photosMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/photos`, async () => HttpResponse.json(photosMock)),
  http.delete(`${apiUrl}/photos/:_id`, async () => HttpResponse.json({})),
  http.post(`${apiUrl}/photos/add`, async () =>
    HttpResponse.json({ photo: photoAddMock[3] }),
  ),
  http.get(`${apiUrl}/photos/656366e0e627443259cf3cee`, async () =>
    HttpResponse.json({ photo: photoAddMock[3] }),
  ),
];

export const errorHandlers = [
  http.get(`${apiUrl}/photos`, async () => HttpResponse.error()),
  http.delete(`${apiUrl}/photos/:_id`, async () => HttpResponse.error()),
  http.post(`${apiUrl}/photos/add`, async () => HttpResponse.error()),
  http.get(`${apiUrl}/photos/656366e0e627443259cf3cee`, async () =>
    HttpResponse.error(),
  ),
];
