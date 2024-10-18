document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '7e149c38aa0248ad93ddffc95c3a2c02'; // Replace with your News API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`; // Use HTTPS for the API URL
    const fetchBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = [];

    async function fetchNews() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched articles:", data.articles);
            articles = data.articles;
            renderArticles();
        } catch (error) {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = '<p>Error fetching articles.</p>';
        }
    }

    function renderArticles() {
        newsContainer.innerHTML = ''; // Clear the container
        if (articles.length > 0) {
            articles.forEach((article) => {
                const articleElement = document.createElement('div');
                articleElement.className = 'news-item';
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <img src="${article.urlToImage}" alt="${article.title}" style="max-width:100%;">
                    <p><a href="${article.url}" target="_blank">Read more</a></p>
                `;
                newsContainer.appendChild(articleElement);
            });
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchBtn.addEventListener('click', fetchNews); // Now safe to add event listener
});
