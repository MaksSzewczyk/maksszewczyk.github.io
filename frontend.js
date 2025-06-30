document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    
    // Either user clicks to search...
    searchButton.addEventListener('click', sendSearchQuery());
    

    // ...or presses enter to search
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            console.log("fixed")
            sendSearchQuery();
        }
    });

});

function sendSearchQuery() {
    const searchInput = document.getElementById('searchInput');
    searchQuery = searchInput.value.trim();
    if (searchQuery) {
        getSearchQueryResult(searchQuery);
    }
}

function getSearchQueryResult(searchQuery) {
    console.log(`Search Query: ${searchQuery}`);
    fetch('https://animated-engine-5g4qv46pvx76hvxxg-8080.app.github.dev/search/' + encodeURIComponent(searchQuery), {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
}