const products = [
    {
        id: 1,
        name: "Parafuso Sextavado 1/4",
        category: "Parafusos",
        price: 2.50,
        image: "imagens/parafuso.webp"
    },
    {
    id: 2,
    name: "Caixa de Bucha Nº 8",
    category: "Parafusos",
    price: 18.90,
    image: "imagens/bucha.webp"
    },
    {
        id: 3,
        name: "Martelo Profissional",
        category: "Ferramentas",
        price: 39.90,
        image: "imagens/martelo.webp"
    },
    {
    id: 4,
    name: "Alicate Universal",
    category: "Ferramentas",
    price: 29.90,
    image: "imagens/alicate.webp"
    },
    {
    id: 5,
    name: "Tomada 10A",
    category: "Elétrica",
    price: 8.50,
    image: "imagens/tomada.webp"
    },
    {
    id: 6,
    name: "Fita Isolante",
    category: "Elétrica",
    price: 6.90,
    image: "imagens/fita.webp"
    },
    {
    id: 7,
    name: "Joelho PVC 25mm",
    category: "Hidráulica",
    price: 3.50,
    image: "imagens/joelho.webp"
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

                <p>${product.category}</p>

                <h3>${product.name}</h3>

                <p>
                    <strong>${formatMoney(product.price)}</strong>
                </p>

                <button onclick="addToCart(${product.id})">
                    Adicionar ao carrinho
                </button>

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
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

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

            <span>
                ${item.quantity}
            </span>

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

    cartCount.textContent = quantity;
    cartTotal.textContent = formatMoney(total);
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