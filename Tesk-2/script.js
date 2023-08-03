const convert = (deg) =>{
    let pi = Math.PI
    return deg * (pi/180)
}
document.getElementById('toggle').addEventListener('click',()=>{
    let class_name=document.getElementById('toggle').classList
    let root=document.querySelector(':root')
    if(class_name[1] == "bx-sun"){
        class_name.replace("bx-sun","bx-moon")
        root.style.setProperty("--bg-body", "white")
        root.style.setProperty("--bg-cal", "white")
        root.style.setProperty("--white", "black")
    }else{
        class_name.replace("bx-moon","bx-sun")
        root.style.setProperty("--bg-body", "#141414")
        root.style.setProperty("--bg-cal", "#191919")
        root.style.setProperty("--white", "white")
    }
})
const test = () =>{
    try {
        const value = document.getElementById('number').value
        if(value.slice(0,3) == "sin"){
            inputText.value = Math.sin(convert(value.slice(3,value.length)))
        }else if(value.slice(0,3) == "cos"){
            inputText.value = Math.cos(convert(value.slice(3,value.length)))
        }else if(value.slice(0,3) == "ten"){
            inputText.value = Math.cos(convert(value.slice(3,value.length)))
        }else if(value.slice(0,3)=="log"){
            inputText.value = Math.log(value.slice(3,value.length))/Math.LN10
        }else if(value[0]=="√"){
            inputText.value = Math.sqrt(value.slice(1,value.length))
        }else if(value[0]=="^"){
            inputText.value = value[1]**2
        }
        else{
            inputText.value = eval(value)
        }
    } catch (error) {
        inputText.value="Error"
    }
}
const inputText = document.querySelector("#number");
let module = document.querySelector("#modulo");
const setValue = (x) =>{
    const btn = document.getElementById(x)
    inputText.value += btn.value
}

const ae = document.getElementById('ae')

ae.addEventListener('click', ()=>{
    inputText.value = ""
})
function coddinet() {
    var val=inputText.value
    let a=(val.slice(0, inputText.selectionStart).length-1)
    console.log(a)
    let replace_string=val[a]
    inputText.value=val.replace(replace_string,'')
}

