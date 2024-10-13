// document.addEventListener('DOMContentLoaded', function () {
//     const favouritesToggle = document.querySelector('.icon-label i.fa-heart');
//     const favouritesSection = document.getElementById('favouritesSection');
//     const favouritesList = document.getElementById('favouritesList');
//     let favouriteCourses = JSON.parse(localStorage.getItem('favouriteCourses')) || [];

//     // Function to update the favourites list
//     function updateFavouritesList() {
//         favouritesList.innerHTML = ''; // Clear previous content
//         if (favouriteCourses.length === 0) {
//             favouritesList.innerHTML = '<p>No favourite topics yet.</p>';
//         } else {
//             favouriteCourses.forEach(course => {
//                 const courseCard = document.createElement('div');
//                 courseCard.classList.add('favourite-card');
//                 courseCard.innerHTML = `
//                     <img src="${course.image}" alt="${course.shortTitle}" style="width: 100px;">
//                     <p>${course.shortTitle}</p>
//                     <p>${course.author}</p>
//                 `;
//                 favouritesList.appendChild(courseCard);
//             });
//         }
//     }

//     // Toggle the favourites section visibility
//     favouritesToggle.addEventListener('click', function () {
//         favouritesSection.classList.toggle('hidden'); // Toggle visibility
//         updateFavouritesList(); // Update the favourites list
//     });

//     // Function to add a course to favourites
//     function addToFavourites(course) {
//         // Check if course is already in favourites
//         if (!favouriteCourses.some(fav => fav.shortTitle === course.shortTitle)) {
//             favouriteCourses.push(course);
//             localStorage.setItem('favouriteCourses', JSON.stringify(favouriteCourses));
//         }
//     }

//     // Example: This should be triggered when a course is added to favourites from another page
//     // You should replace this with the actual course data when a course is clicked
//     document.querySelectorAll('.card-button').forEach(button => {
//         button.addEventListener('click', function () {
//             const courseElement = this.closest('.card');
//             const courseData = {
//                 image: courseElement.querySelector('img').src,
//                 shortTitle: courseElement.querySelector('#course-name').innerText,
//                 author: courseElement.querySelector('#course-author').innerText
//             };
//             addToFavourites(courseData); // Add selected course to favourites
//         });
//     });

//     // Initial load of favourites when page loads
//     updateFavouritesList();
// });
