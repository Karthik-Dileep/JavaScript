console.log("Hour:",hour=12);
console.log("Minutes=",min=30);
console.log("Seconds=",sec=50);
var p="PM";
console.log("AM/PM:",p);
if(p == "PM" && hour<12)
{
    hour=(hour+12);
}
if(p=="AM" && hour>=12)
{
    hour=(hour-12);
}
console.log("24 Hour Format: 0",hour,min,sec);
