(function list() {
  var demos = [
    
    //  START LIST
    "?videoID=2VzE8Ii12Js&start=64.7&end=78.3", //  youpi
    "?videoID=9OO4zxO9isk&start=30.75&end=42.46", //  van damn
    "?videoID=5yGJGTjV2WE&start=47.9&end=1:01.84", // no TV and no Beer
    "?videoID=OQSNhk5ICTI&start=30&end=62", //  double rainbow
    "?videoID=kVmC0ktznNo&start=27.3&end=52.2", //  TPS reports
    //  END LIST
  ];
  if(ref) {
    secret = "?videoID="+ref + "&start="+start+"&end="+end;
    secret = demos[Math.floor(Math.random()*demos.length)];
  }
  else if(new Date().getDay()+new Date().getMonth()==24) {
    demoSearch = demos[Math.floor(Math.random()*demos.length)];
  }
})();
