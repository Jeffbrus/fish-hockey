/*
 * Movember Classic 2026 — our tournament weekend.
 *
 * HOW TO EDIT
 * - games: [game #, date, time (24h), team A, team B, "M" or "W", note]
 *   Playoff games use seeds/winners as the team names until they're known.
 *   Any game with "The Fish" in it also shows in Next game and Our games.
 * - duties: one block per job, each shift is [day, who, when].
 * - The section hides itself the day after the last game.
 */
window.TOURNEY = {
  name: "Movember Classic",
  title: "Movember Classic 2026",
  dates: "Fri Nov 6 – Sun Nov 8",
  minutes: 60,
  pdf: "assets/movember-classic-2026.pdf",

  games: [
    [1, "2026-11-06", "17:30", "Port Bombers", "Dump N Chase", "M"],
    [2, "2026-11-06", "18:30", "The Fish", "Mighty Drunks", "M"],
    [3, "2026-11-06", "19:30", "Wiarton Rock", "Oliphant Oilers", "M"],
    [4, "2026-11-06", "20:30", "The Chicks", "Miller Farms", "W"],
    [5, "2026-11-06", "21:30", "Keady Royals", "Blazers", "M"],
    [6, "2026-11-06", "22:30", "Oxenden Senators", "Fry Bread Warriors", "M"],
    [7, "2026-11-06", "23:30", "Chippewa Hill Thunder", "Wiarton Rock", "M"],

    [8, "2026-11-07", "09:00", "Mighty Drunks", "Dump N Chase", "M"],
    [9, "2026-11-07", "10:00", "Beach Chickens", "The Chicks", "W"],
    [10, "2026-11-07", "11:00", "Keady Royals", "The Fish", "M"],
    [11, "2026-11-07", "12:00", "Port Bombers", "Wiarton Rock", "M"],
    [12, "2026-11-07", "13:00", "Blazers", "Oxenden Senators", "M"],
    [13, "2026-11-07", "14:00", "The Fish", "Chippewa Hill Thunder", "M"],
    [14, "2026-11-07", "15:00", "Port Bombers", "Mighty Drunks", "M"],
    [15, "2026-11-07", "16:00", "Oliphant Oilers", "Fry Bread Warriors", "M"],
    [16, "2026-11-07", "17:00", "Beach Chickens", "Miller Farms", "W"],
    [17, "2026-11-07", "18:00", "Keady Royals", "Dump N Chase", "M"],
    [18, "2026-11-07", "19:00", "Wiarton Rock", "Oxenden Senators", "M"],
    [19, "2026-11-07", "20:00", "Fry Bread Warriors", "Blazers", "M"],

    [20, "2026-11-08", "09:00", "Oliphant Oilers", "Chippewa Hill Thunder", "M"],
    [21, "2026-11-08", "10:00", "Seed 2", "Seed 3", "W", "Women's semi-final"],
    [22, "2026-11-08", "11:00", "Seed 2", "Seed 3", "M", "Men's semi-final #2"],
    [23, "2026-11-08", "12:00", "Seed 1", "Seed 4", "M", "Men's semi-final #1"],
    [24, "2026-11-08", "13:00", "Seed 1", "Winner G21", "W", "Women's final 🏆"],
    [25, "2026-11-08", "14:00", "Winner G23", "Winner G22", "M", "Men's final 🏆"],
  ],

  rules: [
    ["Games", "Fresh flood, 3-minute warm-up, two 15-minute stop-time periods. Be dressed and ready up to 15 minutes early."],
    ["Running clock", "If a team leads by 5 or more, the clock runs through stoppages."],
    ["On the ice", "No-touch icing, tag-up offsides, no body contact. Slap shots allowed. One 30-second timeout per team."],
    ["Overtime", "Round robin: 5 min 3-on-3, then a 3-player shootout. Semis and finals: 3 min each of 4-on-4, 3-on-3, 2-on-2, then a shootout. All OT changes on the fly."],
    ["Points", "Regulation or OT win 3 · Shootout win 2 · OT or shootout loss 1."],
    ["Tiebreakers", "Wins, points, head-to-head, plus/minus, goals for, fewest goals against, then a coin flip. Goal spread capped at +7."],
    ["Playoffs", "Men's: top 4 to the semis. Women's: #1 gets a bye to the final, #2 plays #3."],
    ["Roster", "18+ (or turning 18 in 2026), one team only, must play a round-robin game to play in the playoffs. Full gamesheet before puck drop. Fewer than 6 players at start time is a 2-0 forfeit."],
    ["Penalties", "A major or fighting misconduct is a tournament ejection. Three minors in one game is a game ejection. Playing a suspended player is a 2-0 forfeit."],
    ["Rooms and bar", "Clear your dressing room by the end of the 1st period of the next game. Drinks stay in the licensed upstairs lounge."],
    ["Team fee", "$650 per team, due before your first game."],
  ],

  duties: [
    { job: "Bartenders", shifts: [
      ["Fri", "Cam Krugs Gibby", "5–6 PM"],
      ["Fri", "Colleen Cam", "6 PM – 1 AM"],
      ["Sat", "Mack", "10 AM – 5 PM"],
      ["Sat", "Quinny Brusser", "12–7 PM"],
      ["Sat", "Krugs", "3–9 PM"],
      ["Sat", "Gibby Shaker", "6–9 PM"],
      ["Sun", "Colleen", "10 AM – 4 PM"],
    ]},
    { job: "MVP Committee",
      info: "Hand out MVP drink cards to the winning teams and collect empties from the dressing rooms. If a room is in rough shape or the garbage is overflowing, ask arena staff for a quick clean.",
      shifts: [
      ["Fri", "Cam Browner Jer", "5:30–8:30 PM"],
      ["Fri", "Sully Tan CJ", "7:30–10:30 PM"],
      ["Fri", "Shaker", "9:30 PM – 12:30 AM"],
      ["Sat", "Cam Yarde", "9 AM – 1 PM"],
      ["Sat", "CJ Jer", "11 AM – 5 PM"],
      ["Sat", "Wyatt Santin", "12–6 PM"],
      ["Sat", "Sully Browner Patty", "5–9 PM"],
      ["Sun", "Cam Quinny CJ", "9 AM – 2 PM"],
    ]},
    { job: "Timekeepers", shifts: [
      ["Fri", "High school students", "5:30–9:30 PM games"],
      ["Fri", "Brusser CJ Wyatt", "10:30 & 11:30 PM games"],
      ["Sat", "High school students", "All games"],
      ["Sun", "High school students", "All games"],
    ]},
    { job: "Friday tickets & bracelets",
      info: "After 9 PM, 1–2 people at the bar sell tickets: charge for drinks plus the $10 dance cover, and hand out a bracelet. When you're not behind the bar, walk around checking bracelets and sell a $10 ticket to anyone without one.",
      shifts: [
      ["Fri", "Patty Cam", "8–10:30 PM"],
      ["Fri", "Wyatt Drew Krugs", "10–11:30 PM"],
    ]},
    { job: "Clean-up",
      info: "All hands on deck: clean up and unload the bar.",
      shifts: [["Sun", "Everyone", "3:30 PM"]],
    },
  ],
};

