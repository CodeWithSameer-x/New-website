document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
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
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected page
            pages.forEach(page => {
                page.classList.remove('active-page');
                if (page.id === pageId) {
                    page.classList.add('active-page');
                }
            });
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // Course Tabs
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
    
    // Course Modal
    const modal = document.getElementById('course-modal');
    const knowMoreButtons = document.querySelectorAll('.know-more');
    const closeModal = document.querySelector('.close-modal');
    const classSelect = document.getElementById('class-select');
    const subjectSelect = document.getElementById('subject-select');
    const chapterSelect = document.getElementById('chapter-select');
    const nextSubjectBtn = document.getElementById('next-subject-btn');
    const nextChapterBtn = document.getElementById('next-chapter-btn');
    const viewChapterBtn = document.getElementById('view-chapter-btn');
    const chapterContent = document.getElementById('chapter-content');
    const chapterTitle = document.getElementById('chapter-title');
    const chapterOverview = document.getElementById('chapter-overview');
    const notesContent = document.getElementById('notes-content');
    const gotItBtn = document.getElementById('got-it-btn');
    const backClassBtn = document.getElementById('back-class-btn');
    const backSubjectBtn = document.getElementById('back-subject-btn');
    
    // Course data
    const coursesData = {
        class9: {
            subjects: ['Physics', 'Chemistry', 'Biology'],
            chapters: {
                Physics: ['Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound'],
                Chemistry: ['Matter in Our Surroundings', 'Is Matter Around Us Pure?', 'Atoms and Molecules', 'Structure of the Atom'],
                Biology: ['The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms', 'Why Do We Fall Ill?', 'Natural Resources']
            },
            overviews: {
                'Motion': 'Motion is the change in position of an object with respect to time. This chapter covers concepts of distance, displacement, speed, velocity, and acceleration.',
                'Force and Laws of Motion': 'This chapter explains Newton\'s three laws of motion and their applications in everyday life.',
                'Gravitation': 'Learn about the universal law of gravitation and its importance in understanding planetary motion.',
                'Work and Energy': 'Understand the concepts of work, energy, and power with practical examples.',
                'Sound': 'Study the production, propagation, and characteristics of sound waves.',
                'Matter in Our Surroundings': 'Introduction to the states of matter and their characteristics.',
                'Is Matter Around Us Pure?': 'Learn about mixtures, solutions, and methods of separation.',
                'Atoms and Molecules': 'Basic concepts of atoms, molecules, and chemical formulas.',
                'Structure of the Atom': 'Study the structure of atoms and subatomic particles.',
                'The Fundamental Unit of Life': 'Introduction to cells as the basic unit of life.',
                'Tissues': 'Study of plant and animal tissues and their functions.',
                'Diversity in Living Organisms': 'Classification of living organisms.',
                'Why Do We Fall Ill?': 'Basic concepts of health and diseases.',
                'Natural Resources': 'Study of natural resources and their conservation.'
            },
            notes: {
                'Motion': '<h6>Key Concepts:</h6><ul><li>Distance vs Displacement</li><li>Speed = Distance/Time</li><li>Velocity = Displacement/Time</li><li>Acceleration = Change in Velocity/Time</li></ul><h6>Formulas:</h6><p>v = u + at</p><p>s = ut + ½at²</p><p>v² = u² + 2as</p>',
                'Force and Laws of Motion': '<h6>Newton\'s Laws:</h6><ol><li>An object remains in uniform motion unless acted upon by a net force</li><li>F = ma</li><li>For every action, there is an equal and opposite reaction</li></ol>'
            }
        },
        class10: {
            subjects: ['Physics', 'Chemistry', 'Biology'],
            chapters: {
                Physics: ['Light - Reflection and Refraction', 'Human Eye and Colourful World', 'Electricity', 'Magnetic Effects of Electric Current'],
                Chemistry: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds'],
                Biology: ['Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity and Evolution']
            },
            overviews: {
                'Light - Reflection and Refraction': 'Study of light behavior including reflection, refraction, and lens/mirror formulas.',
                'Human Eye and Colourful World': 'Understanding the human eye structure and optical phenomena.',
                'Electricity': 'Basic concepts of electric current, circuits, and Ohm\'s law.',
                'Magnetic Effects of Electric Current': 'Study of electromagnetism and its applications.',
                'Chemical Reactions and Equations': 'Writing and balancing chemical equations.',
                'Acids, Bases and Salts': 'Properties and reactions of acids, bases and salts.',
                'Metals and Non-metals': 'Comparative study of metals and non-metals.',
                'Carbon and its Compounds': 'Introduction to organic chemistry and carbon compounds.',
                'Life Processes': 'Nutrition, respiration, transportation and excretion in organisms.',
                'Control and Coordination': 'Nervous system and hormonal coordination.',
                'How do Organisms Reproduce?': 'Modes of reproduction in plants and animals.',
                'Heredity and Evolution': 'Basic principles of genetics and evolution.'
            },
            notes: {
                'Light - Reflection and Refraction': '<h6>Mirror Formula:</h6><p>1/f = 1/v + 1/u</p><h6>Lens Formula:</h6><p>1/f = 1/v - 1/u</p><h6>Refractive Index:</h6><p>n = sin i / sin r</p>',
                'Electricity': '<h6>Ohm\'s Law:</h6><p>V = IR</p><h6>Power:</h6><p>P = VI = I²R = V²/R</p>'
            }
        },
        class11: {
            bio: {
                subjects: ['Biology'],
                chapters: {
                    'Biology': ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Structural Organisation in Animals', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division']
                },
                overviews: {
                    'The Living World': 'Introduction to biodiversity and taxonomy.',
                    'Biological Classification': 'Five-kingdom classification system.',
                    'Plant Kingdom': 'Classification and characteristics of plants.',
                    'Animal Kingdom': 'Classification and characteristics of animals.',
                    'Morphology of Flowering Plants': 'Study of plant forms and structures.',
                    'Anatomy of Flowering Plants': 'Internal structure of plants.',
                    'Structural Organisation in Animals': 'Tissue organization in animals.',
                    'Cell: The Unit of Life': 'Cell structure and functions.',
                    'Biomolecules': 'Chemical constituents of living cells.',
                    'Cell Cycle and Cell Division': 'Processes of mitosis and meiosis.'
                },
                notes: {
                    'The Living World': '<h6>Taxonomic Categories:</h6><p>Kingdom → Phylum → Class → Order → Family → Genus → Species</p>',
                    'Cell: The Unit of Life': '<h6>Cell Theory:</h6><ol><li>All living organisms are composed of cells</li><li>Cell is the basic unit of life</li><li>New cells arise from pre-existing cells</li></ol>'
                }
            },
            chem: {
                subjects: ['Chemistry'],
                chapters: {
                    'Chemistry': ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements and Periodicity in Properties', 'Chemical Bonding and Molecular Structure', 'States of Matter', 'Thermodynamics', 'Equilibrium']
                },
                overviews: {
                    'Some Basic Concepts of Chemistry': 'Mole concept, stoichiometry and concentration terms.',
                    'Structure of Atom': 'Atomic models and quantum numbers.',
                    'Classification of Elements and Periodicity in Properties': 'Modern periodic table and trends.',
                    'Chemical Bonding and Molecular Structure': 'Types of chemical bonds and molecular shapes.',
                    'States of Matter': 'Gaseous and liquid states.',
                    'Thermodynamics': 'Laws of thermodynamics and enthalpy.',
                    'Equilibrium': 'Chemical and ionic equilibrium.'
                },
                notes: {
                    'Some Basic Concepts of Chemistry': '<h6>Mole Concept:</h6><p>1 mole = 6.022 × 10²³ particles</p><h6>Molarity:</h6><p>M = moles of solute / liters of solution</p>',
                    'Thermodynamics': '<h6>First Law:</h6><p>ΔU = q + w</p><h6>Enthalpy:</h6><p>H = U + PV</p>'
                }
            }
        },
        class12: {
            bio: {
                subjects: ['Biology'],
                chapters: {
                    'Biology': ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare']
                },
                overviews: {
                    'Reproduction in Organisms': 'Asexual and sexual reproduction.',
                    'Sexual Reproduction in Flowering Plants': 'Plant reproductive structures and processes.',
                    'Human Reproduction': 'Human reproductive system and embryogenesis.',
                    'Reproductive Health': 'Contraception and sexually transmitted diseases.',
                    'Principles of Inheritance and Variation': 'Mendelian genetics and variations.',
                    'Molecular Basis of Inheritance': 'DNA structure and genetic code.',
                    'Evolution': 'Theories of evolution and evidence.',
                    'Human Health and Disease': 'Common diseases and immunity.',
                    'Strategies for Enhancement in Food Production': 'Animal husbandry and plant breeding.',
                    'Microbes in Human Welfare': 'Applications of microorganisms.'
                },
                notes: {
                    'Molecular Basis of Inheritance': '<h6>DNA Structure:</h6><p>Double helix with complementary base pairing (A-T, C-G)</p><h6>Central Dogma:</h6><p>DNA → RNA → Protein</p>',
                    'Principles of Inheritance and Variation': '<h6>Mendel\'s Laws:</h6><ol><li>Law of Segregation</li><li>Law of Independent Assortment</li><li>Law of Dominance</li></ol>'
                }
            },
            chem: {
                subjects: ['Chemistry'],
                chapters: {
                    'Chemistry': ['Solid State', 'Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Surface Chemistry', 'General Principles and Processes of Isolation of Elements', 'p-Block Elements', 'd- and f-Block Elements', 'Coordination Compounds', 'Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules', 'Polymers', 'Chemistry in Everyday Life']
                },
                overviews: {
                    'Solid State': 'Classification of solids and crystal structures.',
                    'Solutions': 'Types of solutions and colligative properties.',
                    'Electrochemistry': 'Electrochemical cells and conductance.',
                    'Chemical Kinetics': 'Rate of reactions and factors affecting it.',
                    'Surface Chemistry': 'Adsorption, catalysis and colloids.',
                    'General Principles and Processes of Isolation of Elements': 'Metallurgical processes.',
                    'p-Block Elements': 'Group 15-18 elements.',
                    'd- and f-Block Elements': 'Transition and inner transition elements.',
                    'Coordination Compounds': 'Werner\'s theory and nomenclature.',
                    'Haloalkanes and Haloarenes': 'Preparation and properties.',
                    'Alcohols, Phenols and Ethers': 'Nomenclature and reactions.',
                    'Aldehydes, Ketones and Carboxylic Acids': 'Preparation and reactions.',
                    'Amines': 'Classification and reactions.',
                    'Biomolecules': 'Carbohydrates, proteins and nucleic acids.',
                    'Polymers': 'Classification and important polymers.',
                    'Chemistry in Everyday Life': 'Drugs and chemicals in daily life.'
                },
                notes: {
                    'Electrochemistry': '<h6>Nernst Equation:</h6><p>E<sub>cell</sub> = E°<sub>cell</sub> - (RT/nF) ln Q</p>',
                    'Chemical Kinetics': '<h6>Rate Law:</h6><p>Rate = k[A]<sup>x</sup>[B]<sup>y</sup></p><h6>Arrhenius Equation:</h6><p>k = Ae<sup>-Ea/RT</sup></p>'
                }
            }
        },
        neet: {
            chem: {
                subjects: ['Chemistry'],
                chapters: {
                    'Chemistry': ['NEET Physical Chemistry', 'NEET Organic Chemistry', 'NEET Inorganic Chemistry']
                },
                overviews: {
                    'NEET Physical Chemistry': 'Complete NEET syllabus coverage with numerical practice focusing on Physical Chemistry concepts.',
                    'NEET Organic Chemistry': 'Comprehensive coverage of organic chemistry including mechanisms, named reactions and problem solving techniques.',
                    'NEET Inorganic Chemistry': 'Detailed study of inorganic chemistry with focus on theory, trends and periodic properties.'
                },
                notes: {
                    'NEET Physical Chemistry': '<h6>Important Topics:</h6><ul><li>Mole Concept</li><li>Atomic Structure</li><li>Chemical Equilibrium</li><li>Thermodynamics</li><li>Electrochemistry</li><li>Chemical Kinetics</li></ul><h6>Preparation Tips:</h6><p>Focus on numerical problems and conceptual clarity. Practice at least 50-100 numericals from each topic.</p>',
                    'NEET Organic Chemistry': '<h6>Named Reactions:</h6><ul><li>Wurtz Reaction</li><li>Friedel-Crafts Alkylation</li><li>Clemmensen Reduction</li><li>Hoffmann Bromamide</li></ul><h6>Mechanisms to Master:</h6><p>SN1, SN2, E1, E2, Electrophilic substitution, Nucleophilic addition</p>'
                }
            }
        }
    };
    
    // Open modal when Know More button is clicked
    knowMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course');
            modal.style.display = 'flex';
            body.classList.add('modal-open');
            
            // Reset modal to first step
            resetModal();
            
            // Populate class select
            populateClassSelect(courseId);
        });
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        body.classList.remove('modal-open');
    });
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            body.classList.remove('modal-open');
        }
    });
    
    // Class selection handler
    classSelect.addEventListener('change', function() {
        const selectedClass = this.value;
        const courseId = this.getAttribute('data-course');
        
        if (selectedClass) {
            // Enable next button
            nextSubjectBtn.disabled = false;
        } else {
            nextSubjectBtn.disabled = true;
        }
    });
    
    // Next to subject step
    nextSubjectBtn.addEventListener('click', function() {
        const selectedClass = classSelect.value;
        const courseId = classSelect.getAttribute('data-course');
        
        if (selectedClass) {
            // Show subject selection
            document.getElementById('class-step').classList.remove('active-step');
            document.getElementById('subject-step').classList.add('active-step');
            
            // Populate subjects
            populateSubjects(courseId, selectedClass);
        }
    });
    
    // Subject selection handler
    subjectSelect.addEventListener('change', function() {
        const selectedSubject = this.value;
        
        if (selectedSubject) {
            // Enable next button
            nextChapterBtn.disabled = false;
        } else {
            nextChapterBtn.disabled = true;
        }
    });
    
    // Next to chapter step
    nextChapterBtn.addEventListener('click', function() {
        const selectedClass = classSelect.value;
        const selectedSubject = subjectSelect.value;
        const courseId = classSelect.getAttribute('data-course');
        
        if (selectedSubject) {
            // Show chapter selection
            document.getElementById('subject-step').classList.remove('active-step');
            document.getElementById('chapter-step').classList.add('active-step');
            
            // Populate chapters
            populateChapters(courseId, selectedClass, selectedSubject);
        }
    });
    
    // Chapter selection handler
    chapterSelect.addEventListener('change', function() {
        const selectedChapter = this.value;
        
        if (selectedChapter) {
            // Enable view chapter button
            viewChapterBtn.disabled = false;
        } else {
            viewChapterBtn.disabled = true;
        }
    });
    
    // View chapter content
    viewChapterBtn.addEventListener('click', function() {
        const selectedClass = classSelect.value;
        const selectedSubject = subjectSelect.value;
        const selectedChapter = chapterSelect.value;
        const courseId = classSelect.getAttribute('data-course');
        
        // Show content
        showChapterContent(courseId, selectedClass, selectedSubject, selectedChapter);
        
        // Show content step
        document.getElementById('chapter-step').classList.remove('active-step');
        document.getElementById('content-step').classList.add('active-step');
    });
    
    // Back to class selection
    backClassBtn.addEventListener('click', function() {
        document.getElementById('subject-step').classList.remove('active-step');
        document.getElementById('class-step').classList.add('active-step');
    });
    
    // Back to subject selection
    backSubjectBtn.addEventListener('click', function() {
        document.getElementById('chapter-step').classList.remove('active-step');
        document.getElementById('subject-step').classList.add('active-step');
    });
    
    // Got it button - reset modal
    gotItBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        body.classList.remove('modal-open');
        resetModal();
    });
    
    // Form submissions
    document.getElementById('registration-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you soon.');
        this.reset();
    });
    
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    // Helper functions
    function resetModal() {
        // Reset all steps
        document.getElementById('class-step').classList.add('active-step');
        document.getElementById('subject-step').classList.remove('active-step');
        document.getElementById('chapter-step').classList.remove('active-step');
        document.getElementById('content-step').classList.remove('active-step');
        
        // Clear selects
        classSelect.innerHTML = '<option value="">Select Class</option>';
        subjectSelect.innerHTML = '<option value="">Select Subject</option>';
        chapterSelect.innerHTML = '<option value="">Select Chapter</option>';
        
        // Disable buttons
        nextSubjectBtn.disabled = true;
        nextChapterBtn.disabled = true;
        viewChapterBtn.disabled = true;
    }
    
    function populateClassSelect(courseId) {
        // Add classes based on course
        if (courseId === 'school') {
            classSelect.innerHTML = `
                <option value="">Select Class</option>
                <option value="class9">Class 9</option>
                <option value="class10">Class 10</option>
            `;
        } else if (courseId === 'higher-secondary') {
            classSelect.innerHTML = `
                <option value="">Select Class</option>
                <option value="class11">Class 11</option>
                <option value="class12">Class 12</option>
            `;
        } else if (courseId === 'neet') {
            classSelect.innerHTML = `
                <option value="">Select Class</option>
                <option value="neet">NEET Preparation</option>
            `;
        }
        
        classSelect.setAttribute('data-course', courseId);
    }
    
    function populateSubjects(courseId, selectedClass) {
        subjectSelect.innerHTML = '<option value="">Select Subject</option>';
        
        const subjects = coursesData[selectedClass]?.subjects || [];
        
        if (selectedClass === 'class11' || selectedClass === 'class12' || selectedClass === 'neet') {
            // For streams (bio/chem)
            const streamOptions = Object.keys(coursesData[selectedClass]);
            streamOptions.forEach(stream => {
                if (stream !== 'subjects' && stream !== 'chapters' && stream !== 'overviews' && stream !== 'notes') {
                    const option = document.createElement('option');
                    option.value = stream;
                    option.textContent = stream === 'bio' ? 'Biology' : 'Chemistry';
                    subjectSelect.appendChild(option);
                }
            });
        } else {
            // Regular classes
            subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                subjectSelect.appendChild(option);
            });
        }
    }
    
    function populateChapters(courseId, selectedClass, selectedSubject) {
        chapterSelect.innerHTML = '<option value="">Select Chapter</option>';
        
        let chapters = [];
        
        // Handle different course structures
        if (selectedClass === 'class11' || selectedClass === 'class12' || selectedClass === 'neet') {
            chapters = coursesData[selectedClass][selectedSubject]?.chapters[selectedSubject === 'bio' ? 'Biology' : 'Chemistry'] || [];
        } else {
            chapters = coursesData[selectedClass]?.chapters[selectedSubject] || [];
        }
        
        chapters.forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter;
            option.textContent = chapter;
            chapterSelect.appendChild(option);
        });
    }
    
    function showChapterContent(courseId, selectedClass, selectedSubject, selectedChapter) {
        // Set chapter title
        chapterTitle.textContent = selectedChapter;
        
        // Get overview
        let overview = '';
        
        if (selectedClass === 'class11' || selectedClass === 'class12' || selectedClass === 'neet') {
            overview = coursesData[selectedClass][selectedSubject]?.overviews[selectedChapter] || 'No overview available.';
        } else {
            overview = coursesData[selectedClass]?.overviews[selectedChapter] || 'No overview available.';
        }
        
        chapterOverview.textContent = overview;
        
        // Get notes if available
        let notes = '';
        
        if (selectedClass === 'class11' || selectedClass === 'class12' || selectedClass === 'neet') {
            notes = coursesData[selectedClass][selectedSubject]?.notes[selectedChapter] || '<p>No notes available for this chapter.</p>';
        } else {
            notes = coursesData[selectedClass]?.notes[selectedChapter] || '<p>No notes available for this chapter.</p>';
        }
        
        notesContent.innerHTML = notes;
    }
});