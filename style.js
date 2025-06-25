// Typing Animation for Home Section
document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.querySelector('.typing-text');
    if (typingTextElement) {
        const text = "a Web Developer";
        let index = 0;

        function type() {
            if (index < text.length) {
                typingTextElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }

        type();
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // Form Submission for Contact Section
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;

            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message!');
            this.reset();
        });
    }

    // Dynamic Project Cards for Projects Section
    const projects = [
        { title: 'Ecommerce Website', description: 'Built using HTML, CSS', link: '#' },
        { title: 'Calculator', description: 'A Simple Calculator application designed to perform basic arithmetic operations. Built using HTML, CSS, and JavaScript.', link: '#' }
    ];

    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn btn-sm">View Project</a>
            `;
            projectGrid.appendChild(projectCard);
        });
    }

    // Skill Animation for Skills Section
    const skillsList = document.querySelectorAll('.skills-list li');
    skillsList.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Mobile Menu Toggle for Header
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header .container').appendChild(menuToggle);

    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    });
});
