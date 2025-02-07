function toggleFAQ(index) {
  const content = document.getElementById(`faq-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  content.classList.toggle("hidden");
  icon.classList.toggle("fa-chevron-down");
  icon.classList.toggle("fa-chevron-up");
}
