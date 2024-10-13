// Data array containing course information
const courses = [
  {
    image: "images/HTML.png",
    title: "Web Development Languages HTML",
    author: "Sarah Smith",
    rating: 4,
    id: 0
  },
  {
    image: "images/CSS.png",
    title: "Web Development Languages CSS",
    author: "David Lee",
    rating: 4,
    id: 1
  },
  {
    image: "images/JS.png",
    title: "Web Development Languages JavaScript",
    author: "Emily Chen",
    rating: 5,
    id: 3
  },
  {
    image: "images/HTML.png",
    title: "Web Development Languages HTML",
    author: "Sarah Smith",
    rating: 4,
    id: 0
  },
  {
    image: "images/CSS.png",
    title: "Web Development Languages CSS",
    author: "David Lee",
    rating: 4,
    id: 1
  },
];

// Function to generate star ratings
function generateRating(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }
  return stars;
}

// Function to generate cards dynamically
function generateCards() {
  const topicsGrid = document.querySelector('.topics-grid');
  courses.forEach(course => {
    const card = document.createElement('a');
    card.href = `details-page.html?title=${encodeURIComponent(course.title)}`;
    card.classList.add('topic-card');

    // Template for each card
    card.innerHTML = `
      <div>
        <img src="${course.image}" alt="${course.title}">
        <h4>${course.title}</h4>
        <p>Author: ${course.author}</p>
        <span class="rating">${generateRating(course.rating)}</span>
      </div>
    `;

    topicsGrid.appendChild(card);
  });
}

// Call the function to generate cards on page load
document.addEventListener('DOMContentLoaded', generateCards);
