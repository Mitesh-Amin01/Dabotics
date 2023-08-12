let qrText = document.getElementById('text')
let qrContainer = document.querySelector('.qr')
document.getElementById('Btn').addEventListener('click',(e)=>{
    e.preventDefault()
    qrCode()
})
function qrCode() {
    qrContainer.innerHTML = ""
    new QRCode(qrContainer,{
        text:qrText.value,
        height:200,
        width:200,
        colorLight:'#fff',
        colorDark:'#000'
    })
}
document.getElementById('Download').addEventListener('click',()=>{
    let img = document.querySelector('.qr img')
    if (img !== null){
        let imgAtrr =img.getAttribute('src')
        document.getElementById('Download').setAttribute('href',imgAtrr)
    }else{
        console.log("erro ouccr")
    }
})