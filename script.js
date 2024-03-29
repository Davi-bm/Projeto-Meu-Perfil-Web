// script.js

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.buttons a').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(this.getAttribute('href'), '_blank');
        });
    });
});
