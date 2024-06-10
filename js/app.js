// Toggle navigation for mobile view
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Print recipe function
function printDIV(div) {
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body>');
    mywindow.document.write('<h1>' + document.title  + '</h1>')}
    document.addEventListener('DOMContentLoaded', (event) => {
        const stars = document.querySelectorAll('.stars .star');
    
        stars.forEach(star => {
            star.addEventListener('mouseover', (e) => {
                resetStars();
                highlightStars(e.target);
            });
    
            star.addEventListener('mouseout', resetStars);
    
            star.addEventListener('click', (e) => {
                selectStars(e.target);
            });
        });
    
        function resetStars() {
            stars.forEach(star => star.classList.remove('selected'));
        }
    
        function highlightStars(star) {
            star.classList.add('selected');
            let prevStar = star.previousElementSibling;
            while (prevStar) {
                prevStar.classList.add('selected');
                prevStar = prevStar.previousElementSibling;
            }
        }
    
        function selectStars(star) {
            resetStars();
            highlightStars(star);
        }
    });