// Renders the tournament section. Runs before app.js, which merges our games into the schedule.
(function () {
  "use strict";

  var T = window.TOURNEY;
  var US = window.FISH.ourTeam;
  var el = document.getElementById("tourney");
  if (!el || !T) return;

  var DOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function start(g) {
    var d = g[1].split("-").map(Number), t = g[2].split(":").map(Number);
    return new Date(d[0], d[1] - 1, d[2], t[0], t[1]);
  }
  function fmtTime(d) {
    var h = d.getHours(), m = d.getMinutes();
    return (h % 12 || 12) + ":" + (m < 10 ? "0" : "") + m + " " + (h < 12 ? "AM" : "PM");
  }
  function ours(g) { return g[3] === US || g[4] === US; }

  // Hide once the weekend is over.
  var last = start(T.games[T.games.length - 1]);
  if (new Date() - last > 36 * 3600000) {
    el.hidden = true;
    var link = document.querySelector('.site-nav a[href="#tourney"]');
    if (link) link.hidden = true;
    return;
  }

  var mine = T.games.filter(ours);
  var days = [];
  T.games.forEach(function (g) {
    var prev = days[days.length - 1];
    if (prev && prev.date === g[1]) prev.games.push(g); else days.push({ date: g[1], games: [g] });
  });

  var html =
    '<p class="eyebrow tourney-dates">' + esc(T.dates) + "</p>" +
    "<h2>" + esc(T.title) + "</h2>" +

    '<h3 class="sub-head">Our games</h3><ul class="game-list">' +
    mine.map(function (g) {
      var d = start(g);
      var opp = g[3] === US ? g[4] : g[3];
      return '<li class="game"><div class="date-chip"><span class="dow">' + DOW[d.getDay()].slice(0, 3) +
        '</span><span class="day">' + d.getDate() + '</span><span class="mon">' + MON[d.getMonth()] + "</span></div>" +
        '<div class="game-main"><p class="game-opp"><span class="vs">vs</span>' + esc(opp) + "</p>" +
        '<p class="game-meta"><span class="time">' + fmtTime(d) + "</span> · Game " + g[0] + "</p></div></li>";
    }).join("") +
    "</ul>" +
    '<p class="tourney-note">Sunday playoffs: men\'s semis at 11 AM and 12 PM, men\'s final at 2 PM.</p>' +

    '<details class="fold"><summary>Full schedule</summary>' +
    days.map(function (day) {
      var d = start(day.games[0]);
      return '<div class="day"><p class="day-head">' + DOW[d.getDay()] + ", " + MON[d.getMonth()] + " " + d.getDate() + "</p>" +
        day.games.map(function (g) {
          var team = function (n) { return n === US ? '<span class="us">' + esc(n) + "</span>" : esc(n); };
          return '<div class="row' + (ours(g) ? " ours" : "") + '"><span class="time">' + fmtTime(start(g)) + "</span>" +
            '<span class="teams">' + team(g[3]) + '<span class="vs">vs</span>' + team(g[4]) +
            '<span class="note">G' + g[0] + (g[5] === "W" ? " · Women's" : "") + (g[6] ? " · " + esc(g[6]) : "") + "</span></span></div>";
        }).join("") + "</div>";
    }).join("") +
    "</details>" +

    '<details class="fold"><summary>Rules at a glance</summary><dl class="rules">' +
    T.rules.map(function (r) { return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("") +
    '</dl><p class="pdf-link"><a href="' + esc(T.pdf) + '">Full rules & schedule (PDF)</a>. The Tournament Director has the final say.</p></details>' +

    '<details class="fold"><summary>Team duties</summary>' +
    T.duties.map(function (job) {
      return '<div class="duty"><h4>' + esc(job.job) + "</h4>" +
        (job.info ? '<p class="duty-info">' + esc(job.info) + "</p>" : "") +
        '<div class="day">' + job.shifts.map(function (s) {
          return '<div class="row shift"><span class="time">' + esc(s[0]) + '</span><span class="teams">' + esc(s[1]) +
            '<span class="note">' + esc(s[2]) + "</span></span></div>";
        }).join("") + "</div></div>";
    }).join("") +
    "</details>";

  el.innerHTML = html;
})();
