import { CSV } from "https://js.sabae.cc/CSV.js";
import { ICAL } from "./ICAL.js";

if (Deno.args.length == 0) {
  console.log("csv2ical [csv]");
  Deno.exit();
}

const fn = Deno.args[0];
const csv = await CSV.fetchJSON(fn);
const ical = ICAL.stringify(csv);
await Deno.writeTextFile(fn.slice(0, fn.length - 4) + ".ics", ical);
