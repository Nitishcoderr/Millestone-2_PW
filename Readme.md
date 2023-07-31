# Project - 1
## Blog App

Blog App is a simple web application that allows users to create and view blog posts. Users can add blogs with a title, description, summary, and poster image. The app also provides a feature to view the full content of a blog on a separate page.

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

1. Add Blog: Users can add new blog posts by filling out a form with the required details, including title, description, summary, and a poster image URL.

2. Display Blogs: The app displays a list of existing blogs on the home page. Each blog is represented as a card with its title, description, and an option to view the full blog content.

3. View Full Blog: Clicking on the "Read" button in a blog card opens a separate page that displays the full content of the selected blog, including the title, description, summary, and poster image.

## How to Use

1. Clone the repository to your local machine or download the ZIP file.

2. Open the `index.html` file in your web browser.

3. In the main page, you'll see a list of existing blogs (if any). You can add a new blog by clicking the "plus" button on the top-right corner of the page. A modal will appear where you can fill in the details of the new blog.

4. To view the full content of a blog, click on the "Read" button on its card. You'll be redirected to a new page that displays the complete blog content.

5. The app uses LocalStorage to store the blog data, so the added blogs will be persisted even after page reloads.

## Note

- The app uses the [Font Awesome](https://fontawesome.com/) library for icons.

## About

This Blog App is created as part of a learning project to practice JavaScript, LocalStorage, and DOM manipulation.

## Author

Nitish chaurasiya

_____________________________________________________________________________________________________________________

# Project - 2
## Movie App

Movie App is a simple web application that allows users to search for movies and view movie information along with their posters.

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

1. Movie Listing: The app displays a list of popular movies on the home page, along with their titles and posters.

2. Movie Search: Users can search for movies by entering keywords in the search bar. The app will fetch and display relevant movie results.

3. Movie Details: Clicking on a movie poster or title will show more details about the movie, such as the plot and year of release.

## API Used

The app uses the [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data. The following endpoints are used:

- Get Popular Movies: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=YOUR_API_KEY&page=1`
- Search Movies: `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=SEARCH_QUERY`

Please replace `YOUR_API_KEY` in the above endpoints with your actual TMDb API key.

## How to Use

1. Clone the repository to your local machine or download the ZIP file.

2. Obtain a TMDb API key by signing up on the [TMDb website](https://www.themoviedb.org/).

3. Open the `script.js` file and replace `YOUR_API_KEY` with your TMDb API key in the `API` and `SEARCHAPI` constants.

4. Open the `index.html` file in your web browser.

5. The app will display a list of popular movies on the home page. You can use the search bar to search for specific movies.

6. Click on a movie poster or title to view more details about the movie.

## Note

This app uses the `async/await` feature of JavaScript for making API calls. Make sure your browser supports `async/await` for the app to work correctly.

## About

This Movie App is created as part of a learning project. It demonstrates the use of APIs and dynamic data rendering in a web application.

## Author

Nitish Chaurasiya
_________________________________________________________________________________________________________________________________
# Project - 3
## Todo App

Todo App is a simple React web application that allows users to manage their todo list. Users can add, edit, and remove items from the list. Each item can have a status, which can be updated as "Pending" or "Completed". The app also uses LocalStorage to save the todo list data, so the added items will be persisted even after page reloads.

## Technologies Used

- React (useState, useEffect)
- CSS

## Features

1. Add Todo: Users can add new items to their todo list by entering a text and clicking the "ADD" button.

2. Edit Todo: Users can edit existing items in the todo list by clicking the "Edit" button and updating the item's content. The item will be updated with the new content.

3. Update Status: Users can update the status of each item in the todo list. The status can be toggled between "Pending" and "Completed" by clicking the "Update Status" button.

4. Remove Todo: Users can remove items from the todo list by clicking the "Remove" button associated with each item.

5. Remove All: Users can remove all items from the todo list by clicking the "Remove All" button at the bottom. This will clear the entire list.

## How to Use

1. Clone the repository to your local machine or download the ZIP file.

2. Navigate to the project directory in your terminal.

3. Install the dependencies using npm:

4. Start the development server:


5. The app will open in your default web browser at http://localhost:3000/.

6. In the Todo App, you can start adding, editing, and managing your todo list items. The added items will be stored in LocalStorage and will be available even after reloading the page.

## Note

- The app uses React hooks like useState and useEffect for managing state and side effects.
- The app uses CSS for styling.

## About

This Todo App is created as part of a learning project to practice React hooks and state management.

## Author

Nitish chaurasiya
