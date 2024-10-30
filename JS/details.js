async function fetchCourses() {
    try {
        const response = await fetch('../data.json');
        const courses = await response.json(); 
        const urlParams = new URLSearchParams(window.location.search);
        const courseTitle = urlParams.get('title');
        console.log(courseTitle);

        if (courseTitle) {
            const course = courses.find(c => c.topic === decodeURIComponent(courseTitle));
            if (course) {
                // console.log('Courses:', course);
                generateCourseDetail(course);
                // console.log('Courses:', course);
                
            } 
            else {
                document.querySelector('.main-content').innerHTML = "<h1>Course not found</h1>";
            }
        } 
        else {
            generateCards(courses);
        }
    } 
    catch (error) {
        console.log('Error fetching courses:', error);
        document.querySelector('.main-content').innerHTML = "<h1>Error loading course data</h1>";
    }
}

function generateRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}

function generateCards(courses) {
    const topicsGrid = document.querySelector('.topics-grid'); 
    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card'); 
 
        card.innerHTML = `
        <div class="card">
            <img src="${course.image}" alt="${course.topic}" class="image-course">
            <div class="card-header">
                <p class="course-name-card">${course.topic}</p>&nbsp;&nbsp;by&nbsp;&nbsp;<u class="course-author">${course.author}</u>
            </div>
            <div class="rectangle-card">
                <p>Interested about this topic?</p>
                <button class="card-button">
                    Add to Favourites <i class="fa-regular fa-heart"></i>
                </button>
                <p class="under-button">Unlimited Credits</p>
            </div>
        </div>
        `;
        topicsGrid.appendChild(card);  
    });
}

function generateCourseDetail(course) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="top-section">
            <h4 class="first-line-top">${course.category}</h4>
            <h1 class="second-line-top">${course.topic}</h4>
            <span class="rating">${generateRating(course.rating)}</span>
            <p class="paraghraph-top">${course.description}</p>
        </div>
        
        <div class="sub-topics">
            <h3 class="sub-topics-label">${course.topic}</h3> 
            <ul class="sub-topics-list">
                ${course.subtopics.map(subtopics => `<li><i class="far fa-check-circle"></i>${subtopics}</li>`).join('')}
            </ul>
        </div>        

        <div class="card">
            <img src="${course.image}" alt="${course.topic}" class="image-course">
            <div class="card-header">
                <p class="course-name-card">${course.topic}</p>&nbsp;&nbsp;by&nbsp;&nbsp;<u class="course-name">${course.name}</u>
            </div>
            <div class="rectangle-card">
                <p>Interested about this topic?</p>
                <button class="card-button">
                    Add to Favourites <i class="fa-regular fa-heart"></i>
                </button>
                <p class="under-button">Unlimited Credits</p>
            </div>
        </div>
    `;

    document.topic = course.topic;

    //favourite
    const favouriteButton = mainContent.querySelector('.card-button');
    let isFavourite = localStorage.getItem(`${course.topic}-favourite`) === 'true';

    function updateFavouriteButton() {
        favouriteButton.innerHTML = isFavourite ?
            'Add to Favourites <i class="fa-solid fa-heart" style="color: #db143c;"></i>' :
            'Add to Favourites <i class="fa-regular fa-heart"></i>';
    }

    updateFavouriteButton();

    favouriteButton.addEventListener('click', function () {
        isFavourite = !isFavourite;
        localStorage.setItem(`${course.topic}-favourite`, isFavourite);
        updateFavouriteButton();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    fetchCourses();
});
