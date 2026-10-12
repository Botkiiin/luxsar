// LUXSAR website demo. Add the real WhatsApp number before publishing.
const WHATSAPP_NUMBER = ""; // International format without +, e.g. 31612345678

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Sluit menu" : "Open menu");
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

// Prevent choosing a date in the past.
const dateInput = document.getElementById("bookingDate");
if (dateInput) {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = localDate;
}

// Preselect a service when clicking "Bekijk & boek".
document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const map = {
      wash: "Premium hand wash",
      interior: "Interieur detailing",
      polish: "Lakcorrectie & polijsten",
      ceramic: "Keramische coating",
      full: "Full detailing",
      leather: "Leerreiniging"
    };
    const select = document.getElementById("serviceSelect");
    if (select) select.value = map[link.dataset.service] || "";
  });
});

// Demo-only form: no booking is transmitted or stored.
document.getElementById("bookingForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const message = document.getElementById("formMessage");
  message.hidden = false;
  message.textContent = `Bedankt ${data.get("name")}! Dit is een demo: je aanvraag is nog niet verzonden. Koppel eerst een boekingssysteem of formulierbackend.`;
  message.scrollIntoView({ behavior: "smooth", block: "center" });
});

// WhatsApp stays visible on every page. Until a number is configured, explain the setup.
const whatsappButton = document.getElementById("whatsappButton");
const whatsappText = "Hallo! Ik wil graag meer informatie over een behandeling bij LUXSAR Premium Auto Detailing.";
if (WHATSAPP_NUMBER) {
  whatsappButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
} else {
  whatsappButton.href = "https://wa.me/?text=" + encodeURIComponent(whatsappText);
  whatsappButton.addEventListener("click", event => {
    event.preventDefault();
    alert("Vul eerst het echte bedrijfsnummer in bovenaan script.js bij WHATSAPP_NUMBER.");
  });
}
