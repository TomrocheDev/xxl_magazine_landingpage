const screenWidth = window.screen.width;
const tl = gsap.timeline();

// animate background
gsap.from(".background-layer", {
    delay: 2,
    duration: 1.5,
    stagger: 0.2,
    ease: "expo.inOut",
    x: screenWidth,
});

// animate navbar
gsap.from(".nav-divider", {
    x: -screenWidth,
    delay: 3.5,
    ease: "expo.easeIn",
    opacity: 0,
});
gsap.from(".nav-item", { delay: 3, x: -20, opacity: 0, stagger: 0.1 });

// Animate headline and background images
gsap.from(".headline", { opacity: 0, delay: 4, x: -20, ease: "expo.easeOut", duration: 1.5 });
gsap.from(".image", {
    opacity: 0,
    delay: 4,
    x: 20,
    ease: "expo.easeOut",
    duration: 1.5,
    stagger: 0.2,
});
gsap.from(".headline--second", {
    opacity: 0,
    delay: 5,
    x: 20,
    ease: "expo.easeOut",
    duration: 1.5,
});
