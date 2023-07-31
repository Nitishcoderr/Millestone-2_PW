// Get references to DOM elements
const mainContent = document.getElementById("mainContent");
const addBlogBtn = document.getElementById("addBlogBtn");
const addBlogModal = document.getElementById("addBlogModal");

// Function to display existing blogs on the home page
function displayBlogs() {
  // Fetch existing blogs from LocalStorage
  const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Generate HTML for displaying blogs
  const blogsHTML = existingBlogs.map((blog) => `
    <div class="blog">
      <h2>${blog.title}</h2>
      <p>${blog.summary}</p>
      <button onclick="viewBlog(${blog.id})">Read More</button>
    </div>
  `).join("");

  // Display the blogs on the home page
  mainContent.innerHTML = blogsHTML;
}

// Function to open the "Add Blog" modal
function openAddBlogModal() {
  addBlogModal.style.display = "block";
}

// Function to close the "Add Blog" modal
function closeAddBlogModal() {
  addBlogModal.style.display = "none";
}

// Function to add a new blog
function addBlog(event) {
  event.preventDefault();

  // Get values from the form
  const title = document.getElementById("blogTitle").value;
  const summary = document.getElementById("blogSummary").value;
  const posterImage = document.getElementById("posterImage").value; // Get poster image URL

  // Create a new blog object
  const newBlog = {
    id: Date.now(),
    title: title,
    summary: summary,
    posterImage: posterImage, // Include poster image URL in the blog object
  };

  // Fetch existing blogs from LocalStorage
  const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Add the new blog to the existing blogs array
  existingBlogs.push(newBlog);

  // Store the updated blogs array in LocalStorage
  localStorage.setItem("blogs", JSON.stringify(existingBlogs));

  // Close the modal and refresh the blog list
  closeAddBlogModal();
  displayBlogs();
}


// Function to view a blog
function viewBlog(blogId) {
  // Fetch existing blogs from LocalStorage
  const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Find the blog with the given ID
  const blog = existingBlogs.find((blog) => blog.id === blogId);

  // Handle viewing the blog as needed
  // For example, show the full blog content on a separate page
  // You can create a new HTML page for viewing a single blog post
}

// Event listeners
addBlogBtn.addEventListener("click", openAddBlogModal);
document.getElementById("addBlogForm").addEventListener("submit", addBlog);

// Initial display of blogs on the home page
displayBlogs();
