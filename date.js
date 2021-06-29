//jshint esversion:6

module.exports.getDate = getDate;

function getDate(){
var today = new Date();
var options ={
  weekday:"long",
  day:"numeric",
  month:"long"
};
var day=today.toLocaleDateString("en-US",options);
return day;
}
module.exports.getDay =getDay;
function getDay(){
  let today = new Date();
  let options={
    weekday:"long"
  };
  let day=today.toLocaleDateString("en-US",options);
  return day;
}