const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul a');
const header = document.querySelector('.header.container');
const chtBtn = document.querySelector('#chat-btn');
const chatBox = document.querySelector('#chat');

// hamburger toggle Btn
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

// scroll nav-bar in not mobile
document.addEventListener('scroll',()=>{
    const scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
})

// scroll nav-bar in mobile
menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})

// Chat toggle Btn
chtBtn.addEventListener('click',()=>{
    chat.classList.toggle("active");
})