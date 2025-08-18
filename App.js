// Function to display module content
function openModule(module) {
    const content = document.getElementById('moduleContent');

    switch(module) {
        case 'learning':
            content.innerHTML = "<h2>Learning Module</h2><p>Access tutorials, lessons, and guides here.</p>";
            break;
        case 'creativity':
            content.innerHTML = "<h2>Creativity Module</h2><p>Draw, design, or create digital art and projects.</p>";
            break;
        case 'robotics':
            content.innerHTML = "<h2>Robotics Module</h2><p>Control and test your robot experiments here.</p>";
            break;
        case 'ai':
            content.innerHTML = "<h2>AI Experiments Module</h2><p>Interact with AI tools, models, and experiments.</p>";
            break;
        case 'utilities':
            content.innerHTML = "<h2>Utilities Module</h2><p>Calculator, converter, and other helpful tools.</p>";
            break;
        case 'fun':
            content.innerHTML = "<h2>Fun Module</h2><p>Games, quizzes, and entertainment features.</p>";
            break;
        case 'productivity':
            content.innerHTML = "<h2>Productivity Module</h2><p>To-do lists, notes, and daily planning tools.</p>";
            break;
        default:
            content.innerHTML = "<p>Welcome! Click a module above to start.</p>";
    }
}
