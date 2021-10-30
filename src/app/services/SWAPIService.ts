import { PagesType } from "./../interfaces.ts/pages-type";
import { Person } from "../interfaces.ts/person";

const request = async <Result>(
  type: string,
  page: number,
  search: string = "",
  init?: RequestInit
) => {
  let searchQuery = "";

  if (search !== "") {
    searchQuery += `&search=${search}`;
  }

  const request = await fetch(
    `https://swapi.dev/api/${type}/?page=${page}${searchQuery}`,
    init
  );

  if (!request.ok) {
    const body = await request.json();
    throw body;
  }

  const data = await request.json();

  return data as Result;
};

export class SWAPIService {
  static getPeople = async (
    page: number,
    search: string = "",
    init?: RequestInit
  ) => {
    const data = await request<PagesType<Person>>("people", page, search, init);

    return data;
  };
}
