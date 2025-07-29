function openTab(evt, tabName) {
  const contents = document.querySelectorAll(".tab-content");
  const tabs = document.querySelectorAll(".tab-link");

  contents.forEach(c => c.style.display = "none");
  tabs.forEach(t => t.classList.remove("active"));

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
