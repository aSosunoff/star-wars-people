import { Path } from "./path-constant";

export const setParameter = (
  path: Path,
  params: {
    [param: string]: string;
  }
) =>
  Object.entries(params).reduce(
    (result, [paramsName, paramsValue]) =>
      result.replace(new RegExp(paramsName, "g"), paramsValue),
    path as any as string
  );
