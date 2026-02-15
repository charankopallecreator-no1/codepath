/* ============================================
   CODEPATH - Learning Roadmap Application
   Complete 3-Year Programming Roadmap with Progress Tracking
   ============================================ */

// ============================================
// 3-YEAR ROADMAP DATA STRUCTURE
// ============================================
function getRoadmapData() {
    return [
        {
            year: 1,
            title: "Foundation Year - Programming Fundamentals",
            modules: [
                {
                    id: "digital_basics",
                    name: "Digital Basics",
                    icon: "💻",
                    topics: [
                        { id: "db_1", name: "Introduction to Computers" },
                        { id: "db_2", name: "Number Systems (Binary, Octal, Hex)" },
                        { id: "db_3", name: "Data Representation" },
                        { id: "db_4", name: "Computer Hardware & Software" },
                        { id: "db_5", name: "Operating Systems Basics" },
                        { id: "db_6", name: "Internet & Networking Fundamentals" }
                    ],
                    checkpoint: "Digital Basics Checkpoint"
                },
                {
                    id: "c_programming",
                    name: "C Programming",
                    icon: "🔧",
                    topics: [
                        { id: "c_1", name: "Introduction to C Programming" },
                        { id: "c_2", name: "Variables and Data Types" },
                        { id: "c_3", name: "Operators and Expressions" },
                        { id: "c_4", name: "Control Structures (if, switch)" },
                        { id: "c_5", name: "Loops (for, while, do-while)" },
                        { id: "c_6", name: "Functions and Recursion" },
                        { id: "c_7", name: "Arrays and Strings" },
                        { id: "c_8", name: "Pointers and Memory Management" },
                        { id: "c_9", name: "Structures and Unions" },
                        { id: "c_10", name: "File Handling in C" },
                        { id: "c_11", name: "Dynamic Memory Allocation" },
                        { id: "c_12", name: "Preprocessor Directives" }
                    ],
                    checkpoint: "C Programming Checkpoint"
                },
                {
                    id: "cpp_programming",
                    name: "C++ Programming",
                    icon: "⚡",
                    topics: [
                        { id: "cpp_1", name: "Introduction to C++ and OOP" },
                        { id: "cpp_2", name: "Classes and Objects" },
                        { id: "cpp_3", name: "Constructors and Destructors" },
                        { id: "cpp_4", name: "Inheritance and Polymorphism" },
                        { id: "cpp_5", name: "Encapsulation and Abstraction" },
                        { id: "cpp_6", name: "Operator Overloading" },
                        { id: "cpp_7", name: "Virtual Functions" },
                        { id: "cpp_8", name: "Templates and Generic Programming" },
                        { id: "cpp_9", name: "STL (Standard Template Library)" },
                        { id: "cpp_10", name: "Exception Handling" },
                        { id: "cpp_11", name: "File I/O in C++" },
                        { id: "cpp_12", name: "Smart Pointers and Modern C++" }
                    ],
                    checkpoint: "C++ Programming Checkpoint"
                },
                {
                    id: "python_basics",
                    name: "Python Programming",
                    icon: "🐍",
                    topics: [
                        { id: "py_1", name: "Python Syntax and Basics" },
                        { id: "py_2", name: "Data Types and Variables" },
                        { id: "py_3", name: "Control Flow (if, elif, else)" },
                        { id: "py_4", name: "Loops and Iterations" },
                        { id: "py_5", name: "Functions and Lambda" },
                        { id: "py_6", name: "Lists, Tuples, and Dictionaries" },
                        { id: "py_7", name: "String Manipulation" },
                        { id: "py_8", name: "File Handling in Python" },
                        { id: "py_9", name: "Exception Handling" },
                        { id: "py_10", name: "Object-Oriented Python" },
                        { id: "py_11", name: "Modules and Packages" },
                        { id: "py_12", name: "Regular Expressions" }
                    ],
                    checkpoint: "Python Programming Checkpoint"
                }
            ]
        },
        {
            year: 2,
            title: "Development Year - Web & Data Structures",
            modules: [
                {
                    id: "html_css",
                    name: "HTML & CSS",
                    icon: "🎨",
                    topics: [
                        { id: "html_1", name: "HTML Structure and Semantics" },
                        { id: "html_2", name: "HTML Forms and Input Types" },
                        { id: "html_3", name: "HTML5 New Elements" },
                        { id: "html_4", name: "CSS Selectors and Properties" },
                        { id: "html_5", name: "CSS Box Model" },
                        { id: "html_6", name: "CSS Flexbox Layout" },
                        { id: "html_7", name: "CSS Grid Layout" },
                        { id: "html_8", name: "Responsive Design & Media Queries" },
                        { id: "html_9", name: "CSS Animations and Transitions" },
                        { id: "html_10", name: "CSS Preprocessors (SASS)" }
                    ],
                    checkpoint: "HTML & CSS Checkpoint"
                },
                {
                    id: "javascript",
                    name: "JavaScript",
                    icon: "⚡",
                    topics: [
                        { id: "js_1", name: "JavaScript Fundamentals" },
                        { id: "js_2", name: "DOM Manipulation" },
                        { id: "js_3", name: "Events and Event Handling" },
                        { id: "js_4", name: "Arrays and Array Methods" },
                        { id: "js_5", name: "Objects and JSON" },
                        { id: "js_6", name: "Functions and Closures" },
                        { id: "js_7", name: "Async JavaScript (Callbacks, Promises)" },
                        { id: "js_8", name: "Async/Await" },
                        { id: "js_9", name: "Fetch API and AJAX" },
                        { id: "js_10", name: "ES6+ Features" },
                        { id: "js_11", name: "Local Storage and Session Storage" },
                        { id: "js_12", name: "JavaScript Design Patterns" }
                    ],
                    checkpoint: "JavaScript Checkpoint"
                },
                {
                    id: "dsa",
                    name: "Data Structures & Algorithms",
                    icon: "🧮",
                    topics: [
                        { id: "dsa_1", name: "Algorithm Complexity (Big O)" },
                        { id: "dsa_2", name: "Arrays and Linked Lists" },
                        { id: "dsa_3", name: "Stacks and Queues" },
                        { id: "dsa_4", name: "Trees (Binary, BST, AVL)" },
                        { id: "dsa_5", name: "Graphs and Graph Algorithms" },
                        { id: "dsa_6", name: "Hashing and Hash Tables" },
                        { id: "dsa_7", name: "Sorting Algorithms" },
                        { id: "dsa_8", name: "Searching Algorithms" },
                        { id: "dsa_9", name: "Dynamic Programming" },
                        { id: "dsa_10", name: "Greedy Algorithms" },
                        { id: "dsa_11", name: "Recursion and Backtracking" },
                        { id: "dsa_12", name: "Advanced Problem Solving" }
                    ],
                    checkpoint: "DSA Checkpoint"
                },
                {
                    id: "java",
                    name: "Java Programming",
                    icon: "☕",
                    topics: [
                        { id: "java_1", name: "Java Syntax and Basics" },
                        { id: "java_2", name: "OOP in Java" },
                        { id: "java_3", name: "Collections Framework" },
                        { id: "java_4", name: "Exception Handling in Java" },
                        { id: "java_5", name: "Multithreading and Concurrency" },
                        { id: "java_6", name: "Java I/O and NIO" },
                        { id: "java_7", name: "Java Streams and Lambda" },
                        { id: "java_8", name: "JDBC and Database Connectivity" },
                        { id: "java_9", name: "Java Annotations" },
                        { id: "java_10", name: "Java Reflection API" },
                        { id: "java_11", name: "Design Patterns in Java" },
                        { id: "java_12", name: "Spring Framework Basics" }
                    ],
                    checkpoint: "Java Programming Checkpoint"
                }
            ]
        },
        {
            year: 3,
            title: "Mastery Year - Advanced Frameworks & Full Stack",
            modules: [
                {
                    id: "react",
                    name: "React.js",
                    icon: "⚛️",
                    topics: [
                        { id: "react_1", name: "React Fundamentals and JSX" },
                        { id: "react_2", name: "Components and Props" },
                        { id: "react_3", name: "State and Lifecycle" },
                        { id: "react_4", name: "Event Handling in React" },
                        { id: "react_5", name: "Hooks (useState, useEffect)" },
                        { id: "react_6", name: "Context API" },
                        { id: "react_7", name: "React Router" },
                        { id: "react_8", name: "Forms and Controlled Components" },
                        { id: "react_9", name: "Redux State Management" },
                        { id: "react_10", name: "API Integration" },
                        { id: "react_11", name: "Performance Optimization" },
                        { id: "react_12", name: "Testing React Applications" }
                    ],
                    checkpoint: "React.js Checkpoint"
                },
                {
                    id: "nodejs",
                    name: "Node.js & Express",
                    icon: "🟢",
                    topics: [
                        { id: "node_1", name: "Node.js Fundamentals" },
                        { id: "node_2", name: "npm and Package Management" },
                        { id: "node_3", name: "Express.js Framework" },
                        { id: "node_4", name: "RESTful API Development" },
                        { id: "node_5", name: "Middleware and Routing" },
                        { id: "node_6", name: "MongoDB and Mongoose" },
                        { id: "node_7", name: "Authentication (JWT, OAuth)" },
                        { id: "node_8", name: "File Upload and Processing" },
                        { id: "node_9", name: "WebSockets and Real-time Apps" },
                        { id: "node_10", name: "Error Handling and Logging" },
                        { id: "node_11", name: "Testing Node.js Apps" },
                        { id: "node_12", name: "Deployment and DevOps Basics" }
                    ],
                    checkpoint: "Node.js Checkpoint"
                },
                {
                    id: "angular",
                    name: "Angular",
                    icon: "🅰️",
                    topics: [
                        { id: "ang_1", name: "Angular Architecture" },
                        { id: "ang_2", name: "Components and Templates" },
                        { id: "ang_3", name: "Data Binding and Directives" },
                        { id: "ang_4", name: "Services and Dependency Injection" },
                        { id: "ang_5", name: "Angular Routing" },
                        { id: "ang_6", name: "Forms (Template & Reactive)" },
                        { id: "ang_7", name: "HTTP Client and API Calls" },
                        { id: "ang_8", name: "RxJS and Observables" },
                        { id: "ang_9", name: "State Management (NgRx)" },
                        { id: "ang_10", name: "Angular Material UI" },
                        { id: "ang_11", name: "Testing Angular Apps" },
                        { id: "ang_12", name: "Angular Best Practices" }
                    ],
                    checkpoint: "Angular Checkpoint"
                },
                {
                    id: "php",
                    name: "PHP & Laravel",
                    icon: "🐘",
                    topics: [
                        { id: "php_1", name: "PHP Syntax and Basics" },
                        { id: "php_2", name: "PHP and MySQL Integration" },
                        { id: "php_3", name: "Object-Oriented PHP" },
                        { id: "php_4", name: "Laravel Framework Basics" },
                        { id: "php_5", name: "Laravel Routing and Controllers" },
                        { id: "php_6", name: "Eloquent ORM" },
                        { id: "php_7", name: "Blade Templating Engine" },
                        { id: "php_8", name: "Authentication in Laravel" },
                        { id: "php_9", name: "Laravel APIs" },
                        { id: "php_10", name: "Middleware and Security" },
                        { id: "php_11", name: "Testing in Laravel" },
                        { id: "php_12", name: "Laravel Deployment" }
                    ],
                    checkpoint: "PHP & Laravel Checkpoint"
                }
            ]
        }
    ];
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim().toLowerCase();
    const username = document.getElementById('signupUsername').value.trim().toLowerCase();
    const password = document.getElementById('signupPassword').value;
    
    // Check if user already exists
    if (localStorage.getItem(`user_${username}`)) {
        alert('Username already exists! Please choose a different username.');
        return;
    }
    
    // Check if email already exists
    const existingUsers = getAllUsers();
    if (existingUsers.some(user => user.email === email)) {
        alert('Email already registered! Please use a different email or login.');
        return;
    }
    
    // Create new user object
    const newUser = {
        name: name,
        email: email,
        username: username,
        password: password, // In production, this should be hashed
        joinedDate: new Date().toISOString(),
        progress: {},
        lastActivity: new Date().toISOString(),
        streak: 0
    };
    
    // Save user to localStorage
    localStorage.setItem(`user_${username}`, JSON.stringify(newUser));
    localStorage.setItem('currentUser', username);
    
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
}

