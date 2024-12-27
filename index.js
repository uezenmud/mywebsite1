// Function to load the navbar
function loadNavbar() {
    fetch('navbar.html') // Fetch the navbar.html file
      .then(response => response.text()) // Convert response to text
      .then(data => {
        document.getElementById('navbar').innerHTML = data; // Inject navbar into the page
      })
      .catch(error => console.error('Error loading navbar:', error)); // Log any errors
  }
  
  loadNavbar();

  function loadFooter() {
    fetch('footer.html') // Fetch the navbar.html file
      .then(response => response.text()) // Convert response to text
      .then(data => {
        document.getElementById('footer').innerHTML = data; // Inject navbar into the page
      })
      .catch(error => console.error('Error loading footer:', error)); // Log any errors
  }
  
  loadFooter();

  