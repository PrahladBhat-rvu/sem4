<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping App</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
        }
        
        .products-section {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .product {
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fafafa;
        }
        
        .product-info h3 {
            color: #333;
            margin-bottom: 5px;
        }
        
        .product-price {
            color: #e74c3c;
            font-weight: bold;
            font-size: 18px;
        }
        
        .product-buttons {
            display: flex;
            gap: 10px;
        }
        
        button {
            padding: 8px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
        }
        
        .btn-bag {
            background: #3498db;
            color: white;
        }
        
        .btn-bag:hover {
            background: #2980b9;
        }
        
        .btn-wishlist {
            background: #e74c3c;
            color: white;
        }
        
        .btn-wishlist:hover {
            background: #c0392b;
        }
        
        .btn-remove {
            background: #95a5a6;
            color: white;
            padding: 6px 10px;
            font-size: 12px;
        }
        
        .btn-remove:hover {
            background: #7f8c8d;
        }
        
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .bag-section, .wishlist-section {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .bag-section h2, .wishlist-section h2 {
            margin-bottom: 15px;
            color: #333;
        }
        
        .bag-count {
            font-size: 24px;
            color: #3498db;
            font-weight: bold;
            padding: 15px;
            background: #ecf0f1;
            border-radius: 5px;
            text-align: center;
            margin-bottom: 15px;
        }
        
        .item-list {
            list-style: none;
        }
        
        .item-list li {
            padding: 10px;
            background: #ecf0f1;
            margin-bottom: 8px;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .empty-message {
            color: #7f8c8d;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="products-section">
            <h1> Sale Items</h1>
            <div id="productsContainer"></div>
        </div>
        
        <div class="sidebar">
            <div class="bag-section">
                <h2> Shopping Bag</h2>
                <div class="bag-count" id="bagCount">0 items</div>
                <ul class="item-list" id="bagList"></ul>
            </div>
            
            <div class="wishlist-section">
                <h2> Wishlist</h2>
                <ul class="item-list" id="wishlistList"></ul>
            </div>
        </div>
    </div>

    <script>
        const products = [
            { id: 1, name: 'Laptop', price: '$599' },
            { id: 2, name: 'Headphones', price: '$99' },
            { id: 3, name: 'Mouse', price: '$29' },
            { id: 4, name: 'Keyboard', price: '$79' },
            { id: 5, name: 'Monitor', price: '$249' }
        ];

        let bag = [];
        let wishlist = [];

        function renderProducts() {
            const container = document.getElementById('productsContainer');
            container.innerHTML = products.map(product => `
                <div class="product">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <span class="product-price">${product.price}</span>
                    </div>
                    <div class="product-buttons">
                        <button class="btn-bag" onclick="addToBag(${product.id})">Add to Bag</button>
                        <button class="btn-wishlist" onclick="addToWishlist(${product.id})">Add to Wishlist</button>
                    </div>
                </div>
            `).join('');
        }

        function addToBag(productId) {
            const product = products.find(p => p.id === productId);
            bag.push(product);
            updateBagDisplay();        }

        function addToWishlist(productId) {
            const product = products.find(p => p.id === productId);
            if (!wishlist.find(p => p.id === productId)) {
                wishlist.push(product);
                updateWishlistDisplay();            }
        }

        function removeFromBag(index) {
            bag.splice(index, 1);
            updateBagDisplay();
        }

        function removeFromWishlist(index) {
            wishlist.splice(index, 1);
            updateWishlistDisplay();
        }

        function updateBagDisplay() {
            const bagCount = document.getElementById('bagCount');
            const bagList = document.getElementById('bagList');
            
            bagCount.textContent = `${bag.length} item${bag.length !== 1 ? 's' : ''}`;
            
            if (bag.length === 0) {
                bagList.innerHTML = '<li class="empty-message">Your bag is empty</li>';
            } else {
                bagList.innerHTML = bag.map((item, index) => `
                    <li>
                        <span>${item.name} - ${item.price}</span>
                        <button class="btn-remove" onclick="removeFromBag(${index})">Remove</button>
                    </li>
                `).join('');
            }
        }

        function updateWishlistDisplay() {
            const wishlistList = document.getElementById('wishlistList');
            
            if (wishlist.length === 0) {
                wishlistList.innerHTML = '<li class="empty-message">Your wishlist is empty</li>';
            } else {
                wishlistList.innerHTML = wishlist.map((item, index) => `
                    <li>
                        <span>${item.name} - ${item.price}</span>
                        <button class="btn-remove" onclick="removeFromWishlist(${index})">Remove</button>
                    </li>
                `).join('');
            }
        }

        // Initial render
        renderProducts();
        updateBagDisplay();
        updateWishlistDisplay();
    </script>
</body>
</html>
