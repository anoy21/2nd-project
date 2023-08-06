const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { pageX, pageY } = event;
  
  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 3000, fill: "forwards" });
};



function toggleNav() {
  const slideDownDiv = document.getElementById("slide-down-div");
  const body = document.querySelector("body");
  const navState = body.getAttribute("data-nav");
  const navbutton = document.getElementById("nav-toggle");

  if (navState === "false") {
    slideDownDiv.style.height = "100vh";
    body.setAttribute("data-nav", "true");
    navbutton.style.zIndex = "4"; 
    body.setAttribute("data-nav" , "true");
    body.classList.add("scroll-lock");
  } else {
    slideDownDiv.style.height = "0";
    body.setAttribute("data-nav", "false");
    navbutton.style.zIndex = "4";
    body.setAttribute("data-nav" , "false");
    body.classList.remove("scroll-lock") ;
  }
};


// --GSAP / SCROLLTRIGGER--

gsap.registerPlugin(ScrollTrigger);

TweenLite.to(".pin-wrap", {
  scrollTrigger: {
    trigger: ".pin-wrap",
    toggleActions: "play reverse play reverse",
    markers: true,
    end: "1150px 20%",
    start: "800px 20%",
  },
  y: 200, 
  duration: 4.5,
  ease: "back.inOut(1.7)",
}); 