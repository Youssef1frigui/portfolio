window.addEventListener("scroll", revealItems);
function revealItems() {
    var items = document.querySelectorAll("div");

    for (var i = 0; i < items.length; i++) {
        var windowHeight = window.innerHeight;
        var itemTop = items[i].getBoundingClientRect().top;
        var itemBottom = items[i].getBoundingClientRect().bottom;

        if (itemTop < windowHeight && itemBottom >= 0) {
            items[i].style.opacity = "1";
        }
    }
}

var sendButton = document.getElementById("send");

// Add a click event listener to the submit button
sendButton.addEventListener("click", function() {
  // Show an alert when the button is clicked
  alert("Thank you for your message");
});
