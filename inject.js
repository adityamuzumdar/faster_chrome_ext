javascript: (function () {
  var r = document.querySelectorAll("video"),
    p = prompt("Speed", r[0].playbackRate);
    r.forEach((v) => 
    {
      if(p>0 && p<16){
        v.playbackRate = p || v.playbackRate
      }
      else{
        alert("This speed is out of my limits.")
      }
    }

  );
})();
