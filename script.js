gsap.to("#nav",{
    height:"80px",
    duration:0.7,
    backgroundColor:"#000",
    scrollTrigger:{
        scroller:"body",
        trigger:"#nav",
        start:"top -10%",
        scrub:0.5,

    }
})



gsap.to("#main",{
    backgroundColor:"#000",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -10%",
        end:"top -70%",
        scrub:5,
    }
})



gsap.to("video",{
    scale:1.8,
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"body",
        start:"top 20%",
        scrub:1
        
    }
})



let menu = document.querySelector("#nav i");

let back = document.querySelector("#slidepart1 i");

let tl = gsap.timeline();

tl.to("#slidebar",{
    top:"0",
    opacity:1,
    duration:1,
    ease:"power4.out"
})


tl.from("#slidebar h2",{
    scale:0,
    opacity:0,
    duration:0.4,
    ease:"elastic.out(1,1)"
})


tl.pause();


menu.addEventListener("click",function(){
    tl.play();
})



back.addEventListener("click",function(){

    tl.reverse();
})





gsap.from("#page1 h1",{
    opacity:0,
    duration:2,
    scale:0.3,
    delay:1,
    ease:"elastic.out"
})

gsap.from("#page1 h2",{
    opacity:0,
    duration:2,
    scale:0.3,
    delay:1,
    ease:"power4.out"
})

gsap.from("#page1 h5",{
    opacity:0,
    duration:2,
    scale:0.3,
    delay:1,
    ease:"power4.out"
})
