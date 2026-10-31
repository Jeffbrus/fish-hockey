/*
 * Legends Board — teammates inducted for one unforgettable moment. No names.
 *
 * Each legend plays its own section of our Motion film (assets/fish-tales.mp4), on a loop,
 * while its card is on screen. start/end are seconds into the film. To add a legend, add a
 * scene to the film, re-export it, and add a line here with the scene's start and end times.
 */
(function () {
  "use strict";

  var VIDEO = "assets/fish-tales.mp4";
  var LEGENDS = [
    { id: "frozen-contacts", title: "The Frozen Contacts", start: 3, end: 10 },
    { id: "coffin-exit", title: "The Coffin Exit", start: 10, end: 18.5 },
  ];

  var list = document.getElementById("legends-list");
  if (!list) return;

  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var REPLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>';
  var PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10-6.5z"/></svg>';

  list.innerHTML = LEGENDS.map(function (t) {
    return '<article class="legend" id="legend-' + t.id + '">' +
      '<div class="legend-stage"><video muted playsinline preload="metadata" aria-label="' + t.title + ' animation" ' +
      'src="' + VIDEO + "#t=" + t.start + "," + t.end + '"></video></div>' +
      '<div class="legend-body"><div><p class="legend-for">Inducted for</p><h3>' + t.title + "</h3></div>" +
      '<button class="btn btn-ghost legend-replay" type="button">' + (reduce ? PLAY + "Play" : REPLAY + "Replay") + "</button></div></article>";
  }).join("");

  LEGENDS.forEach(function (t) {
    var root = document.getElementById("legend-" + t.id);
    var video = root.querySelector("video");
    var btn = root.querySelector(".legend-replay");
    var looping = false;

    // timeupdate only fires a few times a second, so check every frame to stop
    // before the next scene shows through.
    function watch() {
      if (video.paused) { looping = false; return; }
      if (video.currentTime >= t.end - 0.05 || video.currentTime < t.start - 0.5) video.currentTime = t.start;
      requestAnimationFrame(watch);
    }

    function play(fromStart) {
      if (fromStart) video.currentTime = t.start;
      var p = video.play();
      if (p && p.catch) p.catch(function () {}); // autoplay refused: the button still works
      if (!looping) { looping = true; requestAnimationFrame(watch); }
    }

    video.addEventListener("loadedmetadata", function () {
      if (video.currentTime < t.start) video.currentTime = t.start;
    });

    btn.addEventListener("click", function () {
      if (reduce && !video.paused) { video.pause(); return; }
      play(true);
    });

    if (reduce) return; // no autoplay; the Play button starts it

    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) play(false); else video.pause();
    }, { threshold: 0.5 }).observe(root.querySelector(".legend-stage"));
  });
})();
