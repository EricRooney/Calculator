window.addEventListener('load', () =>{
    const zero = document.querySelector('.zero')
    const one = document.querySelector('.one')
    const two = document.querySelector('.two')
    const three = document.querySelector('.three')
    const four = document.querySelector('.four')
    const five = document.querySelector('.five')
    const six = document.querySelector('.six')
    const seven = document.querySelector('.seven')
    const eight = document.querySelector('.eight')
    const nine = document.querySelector('.nine')
    const plus = document.querySelector('.plus')
    const minus = document.querySelector('.minus')
    const multiply = document.querySelector('.multiply')
    const divide = document.querySelector('.divide')
    const calculate = document.querySelector('.calculate')
    const screen = document.querySelector(".screen")
    let cache = ""
    let preCache = ""
    let operator = ""
    let
    function draw(){
        screen.innerText = `${cache}`
    }


    zero.addEventListener('click',() =>{
    cache += "0"
    draw()
    })
    one.addEventListener('click',() =>{
        cache += "1"
        draw()
    })
    two.addEventListener('click',() =>{
        cache += "2"
        draw()
    })
    three.addEventListener('click',() =>{
        cache += "3"
        draw()
    })
    four.addEventListener('click',() =>{
        cache += "4"
        draw()
    })
    five.addEventListener('click',() =>{
        cache += "5"
        draw()
    })
    six.addEventListener('click',() =>{
        cache += "6"
        draw()
    })
    seven.addEventListener('click',() =>{
        cache += "7"
        draw()
    })
    eight.addEventListener('click',() =>{
        cache += "8"
        draw()
    })
    nine.addEventListener('click',() =>{
        cache += "9"
        draw()
    })
    plus.addEventListener('click',() =>{
        cache +=
        draw()
    })

    console.log(cache)




})