/* ============================================
   ADMIN DASHBOARD FUNCTIONS
   Student Progress Monitoring & Test Management
   ============================================ */

// ============================================
// INITIALIZE ADMIN DASHBOARD
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
    document.getElementById('totalUsers').textContent = users.length;
    
    // Calculate average progress
    let totalProgress = 0;
    users.forEach(user => {
        totalProgress += calculateUserProgress(user);
    });
    const avgProgress = users.length > 0 ? Math.round(totalProgress / users.length) : 0;
    document.getElementById('avgProgress').textContent = avgProgress + '%';
    
    // Tests completed
    document.getElementById('completedTests').textContent = testResults.length;
    
    // Average test score
    let totalScore = 0;
    testResults.forEach(result => {
        totalScore += result.score;
    });
    const avgScore = testResults.length > 0 ? Math.round(totalScore / testResults.length) : 0;
    document.getElementById('avgTestScore').textContent = avgScore + '%';
    
    // Load activity feed
    loadActivityFeed(users, testResults);
    
    // Load top performers
    loadTopPerformers(users);
}

function loadActivityFeed(users, testResults) {
    const feed = document.getElementById('activityFeed');
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
    document.getElementById('studentDetailModal').style.display = 'none';
}

function switchDetailTab(tabName) {
    document.querySelectorAll('.detail-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.detail-tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`detail${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Tab`).classList.add('active');
}

function loadStudentTestResults(username) {
    const results = getTestResultsByUser(username);
    const container = document.getElementById('studentTestResults');
    
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
    document.getElementById('createTestModal').style.display = 'flex';
    document.getElementById('questionsContainer').innerHTML = '';
    addQuestion(); // Add first question by default
}

function closeCreateTestModal() {
    document.getElementById('createTestModal').style.display = 'none';
    document.getElementById('createTestForm').reset();
}

let questionCount = 0;

function addQuestion() {
    questionCount++;
    const container = document.getElementById('questionsContainer');
    
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
    // Could expand to show different option formats for different question types
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
    
    document.getElementById('assignTestTitle').textContent = test.title;
    
    // Load student checkboxes
    const users = getAllUsers();
    const container = document.getElementById('studentCheckboxList');
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
    
    // Store test ID for assignment
    document.getElementById('assignTestModal').dataset.testId = testId;
    
    document.getElementById('assignTestModal').style.display = 'flex';
}

function closeAssignTestModal() {
    document.getElementById('assignTestModal').style.display = 'none';
}

function assignTestToStudents() {
    const testId = document.getElementById('assignTestModal').dataset.testId;
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
    // Simplified version - in production, you'd show a modal with test options
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
// DATA STORAGE FUNCTIONS
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

function getUserByUsername(username) {
    const userData = localStorage.getItem(`user_${username}`);
    return userData ? JSON.parse(userData) : null;
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

function generateAnalyticsReport() {
    alert('Analytics dashboard feature coming soon!');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
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
// INITIALIZE DEMO TESTS
// ============================================
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

// Initialize demo test results
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
initializeDemoTestResults();
