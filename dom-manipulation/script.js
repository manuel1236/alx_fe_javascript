let quotes = [
    { id: 1, text: "The best way to predict the future is to invent it.", category: "Inspiration" },
    { id: 2, text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" },
    { id: 3, text: "Don't watch the clock; do what it does. Keep going.", category: "Motivation" }
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    // Update the DOM to show the random quote
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = `<p>"${quote.text}"</p><p><strong>Category:</strong> ${quote.category}</p>`;
}

// Function to dynamically populate the category dropdown
function populateCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];

    uniqueCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Function to filter quotes based on selected category
function filterQuotes() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const quoteDisplay = document.getElementById('quoteDisplay');

    const filteredQuotes = selectedCategory === 'all'
        ? quotes
        : quotes.filter(quote => quote.category === selectedCategory);

    if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const quote = filteredQuotes[randomIndex];
        quoteDisplay.innerHTML = `<p>"${quote.text}"</p><p><strong>Category:</strong> ${quote.category}</p>`;
    } else {
        quoteDisplay.innerHTML = "<p>No quotes available for this category.</p>";
    }

    // Save the last selected category in local storage
    localStorage.setItem('selectedCategory', selectedCategory);
}

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        const newQuote = {
            id: quotes.length + 1,
            text: newQuoteText,
            category: newQuoteCategory
        };

        quotes.push(newQuote);

        const categoryFilter = document.getElementById('categoryFilter');
        if (![...categoryFilter.options].some(option => option.value === newQuoteCategory)) {
            const option = document.createElement('option');
            option.value = newQuoteCategory;
            option.textContent = newQuoteCategory;
            categoryFilter.appendChild(option);
        }

        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';

        showRandomQuote();
    } else {
        alert('Please fill in both fields.');
    }
}

// Initialize the app
function initializeApp() {
    populateCategories();

    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
        document.getElementById('categoryFilter').value = savedCategory;
        filterQuotes();
    } else {
        showRandomQuote();
    }
}

document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Initialize the app when the page loads
initializeApp();