function handleLogin(event) {
    event.preventDefault();
    
    const identifier = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    
    // Try to find user by username or email
    let user = null;
    const storedUser = localStorage.getItem(`user_${identifier}`);
    
    if (storedUser) {
        user = JSON.parse(storedUser);
    } else {
        // Search by email
        const allUsers = getAllUsers();
        user = allUsers.find(u => u.email === identifier);
    }
    
    if (!user) {
        alert('User not found! Please check your email/username or sign up.');
        return;
    }
    
    if (user.password !== password) {
        alert('Incorrect password! Please try again.');
        return;
    }
    
    // Login successful
    localStorage.setItem('currentUser', user.username);
    window.location.href = 'dashboard.html';
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}

function getAllUsers() {
    const users = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('user_')) {
            const user = JSON.parse(localStorage.getItem(key));
            users.push(user);
        }
    }
    return users;
}

function getUserData() {
    const currentUsername = localStorage.getItem('currentUser');
    if (!currentUsername) {
        return null;
    }
    
    const userData = localStorage.getItem(`user_${currentUsername}`);
    return userData ? JSON.parse(userData) : null;
}

function saveUserData(user) {
    localStorage.setItem(`user_${user.username}`, JSON.stringify(user));
}

// ============================================
// DASHBOARD FUNCTIONS
// ============================================
function updateDashboardStats(user) {
    const roadmapData = getRoadmapData();
    
    // Calculate overall progress
    let totalTopics = 0;
    let completedTopics = 0;
    let completedModulesCount = 0;
    
    roadmapData.forEach(year => {
        year.modules.forEach(module => {
            const moduleProgress = user.progress[`year${year.year}_${module.id}`] || {};
            const moduleTopics = module.topics.length;
            const moduleCompleted = Object.keys(moduleProgress).filter(key => moduleProgress[key]).length;
            
            totalTopics += moduleTopics;
            completedTopics += moduleCompleted;
            
            if (moduleCompleted === moduleTopics && moduleTopics > 0) {
                completedModulesCount++;
            }
        });
    });
    
    const overallProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    // Update DOM
    document.getElementById('overallProgress').textContent = overallProgress + '%';
    document.getElementById('completedModules').textContent = completedModulesCount;
    
    // Determine current year based on progress
    let currentYear = 'Year 1';
    if (overallProgress >= 66) {
        currentYear = 'Year 3';
    } else if (overallProgress >= 33) {
        currentYear = 'Year 2';
    }
    document.getElementById('currentYear').textContent = currentYear;
    
    // Update streak (for demo purposes)
    document.getElementById('streakDays').textContent = user.streak || 0;
}

