// Script ini untuk efek tambahan dan interaksi pengguna

// Ketika form disubmit, munculkan alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah reload halaman
  alert('Terima kasih! Pesan Anda telah dikirim.');
  this.reset(); // Reset form setelah kirim
});

// Efek scroll navbar berubah transparansi
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});
// Fungsi untuk menampilkan beberapa pesan
function showMessages() {
  alert("Halo, Selamat datang di website saya!");
  alert("Nama saya Siti Rahmah, senang bertemu denganmu 😊");
  alert("Ayo mulai menjelajahi website!");}

  const texts = ["Mahasiswa Informatika", "Web Developer", "UI/UX Enthusiast"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  let isDeleting = false;
  let speed = 100;

  (function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];

    if (isDeleting) {
      letter = currentText.slice(0, --index);
    } else {
      letter = currentText.slice(0, ++index);
    }

    document.getElementById("typing-text").textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
      isDeleting = true;
      speed = 2000;
    } else if (isDeleting && letter.length === 0) {
      isDeleting = false;
      count++;
      speed = 200;
    } else {
      speed = isDeleting ? 50 : 100;
    }

    setTimeout(type, speed);
  })();

 const slides = [
  {
    img: "img/Rain.jpg",
    title: "Rain",
    desc: "Hujan adalah simbol keindahan dalam kesunyian, membasuh dunia dan menyuburkan harapan, mengajarkan bahwa dalam setiap kejatuhan ada awal kehidupan baru."
  },
  {
    img: "img/Laut.jpeg",
    title: "Sea",
    desc: "Laut adalah cerminan kehidupan yang penuh ketidakpastian, menyimpan kedamaian dan kekuatan dalam kedalamannya, mengajarkan bahwa meski menghadapi ombak, kita harus terus berlayar menuju tujuan."
  },
  {
    img: "img/sunset.jpeg",
    title: "Sunset",
    desc: "Sunset adalah simbol keindahan dalam perpisahan, mengajarkan bahwa setiap akhir membawa kedamaian dan kesempatan untuk memulai sesuatu yang baru di esok hari."
  },
  {
    img: "img/Dendelion.jpeg",
    title: "Dendelion",
    desc: "Dandelion adalah simbol kebebasan dan keberanian, meski terombang-ambing angin, ia tetap melepaskan diri dan menyebarkan harapan di setiap tempat yang dilalui."
  },
  {
    img: "img/Matcha.webp",
    title: "Matcha",
    desc: "Matcha melambangkan keseimbangan dan ketenangan, mengajarkan bahwa dalam keheningan dan proses yang mendalam, kita dapat menemukan energi dan kedamaian yang sejati."
  },
  {
    img: "img/Tiramisu cake.jpg",
    title: "Tiramisu Cake",
    desc: "Tiramisu cake adalah simbol kelezatan dalam kesederhanaan, mengajarkan bahwa kebahagiaan sering ditemukan dalam lapisan-lapisan kehidupan yang saling melengkapi."
  },
  {
    img: "img/jepang.jpg",
    title: "Jepang",
    desc: "Jepang mengajarkan bahwa kehidupan adalah tentang menghargai keindahan dalam kesederhanaan, menemukan kedamaian dalam ketidaksempurnaan, dan hidup sepenuhnya di setiap momen yang ada."
  },
  {
    img: "img/enhypen.jpg",
    title: "GroupBand Korea ENHYPEN",
    desc: "ENHYPEN menginspirasi dengan mengajarkan bahwa setiap impian, meski penuh rintangan, layak diperjuangkan. Mereka memotivasi seorang anak perempuan untuk percaya pada dirinya, berani mengejar tujuan, dan selalu bangkit meski jatuh, karena setiap langkah adalah bagian dari perjalanan menuju kekuatan sejati."
  },
];

function showSlide(index) {
  const slide = slides[index];
  document.getElementById("slideshow-image").src = slide.img;
  document.getElementById("slideshow-title").textContent = slide.title;
  document.getElementById("slideshow-description").textContent = slide.desc;
}

  const skillItems = document.querySelectorAll('.skill-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target.querySelector('.skill-progress');
        const percent = entry.target.getAttribute('data-percent');
        progress.style.width = percent + '%';
        observer.unobserve(entry.target); // animasi 1x saja
      }
    });
  }, { threshold: 0.5 });

  skillItems.forEach(item => {
    observer.observe(item);
  });

  const artikelCards = document.querySelectorAll('.artikel-card');

function checkVisible() {
  artikelCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisible);
window.addEventListener('load', checkVisible);


  function flipCard(element) {
    const cardInner = element.parentElement;
    cardInner.classList.add("flipped");

    // Setelah 3 detik, balik ke sisi depan
    setTimeout(() => {
      cardInner.classList.remove("flipped");
    }, 2000); // 2000 ms = 2 detik
  }

  function animateOnScroll() {
  const items = document.querySelectorAll("[data-animate]");
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const delay = item.dataset.delay || 0;

    if (itemTop < triggerBottom && !item.classList.contains("animate")) {
      setTimeout(() => {
        item.classList.add("animate");
      }, delay);
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);





