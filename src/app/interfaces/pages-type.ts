export type PagesType<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};
