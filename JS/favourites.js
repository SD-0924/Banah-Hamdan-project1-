document.addEventListener('DOMContentLoaded', function () {
    const favouritesToggle = document.getElementById('favouritesToggle');
    const favouritesSection = document.getElementById('favouritesSection');
    const favouritesList = document.getElementById('favouritesList');

    async function fetchCourses() {
        try {
            const response = await fetch('data.json');
            const courses = await response.json();

            const favouriteCourses = courses.filter(course => {
                return localStorage.getItem(`${course.topic}-favourite`) === 'true';
            });

            updateFavouritesList(favouriteCourses);
        }
        catch (error) {
            console.error('Error fetching courses:', error);
        }
    }

    function updateFavouritesList(favouriteCourses) {
        favouritesList.innerHTML = '';
        if (favouriteCourses.length === 0) {
            favouritesList.innerHTML = '<p>No favourite topics yet.</p>';
        }
        else {
            favouriteCourses.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.classList.add('favourite-card');
                courseCard.innerHTML = `
                <img src="${course.image}" alt="${course.topic}" style="width: 100px;">
                <div class="card-text">
                    <p class="course-name">${course.topic}</p>
                    <p class="course-rating">${generateRating(course.rating)}</p>
                </div>
            `;
                favouritesList.appendChild(courseCard);
            });
        }
    }

    favouritesToggle.addEventListener('click', function () {
        favouritesSection.classList.toggle('hidden');
        debugger
        fetchCourses();
    });

    fetchCourses();
});

function generateRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}
