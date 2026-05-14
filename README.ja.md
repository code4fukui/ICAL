# ICAL - iCalendar for JavaScript

ICALは、iCalendar形式のカレンダーデータを作成・管理するためのJavaScriptライブラリです。

## 使い方

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

## サンプル

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

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
