const items = [];
const ageCategories = ['0-3', '4-7', '8-12', '13-upwards', 'adult'];
const genders = ['male', 'female'];
let currentPage = 1;
let filteredItems = [];
let cart = [];
let itemsPerPage = 2; // Default items per page

// Array of image URLs for each item (20 items per age group and gender)
const imageUrls = [
    // Age 0-3 Male
    'Images0-3//ages0-1 (1 boy).jpg',
    'Images0-3//ages0-1 (3 b&g).jpg',
    'Images0-3//ages0-1 (5 b&g).jpg',
    'Images0-3//ages0-1 (6b&g).jpg',
    'Images0-3//ages1-3 boy1.jpg',
    'Images0-3//ages1-3 boy2.jpg',
    'Images0-3//ages1-3 b&g3.jpg',
    'Images0-3//ages1-3 boy4.jpg',
    'Images0-3//ages1-3 boy5.jpg',
    'Images0-3//ages1-3 boy6.jpg',
    // Age 0-3 Female
    'Images0-3//ages0-1 (3 b&g).jpg',
    'Images0-3//ages0-1 (5 b&g).jpg',
    'Images0-3//ages0-1 (6b&g).jpg',
    'Images0-3//ages0-1 (2 girl).jpg',
    'Images0-3//ages1-3 girl1.jpg',
    'Images0-3//ages1-3 girl2.jpg',
    'Images0-3//ages1-3 b&g3.jpg',
    'Images0-3//ages1-3 girl4.jpg',
    'Images0-3//ages1-3 girl5.jpg',
    'Images0-3//ages1-3&4-7 girl 1.jpg',
    // Age 4-7 Male
    'Images4-7//Boy(4-6).jpg',
    'Images4-7//Boy(4-6)1.jpg',
    'Images4-7//Boy(4-6)2.jpg',
    'Images4-7//Boy(4-6)3.jpg',
    'Images4-7//Boy(4-6)4.jpg',
    'Images4-7//Boy(4-6)5.jpg',
    'Images4-7//Boy(4-6)6.jpg',
    'Images4-7//Boy(4-6)7.jpg',
    'Images4-7//Boy(4-6)8.jpg',
    'Images4-7//Boy(4-6)9.jpg',
    // Age 4-7 Female
    'Images4-7//Girl(4-6)1.jpg',
    'Images4-7//Girl(4-6)2.jpg',
    'Images4-7//Girl(4-6)3.jpg',
    'Images4-7//Girl(4-6)4.jpg',
    'Images4-7//Girl(4-6)5.jpg',
    'Images4-7//Girl(4-6)6.jpg',
    'Images4-7//Girl(4-6)7.jpg',
    'Images4-7//Girl(4-6)8.jpg',
    'Images4-7//Girl(4-6)9.jpg',
    'Images4-7//Girl(4-6)10.jpg',
    // Age 8-12 Male
    'Images8-12//Biy4.jpg',
    'Images8-12//Boy1.jpg',
    'Images8-12//Boy2.jpg',
    'Images8-12//Boy3.jpg',
    'Images8-12//Boy5.jpg',
    'Images8-12//Boy6.jpg',
    'Images8-12//Boy7.jpg',
    'Images8-12//Boy8.jpg',
    'Images8-12//Boy9.jpg',
    'Images8-12//Boy10.jpg',
    // Age 8-12 Female
    'Images8-12//Girl1.jpg',
    'Images8-12//Girl2.jpg',
    'Images8-12//Girl3.jpg',
    'Images8-12//Girl4.jpg',
    'Images8-12//Girl5.jpg',
    'Images8-12//Girl6.jpg',
    'Images8-12//Girl7.jpg',
    'Images8-12//Girl8.jpg',
    'Images8-12//Girl9.jpg',
    'Images8-12//Girl10.jpg',
    // Age 13 and up Male
    'images/LBK2.jpg',
    'https://via.placeholder.com/150?text=1-3-Male-2',
    'https://via.placeholder.com/150?text=1-3-Male-3',
    'https://via.placeholder.com/150?text=1-3-Male-4',
    'https://via.placeholder.com/150?text=1-3-Male-5',
    'https://via.placeholder.com/150?text=1-3-Male-6',
    'https://via.placeholder.com/150?text=1-3-Male-7',
    'https://via.placeholder.com/150?text=1-3-Male-8',
    'https://via.placeholder.com/150?text=1-3-Male-9',
    'https://via.placeholder.com/150?text=1-3-Male-10',
    // Age 13 and up Female
    'images/LBK1.jpg',
    'images/LBK2.jpg',
    'https://via.placeholder.com/150?text=1-3-Female-3',
    'https://via.placeholder.com/150?text=1-3-Female-4',
    'https://via.placeholder.com/150?text=1-3-Female-5',
    'https://via.placeholder.com/150?text=1-3-Female-6',
    'https://via.placeholder.com/150?text=1-3-Female-7',
    'https://via.placeholder.com/150?text=1-3-Female-8',
    'https://via.placeholder.com/150?text=1-3-Female-9',
    'https://via.placeholder.com/150?text=1-3-Female-10',
    // Adult Male
    'images/LBK2.jpg',
    'https://via.placeholder.com/150?text=1-3-Male-2',
    'https://via.placeholder.com/150?text=1-3-Male-3',
    'https://via.placeholder.com/150?text=1-3-Male-4',
    'https://via.placeholder.com/150?text=1-3-Male-5',
    'https://via.placeholder.com/150?text=1-3-Male-6',
    'https://via.placeholder.com/150?text=1-3-Male-7',
    'https://via.placeholder.com/150?text=1-3-Male-8',
    'https://via.placeholder.com/150?text=1-3-Male-9',
    'https://via.placeholder.com/150?text=1-3-Male-10',
    // Adult Female
    'images/LBK1.jpg',
    'images/LBK2.jpg',
    'https://via.placeholder.com/150?text=1-3-Female-3',
    'https://via.placeholder.com/150?text=1-3-Female-4',
    'https://via.placeholder.com/150?text=1-3-Female-5',
    'https://via.placeholder.com/150?text=1-3-Female-6',
    'https://via.placeholder.com/150?text=1-3-Female-7',
    'https://via.placeholder.com/150?text=1-3-Female-8',
    'https://via.placeholder.com/150?text=1-3-Female-9',
    'https://via.placeholder.com/150?text=1-3-Female-10',
];