// ============================================
// ROADMAP RENDERING FUNCTIONS
// ============================================
function renderRoadmap(user) {
    const roadmapContainer = document.getElementById('roadmapContainer');
    roadmapContainer.innerHTML = '';
    
    const roadmapData = getRoadmapData();
    
    roadmapData.forEach(year => {
        const yearCard = createYearCard(year, user);
        roadmapContainer.appendChild(yearCard);
    });
}

function createYearCard(year, user) {
    const yearCard = document.createElement('div');
    yearCard.className = 'year-card';
    yearCard.id = `year-${year.year}`;
    
    // Calculate year progress
    let totalTopics = 0;
    let completedTopics = 0;
    
    year.modules.forEach(module => {
        const moduleProgress = user.progress[`year${year.year}_${module.id}`] || {};
        module.topics.forEach(topic => {
            totalTopics++;
            if (moduleProgress[topic.id]) {
                completedTopics++;
            }
        });
    });
    
    const yearProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    // Determine if year is active (current year based on progress)
    const overallProgress = calculateOverallProgress(user);
    let isActive = false;
    if (year.year === 1 && overallProgress < 33) isActive = true;
    if (year.year === 2 && overallProgress >= 33 && overallProgress < 66) isActive = true;
    if (year.year === 3 && overallProgress >= 66) isActive = true;
    
    if (isActive) {
        yearCard.classList.add('active');
    }
    
    // Create year header
    const yearHeader = document.createElement('div');
    yearHeader.className = 'year-header';
    yearHeader.innerHTML = `
        <div class="year-title">
            <div class="year-badge">Year ${year.year}</div>
            <h3 class="year-name">${year.title}</h3>
        </div>
        <div class="year-toggle" id="toggle-year-${year.year}">▼</div>
    `;
    
    // Create year progress
    const yearProgressDiv = document.createElement('div');
    yearProgressDiv.className = 'year-progress';
    yearProgressDiv.innerHTML = `
        <div class="progress-bar-container">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${yearProgress}%"></div>
            </div>
            <span class="progress-text">${yearProgress}%</span>
        </div>
    `;
    
    // Create modules grid
    const modulesGrid = document.createElement('div');
    modulesGrid.className = 'modules-grid';
    modulesGrid.id = `modules-year-${year.year}`;
    
    year.modules.forEach(module => {
        const moduleCard = createModuleCard(year.year, module, user);
        modulesGrid.appendChild(moduleCard);
    });
    
    // Append elements
    yearCard.appendChild(yearHeader);
    yearCard.appendChild(yearProgressDiv);
    yearCard.appendChild(modulesGrid);
    
    // Add toggle functionality
    yearHeader.addEventListener('click', () => {
        const toggle = document.getElementById(`toggle-year-${year.year}`);
        const modules = document.getElementById(`modules-year-${year.year}`);
        
        toggle.classList.toggle('open');
        modules.classList.toggle('open');
    });
    
    // Open first year by default or active year
    if (year.year === 1 || isActive) {
        setTimeout(() => {
            document.getElementById(`toggle-year-${year.year}`).classList.add('open');
            document.getElementById(`modules-year-${year.year}`).classList.add('open');
        }, 100);
    }
    
    return yearCard;
}

