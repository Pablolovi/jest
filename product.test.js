const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

// Test para agregar un producto
test('should add a product', () => {
    addProduct('Laptop', 1000);
    expect(getProducts()).toHaveLength(1); // Verifica que hay un producto
    expect(getProducts()[0].name).toBe('Laptop'); // Verifica el nombre del producto
});

// Test para verificar que la ID se incrementa al agregar productos
test('should increment the id by 1 each time a product is added', () => {
    addProduct('Laptop', 1000);
    addProduct('Phone', 500);
    expect(getProducts()[1].id).toBe(1); // El segundo producto debe tener id 1
});

// Test para agregar un producto sin nombre
test('should throw an error if name is not defined', () => {
    expect(() => addProduct(undefined, 1000)).toThrow("Name and price are required");
});

// Test para agregar un producto sin precio
test('should throw an error if price is not defined', () => {
    expect(() => addProduct('Phone', undefined)).toThrow("Name and price are required");
});

// Test para eliminar un producto
test('should remove a product', () => {
    addProduct('Laptop', 1000);
    const productId = getProducts()[0].id;
    removeProduct(productId);
    expect(getProducts()).toHaveLength(0); // Verifica que no hay productos
});

// Test para obtener un producto
test('should get a product by id', () => {
    addProduct('Laptop', 1000);
    const product = getProduct(0);
    expect(product.name).toBe('Laptop');
    expect(product.price).toBe(1000);
});

// Test para actualizar un producto
test('should update a product', () => {
    addProduct('Laptop', 1000);
    updateProduct(0, 'Laptop Pro', 1200);
    const updatedProduct = getProduct(0);
    expect(updatedProduct.name).toBe('Laptop Pro');
    expect(updatedProduct.price).toBe(1200);
});