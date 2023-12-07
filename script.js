function toggleDetails() {
    var detailsSection = document.getElementById("detailsSection");

    // Toggle the visibility of the section
    detailsSection.style.display = (detailsSection.style.display === 'none' || detailsSection.style.display === '') ? 'block' : 'none';
}

function toggleHeaderImage() {
    var headerImage = document.getElementById("headerImage");

    // Toggle between two images
    if (headerImage.src.includes("T-Model.png")) {
        headerImage.src = "images/other-image.png";
    } else {
        headerImage.src = "images/T-Model.png";
    }
}