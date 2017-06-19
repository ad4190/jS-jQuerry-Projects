var d= new Date();

var month = d.getMonth();
var date =  d.getDate();
var day = d.getDay();
var year = d.getFullYear();
var hour = d.getHours();
var min = d.getMinutes();

//month++;
//alert("Today's date is "+date+"-"+month+"-"+year);
var days_name = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday");
var month_name = new Array("Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec");
var sup= "";
if(date==1 || date==21 || date==31){
    sup="st";
}
if(date==2 || date==22){
    sup="nd";
}
if(date==3 || date==23){
    sup="rd";
}
else{
    sup="th";
}
document.getElementById("dates").innerHTML="Today's date is <strong>"+days_name[day]+" "+date+"<sup>"+sup+"</sup>"+" "+month_name[month]+" "+year+"</strong>";

//TIME
var a_p="";
if(hour<=12){
    a_p="AM"
}
else{
    a_p="PM"
}
if(hour==0){
    hour=12;
}
if(hour>12){
    hour=hour-12;
}
hour=hour+"";
if(hour.length==1){
    hour="0"+hour;
}
min=min+""; //dataType conversion to string
if(min.length==1){
    min="0"+min;
}
document.getElementById("time").innerHTML="<strong>"+hour+":"+min+" "+a_p+"<strong>";