const carousel = document.getElementById("carousel");
const scrollStep = 420; // card width + gap
let autoScroll;

function startAutoScroll() {
    autoScroll = setInterval(() => {
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
            carousel.scrollTo({ left: 0, behavior: "smooth" }); // reset to start
        } else {
            carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
    }, 2000); // scroll every 3 seconds
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

// Start auto-scroll on load
startAutoScroll();

// Pause when hovering, resume when leaving
carousel.addEventListener("mouseenter", stopAutoScroll);
carousel.addEventListener("mouseleave", startAutoScroll);

document.querySelectorAll(".faq-item button").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const isOpen = button.classList.contains("active");

        // Close all other answers
        document.querySelectorAll(".faq-item .answer").forEach(ans => ans.style.display = "none");
        document.querySelectorAll(".faq-item button").forEach(btn => btn.classList.remove("active"));

        // Toggle clicked one
        if (!isOpen) {
            answer.style.display = "block";
            button.classList.add("active");
        }
    });
});

const searchInput = document.getElementById("searchInput");
const offerCards = document.querySelectorAll(".offer-card");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  offerCards.forEach(card => {
    const cardText = card.innerText.toLowerCase();

    if (cardText.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

  const modal = document.getElementById("couponModal");
  const couponImage = document.getElementById("couponImage");
  const closeModal = document.getElementById("closeModal");

  // Open modal on button click
  document.querySelectorAll(".download-btn").forEach(button => {
    button.addEventListener("click", () => {
      const imgSrc = button.getAttribute("data-img");
      couponImage.src = imgSrc; // Set image dynamically
      modal.classList.remove("hidden");
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });


  // faq toggle
  const faqButtons = document.querySelectorAll(".faq-item button");
    faqButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle("active");
      });
    });


 // Feedback Section

const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.feedback-card');
const totalCards = cards.length;
let index = 0;
 
function moveCarousel() {
  index += 2; // move 2 cards at once
  if (index >= totalCards) index = 0;
  track.style.transform = `translateX(-${index * 50}%)`;
}
 
setInterval(moveCarousel, 4000); // change every 4s