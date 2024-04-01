// Optional: Smooth scrolling to projects
    const container = document.querySelector('project-container');
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('project')) {
            e.preventDefault();
            container.scroll({
                left: e.target.offsetLeft - (container.clientWidth - e.target.clientWidth) / 2,
                behavior: 'smooth'
            });
        }
    });
/*const social = document.querySelector('social-group');
    social.addEventListener('click', (e) => {
        if (e.target.classList.contains('project')) {
            e.preventDefault();
            social.scroll({
                left: e.target.offsetLeft - (social.clientWidth - e.target.clientWidth) / 2,
                behavior: 'smooth'
            });
        }
    });*/