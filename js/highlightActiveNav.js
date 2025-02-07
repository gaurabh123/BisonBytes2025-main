document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired");

  const observer = new MutationObserver(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    if (navLinks.length > 0) {
      console.log("Sidebar loaded, highlighting active link...");
      highlightActiveLink();
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
    console.log("Current Page:", currentPage);

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      const page = link.getAttribute("data-page");
      if (page === currentPage) {
        console.log(`Match found: ${page}`);
        link.classList.add("bg-blue-200", "text-blue-900", "font-bold");
      } else {
        link.classList.remove("bg-blue-200", "text-blue-900");
      }
    });
  }
});
