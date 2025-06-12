// Animation du header au scroll
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Ajoute la classe scrolled pour l'effet de fond en verre
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Animation des barres de progression des compétences
function animateSkills() {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}

// Observer pour les animations au scroll
const createObserver = (elements, callback) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
};

// Animation des éléments de la timeline
function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    createObserver(timelineItems, (item) => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    });
}

// Animation des catégories de compétences
function animateSkillCategories() {
    const categories = document.querySelectorAll('.skill-category');
    
    createObserver(categories, (category) => {
        category.style.opacity = '1';
        category.style.transform = 'translateY(0)';
        
        // Anime les barres de progression dans cette catégorie
        const bars = category.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
            setTimeout(() => {
                bar.style.width = bar.parentElement.dataset.progress || '0%';
            }, 300);
        });
    });
}

// Données des projets avec plus de détails
const projects = [
    {
        title: "Projet 1",
        description: "Description détaillée du projet 1 avec les objectifs atteints et les défis relevés.",
        image: "https://via.placeholder.com/300x200",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "#",
        github: "#"
    },
    {
        title: "Projet 2",
        description: "Description détaillée du projet 2 mettant en avant les fonctionnalités principales et les solutions techniques.",
        image: "https://via.placeholder.com/300x200",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "#",
        github: "#"
    },
    {
        title: "Projet 3",
        description: "Description détaillée du projet 3 expliquant l'architecture et les choix technologiques.",
        image: "https://via.placeholder.com/300x200",
        technologies: ["Python", "Django", "PostgreSQL"],
        link: "#",
        github: "#"
    }
];

// Fonction pour afficher les projets avec animation
function displayProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.animationDelay = `${index * 0.2}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.link}" class="project-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Voir le projet
                        </a>
                        <a href="${project.github}" class="project-link" target="_blank">
                            <i class="fab fa-github"></i> Code source
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Gestion améliorée du formulaire de contact avec validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Récupération et validation des données
        const formData = new FormData(this);
        const formProps = Object.fromEntries(formData);
        
        // Validation simple
        let isValid = true;
        const errors = [];
        
        if (!formProps.name?.trim()) {
            isValid = false;
            errors.push('Le nom est requis');
        }
        
        if (!formProps.email?.trim() || !formProps.email.includes('@')) {
            isValid = false;
            errors.push('Email invalide');
        }
        
        if (!formProps.message?.trim()) {
            isValid = false;
            errors.push('Le message est requis');
        }
        
        if (!isValid) {
            alert(errors.join('\n'));
            return;
        }
        
        // Animation de chargement
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
        submitBtn.disabled = true;
        
        // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            this.reset();
            alert('Message envoyé avec succès !');
        } catch (error) {
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Animation douce du scroll avec easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;
            
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            
            // Fonction d'easing
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }
            
            requestAnimationFrame(animation);
        }
    });
});

// Ajout de l'effet de parallaxe sur la section hero
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scroll * 0.5}px`;
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    
    // Animation des éléments au scroll
    createObserver(document.querySelectorAll('.project-card'), 'fade-in-visible');
    createObserver(document.querySelectorAll('.skill-category'), 'slide-in-visible');
    
    // Ajout des styles d'animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .slide-in-visible {
            animation: slideIn 0.6s ease-out forwards;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(44, 62, 80, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
            opacity: 1;
        }
        
        .project-links {
            display: flex;
            gap: 1rem;
            flex-direction: column;
            align-items: center;
        }
        
        .project-image {
            position: relative;
            overflow: hidden;
        }
        
        .timeline-item {
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .timeline-item:nth-child(even) {
            transform: translateX(30px);
        }
        
        .skill-category {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .progress-bar {
            width: 0;
            transition: width 1s ease-in-out;
        }
    `;
    
    document.head.appendChild(style);
    
    // Initialise les animations
    setTimeout(() => {
        animateTimelineItems();
        animateSkillCategories();
    }, 100);
    
    // Configure les barres de progression
    document.querySelectorAll('.skill-progress').forEach(progress => {
        const percentage = progress.previousElementSibling.querySelector('.skill-percentage').textContent;
        progress.dataset.progress = percentage;
    });
});

// Gestion des boutons "Voir les détails"
document.addEventListener('click', (e) => {
    if (e.target.matches('.show-details-btn') || e.target.closest('.show-details-btn')) {
        const btn = e.target.matches('.show-details-btn') ? e.target : e.target.closest('.show-details-btn');
        const description = btn.nextElementSibling;
        
        // Toggle de la classe active
        btn.classList.toggle('active');
        description.classList.toggle('active');
        
        // Mise à jour du texte du bouton
        const btnText = btn.querySelector('.btn-text');
        const btnIcon = btn.querySelector('i');
        if (description.classList.contains('active')) {
            btnText.textContent = 'Masquer les détails';
            btnIcon.className = 'fas fa-chevron-up';
        } else {
            btnText.textContent = 'Voir les détails';
            btnIcon.className = 'fas fa-chevron-down';
        }
    }
}); 