import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/node";
import { PhotosStructure } from "./store/types";
import photosMock from "./mocks/photosMock/photosMock";

export let mockPhotos: PhotosStructure[] = photosMock;

beforeAll(() => {
  mockPhotos = photosMock;
  server.listen();
});

afterEach(() => {
  mockPhotos = photosMock;
  server.listen();
});

afterAll(() => {
  mockPhotos = photosMock;
  server.listen();
});
