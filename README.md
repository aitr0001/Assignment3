Assignment 3  Prototype Report

What I Did
For this assignment, I built a prototype of a website that shows the NASA Picture of the Day. I created the page using HTML, styled it with CSS, and added JavaScript to load real data from the NASA API. The site shows a real space image, its title, description, and includes a button interaction.


Steps I Took
First, I created the basic layout with a header, main content area, and footer. Then I styled the page to make it clean and responsive so it works on different screen sizes. After that, I used JavaScript with the Fetch API to get the image and information from NASA. Finally, I tested everything to make sure it loads correctly and looks good.

Resources Used
- NASA APOD API
- MDN documentation
- VS Code
- Browser developer tools
- W3C validator

Challenges
One challenge was making sure the API data loaded correctly and handling the layout on smaller screens. I also had to test a few times to make sure the image and text displayed properly.

Conclusion
Overall, the prototype works well and shows how the final project could look. It loads real data, is responsive, and includes basic interaction.




Capstone Project  Part 4 Report

What I Did?
I built a web app that lets users search NASA's Astronomy Picture of the Day by date and save favorites. The app shows the image, title, date, and description. Users can click the image for HD version, save favorites, and delete them. Everything is saved in the browser so it remembers your favorites.

Steps I Took
Created index.html, style.css, and script.js files
Built a simple layout with search form, image display area, and favorites section
Styled with dark theme and made it responsive for phones
Added JavaScript to fetch NASA data using the Fetch API
Added localStorage to save favorites
Added loading messages and error handling (fallback image if NASA fails)
Tested everything on different screen sizes

Resources Used
NASA APOD API
MDN Web Docs
Unsplash (for fallback images)
VS Code
Browser dev tools

Challenges
API rate limits – NASA's DEMO_KEY only allows 30 requests per hour. Fixed by adding a fallback image.
Duplicate favorites – Fixed by checking if picture already exists before saving.
Delete buttons – Had to use event delegation since buttons are created after page loads.
Responsive grid – Took some trial and error to get favorites looking good on mobile.

Final Thoughts
The app meets all requirements: no page refreshes, uses Fetch API, localStorage for favorites, responsive design, and proper event listeners. 
