function openTab(tabId) {
  // Remove active class from all tabs
  document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

  // Add active class to clicked tab and corresponding content
  document.querySelector(`.tab-link[onclick="openTab('${tabId}')"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}
