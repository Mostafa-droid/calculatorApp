let key = document.querySelectorAll('.number span');
let screen = document.querySelector('.screen');
let op  = document.querySelector('.screen .op');
let equal  = document.querySelector('.number .equal');
let delet  = document.querySelector('.number .del');
let reset  = document.querySelector('.number .reset');
let togglebtn = document.querySelector('.header .toggle .toggele-btn-holder .toggele-btn');

// ==== local storage
if(window.localStorage.getItem('design')){
    let l = window.localStorage.getItem('design')
    document.body.classList.add(l)
    if(l == 'designOne'){togglebtn.value = 1}
    else if(l == 'designtwo'){togglebtn.value = 2}
    else if(l == 'designThree'){togglebtn.value = 3}
    else{togglebtn.value = 1}
}

// === keyboad buttons
togglebtn.addEventListener('click',(e)=>{
    e.preventDefault()
    // toggle display
    if(togglebtn.value == 1){
        document.body.classList.remove('designtwo')
        document.body.classList.remove('designThree')
        document.body.classList.add('designOne')
        window.localStorage.setItem('design','designOne')
        
    }else if(togglebtn.value == 2){
        document.body.classList.remove('designOne')
        document.body.classList.remove('designThree')
        document.body.classList.add('designtwo')
        window.localStorage.setItem('design','designtwo')
    }else{
        document.body.classList.remove('designtwo')
        document.body.classList.remove('designOne')
        document.body.classList.add('designThree')
        window.localStorage.setItem('design','designThree')
    }
})




//  === add number and operator sign to screen
key.forEach((el) => { 
    el.addEventListener('click', (e) => {
            x = e.target.getAttribute('data-text')
            if(x == 'reset' || x == '=' || x =='del'){
                return
            }else{
                screen.innerHTML  += x
            }
    })

})

//  ======  result 
equal.addEventListener('click',()=>{
    if(screen.innerHTML == ''){return}
    else{
        screen.innerHTML = eval(screen.innerText)
    }
})
//   ===== delete 
delet.addEventListener('click',()=>{
    
    screen.innerHTML= screen.innerText.toString().slice(0,-1)
})
//  ======  reset
reset.addEventListener('click',()=>{
     screen.innerHTML = ''
})



