/* =====================================================
   LUMÉA BEAUTY STUDIO
   JAVASCRIPT
===================================================== */


/* ================= LOADER ================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .getElementById("loader")
      .classList.add("hide");

  }, 700);

});


/* ================= HEADER ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("active");

});


document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});


/* ================= REVEAL ANIMATION ================= */

const revealElements =
  document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("revealed");

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  observer.observe(element);

});


/* ================= COUNTERS ================= */

let counterStarted = false;

const statsSection =
  document.querySelector(".stats");

const counterObserver =
  new IntersectionObserver(
    entries => {

      if (
        entries[0].isIntersecting &&
        !counterStarted
      ) {

        counterStarted = true;

        document
          .querySelectorAll("[data-count]")
          .forEach(counter => {

            const target =
              Number(counter.dataset.count);

            let current = 0;

            const increment =
              Math.max(1, Math.ceil(target / 60));

            const timer =
              setInterval(() => {

                current += increment;

                if (current >= target) {

                  current = target;

                  clearInterval(timer);

                }

                counter.textContent = current;

              }, 25);

          });

      }

    },
    {
      threshold: .4
    }
  );


counterObserver.observe(statsSection);


/* ================= FAQ ================= */

const faqQuestions =
  document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const item =
      question.parentElement;

    const answer =
      item.querySelector(".faq-answer");


    document
      .querySelectorAll(".faq-item")
      .forEach(other => {

        if (other !== item) {

          other.classList.remove("active");

          other
            .querySelector(".faq-answer")
            .style.maxHeight = null;

        }

      });


    item.classList.toggle("active");


    if (item.classList.contains("active")) {

      answer.style.maxHeight =
        answer.scrollHeight + "px";

    } else {

      answer.style.maxHeight = null;

    }

  });

});


/* ================= BOOKING MODAL ================= */

const bookingModal =
  document.getElementById("bookingModal");


function openBooking() {

  bookingModal.classList.add("active");

  document.body.style.overflow = "hidden";

}


function closeBooking() {

  bookingModal.classList.remove("active");

  document.body.style.overflow = "";

}


bookingModal.addEventListener("click", event => {

  if (event.target === bookingModal) {

    closeBooking();

  }

});


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeBooking();

  }

});


/* ================= BOOKING FORM ================= */

const bookingForm =
  document.getElementById("bookingForm");


bookingForm.addEventListener("submit", event => {

  event.preventDefault();

  closeBooking();

  showToast(
    "Appointment request received ✦"
  );

  bookingForm.reset();

});


/* ================= TOAST ================= */

function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");


  setTimeout(() => {

    toast.classList.remove("show");

  }, 2800);

}


function showMessage() {

  showToast(
    "This is a demo website interaction ✦"
  );

}


/* ================= REVIEWS ================= */

const reviews = [

  {
    text:
      "The experience feels completely different from a regular salon. Everything feels thoughtful, calm and beautifully personal.",
    name: "Aanya",
    initial: "A"
  },

  {
    text:
      "I loved how the entire experience felt premium without feeling uncomfortable. The attention to detail was beautiful.",
    name: "Riya",
    initial: "R"
  },

  {
    text:
      "From the consultation to the final look, everything felt personalised. It is exactly the kind of beauty experience I wanted.",
    name: "Meera",
    initial: "M"
  }

];


let currentReview = 0;


function updateReview() {

  const review =
    reviews[currentReview];

  document.getElementById("quote")
    .textContent = review.text;

  document.getElementById("reviewName")
    .textContent = review.name;

  document.querySelector(".review-avatar")
    .textContent = review.initial;

}


function nextReview() {

  currentReview++;

  if (currentReview >= reviews.length) {
    currentReview = 0;
  }

  updateReview();

}


function previousReview() {

  currentReview--;

  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }

  updateReview();

}


/* ================= ESCAPE LINKS ================= */

document.querySelectorAll('a[href="#"]').forEach(link => {

  link.addEventListener("click", event => {

    event.preventDefault();

  });

});
