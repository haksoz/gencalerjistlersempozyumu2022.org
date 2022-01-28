
// Gallery2 image hover
$( ".img-wrapper2" ).hover(
    function() {
        $(this).find(".img-overlay2").animate({opacity: 1}, 600);
    }, function() {
        $(this).find(".img-overlay2").animate({opacity: 0}, 600);
    }
);

// Lightbox
var $overlay2 = $('<div id="overlay2"></div>');
var $image2 = $("<img>");
var $prevButton2 = $('<div id="prevButton2"><i class="fa fa-chevron-left"></i></div>');
var $nextButton2 = $('<div id="nextButton2"><i class="fa fa-chevron-right"></i></div>');
var $exitButton2 = $('<div id="exitButton2"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay2.append($image2).prepend($prevButton2).append($nextButton2).append($exitButton2);
$("#gallery2").append($overlay2);

// Hide overlay on default
$overlay2.hide();

// When an image is clicked
$(".img-overlay2").click(function(event) {
    // Prevents default behavior
    event.preventDefault();
    // Adds href attribute to variable
    var imageLocation = $(this).prev().attr("href");
    // Add the image src to $image
    $image2.attr("src", imageLocation);
    // Fade in the overlay
    $overlay2.fadeIn("slow");
});

// When the overlay is clicked
$overlay2.click(function() {
    // Fade out the overlay
    $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton2.click(function(event) {
    // Hide the current image
    $("#overlay img2").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img2").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery2 img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image2").next().find("img"));
    // All of the images in the gallery2
    var $images = $("#image-gallery2 img");
    // If there is a next image
    if ($nextImg.length > 0) {
        // Fade in the next image
        $("#overlay img2").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
        // Otherwise fade in the first image
        $("#overlay img2").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When previous button is clicked
$prevButton2.click(function(event) {
    // Hide the current image
    $("#overlay img2").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img2").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery2 img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image2").prev().find("img"));
    // Fade in the next image
    $("#overlay img2").attr("src", $nextImg.attr("src")).fadeIn(800);
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When the exit button is clicked
$exitButton2.click(function() {
    // Fade out the overlay
    $("#overlay2").fadeOut("slow");
});
