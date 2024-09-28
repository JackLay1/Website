document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion h3');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Toggle visibility
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
