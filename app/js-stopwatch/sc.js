var timeword=document.getElementById("time-nub");
var timer;
var moveing=false;
var stsp=document.getElementById("start-stop");
var reset=document.getElementById("reset");
var h=0,m=0,s=0,ms=0;

function writetime()
{
	var time="";
	if(h<10)
		time+='0';time+=h;
	time+=':';
	if(m<10)
		time+='0';time+=m;
	time+=':';
	if(s<10)
		time+='0';time+=s;
	time+='.';
	if(ms<10)
		time+='0';time+=ms;
	timeword.innerHTML=time;
};

writetime();

stsp.onclick=function(){
	if(!moveing)
	{
		stsp.innerHTML="停止";
		moveing=true;
		reset.disabled=true;
		timer=setInterval(function(){
			ms++;
			if(ms===100)
			{
				ms=0,s++;
			};
			if(s===60)
			{
				s=0,m++;
			};
			if(m===60)
			{
				m=0,h++;
			};
			writetime();
		},10);
	}
	else
	{
		clearInterval(timer);
		stsp.innerHTML="开始";
		moveing=false;
		reset.disabled=false;
	};
};

reset.onclick=function(){
	h=0,m=0,s=0,ms=0;
	writetime();
	reset.disabled=true;
}
