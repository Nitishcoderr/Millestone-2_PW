const mainContent = document.querySelector(".main-card")
const addBlogForm = document.querySelector("#addBlogModal")


const displayBlogs = () => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    const blogsHTML = existingBlogs.map((blog) =>
        `
        <div class="blog-card">
                <img src="${blog.posterImage}" alt="img">
        <div class="blog-content">
                    <h2> <strong>Title :</strong>${blog.title}</h2>
                    <p><strong>Description:</strong>${blog.description}</p>
                    
                    <div class="blog-btn">
                        <button onclick="viewBlog(${blog.id})" >Read</button>
                    </div>
                </div>
                </div>
        `
    ).join("")
    // Display the blog on the home page
    mainContent.innerHTML = blogsHTML
}

// Adding Blog
const addBlog = (event) => {
    event.preventDefault();
    // Getting value
    const title = document.querySelector("#title").value
    const posterImage = document.querySelector("#posterUrl").value
    const description = document.querySelector("#description").value
    const summary = document.querySelector("#summary").value

    console.log("Adding blog ....");

    const newBlog = {
        id: Date.now(),
        title: title,
        posterImage: posterImage,
        description: description,
        summary: summary,
    }
    // Fetch existing blogs from localstorage
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Add new blog
    existingBlogs.push(newBlog)

    console.log("Updated blog array:", existingBlogs);

    // Save the update
    localStorage.setItem('blogs', JSON.stringify(existingBlogs))
    // Clear the input
    document.querySelector("#title").value = "";
    document.querySelector("#posterUrl").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#summary").value = "";

    displayBlogs()
}




function viewBlog(blogId) {
    // Fetch existing blog from localstorag
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Find the blog with the given ID
    const blog = existingBlogs.find((blog) => blog.id === blogId)
    // Handle viewing the blog as needed
    // For example, show the full blog content on a separate page
    // You can create a new HTML page for viewing a single blog post
    localStorage.setItem("selectedBlog", JSON.stringify(blog));

    window.location.href = './blog.html';

}

addBlogForm.addEventListener('submit', addBlog)

displayBlogs()

