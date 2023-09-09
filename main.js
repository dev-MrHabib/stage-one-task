let displayDay=document.getElementById("display-day");
let displayTime=document.getElementById("display-time");
const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let Day=new Date();
let currentDay=Day.getDay();
currentDay=DAYS[currentDay];
displayDay.textContent=currentDay;


function date(){
   date=new Date()
   getUtcMilliseconds=date.getTime()
   displayTime.textContent=getUtcMilliseconds
}
setInterval(date,1)