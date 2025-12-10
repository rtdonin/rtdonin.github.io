// ============================================
// MAIN.JS - Rendering Logic
// ============================================

(function() {
    'use strict';

    // Helper: Create element with HTML
    function createHTML(html) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstChild;
    }

    // ============================================
    // RENDER FUNCTIONS
    // ============================================

    function renderNav() {
        const navContainer = document.getElementById('nav-links');
        const navExtras = document.getElementById('nav-extras');
        
        // Main nav links
        navContainer.innerHTML = siteData.navLinks
            .map(link => `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.text}</a></li>`)
            .join('');

        // External links + contact button
        navExtras.innerHTML = `
            <li class="nav-item">
                <a class="nav-link" href="${siteData.personal.github}" target="_blank">
                    <i class="bi bi-github"></i> GitHub
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${siteData.personal.linkedin}" target="_blank">
                    <i class="bi bi-linkedin"></i> LinkedIn
                </a>
            </li>
            <li class="nav-item">
                <button class="nav-link btn-contact-nav" data-bs-toggle="modal" data-bs-target="#contactModal">
                    <i class="bi bi-envelope"></i> Contact
                </button>
            </li>
        `;
    }

    function renderHero() {
        document.getElementById('hero-name').textContent = siteData.personal.name;
        document.getElementById('hero-title').textContent = siteData.personal.title;
        
        document.getElementById('hero-links').innerHTML = `
            <button class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#contactModal">
                <i class="bi bi-envelope"></i> Get in Touch
            </button>
            <a href="${siteData.personal.resume}" target="_blank" class="btn-outline-custom">
                <i class="bi bi-file-earmark-text"></i> Resume
            </a>
            <a href="${siteData.personal.github}" target="_blank" class="btn-outline-custom">
                <i class="bi bi-github"></i> GitHub
            </a>
        `;
    }

    function renderAbout() {
        const container = document.getElementById('about-content');
        const paragraphs = siteData.about.split('\n\n');
        container.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    }

    function renderExperience() {
        const container = document.getElementById('experience-timeline');
        container.innerHTML = siteData.experience.map(job => `
            <div class="timeline-item">
                <div class="timeline-header">
                    <h3 class="timeline-title">${job.title}</h3>
                    <div class="timeline-company">${job.company}</div>
                    <div class="timeline-dates">${job.dates}</div>
                </div>
                <ul class="timeline-bullets">
                    ${job.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    function renderEducation() {
        const container = document.getElementById('education-cards');
        container.innerHTML = siteData.education.map(edu => `
            <div class="col">
                <div class="card">
                    <img src="${edu.logo}" class="card-img-top" alt="${edu.school} Logo">
                    <div class="card-body">
                        <h5 class="card-title">${edu.school}</h5>
                        <p class="card-subtitle">
                            ${edu.department}<br>
                            ${edu.degree}<br>
                            ${edu.field}
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="${edu.credentialUrl}" target="_blank" class="card-link">
                            Show Credential
                        </a>
                        ${edu.credentialNote ? `<p class="credential-note">${edu.credentialNote}</p>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderSkills() {
        const container = document.getElementById('skills-container');
        container.innerHTML = `
            <div class="skills-grid">
                ${siteData.skills.map(skill => `
                    <div class="skill-row">
                        <span class="skill-category">${skill.category}</span>
                        <span class="skill-items">${skill.items.join(', ')}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderProjects() {
        const container = document.getElementById('projects-cards');
        container.innerHTML = siteData.projects.map(project => `
            <div class="col">
                <div class="card project-card">
                    <a href="${project.url}" target="_blank">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-subtitle">${project.description}</p>
                    </div>
                    <div class="card-footer">
                        <a href="${project.url}" target="_blank" class="card-link">
                            View Project <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderContactModal() {
        document.getElementById('contact-email').innerHTML = `
            <a href="mailto:${siteData.personal.email}" class="contact-email">
                <i class="bi bi-envelope-fill"></i>
                ${siteData.personal.email}
            </a>
        `;
        
        document.getElementById('contact-social').innerHTML = `
            <a href="${siteData.personal.linkedin}" target="_blank">
                <i class="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="${siteData.personal.github}" target="_blank">
                <i class="bi bi-github"></i> GitHub
            </a>
        `;
    }

    function renderFooter() {
        document.getElementById('footer-content').innerHTML = 
            `&copy; ${new Date().getFullYear()} ${siteData.personal.name}. Built with Bootstrap.`;
    }

    // ============================================
    // INITIALIZE
    // ============================================

    function init() {
        renderNav();
        renderHero();
        renderAbout();
        renderExperience();
        renderEducation();
        renderSkills();
        renderProjects();
        renderContactModal();
        renderFooter();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();