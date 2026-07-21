// ===========================
// ZARYA - SCRIPT PRINCIPAL
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Zarya démarré !");

    // -------------------------
    // Navbar qui change au scroll
    // -------------------------
    const navbar = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // -------------------------
    // Apparition des sections
    // -------------------------
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{
        threshold:0.2
    });

    sections.forEach(section=>{
        observer.observe(section);
    });

    // -------------------------
    // Défilement fluide
    // -------------------------
    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const target=document.querySelector(link.getAttribute("href"));

            if(target){
                target.scrollIntoView({
                    behavior:"smooth"
                });
            }

        });

    });

    // -------------------------
    // Bouton Télécharger
    // -------------------------
    const download=document.getElementById("download-btn");

    if(download){

        download.addEventListener("click",()=>{

            window.location.href="download.html";

        });

    }

    // -------------------------
    // Bouton Explorer
    // -------------------------
    const games=document.getElementById("games-btn");

    if(games){

        games.addEventListener("click",()=>{

            window.location.href="games.html";

        });

    }

    // -------------------------
    // Compteur Zayux
    // -------------------------
    let zayux=100;

    const counter=document.getElementById("zayux");

    if(counter){

        counter.textContent=zayux;

    }

    // -------------------------
    // Retour en haut
    // -------------------------
    const topButton=document.getElementById("top");

    if(topButton){

        window.addEventListener("scroll",()=>{

            if(window.scrollY>500){

                topButton.style.display="block";

            }else{

                topButton.style.display="none";

            }

        });

        topButton.addEventListener("click",()=>{

            window.scrollTo({

                top:0,
                behavior:"smooth"

            });

        });

    }

    // -------------------------
    // Heure
    // -------------------------
    const clock=document.getElementById("clock");

    if(clock){

        setInterval(()=>{

            const d=new Date();

            clock.textContent=d.toLocaleTimeString();

        },1000);

    }

    // -------------------------
    // Notification bienvenue
    // -------------------------
    setTimeout(()=>{

        alert("Bienvenue sur Zarya !");

    },1000);

});
