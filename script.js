
 // Course Data
const courseData = {
    'neet-chemistry': {
        id: 'neet-chemistry',
        title: 'NEET/JEE Chemistry',
        description: 'Master chemistry for medical and engineering entrance exams with expert guidance and comprehensive study materials.',
        color: 'red',
        subcourses: [
            {
                id: 'class-11-neet-chem',
                title: 'Class 11 NEET Chemistry',
                chapters: [
                    { id: 'some-basic-concepts', title: 'Some Basic Concepts of Chemistry', topics: 15 },
                    { id: 'structure-of-atom', title: 'Structure of Atom', topics: 18 },
                    { id: 'classification-elements', title: 'Classification of Elements and Periodicity', topics: 20 },
                    { id: 'chemical-bonding', title: 'Chemical Bonding and Molecular Structure', topics: 25 },
                    { id: 'states-of-matter', title: 'States of Matter', topics: 16 },
                    { id: 'thermodynamics', title: 'Thermodynamics', topics: 22 },
                    { id: 'equilibrium', title: 'Equilibrium', topics: 19 },
                    { id: 'redox-reactions', title: 'Redox Reactions', topics: 14 },
                    { id: 'hydrogen', title: 'Hydrogen', topics: 12 },
                    { id: 's-block-elements', title: 'The s-Block Elements', topics: 17 },
                    { id: 'p-block-elements', title: 'The p-Block Elements', topics: 24 },
                    { id: 'organic-chemistry', title: 'Organic Chemistry - Some Basic Principles', topics: 21 },
                    { id: 'hydrocarbons', title: 'Hydrocarbons', topics: 28 },
                    { id: 'environmental-chemistry', title: 'Environmental Chemistry', topics: 13 }
                ]
            },
            {
                id: 'class-12-neet-chem',
                title: 'Class 12 NEET Chemistry',
                chapters: [
                    { id: 'solid-state', title: 'The Solid State', topics: 16 },
                    { id: 'solutions', title: 'Solutions', topics: 18 },
                    { id: 'electrochemistry', title: 'Electrochemistry', topics: 20 },
                    { id: 'chemical-kinetics', title: 'Chemical Kinetics', topics: 17 },
                    { id: 'surface-chemistry', title: 'Surface Chemistry', topics: 15 },
                    { id: 'general-principles', title: 'General Principles and Processes of Isolation of Elements', topics: 14 },
                    { id: 'p-block-elements-2', title: 'The p-Block Elements', topics: 26 },
                    { id: 'd-f-block-elements', title: 'The d and f Block Elements', topics: 23 },
                    { id: 'coordination-compounds', title: 'Coordination Compounds', topics: 19 },
                    { id: 'haloalkanes', title: 'Haloalkanes and Haloarenes', topics: 21 },
                    { id: 'alcohols-phenols', title: 'Alcohols, Phenols and Ethers', topics: 24 },
                    { id: 'aldehydes-ketones', title: 'Aldehydes, Ketones and Carboxylic Acids', topics: 27 },
                    { id: 'amines', title: 'Amines', topics: 18 },
                    { id: 'biomolecules', title: 'Biomolecules', topics: 22 },
                    { id: 'polymers', title: 'Polymers', topics: 16 },
                    { id: 'chemistry-everyday', title: 'Chemistry in Everyday Life', topics: 14 }
                ]
            }
        ]
    },
    '11-12-bio-chem': {
        id: '11-12-bio-chem',
        title: '11th/12th Biology Chemistry',
        description: 'Excel in board exams with our comprehensive programs covering both biology and chemistry syllabi.',
        color: 'green',
        subcourses: [
            {
                id: 'class-11-biology',
                title: 'Class 11 Biology',
                chapters: [
                    { id: 'living-world', title: 'The Living World', topics: 8 },
                    { id: 'biological-classification', title: 'Biological Classification', topics: 12 },
                    { id: 'plant-kingdom', title: 'Plant Kingdom', topics: 15 },
                    { id: 'animal-kingdom', title: 'Animal Kingdom', topics: 18 },
                    { id: 'morphology-plants', title: 'Morphology of Flowering Plants', topics: 20 },
                    { id: 'anatomy-plants', title: 'Anatomy of Flowering Plants', topics: 16 },
                    { id: 'structural-organisation', title: 'Structural Organisation in Animals', topics: 14 },
                    { id: 'cell-unit-life', title: 'Cell: The Unit of Life', topics: 22 },
                    { id: 'biomolecules', title: 'Biomolecules', topics: 19 },
                    { id: 'cell-cycle', title: 'Cell Cycle and Cell Division', topics: 17 },
                    { id: 'transport-plants', title: 'Transport in Plants', topics: 21 },
                    { id: 'mineral-nutrition', title: 'Mineral Nutrition', topics: 13 },
                    { id: 'photosynthesis', title: 'Photosynthesis in Higher Plants', topics: 25 },
                    { id: 'respiration-plants', title: 'Respiration in Plants', topics: 18 },
                    { id: 'plant-growth', title: 'Plant Growth and Development', topics: 16 },
                    { id: 'digestion-absorption', title: 'Digestion and Absorption', topics: 20 },
                    { id: 'breathing-exchange', title: 'Breathing and Exchange of Gases', topics: 17 },
                    { id: 'body-fluids', title: 'Body Fluids and Circulation', topics: 19 },
                    { id: 'excretory-products', title: 'Excretory Products and their Elimination', topics: 15 },
                    { id: 'locomotion-movement', title: 'Locomotion and Movement', topics: 14 },
                    { id: 'neural-control', title: 'Neural Control and Coordination', topics: 23 },
                    { id: 'chemical-coordination', title: 'Chemical Coordination and Integration', topics: 18 }
                ]
            },
            {
                id: 'class-11-chemistry',
                title: 'Class 11 Chemistry',
                chapters: [
                    { id: 'basic-concepts-chem', title: 'Some Basic Concepts of Chemistry', topics: 15 },
                    { id: 'structure-atom', title: 'Structure of Atom', topics: 18 },
                    { id: 'classification-periodicity', title: 'Classification of Elements and Periodicity in Properties', topics: 20 },
                    { id: 'chemical-bonding-structure', title: 'Chemical Bonding and Molecular Structure', topics: 25 },
                    { id: 'states-matter', title: 'States of Matter', topics: 16 },
                    { id: 'thermodynamics-chem', title: 'Thermodynamics', topics: 22 },
                    { id: 'equilibrium-chem', title: 'Equilibrium', topics: 19 },
                    { id: 'redox-reactions-chem', title: 'Redox Reactions', topics: 14 },
                    { id: 'hydrogen-chem', title: 'Hydrogen', topics: 12 },
                    { id: 's-block-chem', title: 'The s-Block Elements', topics: 17 },
                    { id: 'p-block-chem', title: 'The p-Block Elements', topics: 24 },
                    { id: 'organic-basic', title: 'Organic Chemistry - Some Basic Principles and Techniques', topics: 21 },
                    { id: 'hydrocarbons-chem', title: 'Hydrocarbons', topics: 28 },
                    { id: 'environmental-chem', title: 'Environmental Chemistry', topics: 13 }
                ]
            },
            {
                id: 'class-12-biology',
                title: 'Class 12 Biology',
                chapters: [
                    { id: 'reproduction-organisms', title: 'Reproduction in Organisms', topics: 16 },
                    { id: 'sexual-reproduction', title: 'Sexual Reproduction in Flowering Plants', topics: 22 },
                    { id: 'human-reproduction', title: 'Human Reproduction', topics: 20 },
                    { id: 'reproductive-health', title: 'Reproductive Health', topics: 15 },
                    { id: 'heredity-variation', title: 'Principles of Inheritance and Variation', topics: 25 },
                    { id: 'molecular-basis', title: 'Molecular Basis of Inheritance', topics: 28 },
                    { id: 'evolution', title: 'Evolution', topics: 24 },
                    { id: 'human-health', title: 'Human Health and Disease', topics: 21 },
                    { id: 'food-production', title: 'Strategies for Enhancement in Food Production', topics: 18 },
                    { id: 'microbes-welfare', title: 'Microbes in Human Welfare', topics: 17 },
                    { id: 'biotechnology-principles', title: 'Biotechnology: Principles and Processes', topics: 19 },
                    { id: 'biotechnology-applications', title: 'Biotechnology and its Applications', topics: 22 },
                    { id: 'organisms-populations', title: 'Organisms and Populations', topics: 20 },
                    { id: 'ecosystem', title: 'Ecosystem', topics: 23 },
                    { id: 'biodiversity-conservation', title: 'Biodiversity and Conservation', topics: 18 },
                    { id: 'environmental-issues', title: 'Environmental Issues', topics: 16 }
                ]
            },
            {
                id: 'class-12-chemistry',
                title: 'Class 12 Chemistry',
                chapters: [
                    { id: 'solid-state-12', title: 'The Solid State', topics: 16 },
                    { id: 'solutions-12', title: 'Solutions', topics: 18 },
                    { id: 'electrochemistry-12', title: 'Electrochemistry', topics: 20 },
                    { id: 'chemical-kinetics-12', title: 'Chemical Kinetics', topics: 17 },
                    { id: 'surface-chemistry-12', title: 'Surface Chemistry', topics: 15 },
                    { id: 'isolation-elements', title: 'General Principles and Processes of Isolation of Elements', topics: 14 },
                    { id: 'p-block-12', title: 'The p-Block Elements', topics: 26 },
                    { id: 'd-f-block-12', title: 'The d and f Block Elements', topics: 23 },
                    { id: 'coordination-12', title: 'Coordination Compounds', topics: 19 },
                    { id: 'haloalkanes-12', title: 'Haloalkanes and Haloarenes', topics: 21 },
                    { id: 'alcohols-12', title: 'Alcohols, Phenols and Ethers', topics: 24 },
                    { id: 'aldehydes-12', title: 'Aldehydes, Ketones and Carboxylic Acids', topics: 27 },
                    { id: 'amines-12', title: 'Amines', topics: 18 },
                    { id: 'biomolecules-12', title: 'Biomolecules', topics: 22 },
                    { id: 'polymers-12', title: 'Polymers', topics: 16 },
                    { id: 'chemistry-life', title: 'Chemistry in Everyday Life', topics: 14 }
                ]
            }
        ]
    },
    '9-10-foundation': {
        id: '9-10-foundation',
        title: '9th/10th Foundation Science',
        description: 'Build strong foundations in science concepts to excel in higher studies and competitive examinations.',
        color: 'blue',
        subcourses: [
            {
                id: 'class-9-science',
                title: 'Class 9 Science',
                chapters: [
                    { id: 'matter-surroundings', title: 'Matter in Our Surroundings', topics: 12 },
                    { id: 'pure-substances', title: 'Is Matter Around Us Pure', topics: 14 },
                    { id: 'atoms-molecules', title: 'Atoms and Molecules', topics: 16 },
                    { id: 'structure-atom-9', title: 'Structure of the Atom', topics: 15 },
                    { id: 'fundamental-unit', title: 'The Fundamental Unit of Life', topics: 18 },
                    { id: 'tissues', title: 'Tissues', topics: 20 },
                    { id: 'diversity-living', title: 'Diversity in Living Organisms', topics: 22 },
                    { id: 'motion', title: 'Motion', topics: 17 },
                    { id: 'force-laws', title: 'Force and Laws of Motion', topics: 19 },
                    { id: 'gravitation', title: 'Gravitation', topics: 16 },
                    { id: 'work-energy', title: 'Work and Energy', topics: 15 },
                    { id: 'sound', title: 'Sound', topics: 14 },
                    { id: 'improvement-food', title: 'Why Do We Fall Ill', topics: 13 },
                    { id: 'natural-resources', title: 'Natural Resources', topics: 18 },
                    { id: 'improvement-food-resources', title: 'Improvement in Food Resources', topics: 16 }
                ]
            },
            {
                id: 'class-10-science',
                title: 'Class 10 Science',
                chapters: [
                    { id: 'chemical-reactions', title: 'Chemical Reactions and Equations', topics: 18 },
                    { id: 'acids-bases', title: 'Acids, Bases and Salts', topics: 20 },
                    { id: 'metals-nonmetals', title: 'Metals and Non-metals', topics: 22 },
                    { id: 'carbon-compounds', title: 'Carbon and its Compounds', topics: 25 },
                    { id: 'periodic-classification', title: 'Periodic Classification of Elements', topics: 16 },
                    { id: 'life-processes', title: 'Life Processes', topics: 28 },
                    { id: 'control-coordination', title: 'Control and Coordination', topics: 24 },
                    { id: 'reproduction-10', title: 'How do Organisms Reproduce?', topics: 22 },
                    { id: 'heredity-evolution', title: 'Heredity and Evolution', topics: 20 },
                    { id: 'light-reflection', title: 'Light – Reflection and Refraction', topics: 19 },
                    { id: 'human-eye', title: 'The Human Eye and Colourful World', topics: 17 },
                    { id: 'electricity', title: 'Electricity', topics: 21 },
                    { id: 'magnetic-effects', title: 'Magnetic Effects of Electric Current', topics: 18 },
                    { id: 'sources-energy', title: 'Sources of Energy', topics: 15 },
                    { id: 'environment-management', title: 'Our Environment', topics: 16 },
                    { id: 'management-resources', title: 'Management of Natural Resources', topics: 14 }
                ]
            }
        ]
    }
};

