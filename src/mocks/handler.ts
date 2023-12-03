import { http, HttpResponse } from "msw";
import activitiesMockData from "./activitiesMock";
const urlApi = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${urlApi}/activities`, () => {
    return HttpResponse.json(activitiesMockData);
  }),
];

export default handlers;
