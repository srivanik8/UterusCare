// Function to handle the "Post" button click event
document.getElementById("postButton").addEventListener("click", function () {
    const fileInput = document.getElementById("fileInput");
    const postContent = document.getElementById("postContent").value;
    const postDisplay = document.getElementById("postDisplay");

    // Check if either content or an image is provided
    if (!postContent && !fileInput.files[0]) {
        alert("Please provide content or select an image to post.");
        return;
    }

    // Create a new post element
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    // Display content
    if (postContent) {
        const contentElement = document.createElement("p");
        contentElement.innerText = postContent;
        postElement.appendChild(contentElement);
    }

    // Display image (if selected)
    if (fileInput.files[0]) {
        const imageElement = document.createElement("img");
        const file = fileInput.files[0];
        imageElement.src = URL.createObjectURL(file);
        postElement.appendChild(imageElement);
    }

    // Display like, heart, and thumbs-up buttons as Unicode characters with classes
    const actions = ["❤"]; // Star, Heart, Thumbs Up
    actions.forEach((action) => {
        const actionButton = document.createElement("span");
        actionButton.classList.add("action-button");
        actionButton.innerHTML = action; // Use innerHTML to add SVG for the heart
        postElement.appendChild(actionButton);

        // Add a click event listener to toggle the color class
        actionButton.addEventListener("click", function () {
            actionButton.classList.toggle("active");
        });
    });

    // Add the post to the display
    postDisplay.appendChild(postElement);

    // Clear input fields
    document.getElementById("postContent").value = "";
    fileInput.value = "";
});
