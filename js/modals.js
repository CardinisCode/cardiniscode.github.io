// Modal functionality for portfolio pages
// Handles image modals and deliverable modals

// Image Modal Functions
function openImageModal(src, alt, title, description) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var modalTitle = document.getElementById("imageModalTitle");
    var modalDescription = document.getElementById("imageModalDescription");
    
    modal.style.display = "block";
    modalImg.src = src;
    modalImg.alt = alt;
    
    if (title) {
        modalTitle.textContent = title;
        modalTitle.style.display = "block";
    } else {
        modalTitle.style.display = "none";
    }
    
    if (description) {
        modalDescription.textContent = description;
        modalDescription.style.display = "block";
    } else {
        modalDescription.style.display = "none";
    }
}

function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Deliverable Modal Functions
function openDeliverableModal(title, description, imageSrc) {
    var modal = document.getElementById("deliverableModal");
    var modalImg = document.getElementById("deliverableModalImage");
    var modalTitle = document.getElementById("deliverableModalTitle");
    var modalDescription = document.getElementById("deliverableModalDescription");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
}

function closeDeliverableModal() {
    document.getElementById("deliverableModal").style.display = "none";
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside the image
    window.onclick = function(event) {
        var imageModal = document.getElementById("imageModal");
        var deliverableModal = document.getElementById("deliverableModal");
        
        if (event.target == imageModal) {
            imageModal.style.display = "none";
        }
        
        if (event.target == deliverableModal) {
            deliverableModal.style.display = "none";
        }
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            document.getElementById("imageModal").style.display = "none";
            document.getElementById("deliverableModal").style.display = "none";
        }
    });

    // Add click event listeners to deliverable tiles
    var tiles = document.querySelectorAll('.deliverable-tile');
    tiles.forEach(function(tile) {
        tile.addEventListener('click', function() {
            var title = this.getAttribute('data-title');
            var description = this.getAttribute('data-description');
            var imageSrc = this.getAttribute('data-image');
            openDeliverableModal(title, description, imageSrc);
        });
    });
});
