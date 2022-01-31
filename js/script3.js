
// Gallery3 image hover
$( ".img-wrapper3" ).hover(
    function() {
        $(this).find(".img-overlay3").animate({opacity: 1}, 600);
    }, function() {
        $(this).find(".img-overlay3").animate({opacity: 0}, 600);
    }
);

// Lightbox
var $overlay3 = $('<div id="overlay3"></div>');
var $image3 = $("<img>");
var $prevButton3 = $('<div id="prevButton3"><i class="fa fa-chevron-left"></i></div>');
var $nextButton3 = $('<div id="nextButton3"><i class="fa fa-chevron-right"></i></div>');
var $exitButton3 = $('<div id="exitButton3"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay3.append($image3).prepend($prevButton3).append($nextButton3).append($exitButton3);
$("#gallery3").append($overlay3);

// Hide overlay on default
$overlay3.hide();

// When an image is clicked
$(".img-overlay3").click(function(event) {
    // Prevents default behavior
    event.preventDefault();
    // Adds href attribute to variable
    var imageLocation = $(this).prev().attr("href");
    // Add the image src to $image
    $image3.attr("src", imageLocation);
    // Fade in the overlay
    $overlay3.fadeIn("slow");
});

// When the overlay is clicked
$overlay3.click(function() {
    // Fade out the overlay
    $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton3.click(function(event) {
    // Hide the current image
    $("#overlay img3").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img3").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery3 img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image3").next().find("img"));
    // All of the images in the gallery3
    var $images = $("#image-gallery3 img");
    // If there is a next image
    if ($nextImg.length > 0) {
        // Fade in the next image
        $("#overlay img3").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
        // Otherwise fade in the first image
        $("#overlay img3").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When previous button is clicked
$prevButton3.click(function(event) {
    // Hide the current image
    $("#overlay img3").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img3").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery3 img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image3").prev().find("img"));
    // Fade in the next image
    $("#overlay img3").attr("src", $nextImg.attr("src")).fadeIn(800);
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When the exit button is clicked
$exitButton3.click(function() {
    // Fade out the overlay
    $("#overlay3").fadeOut("slow");
});
