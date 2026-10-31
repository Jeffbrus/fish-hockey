/*
 * Fish Hockey Club — 2026–27 league schedule
 *
 * HOW TO EDIT
 * - Each game is one line: [date, time, team A, team B]
 *   date = "YYYY-MM-DD", time = 24-hour "HH:MM"
 * - Add a score by putting a 5th value: "5-3" (team A goals - team B goals)
 *     ["2026-10-07", "20:00", "Purple Valley", "The Fish", "2-4"],
 * - Add a note (e.g. "Game 5") as a 6th value; use null for the score if not played yet.
 * - Use "TBD" for teams that aren't known yet (playoffs).
 * - The site shows only our games by default; the "All league" tab shows everything below.
 */

window.FISH = {
  ourTeam: "The Fish",
  season: "2026–27",

  rounds: [
    { name: "Round 1", games: [
      ["2026-10-07", "20:00", "Purple Valley", "The Fish"],
      ["2026-10-07", "21:30", "Mighty Drunks", "Clavering Crush"],
      ["2026-10-08", "20:00", "Chippewa Hill Thunder", "Wombats"],
      ["2026-10-08", "21:30", "Oxenden Senators", "Lions Head Northstars"],
    ]},
    { name: "Round 2", games: [
      ["2026-10-14", "20:00", "The Fish", "Oxenden Senators"],
      ["2026-10-14", "21:30", "Mighty Drunks", "Chippewa Hill Thunder"],
      ["2026-10-15", "20:00", "Wombats", "Purple Valley"],
      ["2026-10-15", "21:30", "Clavering Crush", "Lions Head Northstars"],
    ]},
    { name: "Round 3", games: [
      ["2026-10-21", "20:00", "Chippewa Hill Thunder", "Lions Head Northstars"],
      ["2026-10-21", "21:30", "The Fish", "Wombats"],
      ["2026-10-22", "20:00", "Oxenden Senators", "Clavering Crush"],
      ["2026-10-22", "21:30", "Purple Valley", "Mighty Drunks"],
    ]},
    { name: "Round 4", games: [
      ["2026-10-28", "20:00", "Mighty Drunks", "The Fish"],
      ["2026-10-28", "21:30", "Clavering Crush", "Chippewa Hill Thunder"],
      ["2026-10-29", "20:00", "Wombats", "Oxenden Senators"],
      ["2026-10-29", "21:30", "Lions Head Northstars", "Purple Valley"],
    ]},
    { name: "Round 5", games: [
      ["2026-11-04", "20:00", "Purple Valley", "Clavering Crush"],
      ["2026-11-04", "21:30", "Wombats", "Mighty Drunks"],
      ["2026-11-05", "20:00", "The Fish", "Lions Head Northstars"],
      ["2026-11-05", "21:30", "Chippewa Hill Thunder", "Oxenden Senators"],
    ]},
    { name: "Round 6", games: [
      ["2026-11-11", "20:00", "Clavering Crush", "The Fish"],
      ["2026-11-11", "21:30", "Lions Head Northstars", "Wombats"],
      ["2026-11-12", "20:00", "Oxenden Senators", "Mighty Drunks"],
      ["2026-11-12", "21:30", "Chippewa Hill Thunder", "Purple Valley"],
    ]},
    { name: "Round 7", games: [
      ["2026-11-18", "20:00", "Purple Valley", "Oxenden Senators"],
      ["2026-11-18", "21:30", "Mighty Drunks", "Lions Head Northstars"],
      ["2026-11-19", "20:00", "The Fish", "Chippewa Hill Thunder"],
      ["2026-11-19", "21:30", "Wombats", "Clavering Crush"],
    ]},
    { name: "Round 8", games: [
      ["2026-11-25", "20:00", "Wombats", "Chippewa Hill Thunder"],
      ["2026-11-25", "21:30", "The Fish", "Purple Valley"],
      ["2026-11-26", "20:00", "Lions Head Northstars", "Oxenden Senators"],
      ["2026-11-26", "21:30", "Clavering Crush", "Mighty Drunks"],
    ]},
    { name: "Round 9", games: [
      ["2026-12-02", "20:00", "Lions Head Northstars", "Clavering Crush"],
      ["2026-12-02", "21:30", "Oxenden Senators", "The Fish"],
      ["2026-12-03", "20:00", "Purple Valley", "Wombats"],
      ["2026-12-03", "21:30", "Chippewa Hill Thunder", "Mighty Drunks"],
    ]},
    { name: "Round 10", games: [
      ["2026-12-09", "20:00", "Mighty Drunks", "Purple Valley"],
      ["2026-12-09", "21:30", "Lions Head Northstars", "Chippewa Hill Thunder"],
      ["2026-12-10", "20:00", "Clavering Crush", "Oxenden Senators"],
      ["2026-12-10", "21:30", "Wombats", "The Fish"],
    ]},
    { name: "Round 11", games: [
      ["2026-12-16", "20:00", "Chippewa Hill Thunder", "Clavering Crush"],
      ["2026-12-16", "21:30", "Purple Valley", "Lions Head Northstars"],
      ["2026-12-17", "20:00", "The Fish", "Mighty Drunks"],
      ["2026-12-17", "21:30", "Oxenden Senators", "Wombats"],
    ]},
    { name: "Off-week", date: "2026-12-23", note: "Dec 23 & 24 — no games" },
    { name: "Off-week", date: "2026-12-30", note: "Dec 30 & 31 — no games" },
    { name: "Round 12", games: [
      ["2027-01-06", "20:00", "Clavering Crush", "Purple Valley"],
      ["2027-01-06", "21:30", "Lions Head Northstars", "The Fish"],
      ["2027-01-07", "20:00", "Mighty Drunks", "Wombats"],
      ["2027-01-07", "21:30", "Oxenden Senators", "Chippewa Hill Thunder"],
    ]},
    { name: "Round 13", games: [
      ["2027-01-13", "20:00", "Mighty Drunks", "Oxenden Senators"],
      ["2027-01-13", "21:30", "Purple Valley", "Chippewa Hill Thunder"],
      ["2027-01-14", "20:00", "Wombats", "Lions Head Northstars"],
      ["2027-01-14", "21:30", "The Fish", "Clavering Crush"],
    ]},
    { name: "Round 14", games: [
      ["2027-01-20", "20:00", "Lions Head Northstars", "Mighty Drunks"],
      ["2027-01-20", "21:30", "Oxenden Senators", "Purple Valley"],
      ["2027-01-21", "20:00", "Chippewa Hill Thunder", "The Fish"],
      ["2027-01-21", "21:30", "Clavering Crush", "Wombats"],
    ]},
    { name: "Round 15", games: [
      ["2027-01-27", "20:00", "Clavering Crush", "Mighty Drunks"],
      ["2027-01-27", "21:30", "Chippewa Hill Thunder", "Wombats"],
      ["2027-01-28", "20:00", "Purple Valley", "The Fish"],
      ["2027-01-28", "21:30", "Lions Head Northstars", "Oxenden Senators"],
    ]},
    { name: "Round 16", games: [
      ["2027-02-03", "20:00", "Lions Head Northstars", "Clavering Crush"],
      ["2027-02-03", "21:30", "Mighty Drunks", "Chippewa Hill Thunder"],
      ["2027-02-04", "20:00", "Oxenden Senators", "The Fish"],
      ["2027-02-04", "21:30", "Wombats", "Purple Valley"],
    ]},
    { name: "Round 17", games: [
      ["2027-02-10", "20:00", "Chippewa Hill Thunder", "Lions Head Northstars"],
      ["2027-02-10", "21:30", "Purple Valley", "Mighty Drunks"],
      ["2027-02-11", "20:00", "Clavering Crush", "Oxenden Senators"],
      ["2027-02-11", "21:30", "The Fish", "Wombats"],
    ]},
    { name: "Round 18", games: [
      ["2027-02-17", "20:00", "Lions Head Northstars", "Purple Valley"],
      ["2027-02-17", "21:30", "Oxenden Senators", "Wombats"],
      ["2027-02-18", "20:00", "Clavering Crush", "Chippewa Hill Thunder"],
      ["2027-02-18", "21:30", "Mighty Drunks", "The Fish"],
    ]},
    { name: "Round 19", games: [
      ["2027-02-24", "20:00", "Chippewa Hill Thunder", "Oxenden Senators"],
      ["2027-02-24", "21:30", "Purple Valley", "Clavering Crush"],
      ["2027-02-25", "20:00", "The Fish", "Lions Head Northstars"],
      ["2027-02-25", "21:30", "Wombats", "Mighty Drunks"],
    ]},
    { name: "Round 20", games: [
      ["2027-03-03", "20:00", "Oxenden Senators", "Mighty Drunks"],
      ["2027-03-03", "21:30", "Clavering Crush", "The Fish"],
      ["2027-03-04", "20:00", "Lions Head Northstars", "Wombats"],
      ["2027-03-04", "21:30", "Chippewa Hill Thunder", "Purple Valley"],
    ]},
    { name: "Round 21", games: [
      ["2027-03-10", "20:00", "Mighty Drunks", "Lions Head Northstars"],
      ["2027-03-10", "21:30", "Wombats", "Clavering Crush"],
      ["2027-03-11", "20:00", "The Fish", "Chippewa Hill Thunder"],
      ["2027-03-11", "21:30", "Purple Valley", "Oxenden Senators"],
    ]},
    { name: "Playoffs",
      info: "1v8, 2v7, 3v6, 4v5. Higher seed picks Wednesday/Thursday game time (1st place first choice, then 2nd, etc.). Replace TBD with team names once seeds are set.",
      games: [
      ["2027-03-17", "20:00", "TBD", "TBD", null, "Game 1"],
      ["2027-03-17", "21:30", "TBD", "TBD", null, "Game 2"],
      ["2027-03-18", "20:00", "TBD", "TBD", null, "Game 3"],
      ["2027-03-18", "21:30", "TBD", "TBD", null, "Game 4"],
      ["2027-03-19", "19:30", "TBD", "TBD", null, "Game 5 · Winners semi (highest vs lowest winning seed)"],
      ["2027-03-19", "21:00", "TBD", "TBD", null, "Game 6 · Winners semi"],
      ["2027-03-20", "13:00", "TBD", "TBD", null, "Game 7 · Losers semi 1"],
      ["2027-03-20", "14:30", "TBD", "TBD", null, "Game 8 · Losers semi 2"],
      ["2027-03-20", "16:00", "TBD", "TBD", null, "B(eer) Final · losers of games 5 & 6"],
      ["2027-03-20", "17:30", "TBD", "TBD", null, "Toilet Bowl Final · winners of games 7 & 8"],
      ["2027-03-20", "19:00", "TBD", "TBD", null, "Game 10 · Winners Final 🏆"],
    ]},
  ],
};
