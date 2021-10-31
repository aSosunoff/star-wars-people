import { PagesType } from "./../interfaces.ts/pages-type";
import { Person } from "../interfaces.ts/person";
import { Planet } from "../interfaces.ts/planet";

const request = async <Result>(
  type: string,
  page: number,
  search: string = "",
  init?: RequestInit
) => {
  let searchQuery = "";

  if (search !== "") {
    searchQuery += `search=${search}`;
  }

  let pageQuery = "";

  if (page !== 1) {
    pageQuery = `page=${page}`;
  }

  const searchParams = [searchQuery, pageQuery].filter(Boolean);

  const request = await fetch(
    `https://swapi.dev/api/${type}/${
      searchParams.length ? "?" : ""
    }${searchParams.join("&")}`,
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

  static getPlanets = async (
    page: number,
    search: string = "",
    init?: RequestInit
  ) => {
    const data = await request<PagesType<Planet>>(
      "planets",
      page,
      search,
      init
    );

    return data;
  };
}
