function Digital_clock()
{
    var a=new Date();
    document.getElementsByClassName('Hours')[0].innerHTML=a.getHours();
    document.getElementsByClassName('Minutes')[0].innerHTML=a.getMinutes();
    document.getElementsByClassName('Seconds')[0].innerHTML=a.getSeconds();
}
setInterval(Digital_clock,1000);