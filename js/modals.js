// Modal functionality for portfolio pages
// Handles image modals, deliverable modals, and video modals

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

// Video Modal Functions
function openVideoModal(title, description, videoUrl) {
    console.log('openVideoModal called with:', { title, description, videoUrl });
    
    try {
        // Close any existing modals first
        closeImageModal();
        closeDeliverableModal();
        
        // Check if video modal elements exist
        const videoModal = document.getElementById('videoModal');
        const videoContent = document.getElementById('videoModalContent');
        const videoTitle = document.getElementById('videoModalTitle');
        const videoDescription = document.getElementById('videoModalDescription');
        
        if (!videoModal || !videoContent || !videoTitle || !videoDescription) {
            console.error('Video modal elements not found:', {
                videoModal: !!videoModal,
                videoContent: !!videoContent,
                videoTitle: !!videoTitle,
                videoDescription: !!videoDescription
            });
            return;
        }
        
        // Extract video ID from YouTube URL
        const videoId = videoUrl.split('v=')[1];
        if (!videoId) {
            console.error('Could not extract video ID from URL:', videoUrl);
            return;
        }
        
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        console.log('Embed URL:', embedUrl);
        
        // Create iframe for YouTube video
        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.width = '100%';
        iframe.height = '450';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.style.borderRadius = '8px';
        
        // Clear previous content and add new iframe
        videoContent.innerHTML = '';
        videoContent.appendChild(iframe);
        
        // Set modal content
        videoTitle.textContent = title;
        videoDescription.textContent = description;
        
        // Show modal
        videoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        console.log('Video modal opened successfully');
    } catch (error) {
        console.error('Error opening video modal:', error);
    }
}

function closeVideoModal() {
    try {
        const videoModal = document.getElementById('videoModal');
        const videoContent = document.getElementById('videoModalContent');
        
        if (videoModal) {
            videoModal.style.display = 'none';
        }
        
        if (videoContent) {
            videoContent.innerHTML = '';
        }
        
        document.body.style.overflow = 'auto';
        console.log('Video modal closed successfully');
    } catch (error) {
        console.error('Error closing video modal:', error);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up modal event listeners');
    
    // Close modal when clicking outside the image
    window.onclick = function(event) {
        var imageModal = document.getElementById("imageModal");
        var deliverableModal = document.getElementById("deliverableModal");
        var videoModal = document.getElementById("videoModal");
        
        if (event.target == imageModal) {
            imageModal.style.display = "none";
        }
        
        if (event.target == deliverableModal) {
            deliverableModal.style.display = "none";
        }
        
        if (event.target == videoModal) {
            closeVideoModal();
        }
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            document.getElementById("imageModal").style.display = "none";
            document.getElementById("deliverableModal").style.display = "none";
            closeVideoModal();
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
        
        // Add keyboard event listeners for accessibility
        tile.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                var title = this.getAttribute('data-title');
                var description = this.getAttribute('data-description');
                var imageSrc = this.getAttribute('data-image');
                openDeliverableModal(title, description, imageSrc);
            }
        });
    });
    
    // Add click event listeners to video tiles
    var videoTiles = document.querySelectorAll('.video-tile');
    console.log('Found video tiles:', videoTiles.length);
    
    videoTiles.forEach(function(tile, index) {
        console.log(`Setting up video tile ${index}:`, tile);
        
        // Add click event listener
        tile.addEventListener('click', function(event) {
            // Don't trigger if clicking on the YouTube link
            if (event.target.tagName === 'A' || event.target.closest('a')) {
                return;
            }
            
            var title = this.getAttribute('data-title');
            var description = this.getAttribute('data-description');
            var videoUrl = this.getAttribute('data-video');
            console.log('Video tile clicked:', { title, description, videoUrl });
            openVideoModal(title, description, videoUrl);
        });
        
        // Add keyboard event listeners for accessibility
        tile.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                var title = this.getAttribute('data-title');
                var description = this.getAttribute('data-description');
                var videoUrl = this.getAttribute('data-video');
                console.log('Video tile keyboard event:', { title, description, videoUrl });
                openVideoModal(title, description, videoUrl);
            }
        });
    });
    
    // Make functions globally available
    window.openVideoModal = openVideoModal;
    window.closeVideoModal = closeVideoModal;
    window.openImageModal = openImageModal;
    window.closeImageModal = closeImageModal;
    window.openDeliverableModal = openDeliverableModal;
    window.closeDeliverableModal = closeDeliverableModal;
    
    console.log('Modal functions made globally available');
});
