let html = document.querySelector('.html')
let js = document.querySelector('.js')
let py = document.querySelector('.py')
let php = document.querySelector('.php')
let react = document.querySelector('.react')
let tg = document.querySelector('.tg')
let ph = document.querySelector('.ph')
let cdr = document.querySelector('.cdr')
let r = document.querySelector('.r')
let p = document.querySelector('.p')
let pyg = document.querySelector('.pyg')
let jsg = document.querySelector('.jsg')
let phg = document.querySelector('.phg')
let tgg = document.querySelector('.tgg')

html.style.width = '90%'
js.style.width = '90%'
py.style.width = '85%'
php.style.width = '70%'
react.style.width = '45%'
tg.style.width = '90%'
ph.style.width = '90%'
cdr.style.width = '85%'
r.style.gap = '130px'
p.style.gap = '180px'
pyg.style.gap = '310px'
jsg.style.gap = '305px'
phg.style.gap = '305px'
tgg.style.gap = '290px'


let im = document.querySelector('.im')
let buttons = document.querySelectorAll('.buttons button')
buttons.forEach(elem => {
    elem.onclick = () => {
        buttons.forEach(el => {
            el.classList.remove('active')
        })
        elem.classList.add('active')
    }
})


let header = document.querySelector('header')
let body = document.querySelector('body')
let wh = document.querySelector('.wh')
let lwh = document.querySelector('.header2 .l a .wh')
let right = document.querySelectorAll('.right a')
let header2 = document.querySelector('.header2')
let mblinks = document.querySelector('.mblinks')
let lnk = document.querySelectorAll('.mblinks a')
let menusvg = document.querySelector('.bi-list')
let menu = document.querySelector('.menu')
body.onscroll = () => {
    if (window.scrollY === 0) {
        header.style.background = 'none';
        header2.style.background = 'none';
        mblinks.style.background = 'none'
        menusvg.style.fill = "#fff"
        wh.style.color = '#fff';
        lwh.style.color = "#fff"
        right.forEach(el => {
            el.style.color = '#fff';
        })
        lnk.forEach(el2 => {
            el2.style.color = '#fff'
        })
    } else {
        header.style.background = '#fff';
        header2.style.background = '#fff';
        mblinks.style.background = '#fff'
        menusvg.style.fill = "#000"
        wh.style.color = '#000';
        lwh.style.color = '#000';
        right.forEach(el => {
            el.style.color = '#000';
        })
        lnk.forEach(el2 => {
            el2.style.color = '#000'
        })
    }
}

menu.onclick = () => {
    mblinks.classList.toggle('fl')
}

$(function () {
    $(".text2").typed({
        strings: ["Abduvali Toxirov", "Frontend Developer", "PDP Student"],
        typeSpeed: 70,
        backSpeed: 20,
        backDelay: 1500,
        showCursor: false,
        loop: true
    });
});



let form = document.forms.contact

form.onsubmit = (event) => {
    event.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.telegram.org/bot1785517793:AAE13_p2H2dnw_tc5g8SYb6x7LK8T3rRzM0/sendMessage?chat_id=293498310&text=" + "Ismi: " + user.name + " Tel: " + user.tel + " Xabar: " + user.message);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => console.log(xhr.responseText);

    xhr.send(user);

}