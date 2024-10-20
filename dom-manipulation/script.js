// Initialize an array of quote objects
let quotes = [
    { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" },
    { text: "Don't watch the clock; do what it does. Keep going.", category: "Motivation" }
  ];
  
  // Function to display a random quote
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    // Update the DOM to show the random quote
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = `<p>"${quote.text}"</p><p><strong>Category:</strong> ${quote.category}</p>`;
  }
  
  // Function to add a new quote to the array
  function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  
    if (newQuoteText && newQuoteCategory) {
      // Add the new quote to the array
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
  
      // Clear the input fields
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
  
      // Optionally, display the newly added quote immediately
      showRandomQuote();
    } else {
      alert('Please fill in both fields.');
    }
  }
  
  // Function to dynamically create the form for adding new quotes
  function createAddQuoteForm() {
    const formContainer = document.createElement('div');
  
    // Create input for new quote text
    const quoteInput = document.createElement('input');
    quoteInput.setAttribute('id', 'newQuoteText');
    quoteInput.setAttribute('type', 'text');
    quoteInput.setAttribute('placeholder', 'Enter a new quote');
    
    // Create input for new quote category
    const categoryInput = document.createElement('input');
    categoryInput.setAttribute('id', 'newQuoteCategory');
    categoryInput.setAttribute('type', 'text');
    categoryInput.setAttribute('placeholder', 'Enter quote category');
  
    // Create button to submit new quote
    const addButton = document.createElement('button');
    addButton.innerText = 'Add Quote';
    addButton.addEventListener('click', addQuote);
  
    // Append inputs and button to the form container
    formContainer.appendChild(quoteInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);
  
    // Append the form to the body (or any other container in the HTML)
    document.body.appendChild(formContainer);
  }
  
  // Add event listener for the "Show New Quote" button
  document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  
  // Initially display a random quote
  showRandomQuote();
  
  // Call the function to dynamically create the add quote form
  createAddQuoteForm();