// Global state
let currentViewState = null;
let currentTheme = localStorage.getItem('theme') || 'light';

// Success story images (replace with your actual image paths)
const successImages = {
    success1: 'attached_assets/IMG-20250715-WA0000_1754059476115.jpg',
    success2: 'attached_assets/IMG-20250715-WA0001_1754059476133.jpg',
    success3: 'attached_assets/IMG-20250715-WA0003_1754059476086.jpg'
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeWelcomePopup();
    initializeModals();
    initializeForms();
    
    // Show home section by default
    showSection('home');
});

// Theme Management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'light') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// Navigation
function initializeNavigation() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link, .mobile-nav-link, .footer-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1);
                showSection(sectionId);
                
                // Close mobile menu
                mobileMenu.style.display = 'none';
            }
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Reset courses view if navigating away from courses
        if (sectionId !== 'courses') {
            showCoursesMain();
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Welcome Popup
function initializeWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    const closeBtn = document.getElementById('welcomeClose');
    const getStartedBtn = document.getElementById('getStarted');
    
    // Show popup after 1 second if not shown before
    if (!sessionStorage.getItem('welcomeShown')) {
        setTimeout(() => {
            popup.style.display = 'flex';
            sessionStorage.setItem('welcomeShown', 'true');
        }, 1000);
    }
    
    // Close popup
    function closePopup() {
        popup.style.display = 'none';
    }
    
    closeBtn.addEventListener('click', closePopup);
    getStartedBtn.addEventListener('click', closePopup);
    
    // Close on outside click
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
}

