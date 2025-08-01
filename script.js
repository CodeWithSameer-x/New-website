/**
 * Vision Institute of Science - Main JavaScript File
 * Handles all interactive functionality including theme switching, course management,
 * form validation, smooth scrolling, and animations
 */

class VisionInstitute {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.scrollTimeout = null;
        this.elements = {
            loadingScreen: document.getElementById('loadingScreen'),
            themeToggle: document.getElementById('themeToggle'),
            courseDetails: document.getElementById('courseDetails'),
            closeCourseDetails: document.getElementById('closeCourseDetails'),
            courseTitle: document.getElementById('courseTitle'),
            courseDescription: document.getElementById('courseDescription'),
            courseDuration: document.getElementById('courseDuration'),
            courseSubjects: document.getElementById('courseSubjects'),
            syllabusAccordion: document.getElementById('syllabusAccordion'),
            contactForm: document.getElementById('contactForm'),
            submitBtn: document.getElementById('submitBtn'),
            messageAlert: document.getElementById('messageAlert'),
            alertMessage: document.getElementById('alertMessage')
        };
        this.courseData = this.initializeCourseData();
        this.init();
    }

    /**
     * Initialize all functionality
     */
    init() {
        if (!this.elements.loadingScreen) console.warn('Loading screen element not found');
        if (!this.elements.themeToggle) console.warn('Theme toggle element not found');
        if (!this.elements.courseDetails) console.warn('Course details element not found');

        this.initTheme();
        this.initLoadingScreen();
        this.initNavigation();
        this.initCourseSystem();
        this.initContactForm();
        this.initAnimations();
        this.initScrollEffects();
    }

    /**
     * Initialize course data with detailed syllabus
     */
    initializeCourseData() {
        // Inline for static-only; could be moved to courses.json with fetch
        return {
            'neet': {
                title: 'NEET/JEE Preparation',
                description: 'Comprehensive coaching for medical and engineering entrance exams',
                duration: '1-2 Years',
                subjects: 'Physics, Chemistry, Biology/Mathematics',
                syllabus: {
                    'Physics': [
                        'Mechanics - Laws of Motion, Work Energy Power',
                        'Thermodynamics - Heat Transfer, Kinetic Theory',
                        'Electromagnetism - Electric Field, Magnetic Field',
                        'Optics - Ray Optics, Wave Optics',
                        'Modern Physics - Atomic Structure, Nuclear Physics',
                        'Oscillations and Waves - SHM, Sound Waves',
                        'Current Electricity - Ohm\'s Law, Circuits',
                        'Electromagnetic Induction - Faraday\'s Law'
                    ],
                    'Chemistry': [
                        'Physical Chemistry - Atomic Structure, Chemical Bonding',
                        'Organic Chemistry - Hydrocarbons, Functional Groups',
                        'Inorganic Chemistry - Periodic Table, Chemical Reactions',
                        'Thermodynamics - Enthalpy, Entropy, Free Energy',
                        'Chemical Kinetics - Rate of Reaction, Catalysis',
                        'Electrochemistry - Galvanic Cells, Electrolysis',
                        'Solutions - Colligative Properties, Concentration',
                        'Coordination Compounds - Bonding, Isomerism'
                    ],
                    'Biology': [
                        'Cell Biology - Cell Structure, Cell Division',
                        'Genetics - Heredity, DNA, RNA, Protein Synthesis',
                        'Evolution - Origin of Life, Natural Selection',
                        'Plant Physiology - Photosynthesis, Respiration',
                        'Human Physiology - Digestive, Respiratory Systems',
                        'Ecology - Ecosystem, Environmental Issues',
                        'Reproduction - Sexual, Asexual Reproduction',
                        'Biotechnology - Genetic Engineering, Applications'
                    ]
                }
            },
            '11-12': {
                title: 'Class 11 & 12 Science',
                description: 'Complete board exam preparation with concept clarity',
                duration: '2 Years',
                subjects: 'Physics, Chemistry, Biology, Mathematics',
                syllabus: {
                    'Physics (Class 11)': [
                        'Physical World and Measurement',
                        'Kinematics - Motion in Straight Line, Plane',
                        'Laws of Motion - Newton\'s Laws, Friction',
                        'Work, Energy and Power - Conservation Laws',
                        'Motion of System of Particles - Center of Mass',
                        'Rotation of Rigid Bodies - Angular Motion',
                        'Gravitation - Universal Law, Planetary Motion',
                        'Properties of Bulk Matter - Elasticity, Fluids'
                    ],
                    'Physics (Class 12)': [
                        'Electric Charges and Fields - Coulomb\'s Law',
                        'Electrostatic Potential - Capacitance, Energy',
                        'Current Electricity - Ohm\'s Law, Resistance',
                        'Magnetic Effect of Current - Biot-Savart Law',
                        'Electromagnetic Induction - Faraday\'s Law, AC',
                        'Alternating Current - AC Circuits, Power',
                        'Electromagnetic Waves - Properties, Spectrum',
                        'Ray Optics - Reflection, Refraction, Lenses'
                    ],
                    'Chemistry (Class 11)': [
                        'Some Basic Concepts - Matter, Atoms, Molecules',
                        'Structure of Atom - Bohr Model, Quantum Numbers',
                        'Classification of Elements - Periodic Properties',
                        'Chemical Bonding - Ionic, Covalent, Metallic',
                        'States of Matter - Gas Laws, Liquid State',
                        'Thermodynamics - First Law, Enthalpy',
                        'Equilibrium - Chemical, Ionic Equilibrium',
                        'Redox Reactions - Oxidation Numbers'
                    ],
                    'Chemistry (Class 12)': [
                        'Solutions - Types, Concentration, Properties',
                        'Electrochemistry - Galvanic Cells, Corrosion',
                        'Chemical Kinetics - Rate Laws, Mechanisms',
                        'Surface Chemistry - Adsorption, Catalysis',
                        'General Principles of Metallurgy',
                        'p-Block Elements - Groups 15, 16, 17, 18',
                        'd and f Block Elements - Transition Metals',
                        'Coordination Compounds - Werner Theory'
                    ]
                }
            },
            '9-10': {
                title: 'Class 9 & 10 Science',
                description: 'Strong foundation building with concept clarity',
                duration: '2 Years',
                subjects: 'Physics, Chemistry, Biology',
                syllabus: {
                    'Physics (Class 9)': [
                        'Motion - Distance, Displacement, Velocity',
                        'Force and Laws of Motion - Newton\'s Laws',
                        'Gravitation - Universal Law, Weight',
                        'Work and Energy - Kinetic, Potential Energy',
                        'Sound - Production, Propagation, Echo',
                        'Matter in Our Surroundings - States, Changes',
                        'Is Matter Around Us Pure - Mixtures, Solutions',
                        'Atoms and Molecules - Atomic Theory'
                    ],
                    'Physics (Class 10)': [
                        'Light - Reflection, Refraction, Lenses',
                        'Human Eye - Structure, Defects, Correction',
                        'Electricity - Current, Potential, Resistance',
                        'Magnetic Effects of Current - Electromagnets',
                        'Sources of Energy - Conventional, Non-conventional',
                        'Our Environment - Ecosystem, Food Chains',
                        'Natural Resource Management - Forests, Water',
                        'How Do Organisms Reproduce - Types, Process'
                    ],
                    'Chemistry (Class 9)': [
                        'Atoms and Molecules - Laws of Chemical Combination',
                        'Structure of Atom - Electrons, Protons, Neutrons',
                        'Matter in Our Surroundings - Physical Properties',
                        'Is Matter Around Us Pure - Elements, Compounds',
                        'Improvement in Food Resources - Crop Production',
                        'Natural Resources - Air, Water, Soil',
                        'Diversity in Living Organisms - Classification',
                        'Why Do We Fall Ill - Health, Disease'
                    ],
                    'Biology (Class 9 & 10)': [
                        'Life Processes - Nutrition, Respiration, Transport',
                        'Control and Coordination - Nervous, Hormonal System',
                        'How Do Organisms Reproduce - Sexual, Asexual',
                        'Heredity and Evolution - Inheritance, Speciation',
                        'Our Environment - Ecosystem, Biodegradable Waste',
                        'Management of Natural Resources - Conservation',
                        'The Fundamental Unit of Life - Cell Structure',
                        'Tissues - Plant, Animal Tissue Types'
                    ]
                }
            }
        };
    }

    /**
     * Initialize theme system
     */
    initTheme() {
        this.applyTheme(this.currentTheme);
        
        if (this.elements.themeToggle) {
            this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    /**
     * Apply theme to document
     */
    applyTheme(theme) {
        document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
        
        if (this.elements.themeToggle) {
            const icon = this.elements.themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
        
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    /**
     * Initialize loading screen
     */
    initLoadingScreen() {
        window.addEventListener('load', () => {
            if (this.elements.loadingScreen) {
                setTimeout(() => {
                    this.elements.loadingScreen.classList.add('hidden');
                    setTimeout(() => {
                        this.elements.loadingScreen.style.display = 'none';
                    }, 500);
                }, 1000);
            }
        });
    }

    /**
     * Initialize navigation functionality
     */
    initNavigation() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        this.updateActiveNavigation();
        window.addEventListener('scroll', () => {
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => this.updateActiveNavigation(), 100);
        });

        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                if (navbarToggler && navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }

    /**
     * Update active navigation based on scroll position
     */
    updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Initialize course system
     */
    initCourseSystem() {
        const courseCards = document.querySelectorAll('.course-card');
        if (!courseCards.length) console.warn('No course cards found');
        if (!this.elements.courseDetails) return;

        courseCards.forEach(card => {
            card.addEventListener('click', () => {
                const courseType = card.dataset.course;
                this.showCourseDetails(courseType);
            });

            // Add keyboard support
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const courseType = card.dataset.course;
                    this.showCourseDetails(courseType);
                }
            });
        });

        if (this.elements.closeCourseDetails) {
            this.elements.closeCourseDetails.addEventListener('click', () => {
                this.elements.courseDetails.style.display = 'none';
            });
        }
    }

    /**
     * Show course details with dynamic syllabus
     */
    showCourseDetails(courseType) {
        if (!this.courseData[courseType]) {
            console.error(`Course data for ${courseType} not found`);
            return;
        }

        const course = this.courseData[courseType];
        
        // Update course details
        if (this.elements.courseTitle) {
            this.elements.courseTitle.textContent = course.title;
        }
        if (this.elements.courseDescription) {
            this.elements.courseDescription.textContent = course.description;
        }
        if (this.elements.courseDuration) {
            this.elements.courseDuration.textContent = course.duration;
        }
        if (this.elements.courseSubjects) {
            this.elements.courseSubjects.textContent = course.subjects;
        }

        // Populate syllabus accordion
        if (this.elements.syllabusAccordion) {
            this.elements.syllabusAccordion.innerHTML = '';
            Object.keys(course.syllabus).forEach((subject, index) => {
                const accordionItem = document.createElement('div');
                accordionItem.className = 'accordion-item';
                
                accordionItem.innerHTML = `
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
                            ${subject}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}"
                         aria-labelledby="heading${index}" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="chapter-list">
                                ${course.syllabus[subject].map(chapter => `<li>${chapter}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                
                this.elements.syllabusAccordion.appendChild(accordionItem);
            });
        }

        // Show course details section
        if (this.elements.courseDetails) {
            this.elements.courseDetails.style.display = 'block';
            this.elements.courseDetails.scrollIntoView({ behavior: 'smooth' });
        }
    }

    /**
     * Initialize contact form with validation and submission
     */
    initContactForm() {
        if (!this.elements.contactForm || !this.elements.submitBtn) {
            console.warn('Contact form or submit button not found');
            return;
        }

        this.elements.contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                await this.submitForm();
            }
        });

        // Real-time validation
        ['name', 'email', 'phone', 'message'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('input', () => this.validateField(field));
                field.addEventListener('blur', () => this.validateField(field));
            }
        });
    }

    /**
     * Validate form field
     */
    validateField(field) {
        let isValid = true;
        let errorMessage = '';
        
        const value = field.value.trim();
        
        if (field.required && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^\+?[1-9]\d{9,14}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number (10-15 digits)';
            }
        }
        
        const formGroup = field.closest('.form-floating');
        if (formGroup) {
            let errorElement = formGroup.querySelector('.invalid-feedback');
            if (!errorElement && !isValid) {
                errorElement = document.createElement('div');
                errorElement.className = 'invalid-feedback';
                formGroup.appendChild(errorElement);
            }
            
            if (errorElement) {
                errorElement.textContent = errorMessage;
                field.classList.toggle('is-invalid', !isValid);
                errorElement.style.display = isValid ? 'none' : 'block';
            }
        }
        
        return isValid;
    }

    /**
     * Validate entire form
     */
    validateForm() {
        let isValid = true;
        
        ['name', 'email', 'phone', 'message'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field && !this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    /**
     * Submit form data
     */
    async submitForm() {
        const formData = new FormData(this.elements.contactForm);
        
        if (this.elements.submitBtn) {
            this.elements.submitBtn.disabled = true;
            this.elements.submitBtn.innerHTML = `
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Sending...
            `;
        }

        try {
            // Placeholder for static-only; replace with actual endpoint if backend exists
            const response = await fetch(this.elements.contactForm.action, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                this.showAlert('success', 'Your message has been sent successfully!');
                this.elements.contactForm.reset();
                this.clearValidationErrors();
            } else if (response.status === 400) {
                this.showAlert('danger', 'Invalid form data. Please check your inputs.');
            } else if (response.status === 500) {
                this.showAlert('danger', 'Server error. Please try again later.');
            } else {
                this.showAlert('danger', 'Unexpected error. Please try again.');
            }
        } catch (error) {
            this.showAlert('danger', 'Network error. Please check your connection.');
            console.error('Form submission error:', error);
        } finally {
            if (this.elements.submitBtn) {
                this.elements.submitBtn.disabled = false;
                this.elements.submitBtn.innerHTML = `
                    <i class="fas fa-paper-plane"></i> Send Message
                `;
            }
        }
    }

    /**
     * Show alert message
     */
    showAlert(type, message) {
        if (!this.elements.messageAlert || !this.elements.alertMessage) return;

        this.elements.messageAlert.className = `alert alert-${type} d-block`;
        this.elements.alertMessage.textContent = message;
        
        setTimeout(() => {
            this.elements.messageAlert.classList.add('d-none');
        }, 5000);
    }

    /**
     * Clear validation errors
     */
    clearValidationErrors() {
        ['name', 'email', 'phone', 'message'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                const formGroup = field.closest('.form-floating');
                if (formGroup) {
                    const errorElement = formGroup.querySelector('.invalid-feedback');
                    if (errorElement) {
                        errorElement.style.display = 'none';
                    }
                    field.classList.remove('is-invalid');
                }
            }
        });
    }

    /**
     * Initialize animations for elements
     */
    initAnimations() {
        const elements = document.querySelectorAll('.hero-content, .hero-image, .about-content, .about-image, .stat-card, .course-card, .success-card, .faculty-card, .contact-info, .contact-form-container');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => observer.observe(element));

        // Counter animation for stats
        const statNumbers = document.querySelectorAll('.stat-number');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => counterObserver.observe(stat));
    }

    /**
     * Animate counter for stats
     */
    animateCounter(element) {
        const target = parseInt(element.textContent.replace(/[^0-9]/g, ''), 10);
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / target));

        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.ceil(current) + (element.textContent.includes('%') ? '%' : '');
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('%') ? '%' : '');
                clearInterval(timer);
            }
        }, stepTime);
    }

    /**
     * Initialize scroll effects
     */
    initScrollEffects() {
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollTop && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new VisionInstitute();
});                        'Solutions - Types, Concentration, Properties',
                        'Electrochemistry - Galvanic Cells, Corrosion',
                        'Chemical Kinetics - Rate Laws, Mechanisms',
                        'Surface Chemistry - Adsorption, Catalysis',
                        'General Principles of Metallurgy',
                        'p-Block Elements - Groups 15, 16, 17, 18',
                        'd and f Block Elements - Transition Metals',
                        'Coordination Compounds - Werner Theory'
                    ]
                }
            },
            '9-10': {
                title: 'Class 9 & 10 Science',
                description: 'Strong foundation building with concept clarity',
                duration: '2 Years',
                subjects: 'Physics, Chemistry, Biology',
                syllabus: {
                    'Physics (Class 9)': [
                        'Motion - Distance, Displacement, Velocity',
                        'Force and Laws of Motion - Newton\'s Laws',
                        'Gravitation - Universal Law, Weight',
                        'Work and Energy - Kinetic, Potential Energy',
                        'Sound - Production, Propagation, Echo',
                        'Matter in Our Surroundings - States, Changes',
                        'Is Matter Around Us Pure - Mixtures, Solutions',
                        'Atoms and Molecules - Atomic Theory'
                    ],
                    'Physics (Class 10)': [
                        'Light - Reflection, Refraction, Lenses',
                        'Human Eye - Structure, Defects, Correction',
                        'Electricity - Current, Potential, Resistance',
                        'Magnetic Effects of Current - Electromagnets',
                        'Sources of Energy - Conventional, Non-conventional',
                        'Our Environment - Ecosystem, Food Chains',
                        'Natural Resource Management - Forests, Water',
                        'How Do Organisms Reproduce - Types, Process'
                    ],
                    'Chemistry (Class 9)': [
                        'Atoms and Molecules - Laws of Chemical Combination',
                        'Structure of Atom - Electrons, Protons, Neutrons',
                        'Matter in Our Surroundings - Physical Properties',
                        'Is Matter Around Us Pure - Elements, Compounds',
                        'Improvement in Food Resources - Crop Production',
                        'Natural Resources - Air, Water, Soil',
                        'Diversity in Living Organisms - Classification',
                        'Why Do We Fall Ill - Health, Disease'
                    ],
                    'Biology (Class 9 & 10)': [
                        'Life Processes - Nutrition, Respiration, Transport',
                        'Control and Coordination - Nervous, Hormonal System',
                        'How Do Organisms Reproduce - Sexual, Asexual',
                        'Heredity and Evolution - Inheritance, Speciation',
                        'Our Environment - Ecosystem, Biodegradable Waste',
                        'Management of Natural Resources - Conservation',
                        'The Fundamental Unit of Life - Cell Structure',
                        'Tissues - Plant, Animal Tissue Types'
                    ]
                }
            }
        };
    }

    /**
     * Initialize theme system
     */
    initTheme() {
        this.applyTheme(this.currentTheme);
        
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    /**
     * Apply theme to document
     */
    applyTheme(theme) {
        document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
        
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
        
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    /**
     * Initialize loading screen
     */
    initLoadingScreen() {
        window.addEventListener('load', () => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }, 1000);
            }
        });
    }

    /**
     * Initialize navigation functionality
     */
    initNavigation() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active navigation highlighting
        this.updateActiveNavigation();
        window.addEventListener('scroll', () => this.updateActiveNavigation());

        // Mobile menu auto-close
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                if (navbarToggler && navbarCollapse) {
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                }
            });
        });
    }

    /**
     * Update active navigation based on scroll position
     */
    updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Initialize course system
     */
    initCourseSystem() {
        const courseCards = document.querySelectorAll('.course-card');
        const courseDetails = document.getElementById('courseDetails');
        const closeCourseDetails = document.getElementById('closeCourseDetails');

        courseCards.forEach(card => {
            const knowMoreBtn = card.querySelector('.know-more-btn');
            if (knowMoreBtn) {
                knowMoreBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const courseType = card.getAttribute('data-course');
                    this.showCourseDetails(courseType);
                });
            }
        });

        if (closeCourseDetails) {
            closeCourseDetails.addEventListener('click', () => {
                this.hideCourseDetails();
            });
        }
    }

    /**
     * Show course details
     */
    showCourseDetails(courseType) {
        const courseData = this.courseData[courseType];
        if (!courseData) return;

        const courseDetails = document.getElementById('courseDetails');
        const courseTitle = document.getElementById('courseTitle');
        const courseDescription = document.getElementById('courseDescription');
        const courseDuration = document.getElementById('courseDuration');
        const courseSubjects = document.getElementById('courseSubjects');
        const syllabusAccordion = document.getElementById('syllabusAccordion');

        // Update course information
        if (courseTitle) courseTitle.textContent = courseData.title;
        if (courseDescription) courseDescription.textContent = courseData.description;
        if (courseDuration) courseDuration.textContent = courseData.duration;
        if (courseSubjects) courseSubjects.textContent = courseData.subjects;

        // Generate syllabus accordion
        if (syllabusAccordion) {
            syllabusAccordion.innerHTML = '';
            
            Object.entries(courseData.syllabus).forEach(([subject, chapters], index) => {
                const accordionItem = this.createAccordionItem(subject, chapters, index, courseType);
                syllabusAccordion.appendChild(accordionItem);
            });
        }

        // Show course details section
        if (courseDetails) {
            courseDetails.style.display = 'block';
            courseDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    /**
     * Create accordion item for syllabus
     */
    createAccordionItem(subject, chapters, index, courseType) {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        const accordionId = `${courseType}-${index}`;
        const collapseId = `collapse-${accordionId}`;

        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="heading-${accordionId}">
                <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#${collapseId}" 
                        aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="${collapseId}">
                    <i class="fas fa-book me-2"></i>${subject}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
                 aria-labelledby="heading-${accordionId}" data-bs-parent="#syllabusAccordion">
                <div class="accordion-body">
                    <ul class="chapter-list">
                        ${chapters.map(chapter => `<li>${chapter}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        return accordionItem;
    }

    /**
     * Hide course details
     */
    hideCourseDetails() {
        const courseDetails = document.getElementById('courseDetails');
        if (courseDetails) {
            courseDetails.style.display = 'none';
        }
    }

    /**
     * Initialize contact form
     */
    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const messageAlert = document.getElementById('messageAlert');
            const alertMessage = document.getElementById('alertMessage');
            
            // Show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            }

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    this.showAlert('success', 'Your message has been sent successfully! We will get back to you soon.');
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                this.showAlert('danger', 'Sorry, there was an error sending your message. Please try again.');
            } finally {
                // Reset button state
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                }
            }
        });

        // Form validation
        this.initFormValidation();
    }

    /**
     * Initialize form validation
     */
    initFormValidation() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    /**
     * Validate individual form field
     */
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        if (!value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }

        this.showFieldError(field, isValid, errorMessage);
        return isValid;
    }

    /**
     * Show field validation error
     */
    showFieldError(field, isValid, errorMessage) {
        field.classList.toggle('is-invalid', !isValid);
        field.classList.toggle('is-valid', isValid && field.value.trim());

        // Remove existing error message
        const existingError = field.parentNode.querySelector('.invalid-feedback');
        if (existingError) {
            existingError.remove();
        }

        // Add error message if invalid
        if (!isValid && errorMessage) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            errorDiv.textContent = errorMessage;
            field.parentNode.appendChild(errorDiv);
        }
    }

    /**
     * Clear field error
     */
    clearFieldError(field) {
        field.classList.remove('is-invalid');
        const errorDiv = field.parentNode.querySelector('.invalid-feedback');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    /**
     * Show alert message
     */
    showAlert(type, message) {
        const messageAlert = document.getElementById('messageAlert');
        const alertMessage = document.getElementById('alertMessage');
        
        if (messageAlert && alertMessage) {
            messageAlert.className = `alert alert-${type}`;
            alertMessage.textContent = message;
            messageAlert.classList.remove('d-none');
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                messageAlert.classList.add('d-none');
            }, 5000);
        }
    }

    /**
     * Initialize animations
     */
    initAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.stat-card, .course-card, .success-card, .faculty-card, .feature-item')
            .forEach(el => observer.observe(el));

        // Counter animation for stats
        this.initCounterAnimation();
    }

    /**
     * Initialize counter animation for statistics
     */
    initCounterAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const animateCounter = (element) => {
            const target = parseInt(element.textContent.replace(/\D/g, ''));
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = element.textContent.replace(/\d+/, target);
                    clearInterval(timer);
                } else {
                    element.textContent = element.textContent.replace(/\d+/, Math.floor(current));
                }
            }, 20);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    /**
     * Initialize scroll effects
     */
    initScrollEffects() {
        let lastScroll = 0;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Navbar hide/show on scroll
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });

        // Parallax effect for hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                heroSection.style.transform = `translateY(${parallax}px)`;
            });
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VisionInstitute();
});

// Additional utility functions
window.VisionInstitute = {
    /**
     * Smooth scroll to element
     */
    scrollTo: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    /**
     * Show course details externally
     */
    showCourse: (courseType) => {
        if (window.visionApp) {
            window.visionApp.showCourseDetails(courseType);
        }
    },

    /**
     * Toggle theme externally
     */
    toggleTheme: () => {
        if (window.visionApp) {
            window.visionApp.toggleTheme();
        }
    }
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisionInstitute;
                }            const tabId = this.getAttribute('data-tab');
            
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
