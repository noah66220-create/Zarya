/* ==========================================================
   ZARYA
   SCRIPT.JS
   PARTIE 1
========================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(8,8,15,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(10,10,20,.65)";
        navbar.style.boxShadow = "none";

    }

});

/* ==========================================================
   SCROLL FLUIDE
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================================
   HERO
========================================================== */

window.addEventListener("load",()=>{

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";

    hero.style.transform = "translateY(60px)";

    setTimeout(()=>{

        hero.style.transition = ".8s";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0px)";

    },200);

});

/* ==========================================================
   BOUTONS
========================================================== */

const download = document.getElementById("download-btn");

if(download){

download.onclick=()=>{

alert("Le Launcher sera bientôt disponible.");

};

}

const games = document.getElementById("games-btn");

if(games){

games.onclick=()=>{

document.querySelector("#games").scrollIntoView({

behavior:"smooth"

});

};

}
/* ==========================================================
   APPARITION AU DÉFILEMENT
========================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "0.8s";

    observer.observe(section);

});

/* ==========================================================
   ANIMATION DES CARTES
========================================================== */

document.querySelectorAll(".game-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(108,92,255,.18),
            #181824 70%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#181824";

    });

});

/* ==========================================================
   COMPTEURS ANIMÉS
========================================================== */

function animateCounter(element, target) {

    let current = 0;

    const increment = target / 100;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent = Math.floor(current);

    }, 20);

}

document.querySelectorAll(".stat h2").forEach(stat => {

    const value = parseInt(stat.textContent.replace(/\D/g, ""));

    if (!isNaN(value)) {

        animateCounter(stat, value);

    }

});
