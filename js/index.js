const hamburger = document.getElementById("open-menu");
const hero = document.getElementById("hero");
const menu = document.getElementById("menu-small-screen");
const closeBtn = document.getElementById("close-menu");

hamburger.addEventListener("click", () => {
    gsap.to(hamburger, { opacity: 0, duration: 1 });
    gsap.to(hero, { filter: "brightness(10%)", duration: 1 });
    gsap.to(menu, { display: "block" });
    gsap.from(".ss-nav-link", {
        x: 50,
        duration: 0.5,
        stagger: 0.2,
        opacity: 0,
        delay: 0.1,
        ease: "expo.easeOut",
    });
});

closeBtn.addEventListener("click", () => {
    gsap.to(hamburger, { opacity: 1, duration: 1 });
    gsap.to(hero, { filter: "brightness(100%)", duration: 1 });
    gsap.to(menu, { display: "none", duration: 0.1 });
});
