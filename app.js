const addCart = () => {
    const inputField1 = document.getElementById('input1');
    const inputField2 = document.getElementById('input2');

    const value1 = inputField1.value;
    const value2 = inputField2.value;

    if (value1.length > 0 && value2.length > 0) {
        displayItem(value1, value2);
        addToCart(value1, value2);
    }
    else {
        alert("No Input");
    }

    inputField1.value = '';
    inputField2.value = '';
}

const displayItem = (product, price) => {
    const ul = document.getElementById('items');
    const li = document.createElement('li');

    li.innerHTML = `
        <li>${product}, price = ${price}</li>
    `
    ul.appendChild(li);
}

const getItem = () => {
    const cart = localStorage.getItem('carts');
    let products;
    if (cart) {
        products = JSON.parse(cart);
    }
    else {
        products = [];
    }
    return products;
}

const addToCart = (product, price) => {
    const cartArray = getItem();
    // console.log(cartArray);
    const newProduct = { name: product, price: price };
    cartArray.push(newProduct);
    // console.log(cartArray);
    const cartStringified = JSON.stringify(cartArray);
    localStorage.setItem('carts', cartStringified);
}

const displayCart = () => {
    const cartData = getItem();
    cartData.forEach(item => {
        displayItem(item.name, item.price);
    })
}

displayCart();