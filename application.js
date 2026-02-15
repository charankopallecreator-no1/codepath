/* ============================================
   CODEPATH - Complete Application
   Learning Roadmap + Admin Dashboard Integration
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
        password: password,
        role: 'student',
        joinedDate: new Date().toISOString(),
        progress: {},
        lastActivity: new Date().toISOString(),
        streak: 0
    };
    
    // Save user to localStorage
    localStorage.setItem(`user_${username}`, JSON.stringify(newUser));
    localStorage.setItem('currentUser', username);
    localStorage.setItem('currentUserRole', 'student');
    
    // Generate JWT token for new user
    if (window.tokenManager) {
        window.tokenManager.saveToken({
            username: username,
            email: email,
            name: name,
            role: 'student'
        });
        console.log('[Auth] JWT token generated for new user:', username);
    }
    
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
}

function handleLogin(event) {
    event.preventDefault();
    
    const identifier = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    
    // Try to find user by username first
    let user = null;
    const storedUser = localStorage.getItem(`user_${identifier}`);
    
    if (storedUser) {
        user = JSON.parse(storedUser);
    } else {
        // Search by email (make sure to compare lowercase)
        const allUsers = getAllUsers();
        user = allUsers.find(u => u.email.toLowerCase() === identifier.toLowerCase());
    }
    
    if (!user) {
        alert('User not found! Please check your email/username or sign up.');
        console.log('[Auth] User not found:', identifier);
        console.log('[Auth] Available users:', getAllUsers().map(u => ({ username: u.username, email: u.email })));
        return;
    }
    
    if (user.password !== password) {
        alert('Incorrect password! Please try again.');
        return;
    }
    
    // Login successful - Generate and save JWT token
    localStorage.setItem('currentUser', user.username);
    localStorage.setItem('currentUserRole', user.role || 'student');
    
    // Generate JWT token for this session
    if (window.tokenManager) {
        window.tokenManager.saveToken({
            username: user.username,
            email: user.email,
            name: user.name,
            role: user.role || 'student'
        });
        console.log('[Auth] JWT token generated for user:', user.username, 'Role:', user.role);
    }
    
    // Redirect based on role
    if (user.role === 'admin') {
        window.location.href = 'pwa-admin.html';
    } else {
        window.location.href = 'pwa-dashboard.html';
    }
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        
        // Clear JWT token
        if (window.tokenManager) {
            window.tokenManager.clearToken();
            console.log('[Auth] JWT token cleared on logout');
        }
        
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

function getUserByUsername(username) {
    const userData = localStorage.getItem(`user_${username}`);
    return userData ? JSON.parse(userData) : null;
}

// ============================================
// UTILITY FUNCTIONS FOR PROGRESS CALCULATION
// ============================================
function calculateUserProgress(user) {
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

function calculateOverallProgress(user) {
    return calculateUserProgress(user);
}

function countCompletedModules(user) {
    const roadmapData = getRoadmapData();
    let completedModulesCount = 0;
    
    roadmapData.forEach(year => {
        year.modules.forEach(module => {
            const moduleProgress = user.progress[`year${year.year}_${module.id}`] || {};
            const moduleTopics = module.topics.length;
            const moduleCompleted = Object.keys(moduleProgress).filter(key => moduleProgress[key]).length;
            
            if (moduleCompleted === moduleTopics && moduleTopics > 0) {
                completedModulesCount++;
            }
        });
    });
    
    return completedModulesCount;
}

function determineCurrentYear(user) {
    const overallProgress = calculateUserProgress(user);
    
    if (overallProgress >= 66) {
        return 'Year 3';
    } else if (overallProgress >= 33) {
        return 'Year 2';
    } else {
        return 'Year 1';
    }
}

function getTimeAgo(dateString) {
    if (!dateString) return 'Never';
    
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return past.toLocaleDateString();
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
    if (document.getElementById('overallProgress')) {
        document.getElementById('overallProgress').textContent = overallProgress + '%';
    }
    if (document.getElementById('completedModules')) {
        document.getElementById('completedModules').textContent = completedModulesCount;
    }
    
    // Determine current year based on progress
    let currentYear = 'Year 1';
    if (overallProgress >= 66) {
        currentYear = 'Year 3';
    } else if (overallProgress >= 33) {
        currentYear = 'Year 2';
    }
    if (document.getElementById('currentYear')) {
        document.getElementById('currentYear').textContent = currentYear;
    }
    
    // Update streak
    if (document.getElementById('streakDays')) {
        document.getElementById('streakDays').textContent = user.streak || 0;
    }
}

// ============================================
// ROADMAP RENDERING FUNCTIONS
// ============================================
function renderRoadmap(user) {
    const roadmapContainer = document.getElementById('roadmapContainer');
    if (!roadmapContainer) return;
    
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

// ============================================
// ADMIN DASHBOARD FUNCTIONS
// ============================================
function initializeAdminDashboard() {
    loadOverviewData();
    loadStudentsTable();
    setupFilters();
}

// ============================================
// OVERVIEW DATA
// ============================================
function loadOverviewData() {
    const users = getAllUsers();
    const tests = getAllTests();
    const testResults = getAllTestResults();
    
    // Update stats
    if (document.getElementById('totalUsers')) {
        document.getElementById('totalUsers').textContent = users.length;
    }
    
    // Calculate average progress
    let totalProgress = 0;
    users.forEach(user => {
        totalProgress += calculateUserProgress(user);
    });
    const avgProgress = users.length > 0 ? Math.round(totalProgress / users.length) : 0;
    if (document.getElementById('avgProgress')) {
        document.getElementById('avgProgress').textContent = avgProgress + '%';
    }
    
    // Tests completed
    if (document.getElementById('completedTests')) {
        document.getElementById('completedTests').textContent = testResults.length;
    }
    
    // Average test score
    let totalScore = 0;
    testResults.forEach(result => {
        totalScore += result.score;
    });
    const avgScore = testResults.length > 0 ? Math.round(totalScore / testResults.length) : 0;
    if (document.getElementById('avgTestScore')) {
        document.getElementById('avgTestScore').textContent = avgScore + '%';
    }
    
    // Load activity feed
    loadActivityFeed(users, testResults);
    
    // Load top performers
    loadTopPerformers(users);
}

function loadActivityFeed(users, testResults) {
    const feed = document.getElementById('activityFeed');
    if (!feed) return;
    
    feed.innerHTML = '';
    
    // Create activity items
    const activities = [];
    
    // Recent progress updates
    users.forEach(user => {
        if (user.lastActivity) {
            const timeDiff = Date.now() - new Date(user.lastActivity).getTime();
            const hours = Math.floor(timeDiff / (1000 * 60 * 60));
            
            if (hours < 24) {
                activities.push({
                    type: 'progress',
                    user: user.name,
                    time: hours < 1 ? 'Just now' : `${hours}h ago`,
                    message: 'completed a topic',
                    timestamp: new Date(user.lastActivity).getTime()
                });
            }
        }
    });
    
    // Recent test completions
    testResults.slice(-5).forEach(result => {
        const user = users.find(u => u.username === result.username);
        if (user) {
            activities.push({
                type: 'test',
                user: user.name,
                time: getTimeAgo(result.completedAt),
                message: `scored ${result.score}% on ${result.testTitle}`,
                timestamp: new Date(result.completedAt).getTime()
            });
        }
    });
    
    // Sort by timestamp
    activities.sort((a, b) => b.timestamp - a.timestamp);
    
    // Display activities
    activities.slice(0, 10).forEach(activity => {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `
            <div class="activity-icon ${activity.type}">${activity.type === 'test' ? '📝' : '✅'}</div>
            <div class="activity-content">
                <div class="activity-text"><strong>${activity.user}</strong> ${activity.message}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `;
        feed.appendChild(item);
    });
    
    if (activities.length === 0) {
        feed.innerHTML = '<p class="text-secondary">No recent activity</p>';
    }
}

function loadTopPerformers(users) {
    const container = document.getElementById('topPerformers');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Calculate scores
    const userScores = users.map(user => ({
        ...user,
        progress: calculateUserProgress(user)
    })).sort((a, b) => b.progress - a.progress);
    
    // Display top 5
    userScores.slice(0, 5).forEach((user, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-rank';
        item.innerHTML = `
            <div class="rank-badge ${index < 3 ? 'top-three' : ''}">#${index + 1}</div>
            <div class="rank-info">
                <div class="rank-name">${user.name}</div>
                <div class="rank-progress">${user.progress}% complete</div>
            </div>
            <div class="rank-medal">${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '⭐'}</div>
        `;
        container.appendChild(item);
    });
}

// ============================================
// STUDENTS TABLE
// ============================================
function loadStudentsTable() {
    const users = getAllUsers();
    const tbody = document.getElementById('studentsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    users.forEach(user => {
        const progress = calculateUserProgress(user);
        const currentYear = determineCurrentYear(user);
        const completedModules = countCompletedModules(user);
        const testsCompleted = getUserTestCount(user.username);
        const lastActive = getTimeAgo(user.lastActivity);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="student-info">
                    <div class="student-avatar">${user.name.charAt(0)}</div>
                    <div>
                        <div class="student-name">${user.name}</div>
                        <div class="student-username">@${user.username}</div>
                    </div>
                </div>
            </td>
            <td>${user.email}</td>
            <td>
                <div class="progress-cell">
                    <div class="mini-progress-bar">
                        <div class="mini-progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span>${progress}%</span>
                </div>
            </td>
            <td><span class="badge badge-year">${currentYear}</span></td>
            <td><span class="badge badge-modules">${completedModules}</span></td>
            <td><span class="badge badge-tests">${testsCompleted}</span></td>
            <td>${lastActive}</td>
            <td>
                <button class="btn-icon" onclick="viewStudentDetail('${user.username}')" title="View Details">👁️</button>
                <button class="btn-icon" onclick="assignTestToStudent('${user.username}')" title="Assign Test">📝</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function setupFilters() {
    const searchInput = document.getElementById('studentSearch');
    const filterYear = document.getElementById('filterYear');
    const filterProgress = document.getElementById('filterProgress');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterStudents);
    }
    if (filterYear) {
        filterYear.addEventListener('change', filterStudents);
    }
    if (filterProgress) {
        filterProgress.addEventListener('change', filterStudents);
    }
}

function filterStudents() {
    const searchTerm = document.getElementById('studentSearch')?.value.toLowerCase() || '';
    const yearFilter = document.getElementById('filterYear')?.value || 'all';
    const progressFilter = document.getElementById('filterProgress')?.value || 'all';
    
    const rows = document.querySelectorAll('#studentsTableBody tr');
    
    rows.forEach(row => {
        const name = row.querySelector('.student-name')?.textContent.toLowerCase() || '';
        const email = row.cells[1]?.textContent.toLowerCase() || '';
        const year = row.querySelector('.badge-year')?.textContent || '';
        const progressText = row.querySelector('.progress-cell span')?.textContent || '0%';
        const progress = parseInt(progressText);
        
        let showRow = true;
        
        // Search filter
        if (searchTerm && !name.includes(searchTerm) && !email.includes(searchTerm)) {
            showRow = false;
        }
        
        // Year filter
        if (yearFilter !== 'all' && !year.includes(yearFilter)) {
            showRow = false;
        }
        
        // Progress filter
        if (progressFilter !== 'all') {
            if (progressFilter === 'high' && progress < 75) showRow = false;
            if (progressFilter === 'medium' && (progress < 50 || progress >= 75)) showRow = false;
            if (progressFilter === 'low' && progress >= 50) showRow = false;
        }
        
        row.style.display = showRow ? '' : 'none';
    });
}

// ============================================
// STUDENT DETAIL VIEW
// ============================================
function viewStudentDetail(username) {
    const user = getUserByUsername(username);
    if (!user) return;
    
    const modal = document.getElementById('studentDetailModal');
    if (!modal) return;
    
    const content = document.getElementById('studentDetailContent');
    
    const progress = calculateUserProgress(user);
    const roadmapData = getRoadmapData();
    
    let html = `
        <div class="student-detail-header">
            <div class="student-avatar-large">${user.name.charAt(0)}</div>
            <div class="student-detail-info">
                <h2>${user.name}</h2>
                <p>${user.email} • @${user.username}</p>
                <div class="student-stats">
                    <div class="stat-badge">📊 ${progress}% Complete</div>
                    <div class="stat-badge">🔥 ${user.streak || 0} Day Streak</div>
                    <div class="stat-badge">📅 Joined ${new Date(user.joinedDate).toLocaleDateString()}</div>
                </div>
            </div>
        </div>
        
        <div class="student-detail-tabs">
            <button class="detail-tab active" onclick="switchDetailTab('progress')">Progress</button>
            <button class="detail-tab" onclick="switchDetailTab('tests')">Test Results</button>
            <button class="detail-tab" onclick="switchDetailTab('activity')">Activity Log</button>
        </div>
        
        <div id="detailProgressTab" class="detail-tab-content active">
            <h3>Learning Progress</h3>
    `;
    
    // Year-wise progress
    roadmapData.forEach(year => {
        let yearProgress = 0;
        let totalTopics = 0;
        let completedTopics = 0;
        
        year.modules.forEach(module => {
            const moduleProgress = user.progress[`year${year.year}_${module.id}`] || {};
            module.topics.forEach(topic => {
                totalTopics++;
                if (moduleProgress[topic.id]) completedTopics++;
            });
        });
        
        yearProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
        
        html += `
            <div class="progress-year-card">
                <h4>Year ${year.year}: ${year.title}</h4>
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${yearProgress}%"></div>
                    </div>
                    <span>${yearProgress}%</span>
                </div>
                <p class="text-secondary">${completedTopics} of ${totalTopics} topics completed</p>
            </div>
        `;
    });
    
    html += `
        </div>
        
        <div id="detailTestsTab" class="detail-tab-content">
            <h3>Test Results</h3>
            <div id="studentTestResults"></div>
        </div>
        
        <div id="detailActivityTab" class="detail-tab-content">
            <h3>Activity Log</h3>
            <p class="text-secondary">Last active: ${getTimeAgo(user.lastActivity)}</p>
        </div>
    `;
    
    content.innerHTML = html;
    
    // Load test results
    loadStudentTestResults(username);
    
    modal.style.display = 'flex';
}

function closeStudentModal() {
    const modal = document.getElementById('studentDetailModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function switchDetailTab(tabName) {
    document.querySelectorAll('.detail-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.detail-tab-content').forEach(content => content.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    const tabId = `detail${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Tab`;
    const tab = document.getElementById(tabId);
    if (tab) {
        tab.classList.add('active');
    }
}

function loadStudentTestResults(username) {
    const results = getTestResultsByUser(username);
    const container = document.getElementById('studentTestResults');
    if (!container) return;
    
    if (results.length === 0) {
        container.innerHTML = '<p class="text-secondary">No tests completed yet</p>';
        return;
    }
    
    let html = '<div class="test-results-list">';
    results.forEach(result => {
        html += `
            <div class="test-result-item">
                <div class="test-result-header">
                    <h4>${result.testTitle}</h4>
                    <span class="test-score ${result.score >= 70 ? 'pass' : 'fail'}">${result.score}%</span>
                </div>
                <p class="text-secondary">Completed: ${new Date(result.completedAt).toLocaleDateString()}</p>
                <p class="text-secondary">Time taken: ${result.timeTaken} minutes</p>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

// ============================================
// ANALYTICS
// ============================================
function loadAnalytics() {
    loadModuleCompletionGrid();
}

function loadModuleCompletionGrid() {
    const container = document.getElementById('moduleCompletionGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    const users = getAllUsers();
    const roadmapData = getRoadmapData();
    const allModules = [];
    
    // Collect all modules
    roadmapData.forEach(year => {
        year.modules.forEach(module => {
            allModules.push({
                id: `year${year.year}_${module.id}`,
                name: module.name,
                year: year.year
            });
        });
    });
    
    // Calculate completion rates
    allModules.forEach(module => {
        let totalUsers = users.length;
        let completedUsers = 0;
        
        users.forEach(user => {
            const moduleProgress = user.progress[module.id] || {};
            const roadmapModule = findModuleInRoadmap(module.id);
            if (roadmapModule) {
                const totalTopics = roadmapModule.topics.length;
                const completed = Object.keys(moduleProgress).filter(key => moduleProgress[key]).length;
                if (completed === totalTopics && totalTopics > 0) {
                    completedUsers++;
                }
            }
        });
        
        const completionRate = totalUsers > 0 ? Math.round((completedUsers / totalUsers) * 100) : 0;
        
        const moduleCard = document.createElement('div');
        moduleCard.className = 'module-completion-card';
        moduleCard.innerHTML = `
            <div class="module-completion-header">
                <span class="module-name">${module.name}</span>
                <span class="module-rate">${completionRate}%</span>
            </div>
            <div class="mini-progress-bar">
                <div class="mini-progress-fill" style="width: ${completionRate}%"></div>
            </div>
            <div class="module-completion-stats">${completedUsers} of ${totalUsers} students</div>
        `;
        container.appendChild(moduleCard);
    });
}

function findModuleInRoadmap(moduleId) {
    const roadmapData = getRoadmapData();
    for (let year of roadmapData) {
        for (let module of year.modules) {
            if (`year${year.year}_${module.id}` === moduleId) {
                return module;
            }
        }
    }
    return null;
}

// ============================================
// TEST MANAGEMENT
// ============================================
function loadTestLibrary() {
    const tests = getAllTests();
    const container = document.getElementById('testLibrary');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (tests.length === 0) {
        container.innerHTML = '<p class="text-secondary">No tests created yet. Click "Create New Test" to get started.</p>';
        return;
    }
    
    tests.forEach(test => {
        const card = document.createElement('div');
        card.className = 'test-card';
        card.innerHTML = `
            <div class="test-card-header">
                <h3>${test.title}</h3>
                <span class="test-difficulty ${test.difficulty}">${test.difficulty}</span>
            </div>
            <div class="test-card-body">
                <p>${test.description || 'No description'}</p>
                <div class="test-meta">
                    <span>📝 ${test.questions.length} questions</span>
                    <span>⏱️ ${test.duration} min</span>
                    <span>📚 ${test.module}</span>
                </div>
            </div>
            <div class="test-card-actions">
                <button class="btn btn-secondary" onclick="viewTest('${test.id}')">View</button>
                <button class="btn btn-primary" onclick="assignTest('${test.id}')">Assign</button>
                <button class="btn-icon" onclick="deleteTest('${test.id}')" title="Delete">🗑️</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function showCreateTestModal() {
    const modal = document.getElementById('createTestModal');
    if (modal) {
        modal.style.display = 'flex';
    }
    const container = document.getElementById('questionsContainer');
    if (container) {
        container.innerHTML = '';
        addQuestion();
    }
}

function closeCreateTestModal() {
    const modal = document.getElementById('createTestModal');
    if (modal) {
        modal.style.display = 'none';
    }
    const form = document.getElementById('createTestForm');
    if (form) {
        form.reset();
    }
}

let questionCount = 0;

function addQuestion() {
    questionCount++;
    const container = document.getElementById('questionsContainer');
    if (!container) return;
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-block';
    questionDiv.id = `question-${questionCount}`;
    questionDiv.innerHTML = `
        <div class="question-header">
            <h4>Question ${questionCount}</h4>
            <button type="button" class="btn-icon" onclick="removeQuestion(${questionCount})" title="Remove">❌</button>
        </div>
        <div class="form-group">
            <label>Question Text</label>
            <textarea class="question-text" required placeholder="Enter your question..."></textarea>
        </div>
        <div class="form-group">
            <label>Question Type</label>
            <select class="question-type" onchange="updateQuestionType(${questionCount})">
                <option value="multiple-choice">Multiple Choice</option>
                <option value="true-false">True/False</option>
                <option value="short-answer">Short Answer</option>
            </select>
        </div>
        <div class="options-container" id="options-${questionCount}">
            <div class="form-group">
                <label>Option A</label>
                <input type="text" class="option-input" placeholder="Option A" required>
                <input type="radio" name="correct-${questionCount}" value="0" required> Correct
            </div>
            <div class="form-group">
                <label>Option B</label>
                <input type="text" class="option-input" placeholder="Option B" required>
                <input type="radio" name="correct-${questionCount}" value="1"> Correct
            </div>
            <div class="form-group">
                <label>Option C</label>
                <input type="text" class="option-input" placeholder="Option C" required>
                <input type="radio" name="correct-${questionCount}" value="2"> Correct
            </div>
            <div class="form-group">
                <label>Option D</label>
                <input type="text" class="option-input" placeholder="Option D" required>
                <input type="radio" name="correct-${questionCount}" value="3"> Correct
            </div>
        </div>
    `;
    
    container.appendChild(questionDiv);
}

function removeQuestion(id) {
    const questionDiv = document.getElementById(`question-${id}`);
    if (questionDiv) {
        questionDiv.remove();
    }
}

function updateQuestionType(id) {
    // Placeholder for updating question options based on type
}

function handleCreateTest(event) {
    event.preventDefault();
    
    const test = {
        id: 'test_' + Date.now(),
        title: document.getElementById('testTitle').value,
        module: document.getElementById('testModule').value,
        duration: parseInt(document.getElementById('testDuration').value),
        difficulty: document.getElementById('testDifficulty').value,
        description: document.getElementById('testDescription').value,
        questions: [],
        createdAt: new Date().toISOString()
    };
    
    // Collect questions
    const questionBlocks = document.querySelectorAll('.question-block');
    questionBlocks.forEach(block => {
        const questionText = block.querySelector('.question-text').value;
        const questionType = block.querySelector('.question-type').value;
        const options = Array.from(block.querySelectorAll('.option-input')).map(input => input.value);
        const correctIndex = Array.from(block.querySelectorAll('input[type="radio"]')).findIndex(radio => radio.checked);
        
        test.questions.push({
            text: questionText,
            type: questionType,
            options: options,
            correctAnswer: correctIndex
        });
    });
    
    // Save test
    saveTest(test);
    
    alert('Test created successfully!');
    closeCreateTestModal();
    loadTestLibrary();
}

function assignTest(testId) {
    const test = getTestById(testId);
    if (!test) return;
    
    const modal = document.getElementById('assignTestModal');
    if (!modal) return;
    
    const title = document.getElementById('assignTestTitle');
    if (title) {
        title.textContent = test.title;
    }
    
    // Load student checkboxes
    const users = getAllUsers();
    const container = document.getElementById('studentCheckboxList');
    if (container) {
        container.innerHTML = '';
        
        users.forEach(user => {
            const label = document.createElement('label');
            label.className = 'checkbox-label';
            label.innerHTML = `
                <input type="checkbox" value="${user.username}">
                ${user.name} (@${user.username})
            `;
            container.appendChild(label);
        });
    }
    
    // Store test ID for assignment
    modal.dataset.testId = testId;
    modal.style.display = 'flex';
}

function closeAssignTestModal() {
    const modal = document.getElementById('assignTestModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function assignTestToStudents() {
    const modal = document.getElementById('assignTestModal');
    if (!modal) return;
    
    const testId = modal.dataset.testId;
    const checkboxes = document.querySelectorAll('#studentCheckboxList input[type="checkbox"]:checked');
    const deadline = document.getElementById('testDeadline').value;
    
    const selectedStudents = Array.from(checkboxes).map(cb => cb.value);
    
    if (selectedStudents.length === 0) {
        alert('Please select at least one student');
        return;
    }
    
    // Save assignments
    selectedStudents.forEach(username => {
        saveTestAssignment({
            testId: testId,
            username: username,
            assignedAt: new Date().toISOString(),
            deadline: deadline,
            status: 'pending'
        });
    });
    
    alert(`Test assigned to ${selectedStudents.length} student(s)!`);
    closeAssignTestModal();
}

function assignTestToStudent(username) {
    const tests = getAllTests();
    if (tests.length === 0) {
        alert('No tests available. Please create a test first.');
        return;
    }
    
    // Show test selection for this specific student
    const testId = tests[0].id;
    assignTest(testId);
    
    // Pre-select this student
    setTimeout(() => {
        const checkbox = document.querySelector(`#studentCheckboxList input[value="${username}"]`);
        if (checkbox) {
            checkbox.checked = true;
        }
    }, 100);
}

// ============================================
// DATA STORAGE FUNCTIONS - TESTS
// ============================================
function getAllTests() {
    const tests = localStorage.getItem('tests');
    return tests ? JSON.parse(tests) : initializeDemoTests();
}

function saveTest(test) {
    const tests = getAllTests();
    tests.push(test);
    localStorage.setItem('tests', JSON.stringify(tests));
}

function getTestById(testId) {
    const tests = getAllTests();
    return tests.find(test => test.id === testId);
}

function deleteTest(testId) {
    if (!confirm('Are you sure you want to delete this test?')) return;
    
    const tests = getAllTests();
    const filtered = tests.filter(test => test.id !== testId);
    localStorage.setItem('tests', JSON.stringify(filtered));
    loadTestLibrary();
}

function getAllTestResults() {
    const results = localStorage.getItem('testResults');
    return results ? JSON.parse(results) : [];
}

function getTestResultsByUser(username) {
    const results = getAllTestResults();
    return results.filter(result => result.username === username);
}

function getUserTestCount(username) {
    return getTestResultsByUser(username).length;
}

function saveTestAssignment(assignment) {
    const assignments = localStorage.getItem('testAssignments');
    const assignmentsList = assignments ? JSON.parse(assignments) : [];
    assignmentsList.push(assignment);
    localStorage.setItem('testAssignments', JSON.stringify(assignmentsList));
}

// ============================================
// REPORT GENERATION
// ============================================
function generateProgressReport() {
    const users = getAllUsers();
    let report = 'CODEPATH PROGRESS REPORT\n';
    report += '='.repeat(50) + '\n\n';
    report += `Generated: ${new Date().toLocaleString()}\n`;
    report += `Total Students: ${users.length}\n\n`;
    
    users.forEach(user => {
        const progress = calculateUserProgress(user);
        report += `${user.name} (@${user.username})\n`;
        report += `Progress: ${progress}%\n`;
        report += `Modules Completed: ${countCompletedModules(user)}\n`;
        report += `Streak: ${user.streak || 0} days\n`;
        report += '-'.repeat(50) + '\n';
    });
    
    downloadReport(report, 'progress-report.txt');
}

function generateTestReport() {
    const results = getAllTestResults();
    let report = 'CODEPATH TEST RESULTS REPORT\n';
    report += '='.repeat(50) + '\n\n';
    report += `Generated: ${new Date().toLocaleString()}\n`;
    report += `Total Tests Completed: ${results.length}\n\n`;
    
    results.forEach(result => {
        report += `Student: ${result.username}\n`;
        report += `Test: ${result.testTitle}\n`;
        report += `Score: ${result.score}%\n`;
        report += `Completed: ${new Date(result.completedAt).toLocaleString()}\n`;
        report += '-'.repeat(50) + '\n';
    });
    
    downloadReport(report, 'test-results-report.txt');
}

function exportStudentRoster() {
    const users = getAllUsers();
    let csv = 'Name,Username,Email,Progress,Current Year,Modules Completed,Joined Date\n';
    
    users.forEach(user => {
        const progress = calculateUserProgress(user);
        const currentYear = determineCurrentYear(user);
        const modules = countCompletedModules(user);
        const joined = new Date(user.joinedDate).toLocaleDateString();
        
        csv += `"${user.name}","${user.username}","${user.email}",${progress},"${currentYear}",${modules},"${joined}"\n`;
    });
    
    downloadReport(csv, 'student-roster.csv');
}

function downloadReport(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ============================================
// DEMO DATA INITIALIZATION
// ============================================
function initializeDemoData() {
    // Force reset demo data with new admin user
    const existingAdmin = localStorage.getItem('user_admin');
    
    // If demo users don't exist or don't have role field, reinitialize
    if (!existingAdmin) {
        // Create demo users with some progress
        const demoUsers = [
            {
                name: "Charan K Kopalle",
                email: "charankkopallecreator@gmail.com",
                username: "admin",
                password: "charan2003@123",
                role: "admin",
                joinedDate: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
                progress: {
                    "year1_digital_basics": { "db_1": true, "db_2": true, "db_3": true, "db_4": true, "db_5": true, "db_6": true },
                    "year1_c_programming": { "c_1": true, "c_2": true, "c_3": true, "c_4": true, "c_5": true, "c_6": true, "c_7": true, "c_8": true, "c_9": true, "c_10": true },
                    "year1_cpp_programming": { "cpp_1": true, "cpp_2": true, "cpp_3": true, "cpp_4": true },
                    "year1_python_basics": { "py_1": true, "py_2": true, "py_3": true, "py_4": true, "py_5": true, "py_6": true, "py_7": true },
                    "year2_html_css": { "html_1": true, "html_2": true, "html_3": true, "html_4": true, "html_5": true },
                    "year2_javascript": { "js_1": true, "js_2": true, "js_3": true, "js_4": true },
                    "year3_react": { "react_1": true, "react_2": true, "react_3": true }
                },
                lastActivity: new Date().toISOString(),
                streak: 120
            },
            {
                name: "Alice Johnson",
                email: "alice@demo.com",
                username: "demo1",
                password: "demo123",
                role: "student",
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
                role: "student",
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
        
        console.log('[Init] Demo users initialized with admin account');
    } else {
        // Ensure existing admin has role field
        const adminData = JSON.parse(existingAdmin);
        if (!adminData.role) {
            adminData.role = 'admin';
            localStorage.setItem('user_admin', JSON.stringify(adminData));
            console.log('[Init] Admin role updated');
        }
    }
}

function initializeDemoTests() {
    const demoTests = [
        {
            id: 'test_demo_1',
            title: 'C Programming Fundamentals',
            module: 'c_programming',
            duration: 30,
            difficulty: 'beginner',
            description: 'Test your understanding of C programming basics',
            questions: [
                {
                    text: 'What is the correct syntax to output "Hello World" in C?',
                    type: 'multiple-choice',
                    options: ['echo("Hello World");', 'printf("Hello World");', 'Console.WriteLine("Hello World");', 'cout << "Hello World";'],
                    correctAnswer: 1
                },
                {
                    text: 'Which data type is used to create a variable that should store text?',
                    type: 'multiple-choice',
                    options: ['string', 'char[]', 'text', 'String'],
                    correctAnswer: 1
                }
            ],
            createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'test_demo_2',
            title: 'Python Basics Quiz',
            module: 'python_basics',
            duration: 45,
            difficulty: 'intermediate',
            description: 'Assess your Python programming knowledge',
            questions: [
                {
                    text: 'Which keyword is used to create a function in Python?',
                    type: 'multiple-choice',
                    options: ['function', 'def', 'fun', 'define'],
                    correctAnswer: 1
                }
            ],
            createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
        }
    ];
    
    localStorage.setItem('tests', JSON.stringify(demoTests));
    return demoTests;
}

function initializeDemoTestResults() {
    const demoResults = [
        {
            id: 'result_1',
            testId: 'test_demo_1',
            testTitle: 'C Programming Fundamentals',
            username: 'demo1',
            score: 85,
            timeTaken: 25,
            completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'result_2',
            testId: 'test_demo_2',
            testTitle: 'Python Basics Quiz',
            username: 'demo2',
            score: 72,
            timeTaken: 40,
            completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        }
    ];
    
    if (!localStorage.getItem('testResults')) {
        localStorage.setItem('testResults', JSON.stringify(demoResults));
    }
}

// Initialize on load
initializeDemoData();
initializeDemoTestResults();

// ============================================
// CLEANUP & RESET FUNCTIONS (for development)
// ============================================

/**
 * Clear all user data and reset to fresh state
 * Usage in console: resetAllData()
 */
window.resetAllData = function() {
    // Clear all user data
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key.startsWith('user_') || key.startsWith('codepath_') || key === 'currentUser' || key === 'currentUserRole') {
            localStorage.removeItem(key);
        }
    }
    
    // Reinitialize with fresh demo data
    initializeDemoData();
    initializeDemoTestResults();
    
    alert('All data reset! Please refresh the page.');
    location.reload();
};

/**
 * Check if admin account exists
 */
window.checkAdmin = function() {
    const admin = localStorage.getItem('user_admin');
    if (admin) {
        const adminData = JSON.parse(admin);
        console.log('Admin account found:');
        console.log('Username:', adminData.username);
        console.log('Email:', adminData.email);
        console.log('Role:', adminData.role);
        console.log('Password: charan2003@123');
    } else {
        console.log('No admin account found. Run resetAllData() to initialize.');
    }
};

/**
 * List all users
 */
window.listAllUsers = function() {
    const users = getAllUsers();
    console.log(`Found ${users.length} users:`);
    users.forEach(user => {
        console.log(`- ${user.username} (${user.role || 'student'}) - ${user.email}`);
    });
};
