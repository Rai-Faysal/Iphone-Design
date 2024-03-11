const r_btn = document.querySelector('.r-btn')
const iphone = document.querySelector('.iphone .turn-off')
r_btn.addEventListener('click' , function() {
    if(!iphone.classList.contains('turn-on')) {
        iphone.classList.add('turn-on')
    }else {
        iphone.classList.remove('turn-on')
    }
}) 
const onOff = document.querySelector('.off-on p')

r_btn.addEventListener('click' , function() {
    if(onOff.innerText == 'ON') {
        onOff.innerText = 'OF'
    }
    else if(onOff.innerText == 'OF') {
        onOff.innerText = 'ON'
    }
})