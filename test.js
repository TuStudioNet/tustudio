let controllerIndex=null;
let gamepad;

window.addEventListener("gamepadconnected",(event)=>{
    controllerIndex=event.gamepad.index;
    console.log("Controller "+event.gamepad.id+"(Index"+controllerIndex+") is connected!")
})

window.addEventListener("gamepaddisconnected",(event)=>{
    controllerIndex=null;
    console.log("Controller "+event.gamepad.id+"(Index"+controllerIndex+") is disconnected!")
})

setInterval(function(){
    if(controllerIndex!=null)
    {
        gamepad=navigator.getGamepads()[controllerIndex];
        document.getElementById("Controller").innerHTML="控制器 "+gamepad.id+" （索引"+gamepad.index+"）";
        if(gamepad.buttons[0].pressed)
            document.getElementById("button 0").innerHTML="按键 0 : 按下";
        else
            document.getElementById("button 0").innerHTML="按键 0";
        if(gamepad.buttons[1].pressed)
            document.getElementById("button 1").innerHTML="按键 1 : 按下";
        else
            document.getElementById("button 1").innerHTML="按键 1";
        if(gamepad.buttons[2].pressed)
            document.getElementById("button 2").innerHTML="按键 2 : 按下";
        else
            document.getElementById("button 2").innerHTML="按键 2";
        if(gamepad.buttons[3].pressed)
            document.getElementById("button 3").innerHTML="按键 3 : 按下";
        else
            document.getElementById("button 3").innerHTML="按键 3";
        document.getElementById("axe 0").innerHTML="轴 0 ："+gamepad.axes[0].toFixed(5);
        document.getElementById("axe 1").innerHTML="轴 1 ："+gamepad.axes[1].toFixed(5);
        document.getElementById("axe 2").innerHTML="轴 2 ："+gamepad.axes[2].toFixed(5);
        document.getElementById("axe 3").innerHTML="轴 3 ："+gamepad.axes[3].toFixed(5);
    }
    else
    {
        document.getElementById("Controller").innerHTML="无控制器";
        document.getElementById("button 0").innerHTML=null;
        document.getElementById("button 1").innerHTML=null;
        document.getElementById("button 2").innerHTML=null;
        document.getElementById("button 3").innerHTML=null;
    }
},10);

