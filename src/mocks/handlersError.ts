import { http, HttpResponse } from "msw";

const urlApi = import.meta.env.VITE_API_URL;

const handlersError = [
  http.get(`${urlApi}/activities`, () => HttpResponse.error()),
  http.delete(`${urlApi}/activities/delete/656493fa44b5521c2584c21c`, () =>
    HttpResponse.error(),
  ),
];

export default handlersError;
