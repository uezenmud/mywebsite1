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

  document.addEventListener('DOMContentLoaded', () => {
    const content = {
      london: {
        title: "London",
        text: "London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium."
      },
      paris: {
        title: "Paris",
        text: "Paris is the capital city of France, known for its art, fashion, gastronomy, and culture. The city's 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Iconic landmarks include the Eiffel Tower and the 12th-century Gothic Notre-Dame cathedral."
      },
      tokyo: {
        title: "Tokyo",
        text: "Tokyo is the capital of Japan, a bustling metropolis that blends modernity and tradition. Known for its skyscrapers, anime culture, and delicious sushi, Tokyo is a fascinating city with historic temples like Senso-ji and the serene Meiji Shrine."
      }
    };
  
    const links = document.querySelectorAll('.sidebar a');
    const articleTitle = document.getElementById('article-title');
    const articleContent = document.getElementById('article-content');
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const city = link.getAttribute('data-city'); // Get the city name from data attribute
  
        if (content[city]) {
          articleTitle.textContent = content[city].title;
          articleContent.textContent = content[city].text;
        }
      });
    });
  });
  