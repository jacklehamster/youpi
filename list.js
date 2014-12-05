(function list() {
  var demos = [
    
    //  START LIST
    "?videoID=2VzE8Ii12Js&start=64.7&end=78.3",
    "?videoID=9OO4zxO9isk&start=30.75&end=42.46",
    "?videoID=vbU2VXGjQj8&start=4:24&end=4:29.9",
    
    //  END LIST
    
  ];
  console.log(ref);
  if(ref) {
    demoSearch = "?videoID="+ref + "&start="+start+"&end="+end;
    console.log(demoSearch);
    demoSearch = demos[demos.indexOf(demoSearch)+1];
    console.log(demos.indexOf(demoSearch));
    console.log(demos[demos.indexOf(demoSearch)+1]);
  }
  else if(new Date().getDay()+new Date().getMonth()==24) {
    demoSearch = demos[Math.floor(Math.random()*demos.length)];
  }
})();
