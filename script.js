document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    setTimeout(function() {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 1000);

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
        updateThemeIcon();
    });
    
    function updateThemeIcon() {
        if (body.classList.contains('light-mode')) {
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.innerHTML = mainNav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Remove active class from all nav links
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Course Tab System
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-tab`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('show');
            
            // Rotate icon
            const icon = this.querySelector('i:last-child');
            if (this.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Testimonial Slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    document.querySelector('.slider-next').addEventListener('click', function() {
        let nextSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(nextSlide);
    });
    
    document.querySelector('.slider-prev').addEventListener('click', function() {
        let prevSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        showSlide(prevSlide);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto slide change every 5 seconds
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(nextSlide);
    }, 5000);

    // Form submissions
    document.getElementById('admission-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            class: document.getElementById('class').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission
        console.log('Admission Form Submitted:', formData);
        alert(`Thank you, ${formData.name}! Your admission form has been submitted. We will contact you shortly at ${formData.phone}.`);
        
        // Reset form
        this.reset();
    });
    
    document.getElementById('message-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            subject: document.getElementById('contact-subject').value,
            message: document.getElementById('contact-message').value
        };
        
        // Simulate form submission
        console.log('Contact Form Submitted:', formData);
        alert(`Thank you for your message, ${formData.name}! We will respond to you at ${formData.email} soon.`);
        
        // Reset form
        this.reset();
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize first accordion as open
    if (accordionHeaders.length > 0) {
        accordionHeaders[0].classList.add('active');
        accordionHeaders[0].nextElementSibling.classList.add('show');
        const firstIcon = accordionHeaders[0].querySelector('i:last-child');
        if (firstIcon) firstIcon.style.transform = 'rotate(180deg)';
    }
});
