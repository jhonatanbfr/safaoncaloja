const products = [
    
{
    id: 1,
    code: "001",
    name: "Expositor de Parafusos",
    category: "Parafusos",
    price: 600.00,
    package: 1,
    minQuantity: 1,
    image: "imagens/expositor.webp"
},
{
    id: 2,
    code: "002",
    name: "Expositor + 1200 encartelados",
    category: "Parafusos",
    price: 3240.00,
    package: 1,
    minQuantity: 1,
    image: "imagens/expositorcompleto.webp"
},
{
    id: 3,
    code: "1",
    name: "Cart. Parafuso Auto Atarraxante. 3,9 x 19 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
];

let cart = [];

function formatMoney(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function displayProducts(list) {
    const grid = document.getElementById("productsGrid");

    grid.innerHTML = "";

    list.forEach(product => {

        grid.innerHTML += `
    <div class="product">

        ${product.image ? `
            <img class="product-image"
                 src="${product.image}"
                 alt="${product.name}">
        ` : ""}

        <p class="product-code">
            CÓD - ${product.code ?? product.id}
        </p>

        <h3>${product.name}</h3>

        <p class="product-package">
            Embalagem: ${product.package ?? 1}
        </p>


        <p class="product-price">
            <strong>${formatMoney(product.price)}</strong>
        </p>

        <div class="product-buy-row">

            <input
                type="number"
                id="quantity-${product.id}"
                value="${product.minQuantity ?? 1}"
                min="${product.minQuantity ?? 1}"
                step="${product.package ?? 1}"
            >

            <button onclick="addQuantityToCart(${product.id})">
                🛒 ADICIONAR
            </button>

        </div>

    </div>
`;

    });
}

function filterCategory(category) {
    const filtered = products.filter(product =>
        product.category === category
    );

    displayProducts(filtered);
}

function addToCart(id) {
    const product = products.find(product => product.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}
function addQuantityToCart(id) {
    const product = products.find(product => product.id === id);

    const input = document.getElementById(`quantity-${id}`);

    let quantity = parseInt(input.value);

    const minQuantity = product.minQuantity ?? 1;
    const packageQuantity = product.package ?? 1;

    if (isNaN(quantity) || quantity < minQuantity) {
        alert(`A quantidade mínima para este produto é ${minQuantity}.`);
        input.value = minQuantity;
        return;
    }

    if (quantity % packageQuantity !== 0) {
        alert(`Este produto deve ser comprado em múltiplos de ${packageQuantity}.`);
        return;
    }

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    updateCart();
    openCart();
}
function changeQuantity(id, amount) {
    const item = cart.find(item => item.id === id);

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    updateCart();
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);

    updateCart();
}
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    const headerCartCount = document.getElementById("headerCartCount");
    const headerCartTotal = document.getElementById("headerCartTotal");

    cartItems.innerHTML = "";

    let quantity = 0;
    let total = 0;

    cart.forEach(item => {
        quantity += item.quantity;
        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-product-info">

                    ${item.image ? `
                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            class="cart-product-image"
                        >
                    ` : ""}

                    <div>
                        <strong>${item.name}</strong>

                        <p>
                            ${formatMoney(item.price * item.quantity)}
                        </p>
                    </div>

                </div>

                <div>
                    <button onclick="changeQuantity(${item.id}, -1)">
                        ➖
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${item.id}, 1)">
                        ➕
                    </button>
                </div>

                <button onclick="removeItem(${item.id})">
                    🗑️ Remover
                </button>

            </div>
        `;
    });

    cartTotal.textContent = formatMoney(total);

    headerCartCount.textContent = `${quantity} itens`;
    headerCartTotal.textContent = formatMoney(total);
}

function openCart() {
    document.getElementById("cart").classList.add("active");
}

function closeCart() {
    document.getElementById("cart").classList.remove("active");
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    let message = "Olá! Gostaria de fazer um pedido na Safa Onça:\n\n";

    cart.forEach(item => {
        message += `${item.name}\n`;
        message += `Quantidade: ${item.quantity}\n`;
        message += `Valor: ${formatMoney(item.price * item.quantity)}\n\n`;
    });

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    message += `Total: ${formatMoney(total)}`;

    const phone = "5521964060467";

    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}
function searchProducts() {
    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    );

    displayProducts(filtered);
}

document
    .getElementById("searchInput")
    .addEventListener("input", searchProducts);
displayProducts(products);
updateCart();