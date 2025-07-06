import * as t from "https://deno.land/std/testing/asserts.ts";
import { ICAL } from "./ICAL.js";

Deno.test("simple", () => {
  const s = ICAL.stringify([
    { DESCRPTION: "a\nb" }, // encode \n → \\n
  ]);
  //console.log(s);
  t.assertEquals(s, `BEGIN:VCALENDAR\r
VERSION:2.0\r
PRODID:https://github.com/code4fukui/ICAL/\r
BEGIN:VEVENT\r
DESCRPTION:a\\nb\r
END:VEVENT\r
END:VCALENDAR\r
`);
});
