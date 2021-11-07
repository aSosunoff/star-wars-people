import { Planet } from "../interfaces/planet";
import { Person } from "../interfaces/person";

export const getIdFromUrl = <T extends Person | Planet>(url: T["url"]) =>
  url.replace(/\D/g, "");
