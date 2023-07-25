let a = document.getElementById("test")

const menu = () =>{
    if (a.style.display === 'none'){
        a.style.display = "block"
    }else{
        a.style.display = "none"
    }
}
const clock = () =>{
    const date = new Date()
    const hours=date.getHours()
    const minut=date.getMinutes()
    const secon=date.getSeconds()

    var zon=null 
    if (hours>12){
        zon="PM"
    }else{
        zon="AM"
    }

    document.getElementById("h1").innerHTML=(hours +":"+minut+":"+secon+" "+zon)
}
setInterval(clock, 1000);