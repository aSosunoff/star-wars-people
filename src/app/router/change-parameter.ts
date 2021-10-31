import { Path } from "./path-constant";

export const changeParameter = (
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
