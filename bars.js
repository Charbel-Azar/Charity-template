var bararray=document.getElementsByName("progressbars")
var raisedarray=document.getElementsByName("raisednumber")
var garray=document.getElementsByName("gstats") 
console.log(bararray)
console.log(raisedarray)



for(i=0;i<bararray.length;i++){

    raised=parseInt(raisedarray[i].innerHTML.replace("%","").replace(",",""))
    console.log(raised)

   
    bararray[i].style.width=raised +"%"

    if(raised < 100)
        garray[i].style.marginLeft=raised-11+"%"
        
    else{
        garray[i].style.marginLeft=100-11+"%"
        bararray[i].style.background="linear-gradient(345deg, rgba(11,156,0,1) 0%, rgba(168,255,153,1) 100%)"
        garray[i].textContent="GOAL ACHIEVED "

}}
 