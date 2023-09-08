let displayDay=document.getElementById("display-day");
let displayTime=document.getElementById("display-time");
const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let Day=new Date();
let currentDay=Day.getDay();
currentDay=DAYS[currentDay];
displayDay.textContent=currentDay;


function date(){
   date=new Date()
   function getTime(date){
       let hour=new Date().getUTCHours()-7;
       let minute=date.getUTCMinutes();
       minute=minute.toString().padStart(2,"0");
       let seconds=date.getUTCSeconds();
       seconds=seconds.toString().padStart(2,"0");
       let unit=(hour >= 12)?"pm":"am";
       hour=(hour%12)||12.
       let time=`${hour}:${minute}:${seconds}${unit}`;
       displayTime.textContent=time;
   }
   getTime(date)
}
setInterval(date,1000)