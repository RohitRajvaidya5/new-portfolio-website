"use strict";

const sidebar = document.querySelector(".sidebar");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const mobileViewport = window.matchMedia("(max-width: 760px)");

if (sidebar && menuButton && navigation) {
  sidebar.classList.add("nav-ready");
  menuButton.hidden = false;

  const sectionLinks = Array.from(navigation.querySelectorAll('a[href^="#"]'));
  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveLink = (activeSection) => {
    sectionLinks.forEach((link) => {
      const isActive =
        document.querySelector(link.getAttribute("href")) === activeSection;
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateActiveSection = () => {
    let activeSection = sections[0];
    const activationPoint = Math.min(window.innerHeight * 0.35, 240);

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= activationPoint) {
        activeSection = section;
      }
    });

    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 2
    ) {
      activeSection = sections[sections.length - 1];
    }

    if (activeSection) setActiveLink(activeSection);
  };

  if (sections.length) {
    let navigationScrollPending = false;
    let scrollEndTimeout;
    const finishNavigationScroll = () => {
      navigationScrollPending = false;
      updateActiveSection();
    };
    const scheduleScrollEnd = () => {
      window.clearTimeout(scrollEndTimeout);
      scrollEndTimeout = window.setTimeout(finishNavigationScroll, 180);
    };

    window.addEventListener(
      "scroll",
      () => {
        if (navigationScrollPending) {
          scheduleScrollEnd();
        } else {
          updateActiveSection();
        }
      },
      { passive: true },
    );
    window.addEventListener("scrollend", () => {
      if (navigationScrollPending) finishNavigationScroll();
    });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    navigation.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a[href^="#"]');
      const section = link && document.querySelector(link.getAttribute("href"));
      if (!section) return;

      setActiveLink(section);
      navigationScrollPending = true;
      scheduleScrollEnd();
    });
  }

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(expanded));
    navigation.classList.toggle("is-open", expanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element) {
      if (mobileViewport.matches && event.target.closest("a")) closeMenu();
    }
  });

  sidebar.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuButton.focus();
    }
  });

  const syncViewport = () => {
    menuButton.hidden = !mobileViewport.matches;
    if (!mobileViewport.matches) closeMenu();
  };
  mobileViewport.addEventListener("change", syncViewport);
  syncViewport();
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector("#copy-status");
const emailLink = document.querySelector(".email-link");

if (copyButton && copyStatus && emailLink) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const address = emailLink.getAttribute("href").replace(/^mailto:/, "");
    if (!navigator.clipboard || !window.isSecureContext) {
      copyStatus.textContent =
        "Clipboard unavailable. Select the email above to copy it, or click it to open your mail app.";
      return;
    }
    try {
      await navigator.clipboard.writeText(address);
      copyStatus.textContent = "Email address copied.";
    } catch (error) {
      console.error("Could not copy email address:", error);
      copyStatus.textContent =
        "Copy failed. Select the email above to copy it, or click it to open your mail app.";
    }
  });
}
