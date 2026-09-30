document.querySelector("#year").textContent = new Date().getFullYear();

const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.dataset.theme = savedTheme;
themeToggle.setAttribute("aria-pressed", String(savedTheme === "dark"));
themeToggle.textContent = savedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";

themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
    themeToggle.textContent = nextTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";
});

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".primary-nav a");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navigationLinks.forEach((link) => {
            if (link.hash === `#${entry.target.id}`) {
                link.classList.add("active");
                link.setAttribute("aria-current", "location");
            } else {
                link.classList.remove("active");
                link.removeAttribute("aria-current");
            }
        });
    });
}, { rootMargin: "-20% 0px -65% 0px" });

sections.forEach((section) => sectionObserver.observe(section));
