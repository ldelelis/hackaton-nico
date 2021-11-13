import * as Drash from "https://deno.land/x/drash@v2.1.0/mod.ts";

export const server = new Drash.Server({
  hostname: "0.0.0.0",  // TODO: via env var
  port: 8080,  // TODO: via env var
  protocol: "http",
  resources: []
});
