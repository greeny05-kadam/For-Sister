document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    const buttons = document.querySelectorAll(".buttons button");
    const photo = document.querySelector(".photo-section img");
  
    // Fade-in animation for heading
    h1.style.opacity = 0;
    h1.style.transition = "opacity 2s ease-in";
    setTimeout(() => {
      h1.style.opacity = 1;
    }, 500);
  
    // Bounce animation for photo
    photo.style.transform = "scale(0.9)";
    photo.style.transition = "transform 1s ease-out";
    setTimeout(() => {
      photo.style.transform = "scale(1)";
    }, 1000);
  
    // Button animations on click
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.2s ease";
        setTimeout(() => {
          button.style.transform = "scale(1)";
        }, 200);
      });
    });
  })

  // Reveal on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    }
  }

  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const allOptions = document.querySelectorAll('.option-card');
  
    allOptions.forEach(option => {
      option.addEventListener('click', () => {
        const parent = option.parentElement;
        const siblings = parent.querySelectorAll('.option-card');
        siblings.forEach(sib => sib.classList.remove('selected'));
        option.classList.add('selected');
      });
    });
  });

  



  
  
  window.addEventListener('scroll', revealOnScroll);
  