
// Function to fetch data using Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject("Operation timed out");
        }, 5000); // Timeout after 5 seconds

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout); // Clear timeout if data is fetched
                resolve(data.posts.slice(0, 5).map(post => post.title)); // Fix here: use data.posts
            })
            .catch(error => {
                clearTimeout(timeout); // Clear timeout if error occurs
                reject('Error fetching data: ' + error);
            });
    });
}
        document.getElementById('fetchButton').addEventListener('click', async () => {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = "Loading...";  // Display loading text

            try {
                const data = await fetchData();
                resultDiv.textContent = data.join(', '); // Display fetched data
            } catch (error) {
                resultDiv.textContent = error.message;  // Display error message
            }
        });
    


