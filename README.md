# ICAL - iCalendar for JavaScript

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

ICAL is a JavaScript library for creating and managing iCalendar format calendar data.

## Usage

### CLI

```sh
deno run -A https://code4fukui.github.io/ICAL/csv2ical.js [fn]
```

### lib

```js
import { ICAL } from "https://code4fukui.github.io/ICAL/ICAL.js";

const data = [
  { "DTSTART": "20240130T00:00+09:00", SUMMARY: "test" },
];
console.log(ICAL.stringify(data));
```

## Sample

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:iCalender Test
BEGIN:VEVENT
DTSTART:20201123T000000Z
DTEND:20201123T235959Z
SUMMARY:My Birthday Party
END:VEVENT
END:VCALENDAR
```

## License

MIT License