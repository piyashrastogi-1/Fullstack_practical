var s=document.getElementById("sub");
var a=document.getElementById("add");
var c=document.getElementById("counter");
var count=0;

s.disabled  = true;

function fun1()
{
    if(count!=0)
    {  
        count--;   
    }
    if (count == 0)
        s.disabled = true;
    c.innerHTML = count;
}

function fun2()
{
    count++;
    c.innerHTML = count;
    s.disabled = false;
}