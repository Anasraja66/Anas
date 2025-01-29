// scripts.js
// Add custom JavaScript here if needed in the future
// JavaScript to manage focus on cards
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          navbar.classList.add("shadow-lg");
      } else {
          navbar.classList.remove("shadow-lg");
      }
  });
});
document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.service-card').forEach((otherCard) => {
            otherCard.style.transform = 'scale(0.9)';
            otherCard.style.zIndex = '0';
        });
        card.style.transform = 'scale(1.1) translateY(-10px)';
        card.style.zIndex = '10';
    });
});

// JavaScript for interactive advantage blocks
document.querySelectorAll('.advantage-card').forEach((card) => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.advantage-card').forEach((otherCard) => {
            otherCard.style.transform = 'scale(0.95)';
            otherCard.style.zIndex = '0';
        });
        card.style.transform = 'scale(1.1) translateY(-10px)';
        card.style.zIndex = '10';
    });
});

function showPopup(card) {
  // Hide any existing popup
  const existingPopup = document.querySelector(".popup");
  if (existingPopup) existingPopup.remove();

  // Clone the selected card for the popup
  const popup = card.cloneNode(true);
  popup.classList.add("popup");

  // Add close button to the popup
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "Close";
  closeButton.style.cssText =
    "position:absolute; top:10px; right:10px; background:#007bff; color:white; border:none; padding:5px 10px; cursor:pointer; border-radius:5px;";
  closeButton.onclick = () => popup.remove();
  popup.appendChild(closeButton);

  // Show the popup
  document.body.appendChild(popup);
  popup.style.display = "block";
}
function showPopup(card) {
    // Hide any existing popup
    const existingPopup = document.querySelector(".popup");
    if (existingPopup) existingPopup.remove();
  
    // Clone the selected card for the popup
    const popup = card.cloneNode(true);
    popup.classList.add("popup");
  
    // Add close button to the popup
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    closeButton.style.cssText =
      "position:absolute; top:10px; right:10px; background:#007bff; color:white; border:none; padding:5px 10px; cursor:pointer; border-radius:5px;";
    closeButton.onclick = () => popup.remove();
    popup.appendChild(closeButton);
  
    // Show the popup
    document.body.appendChild(popup);
    popup.style.display = "block";
  }
  // Function to handle the popup effect
function showPopup(selectedCard) {
    // Remove the 'active' class from all service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => card.classList.remove('active'));
  
    // Add the 'active' class to the clicked card
    selectedCard.classList.add('active');
  }
// Select all clickable logos
const logos = document.querySelectorAll(".clickable-logo");
const modalLogo = document.getElementById("modalLogo");

// Add click event listener to each logo
logos.forEach(logo => {
  logo.addEventListener("click", function () {
    const logoSrc = this.getAttribute("data-logo");
    modalLogo.src = logoSrc; // Update modal image source
  });
});
  
const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar() {
    calendarDays.innerHTML = "";
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthYear.innerText = `${currentDate.toLocaleString("default", { month: "long" })} ${year}`;

    const firstDay = new Date(year, month, 1).getDay() || 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i < firstDay; i++) {
        calendarDays.innerHTML += `<div class="col"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.className = "col calendar-day";
        dayElement.innerText = day;
        dayElement.addEventListener("click", () => {
            document.querySelectorAll(".calendar-day").forEach((el) => el.classList.remove("selected-day"));
            dayElement.classList.add("selected-day");
        });
        calendarDays.appendChild(dayElement);
    }
}

prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".stat-number");

  const animateCounters = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const counter = entry.target;
              const target = parseInt(counter.getAttribute("data-target"), 10);
              let current = 20; // Start from 20
              const increment = Math.ceil(target / 100); // Adjust speed dynamically
              const duration = 2000; // Animation duration in milliseconds
              const stepTime = Math.floor(duration / (target / increment));

              const updateCounter = () => {
                  current += increment;
                  counter.textContent = current > target ? target : current;
                  if (current < target) {
                      setTimeout(updateCounter, stepTime);
                  }
              };

              updateCounter();
              observer.unobserve(counter); // Stop observing after animation completes
          }
      });
  };

  const observer = new IntersectionObserver(animateCounters, { threshold: 0.5 });

  counters.forEach(counter => {
      observer.observe(counter);
  });
});

