// const courses = [
//         {
//             image: "images/HTML.png",
//             title: "Web Development Languages HTML",
//             shortTitle: "HTML",
//             author: "Sarah Smith",
//             rating: 4,
//             description: "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images, and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
//             label: "HTML Sub Topics",
//             subTopics: [
//                 "HTML syntax and structure",
//                 "HTML elements and attributes",
//                 "HTML forms and input elements",
//                 "HTML tables and lists",
//                 "HTML multimedia elements (audio, video, images)",
//                 "HTML accessibility and semantic markup"
//             ]
//         },
//         {
//             image: "images/CSS.png",
//             title: "Web Development Languages CSS",
//             shortTitle: "CSS",
//             author: "David Lee",
//             rating: 4,
//             description: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML, including colors, layout, fonts, and animations. It separates the presentation from the content and structure of a web page, allowing for greater flexibility and control over the design of a website.",
//             label: "CSS Sub Topics",
//             subTopics: [
//                 "CSS selectors and specificity",
//                 "CSS box model and layout",
//                 "CSS typography and fonts",
//                 "CSS color and background properties",
//                 "CSS transitions and animations",
//                 "CSS responsive design and media queries"
//             ]
//         },
//         {
//             image: "images/JS.png",
//             title: "Web Development Languages JavaScript",
//             shortTitle: "JavaScript",
//             author: "Emily Chen",
//             rating: 5,
//             description: "JavaScript is a high-level programming language that is used to create interactive web pages and dynamic user interfaces. It allows for the creation of complex, responsive web applications that can run both on the client side (in the web browser) and the server side (using Node.js). JavaScript is one of the most widely-used programming languages in web development.",
//             label: "JavaScript Sub Topics",
//             subTopics: [
//                 "JavaScript data types and variables",
//                 "JavaScript functions and control flow",
//                 "JavaScript objects and classes",
//                 "JavaScript DOM manipulation and events",
//                 "JavaScript asynchronous programming and callbacks",
//                 "JavaScript frameworks and libraries (React, Angular, Vue)"
//             ]
//         }
//     ];

    // const urlParams = new URLSearchParams(window.location.search);
    // const courseTitle = urlParams.get('title');

    // const course = courses.find(c => c.title === decodeURIComponent(courseTitle));

//     if (course) {
//         document.getElementsByClassName('second-line-top')[0].innerText = course.shortTitle;
//         document.getElementsByClassName('card-header')[0].innerText = course.author;
//         document.getElementsByClassName('rating')[0].innerHTML = generateRating(course.rating);
//         document.getElementsByClassName('paraghraph-top')[0].innerHTML = course.description;
//         document.getElementsByClassName('image-course')[0].src = course.image;
//         document.getElementsByClassName('sub-topics-label')[0].innerText = course.label;
//         document.getElementsByClassName('course-name-card').innerText = course.shortTitle;

//         console.log( "reached" , document.getElementsByClassName('course-name-cards'));



//         document.title = course.title;

//         const subTopicsList = document.querySelector('.sub-topics-list');
//         subTopicsList.innerHTML = '';
//         course.subTopics.forEach(subTopic => {
//             const li = document.createElement('li');
//             li.innerHTML = `<i class="far fa-check-circle"></i>${subTopic}`;
//             subTopicsList.appendChild(li);
//         });
//     } else {
//         document.querySelector('.main-content').innerHTML = "<h1>Course not found</h1>";
//     }

//     function generateRating(rating) {
//         let stars = '';
//         for (let i = 0; i < 5; i++) {
//             stars += i < rating ? '★' : '☆';
//         }
//         return stars;
//     }



//     document.addEventListener('DOMContentLoaded', function () {
//         const favouriteButton = document.querySelector('.card-button');
//         const favouriteIcon = favouriteButton.querySelector('i');

//         let isFavourite = localStorage.getItem(`${course.shortTitle}-favourite`) === 'true';

//         function updateFavouriteButton() {
//             if (isFavourite) {
//                 favouriteButton.innerHTML = 'Add to Favourites <i class="fa-solid fa-heart" style="color: #db143c;"></i>';
//             } else {
//                 favouriteButton.innerHTML = 'Add to Favourites <i class="fa-regular fa-heart"></i>';
//             }
//         }

//         updateFavouriteButton();

//         favouriteButton.addEventListener('click', function () {
//             isFavourite = !isFavourite;

//             localStorage.setItem(`${course.shortTitle}-favourite`, isFavourite);

//             updateFavouriteButton();
//         });
//     });


async function fetchCourses() {
    try {
        const response = await fetch('data.json');
        const courses = await response.json(); 
        const urlParams = new URLSearchParams(window.location.search);
        const courseTitle = urlParams.get('title');
        // console.log(courseTitle);

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

// Fetch and render courses on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    fetchCourses();
});