// Course Navigation
function showCourseDetails(courseId) {
    const course = courseData[courseId];
    if (!course) return;
    
    currentViewState = { type: 'course', courseId };
    
    // Hide main courses view
    document.getElementById('coursesMain').style.display = 'none';
    document.getElementById('coursesBackBtn').style.display = 'block';
    
    // Show course details
    const courseDetails = document.getElementById('courseDetails');
    courseDetails.style.display = 'block';
    courseDetails.innerHTML = renderCourseSubcourses(course);
}

function showCoursesMain() {
    currentViewState = null;
    document.getElementById('coursesMain').style.display = 'block';
    document.getElementById('courseDetails').style.display = 'none';
    document.getElementById('coursesBackBtn').style.display = 'none';
    document.getElementById('coursesBreadcrumb').style.display = 'none';
}

function renderCourseSubcourses(course) {
    return `
        <div class="page-transition">
            <div class="back-button">
                <button class="btn btn-ghost" onclick="showCoursesMain()">
                    <i class="fas fa-arrow-left"></i> Back to All Courses
                </button>
            </div>
            
            <div class="section-header">
                <h1>${course.title}</h1>
                <p>Choose your class and start learning</p>
            </div>
            
            <div class="courses-grid">
                ${course.subcourses.map(subcourse => `
                    <div class="card">
                        <h3>${subcourse.title}</h3>
                        <p>Comprehensive coverage of ${subcourse.chapters.length} chapters with detailed explanations and practice questions.</p>
                        <div style="display: flex; justify-content: space-between; margin: 1rem 0; font-size: 0.875rem; color: var(--text-light);">
                            <span>${subcourse.chapters.length} Chapters</span>
                            <span>${subcourse.chapters.reduce((total, chapter) => total + chapter.topics, 0)} Topics</span>
                        </div>
                        <button class="btn btn-primary" onclick="showSubcourseChapters('${course.id}', '${subcourse.id}')">
                            View Chapters
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showSubcourseChapters(courseId, subcourseId) {
    const course = courseData[courseId];
    const subcourse = course.subcourses.find(sc => sc.id === subcourseId);
    if (!subcourse) return;
    
    currentViewState = { type: 'subcourse', courseId, subcourseId };
    
    const courseDetails = document.getElementById('courseDetails');
    courseDetails.innerHTML = renderSubcourseChapters(course, subcourse);
    
    // Update breadcrumb
    updateBreadcrumb();
}

function showChapterDetails(courseId, subcourseId, chapterId) {
    const course = courseData[courseId];
    const subcourse = course.subcourses.find(sc => sc.id === subcourseId);
    const chapter = subcourse?.chapters.find(ch => ch.id === chapterId);
    if (!chapter) return;
    
    currentViewState = { type: 'chapter', courseId, subcourseId, chapterId };
    
    const courseDetails = document.getElementById('courseDetails');
    courseDetails.innerHTML = renderChapterDetails(course, subcourse, chapter);
    
    // Update breadcrumb
    updateBreadcrumb();
}

function renderSubcourseChapters(course, subcourse) {
    return `
        <div class="page-transition">
            <div class="back-button">
                <button class="btn btn-ghost" onclick="showCourseDetails('${course.id}')">
                    <i class="fas fa-arrow-left"></i> Back to ${course.title}
                </button>
            </div>
            
            <div class="section-header">
                <h1>${subcourse.title}</h1>
                <p>${subcourse.chapters.length} comprehensive chapters</p>
            </div>
            
            <div class="courses-grid">
                ${subcourse.chapters.map((chapter, index) => `
                    <div class="card" style="cursor: pointer;" onclick="showChapterDetails('${course.id}', '${subcourse.id}', '${chapter.id}')">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <h4 style="margin: 0; color: var(--text-color); flex: 1;">${chapter.title}</h4>
                            <span style="background: rgba(59, 130, 246, 0.1); color: var(--primary-color); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 500;">
                                ${index + 1}
                            </span>
                        </div>
                        <p style="color: var(--text-light); margin-bottom: 1rem; font-size: 0.875rem;">
                            ${chapter.topics} topics covered with detailed explanations and practice questions
                        </p>
                        <div style="color: var(--primary-color); font-size: 0.875rem; display: flex; align-items: center; gap: 0.25rem;">
                            View Details <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderChapterDetails(course, subcourse, chapter) {
    return `
        <div class="page-transition">
            <div class="back-button">
                <button class="btn btn-ghost" onclick="showSubcourseChapters('${course.id}', '${subcourse.id}')">
                    <i class="fas fa-arrow-left"></i> Back to ${subcourse.title}
                </button>
            </div>
            
            <div class="card" style="max-width: none;">
                <h1 style="margin-bottom: 1.5rem; color: var(--text-color);">${chapter.title}</h1>
                
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
                    <div>
                        <div style="margin-bottom: 2rem;">
                            <h3 style="color: var(--text-color); margin-bottom: 1rem;">Chapter Overview</h3>
                            <p style="color: var(--text-light); line-height: 1.6;">
                                This chapter provides comprehensive coverage of ${chapter.title.toLowerCase()} with detailed explanations, 
                                practical examples, and real-world applications. Students will develop a strong understanding of fundamental 
                                concepts and their interconnections with other topics in the curriculum.
                            </p>
                        </div>
                        
                        <div style="margin-bottom: 2rem;">
                            <h3 style="color: var(--text-color); margin-bottom: 1rem;">What You'll Learn</h3>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div style="background: rgba(59, 130, 246, 0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.1);">
                                    <h4 style="color: var(--text-color); margin-bottom: 0.5rem;">Conceptual Understanding</h4>
                                    <p style="color: var(--text-light); font-size: 0.875rem; margin: 0;">Build strong foundations with clear explanations and examples</p>
                                </div>
                                <div style="background: rgba(16, 185, 129, 0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.1);">
                                    <h4 style="color: var(--text-color); margin-bottom: 0.5rem;">Problem Solving</h4>
                                    <p style="color: var(--text-light); font-size: 0.875rem; margin: 0;">Develop analytical skills through practice questions</p>
                                </div>
                                <div style="background: rgba(239, 68, 68, 0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.1);">
                                    <h4 style="color: var(--text-color); margin-bottom: 0.5rem;">Exam Preparation</h4>
                                    <p style="color: var(--text-light); font-size: 0.875rem; margin: 0;">Master exam patterns and question types</p>
                                </div>
                                <div style="background: rgba(245, 158, 11, 0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.1);">
                                    <h4 style="color: var(--text-color); margin-bottom: 0.5rem;">Practical Application</h4>
                                    <p style="color: var(--text-light); font-size: 0.875rem; margin: 0;">Connect theory with real-world scenarios</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 style="color: var(--text-color); margin-bottom: 1rem;">Course Outcomes</h3>
                            <ul style="list-style: none; color: var(--text-light);">
                                <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <i class="fas fa-award" style="color: var(--secondary-color); margin-top: 0.125rem; flex-shrink: 0;"></i>
                                    <span>Master fundamental concepts and principles of ${chapter.title.toLowerCase()}</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <i class="fas fa-award" style="color: var(--secondary-color); margin-top: 0.125rem; flex-shrink: 0;"></i>
                                    <span>Solve complex problems with confidence and accuracy</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <i class="fas fa-award" style="color: var(--secondary-color); margin-top: 0.125rem; flex-shrink: 0;"></i>
                                    <span>Apply knowledge to new situations and real-world contexts</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <i class="fas fa-award" style="color: var(--secondary-color); margin-top: 0.125rem; flex-shrink: 0;"></i>
                                    <span>Excel in board exams and competitive examinations</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                                    <i class="fas fa-award" style="color: var(--secondary-color); margin-top: 0.125rem; flex-shrink: 0;"></i>
                                    <span>Build strong foundation for advanced studies</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <div class="card">
                            <h4 style="color: var(--text-color); margin-bottom: 1rem;">Chapter Statistics</h4>
                            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: var(--text-light);">Total Topics:</span>
                                    <span style="color: var(--text-color); font-weight: 500;">${chapter.topics}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: var(--text-light);">Difficulty Level:</span>
                                    <span style="color: var(--primary-color); font-weight: 500;">Intermediate</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: var(--text-light);">Duration:</span>
                                    <span style="color: var(--text-color); font-weight: 500;">4-6 weeks</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: var(--text-light);">Practice Questions:</span>
                                    <span style="color: var(--text-color); font-weight: 500;">50+</span>
                                </div>
                            </div>
                            
                            <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 0.75rem;">
                                <button class="btn btn-primary" onclick="showSection('join')">
                                    <i class="fas fa-book-open"></i> Enroll Now
                                </button>
                                <button class="btn" onclick="showSection('contact')" style="border: 1px solid var(--primary-color); color: var(--primary-color); background: transparent;">
                                    Get More Info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function updateBreadcrumb() {
    const breadcrumb = document.getElementById('coursesBreadcrumb');
    if (!currentViewState || currentViewState.type === 'course') {
        breadcrumb.style.display = 'none';
        return;
    }
    
    const course = courseData[currentViewState.courseId];
    let breadcrumbHTML = `
        <a onclick="showCoursesMain()" style="cursor: pointer;">Courses</a>
        <i class="fas fa-chevron-right"></i>
        <a onclick="showCourseDetails('${currentViewState.courseId}')" style="cursor: pointer;">${course.title}</a>
    `;
    
    if (currentViewState.type === 'subcourse' || currentViewState.type === 'chapter') {
        const subcourse = course.subcourses.find(sc => sc.id === currentViewState.subcourseId);
        breadcrumbHTML += `
            <i class="fas fa-chevron-right"></i>
            <a onclick="showSubcourseChapters('${currentViewState.courseId}', '${currentViewState.subcourseId}')" style="cursor: pointer;">${subcourse.title}</a>
        `;
    }
    
    if (currentViewState.type === 'chapter') {
        const subcourse = course.subcourses.find(sc => sc.id === currentViewState.subcourseId);
        const chapter = subcourse?.chapters.find(ch => ch.id === currentViewState.chapterId);
        breadcrumbHTML += `
            <i class="fas fa-chevron-right"></i>
            <span>${chapter.title}</span>
        `;
    }
    
    breadcrumb.innerHTML = breadcrumbHTML;
    breadcrumb.style.display = 'flex';
}

// Success Story Modal with Proper Image Sizing
function initializeModals() {
    const modal = document.getElementById('successModal');
    const modalClose = document.getElementById('modalClose');
    const modalContent = document.querySelector('.modal-content');
    const successImage = document.getElementById('successImage');
    
    // Map your success cards to images
    const successImages = {
        'success1': 'b1.png',
        'success2': 'b2.png', 
        'success3': 'b3.png'
    };
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    window.openSuccessModal = function(successId) {
        const imageSrc = successImages[successId];
        if (imageSrc) {
            successImage.src = imageSrc;
            successImage.onload = function() {
                // Adjust large images to fit screen
                const windowHeight = window.innerHeight;
                const windowWidth = window.innerWidth;
                
                // Calculate maximum display dimensions (90% of window with padding)
                const maxHeight = windowHeight * 0.9 - 40; // 40px for padding
                const maxWidth = windowWidth * 0.9 - 40;
                
                // Apply sizing while maintaining aspect ratio
                if (this.naturalWidth > maxWidth || this.naturalHeight > maxHeight) {
                    const ratio = Math.min(maxWidth/this.naturalWidth, maxHeight/this.naturalHeight);
                    this.style.width = (this.naturalWidth * ratio) + 'px';
                    this.style.height = 'auto';
                } else {
                    // Show original size if smaller than window
                    this.style.width = this.naturalWidth + 'px';
                    this.style.height = 'auto';
                }
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            };
        }
    };
    
    // Close handlers
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
    });
}

document.addEventListener('DOMContentLoaded', initializeModals);
// Form Handling
function initializeForms() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            await handleFormSubmit(this, 'Thank you for contacting us. We\'ll get back to you soon.');
        });
    }
    
    // Join form
    const joinForm = document.getElementById('joinForm');
    if (joinForm) {
        joinForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const agreement = document.getElementById('agreement');
            if (!agreement.checked) {
                showNotification('Please agree to the terms and conditions to proceed.', 'error');
                return;
            }
            await handleFormSubmit(this, 'Thank you for your application. We will contact you within 24 hours to confirm your admission.');
        });
    }
}

async function handleFormSubmit(form, successMessage) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Actual Formspree submission
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showNotification(successMessage, 'success');
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        showNotification('Failed to send. Please try again.', 'error');
    } finally {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Reset agreement checkbox if it exists
        const agreement = form.querySelector('#agreement');
        if (agreement) {
            agreement.checked = false;
        }
    }
}

// Notification System (EXACTLY THE SAME AS YOURS)
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--secondary-color)' : 'var(--accent-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 2000;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add CSS for notification animations (EXACTLY THE SAME AS YOURS)
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Initialize forms when DOM loads
document.addEventListener('DOMContentLoaded', initializeForms);
// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        showSection(targetId);
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.section) {
        showSection(e.state.section);
    }
});

// Update URL when navigating
function updateURL(sectionId) {
    history.pushState({ section: sectionId }, '', `#${sectionId}`);
}

// Initialize URL on load
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
    }
});