function createModuleCard(yearNum, module, user) {
    const moduleCard = document.createElement('div');
    moduleCard.className = 'module-card';
    
    const moduleKey = `year${yearNum}_${module.id}`;
    const moduleProgress = user.progress[moduleKey] || {};
    
    // Calculate module progress
    const totalTopics = module.topics.length;
    const completedCount = Object.keys(moduleProgress).filter(key => moduleProgress[key]).length;
    const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
    
    // Create module header
    const moduleHeader = document.createElement('div');
    moduleHeader.className = 'module-header';
    moduleHeader.innerHTML = `
        <div class="module-title">
            <span class="module-icon">${module.icon}</span>
            <span class="module-name">${module.name}</span>
        </div>
        <span class="module-toggle" id="toggle-${moduleKey}">▼</span>
    `;
    
    // Create module progress
    const moduleProgressDiv = document.createElement('div');
    moduleProgressDiv.className = 'module-progress';
    moduleProgressDiv.innerHTML = `
        <div class="mini-progress-bar">
            <div class="mini-progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="progress-label">${completedCount} / ${totalTopics} topics completed</div>
    `;
    
    // Create topics list
    const topicsList = document.createElement('div');
    topicsList.className = 'topics-list';
    topicsList.id = `topics-${moduleKey}`;
    
    module.topics.forEach(topic => {
        const topicItem = createTopicItem(yearNum, module.id, topic, user);
        topicsList.appendChild(topicItem);
    });
    
    // Add checkpoint badge if module is completed
    if (progressPercent === 100) {
        const checkpointBadge = document.createElement('div');
        checkpointBadge.className = 'checkpoint-badge';
        checkpointBadge.textContent = module.checkpoint;
        topicsList.appendChild(checkpointBadge);
    }
    
    // Append elements
    moduleCard.appendChild(moduleHeader);
    moduleCard.appendChild(moduleProgressDiv);
    moduleCard.appendChild(topicsList);
    
    // Add toggle functionality
    moduleHeader.addEventListener('click', () => {
        const toggle = document.getElementById(`toggle-${moduleKey}`);
        const topics = document.getElementById(`topics-${moduleKey}`);
        
        toggle.classList.toggle('open');
        topics.classList.toggle('open');
    });
    
    return moduleCard;
}

