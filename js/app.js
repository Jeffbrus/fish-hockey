// Renders the schedule from js/schedule.js. No build step, no libraries.
(function () {
  "use strict";

  var DATA = window.FISH;
  var US = DATA.ourTeam;
  var GAME_MINUTES = 90; // ice slot length, used for "past" and calendar end times
  var DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var DOW_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var MON_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var state = { view: "ours", showPast: false };
  try { state.view = localStorage.getItem("fish-view") || "ours"; } catch (e) {}

  // ---------- Data ----------
  function toGame(row, roundName) {
    var d = row[0].split("-").map(Number);
    var t = row[1].split(":").map(Number);
    var start = new Date(d[0], d[1] - 1, d[2], t[0], t[1]);
    return {
      date: row[0], time: row[1], a: row[2], b: row[3],
      score: row[4] || null, note: row[5] || "",
      round: roundName, start: start,
      end: new Date(start.getTime() + GAME_MINUTES * 60000),
      ours: row[2] === US || row[3] === US,
    };
  }

  var rounds = DATA.rounds.map(function (r) {
    return {
      name: r.name, info: r.info || "", note: r.note || "",
      date: r.date ? toGame([r.date, "00:00", "", ""]).start : null,
      games: (r.games || []).map(function (g) { return toGame(g, r.name); }),
    };
  });
  var allGames = [].concat.apply([], rounds.map(function (r) { return r.games; }));
  var ourGames = allGames.filter(function (g) { return g.ours; });
  var firstPlayoff = allGames.filter(function (g) { return g.a === "TBD"; })[0];

  function isPast(g) { return g.end < new Date(); }
  var nextGame = ourGames.filter(function (g) { return !isPast(g); })[0];

  // ---------- Helpers ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtTime(d) {
    var h = d.getHours(), m = d.getMinutes();
    return (h % 12 || 12) + ":" + (m < 10 ? "0" : "") + m + " " + (h < 12 ? "AM" : "PM");
  }
  function fmtDayLong(d) { return DOW_LONG[d.getDay()] + ", " + MON_LONG[d.getMonth()] + " " + d.getDate(); }
  function opponent(g) { return g.a === US ? g.b : g.a; }
  function sameDay(x, y) { return x.toDateString() === y.toDateString(); }

  // Score is "A-B" from team A's point of view; flip it so ours is first.
  function result(g) {
    if (!g.score) return null;
    var p = g.score.split("-").map(Number);
    var us = g.a === US ? p[0] : p[1], them = g.a === US ? p[1] : p[0];
    return { us: us, them: them, wl: us > them ? "w" : us < them ? "l" : "t" };
  }

  function countdown(g) {
    var now = new Date();
    if (g.start <= now) return "Happening now";
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var day = new Date(g.start.getFullYear(), g.start.getMonth(), g.start.getDate());
    var days = Math.round((day - today) / 86400000);
    if (days === 0) return g.start.getHours() >= 17 ? "Tonight!" : "Today!";
    if (days === 1) return "Tomorrow";
    return "In " + days + " days";
  }

  // ---------- Next game ----------
  function renderNext() {
    var el = document.querySelector("#next-game .next-body");
    if (!nextGame) {
      el.innerHTML = '<p class="next-none">No more regular-season games. ' +
        (firstPlayoff && !isPast(firstPlayoff) ? "Playoffs start " + esc(fmtDayLong(firstPlayoff.start)) + "." : "See you next season!") + "</p>";
      return;
    }
    var g = nextGame;
    el.innerHTML =
      '<p class="next-when">' + esc(DOW_LONG[g.start.getDay()] + " " + MON[g.start.getMonth()] + " " + g.start.getDate()) + "</p>" +
      '<p class="next-time">' + esc(fmtTime(g.start)) + "</p>" +
      '<p class="next-vs">vs <strong>' + esc(opponent(g)) + "</strong></p>" +
      '<span class="next-countdown">' + esc(countdown(g)) + " · " + esc(g.round) + "</span>" +
      '<div class="next-actions"><button class="btn btn-light" type="button" id="add-next">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v3M17 2v3M3.5 9h17M12 12v6M9 15h6M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5Z"/></svg>' +
      "Add to calendar</button></div>";
    document.getElementById("add-next").addEventListener("click", function () {
      downloadIcs([g], "fish-next-game.ics");
    });
  }

  // ---------- Record ----------
  function renderRecord() {
    var w = 0, l = 0, t = 0;
    ourGames.forEach(function (g) {
      var r = result(g);
      if (r) { if (r.wl === "w") w++; else if (r.wl === "l") l++; else t++; }
    });
    var el = document.getElementById("record");
    if (w + l + t === 0) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = "Record: <b>" + w + "–" + l + "–" + t + "</b> (W–L–T)";
  }

  // ---------- Schedule: our games ----------
  function ourCard(g) {
    var r = result(g);
    var cls = "game" + (g === nextGame ? " is-next" : "") + (isPast(g) ? " is-past" : "");
    var right = "";
    if (r) right = '<div class="result ' + r.wl + '"><span class="wl">' + r.wl.toUpperCase() + "</span>" + r.us + "–" + r.them + "</div>";
    else if (g === nextGame) right = '<span class="tag-next">Next</span>';
    var opp = g.a === "TBD" ? "TBD" : opponent(g);
    return '<li class="' + cls + '">' +
      '<div class="date-chip"><span class="dow">' + DOW[g.start.getDay()] + '</span><span class="day">' + g.start.getDate() +
      '</span><span class="mon">' + MON[g.start.getMonth()] + "</span></div>" +
      '<div class="game-main"><p class="game-opp"><span class="vs">vs</span>' + esc(opp) + "</p>" +
      '<p class="game-meta"><span class="time">' + fmtTime(g.start) + "</span> · " + esc(g.round) + "</p>" +
      (g.note ? '<p class="game-note">' + esc(g.note) + "</p>" : "") + "</div>" +
      right + "</li>";
  }

  function renderOurs(container) {
    var list = state.showPast ? ourGames : ourGames.filter(function (g) { return !isPast(g); });
    var html = '<ul class="game-list">' + list.map(ourCard).join("") + "</ul>";
    // Playoff slots stay TBD until seeds are set; once a TBD is replaced with our team it shows above.
    var ourPlayoff = ourGames.some(function (g) { return g.round === "Playoffs"; });
    if (firstPlayoff && !ourPlayoff && !isPast(firstPlayoff)) {
      html += '<p class="off-week" style="margin-top:10px">Playoffs start ' + esc(fmtDayLong(firstPlayoff.start)) +
        ' — matchups TBD. See <a href="#" data-goto="all">All league</a> for the bracket.</p>';
    }
    container.innerHTML = html;
  }

  // ---------- Schedule: all league ----------
  function renderAll(container) {
    var html = rounds.map(function (r) {
      if (!r.games.length) {
        if (!state.showPast && r.date && r.date < new Date()) return "";
        return '<div class="off-week">' + esc(r.name) + " · " + esc(r.note) + "</div>";
      }
      var past = r.games.every(isPast);
      if (past && !state.showPast) return "";

      var days = [];
      r.games.forEach(function (g) {
        var last = days[days.length - 1];
        if (last && sameDay(last.date, g.start)) last.games.push(g);
        else days.push({ date: g.start, games: [g] });
      });

      return '<section class="round' + (past ? " is-past" : "") + '"><h3>' + esc(r.name) + "</h3>" +
        (r.info ? '<p class="round-info">' + esc(r.info) + "</p>" : "") +
        days.map(function (d) {
          return '<div class="day"><p class="day-head">' + esc(fmtDayLong(d.date)) + "</p>" +
            d.games.map(function (g) {
              var team = function (n) { return n === US ? '<span class="us">' + esc(n) + "</span>" : esc(n); };
              return '<div class="row' + (g.ours ? " ours" : "") + '"><span class="time">' + fmtTime(g.start) + "</span>" +
                '<span class="teams">' + team(g.a) + '<span class="vs">vs</span>' + team(g.b) +
                (g.score ? '<span class="score">' + esc(g.score) + "</span>" : "") +
                (g.note ? '<span class="note">' + esc(g.note) + "</span>" : "") + "</span></div>";
            }).join("") + "</div>";
        }).join("") + "</section>";
    }).join("");
    container.innerHTML = html;
  }

  function renderSchedule() {
    var container = document.getElementById("games");
    if (state.view === "all") renderAll(container); else renderOurs(container);

    var pastCount = ourGames.filter(isPast).length;
    var btn = document.getElementById("show-past");
    btn.hidden = pastCount === 0;
    btn.textContent = state.showPast ? "Hide earlier games" :
      "Show " + (state.view === "all" ? "earlier rounds" : pastCount + " earlier game" + (pastCount === 1 ? "" : "s"));

    document.querySelectorAll(".tabs button").forEach(function (b) {
      var on = b.dataset.view === state.view;
      b.setAttribute("aria-selected", on);
      if (on) container.setAttribute("aria-labelledby", b.id);
    });
    container.querySelectorAll("[data-goto]").forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); setView(a.dataset.goto); });
    });
  }

  function setView(v) {
    state.view = v;
    try { localStorage.setItem("fish-view", v); } catch (e) {}
    renderSchedule();
  }

  // ---------- Calendar (.ics) ----------
  function icsStamp(d) {
    function p(n) { return (n < 10 ? "0" : "") + n; }
    return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + "T" + p(d.getHours()) + p(d.getMinutes()) + "00";
  }
  function icsText(s) { return String(s).replace(/[\\;,]/g, "\\$&").replace(/\n/g, "\\n"); }

  function downloadIcs(games, filename) {
    var now = new Date();
    var utc = now.toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
    var lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//The Fish Hockey Club//Schedule//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH"];
    games.forEach(function (g) {
      var opp = g.a === "TBD" ? "TBD" : opponent(g);
      lines.push(
        "BEGIN:VEVENT",
        "UID:" + g.date + "-" + g.time.replace(":", "") + "-fish@fishhockey",
        "DTSTAMP:" + utc,
        "DTSTART;TZID=America/Toronto:" + icsStamp(g.start),
        "DTEND;TZID=America/Toronto:" + icsStamp(g.end),
        "SUMMARY:" + icsText("🐟 Fish vs " + opp),
        "DESCRIPTION:" + icsText(g.round + (g.note ? " — " + g.note : "")),
        "BEGIN:VALARM", "TRIGGER:-PT3H", "ACTION:DISPLAY", "DESCRIPTION:Hockey tonight", "END:VALARM",
        "END:VEVENT"
      );
    });
    lines.push("END:VCALENDAR");
    var blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  // ---------- Wire up ----------
  document.getElementById("season").textContent = DATA.season;
  document.querySelectorAll(".tabs button").forEach(function (b) {
    b.addEventListener("click", function () { setView(b.dataset.view); });
  });
  document.getElementById("show-past").addEventListener("click", function () {
    state.showPast = !state.showPast;
    renderSchedule();
  });
  document.getElementById("add-all").addEventListener("click", function () {
    downloadIcs(ourGames.filter(function (g) { return !isPast(g); }), "fish-games.ics");
  });

  renderNext();
  renderRecord();
  renderSchedule();
})();
