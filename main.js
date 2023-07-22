//change navbar style on scrolling

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 80);
})

//show ans of faq

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        
        //change icon
        const icon=faq.querySelector('.faq_icon i');
        if(icon.className=='uil uil-plus'){
            icon.className='uil uil-minus';
        }else{
            icon.className='uil uil-plus';
        }
    })
})

// show menu 
const menu=document.querySelector('.nav_menu');
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
})

//hide menu
closeBtn.addEventListener('click', ()=>{
    menu.style.display="none";
    menuBtn.style.display="inline-block";
    closeBtn.style.display="none";
})