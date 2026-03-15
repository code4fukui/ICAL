# ICAL - iCalendar for JavaScript

iCalendar形式のカレンダーデータを作成・管理するJavaScriptライブラリです。

## 使い方

### コマンドラインツール

```sh
deno run -A https://code4fukui.github.io/ICAL/csv2ical.js [ファイル名]
```

### ライブラリ

```js
import { ICAL } from "https://code4fukui.github.io/ICAL/ICAL.js";

const data = [
  { "DTSTART": "20240130T00:00+09:00", SUMMARY: "テスト" },
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

MIT License