let btns = document.getElementById('btnChange')
var Data = []



async function get() {
    var r = await fetch('https://dummyjson.com/quotes')
    var d = await r.json()
    Data = await d.quotes
    display()

}

get()
let i = 0

function display() {
    let cols = `
                <div class=" text-center text-black  col-12">
                        <h2>Author : ${Data[i].author}</h2>
                        <h4 class="mt-5"> <i>${Data[i].quote}</i></h4>
                        <button id="btnChange" onclick="doo()"  class="btn btn-outline-dark mt-5"> Change Quote</button>
                    </div> `

    document.getElementById('Data').innerHTML = cols
}

function doo() {
    if (i < 29) {
        i++
    } else {
        i = 0
    }

    display()
}

