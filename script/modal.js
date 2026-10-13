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
                //shortDescription: "A 8080 microprocessor emulator that can run classic space invaders and COM programs, Fully written in C++ I mainly chose this emulator to learn more about emulator development and low-level programming.",
                longDescription: 
                    "A recreation of the classic Intel 8080 processor in software, \
                    capable of running the iconic Space Invaders arcade game and any COM programs made for the 8080. \
                    Built entirely in C++, this project was a deep dive into computer architecture and low-level programming concepts. \
                    The emulator simulates the instruction set, memory management, and timing characteristics of the original 8080 processor. \
                    I started this project to gain more experience with emulator development, \
                    understanding how processors execute instructions, \
                    and learning some of the intricacies of computer hardware simulation.",
                descriptionMedia: "",
                technologies: ["C++", "Assembly", "Low-level Programming", "Computer Architecture", "SDL2"],
                extraHTMLFile: "https://raw.githubusercontent.com/Slowlor1ss/KrikilionLaurens.github.io/refs/heads/v3/extras/8080Processor.html",
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
                        description: "Successfully runs the original Space Invaders ROM"
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
                //shortDescription: "This was a research project I did about reinforcement learning in 2D shooter games.",
                longDescription: 
                    "This was a research project I did about reinforcement learning in 2D shooter games, \
                    while this project didn't turn out as well as I hoped it would, I did learn a lot from it and really enjoyed it.<br> \
					The code in this project isn't the best as it was mainly focused on research. \
                    However besides these things I did get some nice results and managed to write a small article about the process.<br> \
					<br> \
					You can find the full research paper with all the code on my github (see button below)<br> \
					but here's my conclusion.",
                technologies: ["Genetic Algorithms", "Reinforcement Learning", "SDL2", "C++"],
                extraHTMLFile: "https://raw.githubusercontent.com/Slowlor1ss/KrikilionLaurens.github.io/refs/heads/v3/extras/ReinforcementLearning.html",
                githubUrl: "https://github.com/Slowlor1ss/2D-Shooter-MachineLearning",
                features: [
                    {
                        title: "Multiple Genetic Algorithms",
                        description: "Implementation and comparison of <b>Fitness proportionate selection</b>, <b>Stochastic universal sampling</b>, and <b>Tournament selection</b>."
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
                        description: "Research paper documenting methodology, results, and insights."
                    }
                ]
            },
            {
                title: "Ray Marching",
                image: "https://github.com/Slowlor1ss/KrikilionLaurens.github.io/blob/main/Images/BallsSmaller.gif?raw=true",
                //shortDescription: "This is a small Unity project I made to experiment with compute shaders and ray marching.",
                longDescription: "This was my first time using unity's compute shader so I started off by making a small test project randomizing the color and position of some cubes,<br> \
					I found that it wasn't too diffrent from a class I had in school where we made a raytracer and rasterizer in C++ using <b>DirectX<\/b> and <b>HLSL<\/b>, so it was suprisingly easy to get in to.<br> \
					After that I felt confident enough to start on making the raymarching project.<br> \
                    The raytracer and raymarching and seeing whats possible using the signed distance formulas raymarching uses.<br> \
					If you're interested you can find and download my project and or read more about it on <a href=\"https:\/\/github.com\/Slowlor1ss\/Raymarching\/\" target=\"_blank\">my github</a>.",
                technologies: ["Unity", "HLSL", "Compute Shaders", "Ray Marching", "Distance Fields", "GPU Programming"],
                extraHTMLFile: "https://raw.githubusercontent.com/Slowlor1ss/KrikilionLaurens.github.io/refs/heads/v3/extras/RayMarching.html",
                githubUrl: "https://github.com/Slowlor1ss/Raymarching",
                features: [
                    {
                        title: "Real-time Ray Marching",
                        description: "GPU-accelerated ray marching implementation for simple 3D scene rendering without traditional polygons."
                    },
                    {
                        title: "Distance Field Operations",
                        description: "Distance field techniques for smooth blending, boolean operations, and procedural geometry."
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
                //shortDescription: "A group-based Unity project where you play as a mushroom on a mission to stop a lawnmower from destroying your garden home.",
                longDescription: 
                    "Respect the Lawn is a group game development project created in Unity, centered around a story of a mushroom defending its garden from a rampaging lawnmower. \
                    Our team concisted of 3 artists and 2 programmers, this project emphasizes procedural techniques and gameplay AI. \
                    My personal focus was on making the <b>procedural insect animations<\/b> to reduce the animation workload and enhance movement realism, \
                    as well as implementing <b>AI<\/b> logic using Unity’s NavMesh agents combined with a custom-built Finite State Machine (<b>FSM<\/b>). \
                    and I did most of the game design, coming up, prototyping and working out gameplay features. \
                    More information and showcasing is available on the Itch.io page<br><br> \
                    <b>Below is a small video of a early version of the procedural animation system in work<\/b>",
                descriptionMedia: "Images/ProceduralAnimation.gif",
                technologies: ["Unity", "C#", "NavMesh", "Procedural Animation", "Finite State Machine", "Game Design"],
                itchIoUrl: "https://glennstrooybants.itch.io/respect-the-lawn",
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
                        title: "Game design",
                        description: "I did a lot of work on the game design of this game."
                    },
                    {
                        title: "Prototyping",
                        description: "We started of with multiple prototypes and lots of bad ideas. :)"
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
                image: "Images/CompilerLogo.png",
                //shortDescription: "A compiler written from scratch for a custom-designed programming language with features like type checking, intermediate representation, and assembly output.",
                longDescription: 
                    "This project is a fully custom-built compiler implemented in C++ for a self made programming language (Pretty much just a simple C-styled language). \
                    The compiler includes key phases of compilation: <b>lexical analysis<\/b>, <b>parsing<\/b>, <b>semantic analysis<\/b>, <b>intermediate representation generation<\/b>, and <b>x86 assembly output<\/b>. \
                    It supports static type checking, function calls, and control structures, cnst propagarion and some other optimizations. \
                    The compiler was built as a research project <b>looking in to the impact of certain optimization techniques.<\/b>",
                technologies: ["C++", "Compilers optimizations", "Parsing", "Lexing", "Assembly", "x86 Architecture"],
                //extraHTMLFile: "extras/compiler.html",
                extraHTMLFile: "https://raw.githubusercontent.com/Slowlor1ss/KrikilionLaurens.github.io/refs/heads/v3/extras/compiler.html",
                githubUrl: "https://github.com/Slowlor1ss/Compiler",
                features: [
                    {
                        title: "Compiler Optimizations",
                        description: "The main purpose of this research project was implementing and profiling optimization techniques in compilers."
                    },
                    {
                        title: "Static Type Checking",
                        description: "Implements static type analysis to catch type errors at compile-time."
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
            },
            {
                title: "Age of Empires IV Xbox Port",
                video: "https://github.com/Slowlor1ss/KrikilionLaurens.github.io/blob/main/Images/Age of Empires IV Console Launch Trailer.mp4?raw=true",
                longDescription: 
                    "During my first year at Climax Studios, I contributed to the Xbox port of Age of Empires IV as a member of the optimization team. \
                    My role focused on improving performance and memory efficiency to get the game to run as smooth as possible on Xbox hardware <b>(Xbox one - Xbox Series X)<\/b>. \
                    I worked closely with both PC and Xbox teams both internally and <b>with clients<\/b>, particularly optimizing using <b>PIX captures<\/b> and in -game & -engine tools to diagnose rendering and performance bottlenecks. \
                    I implemented targeted improvements in thread management and memory usage, \
                    Some of which were critical to meeting the constraints of the hardware. \
                    Beyond optimization, I also worked on numerous bug fixes across systems, helping stabilize the port and improve overall user experience. \
                    Additionally, I contributed to UI development (unfortunately) working with XAML porting some of the in-game UI and Radial menus.",
                technologies: [
                    "C++",
                    "Xbox SDK",
                    "PIX Performance Analyzer",
                    "XAML",
                    "Multithreading",
                    "Memory Optimization",
                ],
                //extraHTMLFile: "https://raw.githubusercontent.com/YourUsername/PortfolioExtras/main/age_of_empires_iv_xbox.html",
                features: [
                    {
                        title: "Thread Optimizations",
                        description: "Implemented improvements in parallelization of multithready tasks to improve CPU utilization on Xbox."
                    },
                    {
                        title: "Memory Optimization",
                        description: "Fixing memory leaks, and some graphics optimizations that saved us memory" // the blood rings that generated over 70k vertecies that definitly did not need them
                    },
                    {
                        title: "PIX Integration",
                        description: "Worked extensively with PIX both on Xbox and PC to capture detailed GPU and CPU traces, identifying and resolving rendering and performance issues."
                    },
                    {
                        title: "Bug Fixes and Stabilization",
                        description: "Contributed to identifying and fixing a wide range of bugs across gameplay systems and platform-specific issues."
                    },
                ]
            },
            {
                title: "Microsoft Flight Simulator 2024 — PlayStation",
                image: "Images/FlightSimulator2024.png",
                longDescription:
                    "I worked on the PlayStation version of Microsoft Flight Simulator 2024, helping bring core engine systems across to PS5 and improve the performance on the platform. This involved setting up the project for PlayStation, replacing and stubbing platform-specific Win32 code with PS5 equivalents, porting and building third-party libraries, and resolving the resulting integration and linker issues. I also worked extensively with the PlayStation SDK.\
                    <br><br>\
                    A major focus was platform-level threading: adapting thread creation and management, tuning thread affinity and priorities, working on job scheduling, and useage of fibres. This work included tracking down difficult concurrency issues and deadlocks.\
                    <br><br>\
                    I also worked on a bucket-based memory allocator. It divides memory into pages and groups allocations by size, allowing pages to be reused as allocations are freed. I investigated allocator contention, page-list management, and cleanup strategies to balance memory usage with allocation performance. Fixing a memory leak reduced memory attributed to the allocator after loading from roughly 180 MB to 85 MB without a performance cost, and further allocator work got us to around 30 MB at that point in the loading flow.\
                    <br><br>\
                    Other platform work included PlayStation Activity Cards, the controller lightbar, and integration with the UDS Manager and GEMS systems.",
                technologies: [
                    "C++",
                    "PlayStation 5 SDK",
                    "Platform Porting",
                    "Multithreading",
                    "Job Scheduling",
                    "Thread Affinity",
                    "Fibres",
                    "Memory Management",
                    "Lock-free Algorithms"
                ],
                features: [
                    {
                        title: "PS5 Platform Bring-up",
                        description: "Set up the project for PlayStation, implemented platform equivalents for Win32-specific code, and ported and built libraries for PS5."
                    },
                    {
                        title: "Threading and Scheduling",
                        description: "Worked on PS5 thread creation, priorities, affinity, job scheduling, and fibre usage, while diagnosing deadlocks and concurrency issues."
                    },
                    {
                        title: "Memory Optimisation",
                        description: "Developed a bucket-based allocator using pages grouped by allocation size, and investigated page reuse and cleanup strategies to reduce memory overhead."
                    },
                    {
                        title: "PlayStation Integration",
                        description: "Implemented support for Activity Cards and the controller lightbar, and worked on UDS Manager and GEMS integration."
                    }
                ]
            },
        ];

        function openProjectDetail(index) {
            const project = portfolioData[index];
            const detailPage = document.getElementById('projectDetailPage');
            const mainPage = document.getElementById('mainPage');
            const navbar = document.getElementById('navbar');
            
            // Populate project details
            if(project.image)
            {
                document.getElementById('projectHeroVideo').style = "display: none;";
                document.getElementById('projectHeroMedia').style = "display: block;";
                document.getElementById('projectHeroMedia').src = project.image;
                document.getElementById('projectHeroMedia').alt = project.title;
            }
            else if(project.video)
            {
                document.getElementById('projectHeroMedia').style = "display: none;";
                document.getElementById('projectHeroVideo').style = "display: block;";
                document.getElementById('projectHeroVideo').src = project.video;
                document.getElementById('projectHeroVideo').alt = project.title;
            }
            document.getElementById('projectDetailTitle').textContent = project.title;
            document.getElementById('projectDetailDescription').innerHTML  = project.longDescription;
            document.getElementById('projectDescriptionMedia').src = project.descriptionMedia;
            if(project.descriptionMedia)
                document.getElementById('projectDescriptionMedia').alt = "[Fitting image to the above description]";
            
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
            else if(project.itchIoUrl) {
                const githubLink = document.createElement('a');
                githubLink.href = project.itchIoUrl;
                githubLink.target = '_blank';
                githubLink.className = 'project-link';
                githubLink.innerHTML = `
                    <svg width="27" height="27" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M118 95c-16 10-49 47-49 56v16c0 21 19 38 36 38 21 0 38-17 38-37 0 20 17 37 38 37 20 0 36-17 36-37 0 20 18 37 39 37s39-17 39-37c0 20 16 37 36 37 21 0 38-17 38-37 0 20 17 37 38 37 17 0 36-17 36-38v-16c0-9-33-46-49-56a3511 3511 0 00-276 0zm99 101l-7 9a43 43 0 01-68-9l-7 9c-8 8-19 13-31 13l-4-1-2 46v18c0 36-4 118 16 138 30 7 86 10 142 10s112-3 142-10c20-20 16-102 16-138v-18l-2-46-4 1c-12 0-23-5-31-13l-7-9-7 9a43 43 0 01-68-9 43 43 0 01-38 22h-1-1a43 43 0 01-38-22zm-31 40c12 0 23 0 37 15l33-2 33 2c14-15 25-15 37-15 6 0 29 0 45 46l18 63c13 46-4 47-26 47-31-1-49-24-49-47a371 371 0 01-117 0c1 23-17 46-48 47-22 0-39-1-26-47l18-63c16-46 39-46 45-46zm70 36s-33 31-39 42l22-1v19h34v-19l22 1c-6-11-39-42-39-42z"/>
                    </svg>
                    View on Itch
                `;
                linksContainer.appendChild(githubLink);
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