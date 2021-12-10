/** @jsx h */
import { h, jsx, serve } from "https://deno.land/x/sift@0.4.2/mod.ts";

const App = () => <div><h1>Hello world!</h1></div>;

const NotFound = () => <div><h1>Page not found</h1></div>;

serve({
  "/": () => jsx(<App />),
  404: () => jsx(<NotFound />, { status: 404 }),
});