function createTopicItem(yearNum, moduleId, topic, user) {
    const topicItem = document.createElement('div');
    topicItem.className = 'topic-item';
    
    const moduleKey = `year${yearNum}_${moduleId}`;
    const moduleProgress = user.progress[moduleKey] || {};
    const isCompleted = moduleProgress[topic.id] || false;
    
    if (isCompleted) {
        topicItem.classList.add('completed');
    }
    
    topicItem.innerHTML = `
        <div class="topic-checkbox ${isCompleted ? 'checked' : ''}" data-year="${yearNum}" data-module="${moduleId}" data-topic="${topic.id}"></div>
        <span class="topic-name">${topic.name}</span>
    `;
    
    // Add click handler for checkbox
    const checkbox = topicItem.querySelector('.topic-checkbox');
    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleTopicCompletion(yearNum, moduleId, topic.id);
    });
    
    return topicItem;
}

// ============================================
// PROGRESS TRACKING FUNCTIONS
// ============================================
function toggleTopicCompletion(yearNum, moduleId, topicId) {
    const user = getUserData();
    if (!user) return;
    
    const moduleKey = `year${yearNum}_${moduleId}`;
    
    if (!user.progress[moduleKey]) {
        user.progress[moduleKey] = {};
    }
    
    // Toggle completion status
    user.progress[moduleKey][topicId] = !user.progress[moduleKey][topicId];
    
    // Update last activity and potentially streak
    user.lastActivity = new Date().toISOString();
    updateStreak(user);
    
    // Save updated user data
    saveUserData(user);
    
    // Re-render the roadmap to reflect changes
    updateDashboardStats(user);
    renderRoadmap(user);
}

