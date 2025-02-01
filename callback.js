// Function to simulate a delay with callback
function simulateDelay(callback) {
    console.log('Simulating delay...');
    setTimeout(() => {
        callback('Callback executed after 5 seconds');
    }, 5000);  // Delay for 5 seconds
}

// Handling the button click event
document.getElementById('executeButton').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Waiting for callback...';

    // Calling simulateDelay function with a callback
    simulateDelay(function(message) {
        resultDiv.textContent = message;  // Update div after delay
    });
});


// Function to simulate delay with callback
function simulateDelay(callback) {
    console.log('Simulating delay...');
    setTimeout(() => {
        callback('Callback executed after 5 seconds');
    }, 5000);  // Delay for 5 seconds
}

// Fetch data from the JSONPlaceholder API and display post titles
function fetchData(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())  // Convert response to JSON
        .then(posts => {
            const postTitles = posts.slice(0, 5).map(post => post.title); // Get first 5 post titles
            callback(postTitles);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            callback(['Error fetching data']);
        });
}

// Handling the button click event
document.getElementById('executeButton').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Waiting for callback...';

    // First simulate the delay
    simulateDelay(function(message) {
        resultDiv.textContent = message;  // Update div after delay

        // After delay, fetch data from API and display titles
        fetchData(function(postTitles) {
            resultDiv.textContent = postTitles.join(', ');  // Join titles and display them
        });
    });
});
