javascript: (function () {
  var r = document.querySelectorAll("video"),
    p = prompt("Speed", r[0].playbackRate);
  r.forEach((v) => (v.playbackRate = p || v.playbackRate));
})();
