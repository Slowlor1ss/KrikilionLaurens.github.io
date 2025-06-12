// // Portfolio data storage
// let portfolioData = [
//     {
//         title: "Creative Web Design",
//         image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//         shortDescription: "A modern, responsive website with stunning visual effects and smooth animations.",
//         longDescription: "This project showcases a complete website redesign with a focus on modern aesthetics and user experience. Built with cutting-edge technologies, it features smooth animations, responsive design, and optimized performance. The site includes interactive elements, dynamic content loading, and a sophisticated visual hierarchy that guides users through the content seamlessly."
//     },
//     {
//         title: "Mobile App Interface",
//         image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//         shortDescription: "Clean and intuitive mobile application design with focus on user experience.",
//         longDescription: "A comprehensive mobile application design project that prioritizes user experience and accessibility. The interface features intuitive navigation, clean typography, and a cohesive color scheme. Every interaction has been carefully considered to provide users with a smooth and engaging experience. The design system includes custom icons, consistent spacing, and thoughtful micro-interactions that enhance usability."
//     },
//     {
//         title: "Brand Identity Design",
//         image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//         shortDescription: "Complete brand identity package including logo, colors, and visual guidelines.",
//         longDescription: "A complete brand identity project that establishes a strong visual foundation for a growing company. The package includes logo design, color palette, typography guidelines, and application examples across various media. The brand identity reflects the company's values of innovation and reliability while maintaining approachability and professionalism. The design system is flexible enough to work across digital and print applications."
//     }
// ];

// function openModal(index) {
//     const modal = document.getElementById('modal');
//     const modalMedia = document.getElementById('modalMedia');
//     const modalTitle = document.getElementById('modalTitle');
//     const modalDescription = document.getElementById('modalDescription');

//     const item = portfolioData[index];
//     modalMedia.src = item.image;
//     modalMedia.alt = item.title;
//     modalTitle.textContent = item.title;
//     modalDescription.textContent = item.longDescription;

//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// }

// function closeModal(event) {
//     if (!event || event.target === document.getElementById('modal') || event.target.classList.contains('close-modal')) {
//         document.getElementById('modal').style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// }

// function showAddForm() {
//     document.getElementById('addForm').style.display = 'block';
//     document.getElementById('addForm').scrollIntoView({ behavior: 'smooth' });
// }

// function hideAddForm() {
//     document.getElementById('addForm').style.display = 'none';
//     // Clear form
//     document.getElementById('itemTitle').value = '';
//     document.getElementById('itemImage').value = '';
//     document.getElementById('itemShortDesc').value = '';
//     document.getElementById('itemLongDesc').value = '';
// }

// function addPortfolioItem(event) {
//     event.preventDefault();

//     const title = document.getElementById('itemTitle').value;
//     const image = document.getElementById('itemImage').value;
//     const shortDesc = document.getElementById('itemShortDesc').value;
//     const longDesc = document.getElementById('itemLongDesc').value;

//     // Add to portfolio data
//     portfolioData.push({
//         title: title,
//         image: image,
//         shortDescription: shortDesc,
//         longDescription: longDesc
//     });

//     // Create new portfolio item element
//     const portfolioGrid = document.getElementById('portfolioGrid');
//     const addButton = portfolioGrid.querySelector('.add-item');
    
//     const newItem = document.createElement('div');
//     newItem.className = 'portfolio-item';
//     newItem.onclick = () => openModal(portfolioData.length - 1);
    
//     newItem.innerHTML = `
//         <img src="${image}" alt="${title}" class="item-media">
//         <div class="item-content">
//             <h3 class="item-title">${title}</h3>
//             <p class="item-description">${shortDesc}</p>
//         </div>
//     `;

//     // Insert before the add button
//     portfolioGrid.insertBefore(newItem, addButton);

//     // Hide form and reset
//     hideAddForm();

//     // Animate the new item
//     newItem.style.opacity = '0';
//     newItem.style.transform = 'translateY(20px)';
//     setTimeout(() => {
//         newItem.style.transition = 'all 0.5s ease';
//         newItem.style.opacity = '1';
//         newItem.style.transform = 'translateY(0)';
//     }, 100);
// }

