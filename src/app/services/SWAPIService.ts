import { PagesType } from "./../interfaces.ts/pages-type";
import { Person } from "../interfaces.ts/person";

const request = async <Result>(type: string, init?: RequestInit) => {
  const request = await fetch(`https://swapi.dev/api/${type}/`, init);

  if (!request.ok) {
    const body = await request.json();
    throw body;
  }

  const data = await request.json();

  return data as Result;
};

export class SWAPIService {
  static getPeople = async (init?: RequestInit) => {
    const data = await request<PagesType<Person>>("people", init);

    return data;
  };
}
