
async function fetchCourses() {
  try {
    const response = await fetch('../data.json'); 
    const courses = await response.json(); 
    generateCards(courses); 
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
}

function generateRating(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }
  return stars;
}

function generateCards(courses) {
  const topicsGrid = document.querySelector('.topics-grid');
  courses.forEach(course => {
    const card = document.createElement('a');
    card.href = `details.html?title=${encodeURIComponent(course.topic)}`;
    card.classList.add('topic-card');

    card.innerHTML = `
      <div>
        <img src="${course.image}" alt="${course.topic}">
        <h5>${course.category}</h5>
        <h4>${course.topic}</h4>
        <span class="rating">${generateRating(course.rating)}</span>
        <p>Author: ${course.name}</p>
      </div>
    `;

    topicsGrid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', fetchCourses);
