let products = []; // Lista de productos
let id = 0; // ID inicial para el primer producto

// Reinicia la lista de productos
function resetProducts() {
    products = [];
    id = 0;
}

// Agrega un producto
function addProduct(name, price) {
    if (!name || !price) throw new Error("Name and price are required");
    
    // Verifica si el producto ya existe
    const existingProduct = products.find(product => product.name === name);
    if (existingProduct) throw new Error("Product already exists");

    // Agrega el nuevo producto
    products.push({ id: id++, name, price });
}

// Elimina un producto
function removeProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index === -1) throw new Error("Product not found");
    products.splice(index, 1);
}

// Obtiene todos los productos
function getProducts() {
    return products;
}

// Obtiene un producto por su ID
function getProduct(id) {
    const product = products.find(product => product.id === id);
    if (!product) throw new Error("Product not found");
    return product;
}

// Actualiza un producto por su ID
function updateProduct(id, name, price) {
    const product = products.find(product => product.id === id);
    if (!product) throw new Error("Product not found");

    // Solo actualiza los valores que están definidos
    if (name) product.name = name;
    if (price) product.price = price;
}

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };
