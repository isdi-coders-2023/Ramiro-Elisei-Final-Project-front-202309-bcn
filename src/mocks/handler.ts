import { http, HttpResponse } from "msw";
import activitiesMockData from "./activitiesMock";
const urlApi = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${urlApi}/activities`, () => {
    return HttpResponse.json(activitiesMockData);
  }),
  http.delete(`${urlApi}/activities/delete/656493fa44b5521c2584c21c`, () => {
    return HttpResponse.json({});
  }),
];

export default handlers;
