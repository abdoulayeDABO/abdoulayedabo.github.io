(function () {
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function getStoredTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      return;
    }
  }

  function getInitialTheme() {
    var storedTheme = getStoredTheme();
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    return media && media.matches ? "dark" : "light";
  }

  function updateThemeColor(isDark) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", isDark ? "#0d0d0d" : "#ffffff");
    }
  }

  function updateToggle(button) {
    var isDark = root.getAttribute("data-theme") === "dark";
    var icon = button.querySelector("i");
    var label = isDark ? button.dataset.lightLabel : button.dataset.darkLabel;
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    button.setAttribute("aria-pressed", isDark ? "true" : "false");
    icon.classList.toggle("fa-sun", isDark);
    icon.classList.toggle("fa-moon", !isDark);
    updateThemeColor(isDark);
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    var button = document.querySelector(".theme-toggle");
    if (button) {
      updateToggle(button);
    } else {
      updateThemeColor(theme === "dark");
    }
  }

  setTheme(getInitialTheme());

  function initialize() {
    var button = document.querySelector(".theme-toggle");
    if (!button) {
      return;
    }
    updateToggle(button);
    button.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      storeTheme(nextTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }

  if (media) {
    var handleSystemTheme = function (event) {
      if (!getStoredTheme()) {
        setTheme(event.matches ? "dark" : "light");
      }
    };
    if (media.addEventListener) {
      media.addEventListener("change", handleSystemTheme);
    } else if (media.addListener) {
      media.addListener(handleSystemTheme);
    }
  }
})();
