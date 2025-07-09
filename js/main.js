// Pastikan kode ini ada di dalam file JavaScript Anda

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen navbar dari HTML
  const navbar = document.querySelector(".navbar");

  // Tambahkan 'event listener' untuk mendeteksi scroll pada window
  window.addEventListener("scroll", () => {
    // Cek jika posisi scroll vertikal lebih besar dari 50 pixel
    if (window.scrollY > 50) {
      // Jika ya, tambahkan class 'scrolled' ke navbar
      navbar.classList.add("scrolled");
    } else {
      // Jika tidak (kembali ke atas), hapus class 'scrolled'
      navbar.classList.remove("scrolled");
    }
  });

  // (Kode Anda yang lain untuk menu hamburger dan slider bisa diletakkan di sini)
});
document.addEventListener("DOMContentLoaded", function () {
  // =========== Navbar Interactivity ===========
  const navbar = document.querySelector(".navbar");
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector(".nav-menu");

  // Solid background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Hamburger menu toggle
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // =========== Product Slider Logic ===========
  const productData = [
    {
      id: 1,
      title: "Shisha Charcoal",
      description:
        "Hookah charcoal briquette is made of all-natural materials: coconut hell charcoal. Natural Coconut and a small portion of natural starch as binder. We carry out the process of mixing all these ingredients, we do heating until 48 hours to make quality hookah charcoal.",
      image: "images/shisha-cube.png",
    },
    {
      id: 2,
      title: "Pillow Briquette",
      description:
        "Ideal for barbecue and grilling, our pillow-shaped briquettes provide long-lasting, even heat. Made from premium coconut shell charcoal, they ensure your food is cooked perfectly with a natural, smoky flavor.",
      image: "images/pillow.png",
    },
    {
      id: 3,
      title: "Hexagonal Briquette",
      description:
        "Our hexagonal briquettes are designed for high-heat applications and extended burn times. The unique shape allows for better airflow, making them perfect for professional kitchens and serious grill masters.",
      image: "images/hexagonal.png",
    },
    {
      id: 4,
      title: "Cylinder Briquette",
      description:
        "These cylindrical briquettes are easy to light and provide consistent heat. They are a versatile option for both shisha and small grills, offering a clean and smoke-free burning experience.",
      image: "images/cylinder.png",
    },
    {
      id: 5,
      title: "Cube Briquette",
      description:
        "The classic cube shape is perfect for shisha and hookah enthusiasts. Our cubes are dense, burn for a long time with minimal ash, and do not interfere with the flavor of your shisha.",
      image: "images/cube-stack.png",
    },
  ];

  const sliderTrack = document.querySelector(".slider-track");
  const prevBtn = document.querySelector(".slider-arrow.prev");
  const nextBtn = document.querySelector(".slider-arrow.next");
  const activeProductImg = document.getElementById("active-product-img");
  const activeProductTitle = document.getElementById("active-product-title");
  const activeProductDesc = document.getElementById(
    "active-product-description"
  );

  let currentIndex = 0;

  // Load products into slider
  function loadProducts() {
    productData.forEach((product) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
      slide.innerHTML = `<img src="${product.image}" alt="${product.title}">`;
      sliderTrack.appendChild(slide);
    });
  }

  // Update product display and slider active state
  function updateProductDisplay(index) {
    // Update main display content
    const product = productData[index];
    activeProductImg.src = product.image;
    activeProductTitle.textContent = product.title;
    activeProductDesc.textContent = product.description;

    // Center the active slide
    const trackWidth = sliderTrack.clientWidth;
    const slideWidth = sliderTrack.querySelector(".slide").clientWidth;
    const offset = trackWidth / 2 - slideWidth / 2 - index * slideWidth;
    sliderTrack.style.transform = `translateX(${offset}px)`;

    // Update active class on slides
    const allSlides = document.querySelectorAll(".slide");
    allSlides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  // Event Listeners for slider arrows
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % productData.length;
    updateProductDisplay(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + productData.length) % productData.length;
    updateProductDisplay(currentIndex);
  });

  // Initialize slider
  loadProducts();
  updateProductDisplay(currentIndex);
});

// Letakkan kode ini di dalam event listener DOMContentLoaded

// =========== Modal (Popup) Logic ===========
const modalOverlay = document.getElementById("contact-modal");
const openModalButtons = document.querySelectorAll(".open-modal-btn");
const closeModalButton = document.querySelector(".modal-close-btn");

// Function to open the modal
const openModal = () => {
  modalOverlay.classList.add("show");
};

// Function to close the modal
const closeModal = () => {
  modalOverlay.classList.remove("show");
};

// Add event listener to all "Request Access" buttons
openModalButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    openModal();
  });
});

// Add event listener to the close button
if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModal);
}

// Add event listener to the overlay to close modal when clicking outside
if (modalOverlay) {
  modalOverlay.addEventListener("click", (event) => {
    // Close modal only if the overlay itself is clicked, not the content
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
}

// Optional: Close modal with the 'Escape' key
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalOverlay.classList.contains("show")) {
    closeModal();
  }
});
