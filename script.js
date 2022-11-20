let stars=document.querySelectorAll(".fa-star")
let emoj=document.querySelector("#emoj")
stars[0].addEventListener("click",()=>{
    // alert("hy")
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#e4e4e4";
    stars[2].style.color="#e4e4e4";
    stars[3].style.color="#e4e4e4";
    stars[4].style.color="#e4e4e4";
    emoj.style.transform="translatex(0)";
})
stars[1].addEventListener("click",()=>{
    // alert("hy")
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#ffd93b";
    stars[2].style.color="#e4e4e4";
    stars[3].style.color="#e4e4e4";
    stars[4].style.color="#e4e4e4";
    emoj.style.transform="translatex(-100px)";
})
stars[2].addEventListener("click",()=>{
    // alert("hy")
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#ffd93b";
    stars[2].style.color="#ffd93b";
    stars[3].style.color="#e4e4e4";
    stars[4].style.color="#e4e4e4";
    emoj.style.transform="translatex(-200px)";
})
stars[3].addEventListener("click",()=>{
    // alert("hy")
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#ffd93b";
    stars[2].style.color="#ffd93b";
    stars[3].style.color="#ffd93b";
    stars[4].style.color="#e4e4e4";
    emoj.style.transform="translatex(-300px)";
})
stars[4].addEventListener("click",()=>{
    // alert("hy")
    stars[0].style.color="#ffd93b";
    stars[1].style.color="#ffd93b";
    stars[2].style.color="#ffd93b";
    stars[3].style.color="#ffd93b";
    stars[4].style.color="#ffd93b";
    emoj.style.transform="translatex(-400px)";
})

// function buttonState(){
//     $("input").each(function(){
//         $('#register').attr('disabled', 'disabled');
//         if($(this).val() == "" ) return false;
//         $('#register').attr('disabled', '');
//     })
// }

// $(function(){
//     $('#register').attr('disabled', 'disabled');
//     $('input').change(buttonState);
// })

