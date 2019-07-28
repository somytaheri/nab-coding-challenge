const formatAMPM = time => {
  let timeArray = time.match(/.{1,2}/g);
  var hours = +timeArray[0];
  var minutes = +timeArray[1];
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export default formatAMPM;
