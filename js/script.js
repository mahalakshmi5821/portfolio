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
  

// particles 


  const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 1000;

bounceElements = document.querySelectorAll(".bounce");

class Particle {
    constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.lifetimeSpeed = Math.random() / 10 + 0.01;
        this.glowSize = Math.random() * 20 + 10; // Random glow size
    }
    update() {
        if (this.size > this.lifetimeSpeed) {
            this.size -= this.lifetimeSpeed;
        } else {
            this.size = 0;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      
        bounceElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (this.x > rect.left && this.x < rect.right && 
                this.y > rect.top && this.y < rect.bottom) {
                this.speedX *= -1;
                this.speedY *= -1;
            }
        });
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.glowSize;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow blur after drawing
    }
}

function init() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

canvas.addEventListener("mousemove", (event) => {
    let howMuch = 5;
    for (let i = 0; i <= howMuch; i++) {
      particles.push(new Particle(event.clientX, event.clientY));
    }
    if (particles.length > particleCount * 2) {
        particles.splice(0, 10);
    }
});

init();
animate();

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

  