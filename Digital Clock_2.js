
var pause;
function start1(){
var i=0,j=0,k=0,l=0;
function start()
{
    i=i+1;
    document.getElementsByClassName('Time')[3].innerHTML=i;
    
    if(i==100)
        {
            j=j+1;
            document.getElementsByClassName('Time')[2].innerHTML=j;
            i=0;
        }
    if(j==60)
        {
            k=k+1;
            document.getElementsByClassName('Time')[1].innerHTML=k;
            j=0;
        }
    if(k==60)
        {
            l=l+1;
            document.getElementsByClassName('Time')[0].innerHTML=l;
            k=0;
        }
}
pause=setInterval(start,1);


}
function stop()
{
    clearInterval(pause);
}
function resettt()
{
    clearInterval(pause);
    document.getElementsByClassName('Time')[3].innerHTML="00";
    document.getElementsByClassName('Time')[2].innerHTML="00";
    document.getElementsByClassName('Time')[1].innerHTML="00";
    document.getElementsByClassName('Time')[0].innerHTML="00";

}