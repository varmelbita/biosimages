document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-button");
  const imageGallery = document.querySelector(".image-gallery");
  
  filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const filter = button.getAttribute("data-filter");
      
      imageGallery.querySelectorAll(".image").forEach(function(image) {
        if (filter === "all" || image.classList.contains(filter)) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    });
  });
});