import { PagesType } from "../interfaces/pages-type";
import { Person } from "../interfaces/person";
import { Planet } from "../interfaces/planet";

const getParams = (page: number, search: string = "") => {
  let searchQuery = "";

  if (search !== "") {
    searchQuery += `search=${search}`;
  }

  let pageQuery = "";

  if (page !== 1) {
    pageQuery = `page=${page}`;
  }

  const searchParams = [searchQuery, pageQuery].filter(Boolean);

  return `${searchParams.length ? "?" : ""}${searchParams.join("&")}`;
};

const request = async <Result>(url: string, init?: RequestInit) => {
  const request = await fetch(url, init);

  if (!request.ok) {
    const body = await request.json();
    throw body;
  }

  const data = await request.json();

  return data as Result;
};

const BASE_URL = "https://swapi.dev/api";

export class SWAPIService {
  static getPeople = async (
    page: number,
    search: string = "",
    init?: RequestInit
  ) => {
    const data = await request<PagesType<Person>>(
      `${BASE_URL}/people/${getParams(page, search)}`,
      init
    );

    return data;
  };

  static getPeopleDetail = async (id: string, init?: RequestInit) => {
    const data = await request<Person>(`${BASE_URL}/people/${id}`, init);

    return data;
  };

  static getPlanets = async (
    page: number,
    search: string = "",
    init?: RequestInit
  ) => {
    const data = await request<PagesType<Planet>>(
      `${BASE_URL}/planets/${getParams(page, search)}`,
      init
    );

    return data;
  };
}
