import { Person } from "../interfaces/person";

export const getIdUserFromUrl = (url: Person["url"]) => url.replace(/\D/g, "");