function updateStreak(user) {
    const lastActivity = new Date(user.lastActivity);
    const today = new Date();
    const diffTime = Math.abs(today - lastActivity);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 1) {
        user.streak = (user.streak || 0) + 1;
    } else if (diffDays > 1) {
        user.streak = 1;
    }
}

function calculateOverallProgress(user) {
    const roadmapData = getRoadmapData();
    let totalTopics = 0;
    let completedTopics = 0;
    
    roadmapData.forEach(year => {
        year.modules.forEach(module => {
            const moduleProgress = user.progress[`year${year.year}_${module.id}`] || {};
            module.topics.forEach(topic => {
                totalTopics++;
                if (moduleProgress[topic.id]) {
                    completedTopics++;
                }
            });
        });
    });
    
    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
}

// ============================================
// DEMO DATA INITIALIZATION
// ============================================
function initializeDemoData() {
    // Check if demo users already exist
    if (localStorage.getItem('user_demo1')) {
        return; // Demo data already exists
    }
    
    // Create demo users with some progress
    const demoUsers = [
        {
            name: "Alice Johnson",
            email: "alice@demo.com",
            username: "demo1",
            password: "demo123",
            joinedDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
            progress: {
                "year1_digital_basics": { "db_1": true, "db_2": true, "db_3": true, "db_4": true, "db_5": true, "db_6": true },
                "year1_c_programming": { "c_1": true, "c_2": true, "c_3": true, "c_4": true }
            },
            lastActivity: new Date().toISOString(),
            streak: 15
        },
        {
            name: "Bob Smith",
            email: "bob@demo.com",
            username: "demo2",
            password: "demo123",
            joinedDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
            progress: {
                "year1_digital_basics": { "db_1": true, "db_2": true, "db_3": true },
                "year1_c_programming": { "c_1": true, "c_2": true }
            },
            lastActivity: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            streak: 5
        }
    ];
    
    demoUsers.forEach(user => {
        localStorage.setItem(`user_${user.username}`, JSON.stringify(user));
    });
}

// Initialize demo data when the script loads
initializeDemoData();
