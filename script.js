document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('#theme-toggle .fa-sun').classList.add('d-none');
        document.querySelector('#theme-toggle .fa-moon').classList.remove('d-none');
        document.getElementById('theme-toggle').classList.add('rotate-animation', 'moon-active');
    }
});


// Aqui salva a info do thema no local storage
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    document.querySelector('#theme-toggle .fa-sun').classList.toggle('d-none');
    document.querySelector('#theme-toggle .fa-moon').classList.toggle('d-none');
    document.getElementById('theme-toggle').classList.toggle('rotate-animation');
    document.getElementById('theme-toggle').classList.toggle('moon-active');
});
