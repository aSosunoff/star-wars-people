declare module "*.less" {
  const exports: { [exportName: string]: string };
  export = exports;
}
