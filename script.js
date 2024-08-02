function openTab(tabName) {
    var i;
    var tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    var tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    document.querySelector(`[onclick="openTab('${tabName}')"]`).className += " active";
}


function openTab(tabId) {
    // Hide all tab content
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Remove 'active' class from all tab buttons
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show the selected tab content and set its button to 'active'
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.tab-button[onclick="openTab('${tabId}')"]`).classList.add('active');
}

// Initialize by showing the first tab (signup)
document.addEventListener('DOMContentLoaded', function() {
    openTab('signup');
});


// for ordering the product

document.addEventListener('DOMContentLoaded', function() {
    // Select the Order button
    const orderButton = document.querySelector('.btn-primary');

    // Add a click event listener to the Order button
    orderButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Redirect to the specified URL
        const redirectTo = 'contact.html'; // Replace with the actual URL
        window.location.href = redirectTo;
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const countryCodeSelect = document.getElementById('country-code');
    const countryCodes = [
        { code: '+1', country: 'USA' },
        { code: '+1', country: 'Canada' },
        { code: '+44', country: 'UK' },
        { code: '+33', country: 'France' },
        { code: '+49', country: 'Germany' },
        { code: '+34', country: 'Spain' },
        { code: '+39', country: 'Italy' },
        { code: '+31', country: 'Netherlands' },
        { code: '+46', country: 'Sweden' },
        { code: '+47', country: 'Norway' },
        { code: '+48', country: 'Poland' },
        { code: '+61', country: 'Australia' },
        { code: '+81', country: 'Japan' },
        { code: '+86', country: 'China' },
        { code: '+91', country: 'India' },
        { code: '+254', country: 'Kenya' },
        { code: '+255', country: 'Tanzania' },
        { code: '+256', country: 'Uganda' },
        { code: '+27', country: 'South Africa' },
        {code: '+251', country: 'Ethiopia'},
        // Add more country codes as needed
    ];

    // Sort the country codes alphabetically by country name
    countryCodes.sort((a, b) => a.country.localeCompare(b.country));

    countryCodes.forEach(function(country) {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.code} (${country.country})`;
        countryCodeSelect.appendChild(option);
    });
});
