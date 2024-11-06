document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
function kheer()
{
    window.location.href="https://www.youtube.com/watch?v=835sLyEmqSI";
}
function Biriyani()
{
    window.location.href="https://www.youtube.com/watch?v=nf9tq7cNkTQ&t=3s";
}
function Pasta()
{
    window.location.href="https://www.youtube.com/watch?v=i84Sc5uvQa8";
}
function Salad()
{
    window.location.href="https://www.youtube.com/watch?v=QmFT-L45i2w";
}
function Pizza()
{
    window.location.href="https://www.youtube.com/watch?v=PowGsG3aAF0";
}