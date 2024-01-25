import { CSV } from "https://js.sabae.cc/CSV.js";
import { DateTime, TimeZone } from "https://js.sabae.cc/DateTime.js";

const todt = (o) => {
  const dt = o.toLocal(TimeZone.UTC);
  return `${dt.day.toStringYMD()}T${dt.time.toStringHMS()}Z`;
};

export const ICAL = {
  stringify: (json) => {
    if (!json.VCALENDAR) {
      json = {
        VCALENDAR: {
          VERSION: "2.0",
          PRODID: "https://github.com/code4fukui/ICAL.js",
          VEVENT: json,
        }
      };
    }
    const ss = [];
    const tos = (name, o) => {
      if (typeof o == "string") {
        if (name == "DTSTART" || name == "DTEND") {
          o = todt(new DateTime(o));
        }
        ss.push(`${name}:${o}`);
      } else if (o instanceof DateTime) {
        ss.push(`${name}:${todt(o)}`);
      } else if (Array.isArray(o)) {
        o.forEach(i => tos(name, i));
      } else if (typeof o == "object") {
        ss.push("BEGIN:" + name);
        for (const name in o) {
          tos(name, o[name]);
        }
        ss.push("END:" + name);
      } else {
        ss.push(`${name}:${o}`);
      }
    };
    for (const name in json) {
      tos(name, json[name]);
    }
    return ss.join("\r\n");
  },
  parse: (s) => {
    throw new Error("not supported yet");
  },
};