// Generate items for each age category and gender
// Generate items for each age category and gender
ageCategories.forEach((category, ageIndex) => {
    genders.forEach(gender => {
        for (let i = 1; i <= 10; i++) { // 10 items per gender
            items.push({
                id: `${category}-${gender}-${i}`,
                name: `Item ${i} (Ages ${category}, ${gender})`,
                price: (Math.random() * 50 + 10).toFixed(2),
                age: category,
                gender: gender,
                image: imageUrls[(ageIndex * 20) + (gender === 'male' ? 0 : 10) + (i - 1)] // Assign the corresponding image URL
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const welcomeSection = document.getElementById('welcome-section');
    const ageSelectionSection = document.getElementById('age-selection-section');
    const catalogSection = document.getElementById('catalog-section');
    const cartSection = document.getElementById('cart');

    document.getElementById('enter-catalog-btn').addEventListener('click', () => {
        welcomeSection.classList.add('hidden');
        ageSelectionSection.classList.remove('hidden');
    });

    const enterSelectionBtn = document.getElementById('enterSelectionBtn');
    enterSelectionBtn.addEventListener('click', () => {
        const selectedAge = document.getElementById('ageSelector').value;
        const selectedGender = document.getElementById('genderSelector').value;

        if (selectedAge && selectedGender) {
            filteredItems = items.filter(item => item.age === selectedAge && item.gender === selectedGender);
            currentPage = 1;
            displayItems();
            ageSelectionSection.classList.add('hidden');
            catalogSection.classList.remove('hidden');
        } else {
            alert('Please select both age group and gender.');
        }
    });

    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', () => {
        catalogSection.classList.add('hidden'); // Hide the catalog section
        ageSelectionSection.classList.remove('hidden'); // Show the age selection section
    });

    const cartButton = document.getElementById('cartButton');
    cartButton.addEventListener('click', () => {
        catalogSection.classList.add('hidden'); // Hide the catalog section
        cartSection.classList.remove('hidden'); // Show the cart section
    });

    document.getElementById('backToCatalog').addEventListener('click', () => {
        document.getElementById('cart').classList.add('hidden'); // Hide cart
        document.getElementById('catalog-section').classList.remove('hidden'); // Show catalog
    });

    // Event listener for items per page selector
    const itemsPerPageSelector = document.getElementById('itemsPerPageSelector');

    //Add event listener for items per page selector
    itemsPerPageSelector.addEventListener('change', (event) => {
        itemsPerPage = parseInt(event.target.value); // Update itemsPerPage based on selection
        currentPage = 1; // Reset to the first page
        displayItems(); // Call the function to display items
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
        currentPage = 1;
        displayItems();
    });

    // Define the addToCart function
    window.addToCart = function(itemId) {
        const item = items.find(i => i.id === itemId);
        if (item) {
            cart.push(item);
            updateCart();
            updateCartIcon();
        }
    };

    function updateCart() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
        const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
        document.getElementById('totalPrice').textContent = `Total: $${total}`;
    }

    function updateCartIcon() {
        const cartIcon = document.getElementById('cartIcon');
        const cartItemCount = document.getElementById('cartItemCount');

        if (cart.length > 0) {
            cartIcon.style.display = 'block'; // Show the cart icon
            cartItemCount.textContent = cart.length; // Update the item count
        } else {
            cartIcon.style.display = 'none'; // Hide the cart icon
            cartItemCount.textContent = ''; // Clear the item count
        }
    }

    // Initialize the cart icon visibility on page load
    updateCartIcon();

    // Function to download images of cart items directly
    function downloadCartImages() {
        if (cart.length === 0) {
            alert("Your cart is empty!"); // Alert if the cart is empty
            return;
        }

        cart.forEach(item => {
            const imageUrl = item.image;
            const link = document.createElement("a");
            link.href = imageUrl; // Set the image URL as the href
            link.download = `${item.name}.jpg`; // Set the download attribute with the item name
            document.body.appendChild(link); // Append the link to the body
            link.click(); // Programmatically click the link to trigger the download
            document.body.removeChild(link); // Remove the link from the document
        });

        // Clear the cart after downloading images
        cart = [];
        updateCart();
        updateCartIcon();
    }

    // Add event listener for the download button
    document.getElementById('downloadBtn').addEventListener('click', () => {
        downloadCartImages(); // Call the new function to download images
    });
});

// Modify the displayItems function
function displayItems() {
    const catalog = document.getElementById('catalog');
    const start = (currentPage - 1) * itemsPerPage; // Assuming 2 items per page
    const end = start + itemsPerPage;
    const pageItems = filteredItems.slice(start, end);

    catalog.innerHTML = pageItems
        .map(item => `<div class="item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button onclick="addToCart('${item.id}')">Add to Cart</button>
        </div>`)
        .join('');

    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${Math.ceil(filteredItems.length / itemsPerPage)}`; // Update page info based on items per page
}

// Initial call to display items after filtering
displayItems();