const showmenu = document.querySelector('.show-menu');
const closemenu = document.querySelector('.close-menu');
const all_menu_left = document.querySelector('.all-menu-left');
const main = document.querySelector('main');
const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');
const q3 = document.querySelector('.q3');
const answertext = document.querySelector('.answertext');
let show=0;

let browser = navigator.userAgent;
let firefox;


if(browser.match(/firefox|fxios/i)){
    alert('firefox');
}





showmenu.addEventListener("click", function () {
    all_menu_left.style.animation = "show-menu-fade .2s ease  forwards";
    show+=1;
});
closemenu.addEventListener("click", function () {
    all_menu_left.style.animation = "hied-menu-fade .25s ease ";
});
main.addEventListener("click", function () {
    if (show == 1){
    all_menu_left.style.animation = "hied-menu-fade .25s ease ";
    show-=1;
    }
    else{}
});
q1.addEventListener("click", function () {
    q1.classList.add('selectquizbox');
    q2.classList.remove('selectquizbox');
    q3.classList.remove('selectquizbox');
    answertext.style.animation = "answertextfade1 .25s ease ";

    answertext.innerHTML = "پس از ثبت‌نام در پیشخان توسعه‌دهندگان بازار و ساخت حساب، امکان بارگذاری برنامه برای شما وجود دارد. مطالعه قوانین انتشار در قدم اول به شناخت بهتر قوانین و تسریع مراحل انتشار برنامه کمک می‌کند.";

});
q2.addEventListener("click", function () {

    q2.classList.add('selectquizbox');
    q1.classList.remove('selectquizbox');
    q3.classList.remove('selectquizbox');
    answertext.style.animation = "answertextfade2 .25s ease ";

    answertext.innerHTML ="    ۱۵ درصد از سال ۱۴۰۰ بازار با هدف رونق صنعت برنامه‌ها و بازی‌ها و کمک به رشد توسعه‌دهندگان، سهم خود از فروش اولین ده میلیارد ریال هر توسعه‌دهنده را از ۳۰ به ۱۵ درصد کاهش داد.    ";
});
q3.addEventListener("click", function () {
    q3.classList.add('selectquizbox');
    q2.classList.remove('selectquizbox');
    q1.classList.remove('selectquizbox');
    answertext.style.animation = "answertextfade3 .25s ease ";

    answertext.innerHTML =" امکان پیشرفت برنامه از دو روش بهبود صفحه برنامه و تبلیغات در بازار فراهم است. بهبود صفحه برنامه با تکمیل نام و آیکون منحصربه‌فرد، توضیحات دقیق و بارگذاری اسکرین‌شات‌ها و ویدیوشات‌ها در جذب کاربر و پیشرفت برنامه موثر است.";

});
