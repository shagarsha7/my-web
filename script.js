var x=document.querySelector(".tender_left_content_1");
var y=document.querySelector('.tender_left_content_2');
var z=document.querySelector('.tender_left_content_3');

function show1() {
    x.style.display="grid"
    y.style.display="none"
    z.style.display="none"
}

function show2(){
    x.style.display="none"
    y.style.display="grid"
    z.style.display="none"
}

function show3(){
    x.style.display="none"
    y.style.display="none"
    z.style.display="grid"
}
