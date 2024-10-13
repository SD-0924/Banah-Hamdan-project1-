// Get the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check for previously saved user preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Add click event listener to the button
darkModeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');

    // If dark mode is enabled, save the preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        // If dark mode is disabled, remove the preference from localStorage
        localStorage.setItem('darkMode', 'disabled');
    }
});