// // Close modal with Escape key
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Escape') {
//         closeModal();
//     }
// });

// // Add smooth scrolling for better UX
// document.addEventListener('DOMContentLoaded', function() {
//     // Animate portfolio items on load
//     const portfolioItems = document.querySelectorAll('.portfolio-item');
//     portfolioItems.forEach((item, index) => {
//         item.style.animationDelay = `${index * 0.1}s`;
//     });
// });


        // Enhanced portfolio data with detailed information
        let portfolioData = [
            {
                title: "8080 Emulator",
                image: "https://github.com/Slowlor1ss/8080Emulator/blob/main/Images/Animation2.gif?raw=true",
                shortDescription: "A 8080 microprocessor emulator that can run classic space invaders and COM programs, Fully written in C++ I mainly chose this emulator to learn more about emulator development and low-level programming.",
                longDescription: "This 8080 microprocessor emulator is a comprehensive recreation of the classic Intel 8080 processor, capable of running authentic vintage software including the iconic Space Invaders arcade game. Built entirely in C++, this project represents a deep dive into computer architecture and low-level programming concepts. The emulator accurately simulates the instruction set, memory management, and timing characteristics of the original 8080 processor, providing an authentic experience for classic software. This project was undertaken to gain hands-on experience with emulator development, understanding how processors execute instructions, and learning about the intricate details of computer hardware simulation.",
                technologies: ["C++", "Assembly", "Low-level Programming", "Computer Architecture", "SDL2"],
                githubUrl: "https://github.com/Slowlor1ss/8080Emulator",
                features: [
                    {
                        title: "Complete Instruction Set",
                        description: "Full implementation of all 8080 opcodes with cycle-accurate timing for authentic behavior."
                    },
                    {
                        title: "Memory Management",
                        description: "Accurate simulation of 8080 memory architecture including stack operations and addressing modes."
                    },
                    {
                        title: "Space Invaders Compatible",
                        description: "Successfully runs the original Space Invaders ROM with full graphics and sound support."
                    },
                    {
                        title: "Debugging Tools",
                        description: "Built-in debugger with step-through execution and register inspection capabilities."
                    }
                ]
            },
            {
                title: "Reinforcement Learning in 2D Shooter",
                image: "https://github.com/Slowlor1ss/2D-Shooter-MachineLearning/blob/main/source/Media/Combined.gif?raw=true",
                shortDescription: "This was a research project I did about reinforcement learning in 2D shooter games.",
                longDescription: "An extensive research project exploring the application of reinforcement learning algorithms in 2D shooter game environments. This project investigates how AI agents can learn complex combat strategies, movement patterns, and decision-making processes through trial and error in a dynamic game environment. The research compares different RL algorithms including Deep Q-Networks (DQN), Policy Gradient methods, and Actor-Critic approaches to determine the most effective strategies for game AI development. The project includes comprehensive analysis of learning curves, behavioral patterns, and performance metrics, contributing valuable insights to the field of game AI research.",
                technologies: ["Python", "TensorFlow", "OpenAI Gym", "Reinforcement Learning", "Neural Networks", "C++"],
                githubUrl: "https://github.com/Slowlor1ss/2D-Shooter-MachineLearning",
                features: [
                    {
                        title: "Multiple RL Algorithms",
                        description: "Implementation and comparison of DQN, Policy Gradient, and Actor-Critic methods for optimal performance."
                    },
                    {
                        title: "Custom Game Environment",
                        description: "Purpose-built 2D shooter environment with configurable difficulty and enemy behaviors."
                    },
                    {
                        title: "Performance Analytics",
                        description: "Comprehensive metrics tracking including learning curves, success rates, and behavioral analysis."
                    },
                    {
                        title: "Research Documentation",
                        description: "Detailed research paper documenting methodology, results, and insights for academic contribution."
                    }
                ]
            },
            {
                title: "Ray Marching Experiments",
                image: "https://github.com/Slowlor1ss/KrikilionLaurens.github.io/blob/main/Images/BallsSmaller.gif?raw=true",
                shortDescription: "This is a small Unity project I made to experiment with compute shaders and ray marching.",
                longDescription: "An experimental Unity project focused on exploring advanced rendering techniques through compute shaders and ray marching algorithms. This project demonstrates the power of GPU computing for real-time procedural rendering, creating complex 3D scenes and effects that would be impossible with traditional polygon-based rendering. The ray marching implementation includes distance field calculations, volumetric rendering, and procedural geometry generation, all running in real-time on the GPU. This project serves as both a learning exercise in advanced graphics programming and a showcase of modern rendering capabilities, pushing the boundaries of what's possible in real-time graphics.",
                technologies: ["Unity", "HLSL", "Compute Shaders", "Ray Marching", "Distance Fields", "GPU Programming"],
                githubUrl: "https://github.com/Slowlor1ss/KrikilionLaurens.github.io",
                features: [
                    {
                        title: "Real-time Ray Marching",
                        description: "GPU-accelerated ray marching implementation for complex 3D scene rendering without traditional polygons."
                    },
                    {
                        title: "Distance Field Operations",
                        description: "Advanced distance field techniques for smooth blending, boolean operations, and procedural geometry."
                    },
                    {
                        title: "Volumetric Effects",
                        description: "Dynamic volumetric rendering capabilities for atmospheric effects and particle-like behaviors."
                    },
                    {
                        title: "Interactive Parameters",
                        description: "Real-time parameter adjustment for experimentation with different ray marching configurations."
                    }
                ]
            },
            {
                title: "Respect the Lawn",
                image: "Images/RespectTheLawnTitle.png",
                shortDescription: "A group-based Unity project where you play as a mushroom on a mission to stop a lawnmower from destroying your garden home.",
                longDescription: "Respect the Lawn is a group game development project created in Unity, centered around a whimsical yet intense story of a mushroom defending its garden from a rampaging lawnmower. Developed collaboratively by a team of 3 artists and 2 programmers, this project emphasizes procedural techniques and gameplay AI. My personal focus is on building procedural insect animations to reduce the animation workload and enhance movement realism, as well as implementing AI logic using Unity’s NavMesh agents combined with a custom-built Finite State Machine (FSM). Still in its early stages, the project showcases ongoing collaboration, creative problem-solving, and a fun twist on traditional game mechanics.",
                technologies: ["Unity", "C#", "NavMesh", "Procedural Animation", "Finite State Machine", "Game AI"],
                githubUrl: "", // No GitHub provided – leave empty or add if available
                features: [
                    {
                        title: "Procedural Animations",
                        description: "Custom insect animations that adapt to terrain in real-time, reducing artist workload and improving movement realism."
                    },
                    {
                        title: "Finite State Machine AI",
                        description: "Custom FSM system managing AI states like patrolling, chasing, and avoiding the lawnmower threat."
                    },
                    {
                        title: "Collaborative Game Design",
                        description: "Joint development with artists and programmers to bring together art, animation, and logic cohesively."
                    },
                    {
                        title: "Unity NavMesh Integration",
                        description: "AI agents use Unity's NavMesh for smart navigation across dynamic garden environments."
                    }
                ]
            },
            {
                title: "Custom Compiler",
                image: "https://github.com/Slowlor1ss/Compiler/raw/main/imgs/example.png", // example screenshot from repo
                shortDescription: "A compiler written from scratch for a custom-designed programming language with features like type checking, intermediate representation, and assembly output.",
                longDescription: "This project is a fully custom-built compiler implemented in C++ for a uniquely designed programming language. The compiler includes key phases of compilation: lexical analysis, parsing, semantic analysis, intermediate representation generation, and x86 assembly output. It supports static type checking, function calls, and control structures, making it a complete end-to-end system for source-to-binary translation. The compiler was built as an educational tool to gain a deeper understanding of language design, parsing techniques, and low-level code generation. This hands-on project demonstrates a strong grasp of formal grammar construction, syntax tree management, and backend assembly generation.",
                technologies: ["C++", "Compilers", "Parsing", "Lexing", "Assembly", "x86 Architecture"],
                githubUrl: "https://github.com/Slowlor1ss/Compiler",
                extraHTMLFile: "extras/compiler.html",
                features: [
                    {
                        title: "Lexical and Syntax Analysis",
                        description: "Custom-built lexer and parser for translating source code into a structured abstract syntax tree (AST)."
                    },
                    {
                        title: "Static Type Checking",
                        description: "Implements static type analysis to catch type errors at compile-time, ensuring safer code."
                    },
                    {
                        title: "Intermediate Representation",
                        description: "Generates a platform-agnostic intermediate code structure to decouple frontend from backend."
                    },
                    {
                        title: "x86 Assembly Output",
                        description: "Outputs valid x86 assembly code which can be assembled and run, completing the compilation pipeline."
                    }
                ]
            }
        ];

        function openProjectDetail(index) {
            const project = portfolioData[index];
            const detailPage = document.getElementById('projectDetailPage');
            const mainPage = document.getElementById('mainPage');
            const navbar = document.getElementById('navbar');
            
            // Populate project details
            document.getElementById('projectHeroMedia').src = project.image;
            document.getElementById('projectHeroMedia').alt = project.title;
            document.getElementById('projectDetailTitle').textContent = project.title;
            document.getElementById('projectDetailDescription').textContent = project.longDescription;
            
            // Populate tech tags
            const techTags = document.getElementById('projectTechTags');
            techTags.innerHTML = ''; // Clear previous content
            project.technologies.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag';
                tag.textContent = tech;
                techTags.appendChild(tag);
            });
            
            // Populate project links
            const linksContainer = document.getElementById('projectLinks');
            linksContainer.innerHTML = ''; // Clear previous content
            if (project.githubUrl) {
                const githubLink = document.createElement('a');
                githubLink.href = project.githubUrl;
                githubLink.target = '_blank';
                githubLink.className = 'project-link';
                githubLink.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                `;
                linksContainer.appendChild(githubLink);
            }
            
            // Extra content container
            const extraContainer = document.getElementById('projectExtra');
            extraContainer.innerHTML = ''; // Clear previous content
            if (project.extraClass)
                extraContainer.className = project.extraClass;

            // Load from external HTML file if provided
            if (project.extraHTMLFile) {
                fetch(project.extraHTMLFile)
                    .then(response => {
                        if (!response.ok) throw new Error(`Failed to load extra HTML: ${response.statusText}`);
                        return response.text();
                    })
                    .then(html => {
                        extraContainer.innerHTML = html;
                    })
                    .catch(error => {
                        console.error(error);
                        extraContainer.innerHTML = `<p style="color: red;">Failed to load extra content.</p>`;
                    });
            }

            // Populate features
            const featuresContainer = document.getElementById('projectFeatures');
            featuresContainer.innerHTML = ''; // Clear previous content
            project.features.forEach(feature => {
                const featureElement = document.createElement('div');
                featureElement.className = 'feature-item';
                featureElement.innerHTML = `
                    <h4 class="feature-title">${feature.title}</h4>
                    <p class="feature-description">${feature.description}</p>
                `;
                featuresContainer.appendChild(featureElement);
            });
            
            // Hide the navbar
            //navbar.style.display = 'none';

            // Trigger the slide animation
            navbar.classList.add('slide-out');
            mainPage.classList.add('slide-out');
            detailPage.classList.add('active');
            
            // Prevent scrolling on main page
            document.body.style.overflow = 'hidden';
            
            // Add to browser history so back button works
            history.pushState({projectOpen: true, projectIndex: index}, '', `#project-${index}`);
        }

        function closeProjectDetail() {
            const detailPage = document.getElementById('projectDetailPage');
            const mainPage = document.getElementById('mainPage');
            const navbar = document.getElementById('navbar'); // <-- Get navbar

            // Show the navbar
            //navbar.style.display = 'block';

            // Trigger the slide back animation
            navbar.classList.remove('slide-out');
            mainPage.classList.remove('slide-out');
            detailPage.classList.remove('active');
            
            // Re-enable scrolling
            document.body.style.overflow = 'auto';
            
            // Update browser history
            if (history.state && history.state.projectOpen) {
                history.back();
            }
        }

        // Scroll to section function (keep your existing implementation)
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Close project detail with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeProjectDetail();
            }
        });

        // Handle browser back button
        window.addEventListener('popstate', function(event) {
            closeProjectDetail();
        });

        // Add smooth scrolling for better UX
        document.addEventListener('DOMContentLoaded', function() {
            // Animate portfolio items on load
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            portfolioItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });
        });