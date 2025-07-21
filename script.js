
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll('.column').forEach((column, index) => {
//     gsap.to(column.querySelectorAll('img'), {
//       y: -30,
//       duration: 0.5, // Much faster animation
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//       stagger: {
//         each: 0.1,
//         from: "start",
//         amount: 0.5
//       },
//       delay: index * 0.2
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

const isMobile = window.innerWidth >= 768;
const ynew = isMobile ? 320 : 480;
document.querySelectorAll(".col2, .col7").forEach((column) => {
  const img1 = column.querySelector(".center1");
  const img2 = column.querySelector(".center2");
  const img3 = column.querySelector(".center3");

  if (!img1 || !img2 || !img3) return;

  gsap.set([img1, img2, img3], { y: 0 });

  // Верхнее изображение — вниз
  gsap.to(img1, {
    y: ynew,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.2,
  });

  // Нижнее изображение — вверх
  gsap.to(img3, {
    y: -ynew,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.2,
  });

  // Центральное — лёгкая пульсация
gsap.to(img2, {
  rotationY: 360,
  duration: 3,
  ease: "none",
  repeat: -1,
  transformOrigin: "center center",
});

});





document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power2.out" });
  });
  img.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.in" });
  });
});





const yDistance = isMobile ? 300 : 500;

document.querySelectorAll(".col4, .col5").forEach((column) => {
  const topImg = column.querySelector(".img-top");
  const bottomImg = column.querySelector(".img-bottom");

  if (!topImg || !bottomImg) return;

  gsap.set([topImg, bottomImg], { y: 0 });

  gsap.to(topImg, {
    y: yDistance,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.2,
  });

  gsap.to(bottomImg, {
    y: -yDistance,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.2,
  });
});

  // 🔁 Анимация для колонок с 4 картинками
  const columnsWith4Images = [".col1", ".col3", ".col6", ".col8"];

  columnsWith4Images.forEach(selector => {
    const column = document.querySelector(selector);
    if (!column) return;

    const imgs = column.querySelectorAll("img");
    if (imgs.length < 4) return;

    const [img1, img2, img3, img4] = imgs;

    gsap.set([img1, img2, img3, img4], { y: 0 });

    gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power1.inOut", duration: 2 } })
      .to(img1, { yPercent: 80}, 0)
      .to(img4, { yPercent: -80 }, 0)
      .to(img2, { yPercent: 200 }, 0.1)
      .to(img3, { yPercent: -200 }, 0.1);
  });
});


window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 5000);
});
