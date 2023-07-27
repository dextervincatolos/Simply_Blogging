// Function to toggle the content visibility
function readmore(button) {
    let content = document.getElementById("post_"+button.id);
    let isContentExpanded = content.getAttribute("data-expanded") === "true";

    if (isContentExpanded) {
        content.style.maxHeight = "200px"; 
        button.textContent = "Read more";
    } else {
        console.log("post_"+button.id);
        content.style.maxHeight = "none";
        button.textContent = "Read less";
    }
    content.setAttribute("data-expanded", !isContentExpanded);
}

