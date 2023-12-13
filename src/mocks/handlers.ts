import { http, HttpResponse } from "msw";
import {
  modifiedDeepThoughtsMock,
  photoAddMock,
  photosMock,
} from "./photosMock/photosMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/photos`, async () =>
    HttpResponse.json({ photos: photosMock }),
  ),
  http.delete(`${apiUrl}/photos/:_id`, async () => HttpResponse.json({})),
  http.post(`${apiUrl}/photos/add`, async () =>
    HttpResponse.json({ photo: photoAddMock[3] }),
  ),
  http.get(`${apiUrl}/photos/656366e0e627443259cf3cee`, async () => {
    return HttpResponse.json({ photo: photoAddMock[3] });
  }),
  http.patch(`${apiUrl}/photos/:_id`, async () => {
    return HttpResponse.json({ photo: modifiedDeepThoughtsMock });
  }),
];

export const errorHandlers = [
  http.get(`${apiUrl}/photos`, async () => HttpResponse.error()),
  http.delete(`${apiUrl}/photos/:_id`, async () => HttpResponse.error()),
  http.post(`${apiUrl}/photos/add`, async () => HttpResponse.error()),
  http.get(`${apiUrl}/photos/656366e0e627443259cf3cee`, async () =>
    HttpResponse.error(),
  ),
  http.patch(`${apiUrl}/photos/:_id`, async () => HttpResponse.error()),
];
