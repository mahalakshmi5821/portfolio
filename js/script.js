//Scroll animation 
gsap.utils.toArray(".slick-nav").forEach((a, i) => {
a.clickElem = document.querySelector(a.hash);
a.offset = a.clickElem.offsetTop;
a.height = a.clickElem.offsetHeight;
a.addEventListener("click", e => {
e.preventDefault();
gsap.to(window, {scrollTo: a.offset + a.height * (i + 1)})
});
});

const tl = gsap.timeline({
scrollTrigger: {
trigger: ".scroll-trigger",
duration: 1,
pin: true,
scrub: true,
start: "top top",
end: "+=3000",
toggleActions: "restart pause resume pause"
}
});

// Slides Scroll Animation
tl.from(
"[data-slide='1'] ", {
  opacity: 1,
  duration: 1,
  stagger: 0
},
"+=1"
)

.to(
"[data-slide='1'] ", {
  opacity: 0,
  duration: 1,
  stagger: 0,
  ease: "power4"
},
"+=10"
)

.from(
"[data-slide='2'] ", {
  opacity: 0,
  duration: 1,
  stagger: 0
},
"+=1"
)
.to(
"[data-slide='2']", {
  opacity: 0,
  duration: 1,
  stagger: 0,
  ease: "power4"
},
"+=10"
)

.from(
"[data-slide='3']", {
  opacity: 0,
  duration: 1,
  stagger: 0
},
"+=1"
)
.to(
"[data-slide='3']", {
  opacity: 0,
  duration: 1,
  stagger: 0,
  ease: "power4"
},
"+=10"
)

.from(
"[data-slide='4']", {
  opacity: 0,
  duration: 1,
  stagger: 0
},
"+=1"
)
.to(
"[data-slide='4'] ", {
  opacity: 0,
  duration: 1,
  stagger: 0,
  ease: "power4"
},
"+=10"
)

.from(
"[data-slide='5']", {
  opacity: 0,
  duration: 1,
  stagger: 0
},
"+=1"
)
.to(
"[data-slide='5']", {
  opacity: 0,
  duration: 1,
  stagger: 0,
  ease: "power4"
},
"+=10"
)

.from(
"[data-slide='6']", {
  opacity: 0,
  duration: 1,
  stagger: 0
},
"+=1"
)
.to(
"[data-slide='6']", {
  opacity: 0,
  duration: 1,
  stagger: 0,
  ease: "power4"
},
"+=10"
)

.from(
"[data-slide='7']", {
  opacity: 0,
  duration: 1,
  stagger: 0
},
"+=1"
)
.to(
"[data-slide='7']", {
  opacity: 1,
  duration: 1,
  stagger: 0,
  ease: "power4"
},
"+=10"
)

// accordian script 

  $(document).ready(function () {
    $(".accordion-toggle").hover(function () {
      var target = $(this).attr("data-target");
  
      // Close all other panels
      $(".panel-collapse").not(target).collapse("hide");
  
      // Open the hovered panel
      $(target).collapse("show");
    });
  });

  //cursor 

  let outline = document.querySelector('.outline');
  let cursor = document.querySelector('.cursor');
  let a = document.querySelectorAll('a');
  
  function updateCursor(x, y) {
      outline.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%) )`;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
  }
  
  // Mouse Move Support
  document.addEventListener('mousemove', function (e) {
      updateCursor(e.clientX, e.clientY);
  });
  
  // Touch Move Support
  document.addEventListener('touchmove', function (e) {
      let touch = e.touches[0]; // Get the first touch point
      updateCursor(touch.clientX, touch.clientY);
  }, { passive: true });
  
  // Hover Effects (Only for Desktop)
  a.forEach(item => {
      item.addEventListener('mouseover', () => {
          outline.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
          outline.classList.remove('hover');
      });
  });

//burger menu

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Close menu when clicking on any menu item
document.querySelectorAll("#nav a").forEach(item => {
  item.addEventListener("click", () => {
    menuOnClick();
  });
});


new WOW().init();

  
