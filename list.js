(function list() {
  var demos = [
    
    //  START LIST
    
    "?videoID=vbU2VXGjQj8&start=4:24&end=4:29.9",
    "?videoID=9OO4zxO9isk&start=30.75&end=42.46",
    
    //  END LIST
    
  ];
  if(ref) {
    demoSearch = "?videoID="+ref + "&start="+start+"&end="+end;
    demoSearch = demos[demos.indexOf(demoSearch)+1];
  }
  else if(new Date().getDay()+new Date().getMonth()==24) {
    demoSearch = demos[Math.floor(Math.random()*demos.length)];
  }
})();
