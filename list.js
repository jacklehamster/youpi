(function list() {
  var demos = [
    
    //  START LIST
    "?videoID=2VzE8Ii12Js&start=64.7&end=78.3",
    "?videoID=9OO4zxO9isk&start=30.75&end=42.46",
    "?videoID=vbU2VXGjQj8&start=4:24&end=4:29.9",
    
    //  END LIST
    
  ];
  if(ref) {
    secret = "?videoID="+ref + "&start="+start+"&end="+end;
    secret = demos[demos.indexOf(secret)+1];
  }
  else if(new Date().getDay()+new Date().getMonth()==24) {
    demoSearch = demos[Math.floor(Math.random()*demos.length)];
  }
})();
