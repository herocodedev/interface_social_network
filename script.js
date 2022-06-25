// SIDEBAR
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuItems = $$(".menu-item");
const messagesNotification = $("#messages-notification");
const messages = $(".messages");
const messageSearch = $("#message-search");
const theme = $("#theme");
const themeModal = $(".customize-theme");
const fontSizes = $$(".choose-size span");
const root = $(":root");
const colors = $$(".choose-color span");
const backgrounds = $$(".choose-bg div");

const form = $("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove Active
    $(".menu-item.active").classList.remove("active");
    // Add Active
    item.classList.add("active");

    if (item.id !== "notifications") {
      $(".notification-popup").style.display = "none";
    } else {
      $(".notification-popup").style.display = "block";
      console.log($("#notifications"));

      $("#notifications .notification-count").style.display = "none";
    }
  });
});

// Search
messageSearch.addEventListener("keyup", (e) => {
  const value = e.target.value.toUpperCase();
  console.log(value);
  $$(".message").forEach((chat) => {
    const name = chat.querySelector("h5").textContent.toUpperCase();
    if (name.includes(value)) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
});

// Higlight message
messagesNotification.addEventListener("click", (e) => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// THEME CUSTOMIZE
theme.addEventListener("click", () => {
  themeModal.style.display = "grid";
});

themeModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("customize-theme"))
    themeModal.style.display = "none";
});

// CHANGE FONTS
fontSizes.forEach((size) => {
  let fontSize;

  size.addEventListener("click", () => {
    $(".customize-theme .font-size .choose-size span.active").classList.remove(
      "active"
    );
    size.classList.add("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      console.log(123);
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    }
  });

  // Change font size root html
  document.querySelector("html").style.fontSize = fontSize;
});

colors.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    $(".customize-theme .color .choose-color span.active").classList.remove(
      "active"
    );
    color.classList.add("active");
    if (color.classList.contains("color-1")) {
      primary = 252;
    } else if (color.classList.contains("color-2")) {
      primary = 52;
    } else if (color.classList.contains("color-3")) {
      primary = 352;
    } else if (color.classList.contains("color-4")) {
      primary = 152;
    } else if (color.classList.contains("color-5")) {
      primary = 202;
    }

    root.style.setProperty("--first-params-color", primary);
  });
});

// CHANGE BACKGROUND
backgrounds.forEach((bg) => {
  let darkColorLightness;
  let whiteColorLightness;
  let lightColorLightness;
  console.log(bg);
  bg.addEventListener("click", (e) => {
    if (bg.classList.contains("bg-1")) {
      darkColorLightness = "17%";
      whiteColorLightness = "100%";
      lightColorLightness = "95%";
    } else if (bg.classList.contains("bg-2")) {
      darkColorLightness = "95%";
      whiteColorLightness = "20%";
      lightColorLightness = "15%";
    }
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
  });
});
