fetch ('http://localhost:5000/products')
.then(function (response){
    return response.json();
})
.then(function (item){
    console.log (item);
    let items = document.getElementById('products');
    item.forEach (product => {
        let products = document.createElement('li')
        products.innerText = `${product.name}`
        items.appendChild(products)

    })
})
.catch(function (error){
    console.log('error', error)
});

fetch ('http://localhost:5000/products/fruits')
.then(function (response){
    return response.json();
})
.then(function (item){
    console.log (item);
    let items = document.getElementById('fruList');
    item.forEach (fruit => {
        let fruits = document.createElement('li')
        fruits.innerText = `${fruit.name}`
        items.appendChild(fruits)

    })
})
.catch(function (error){
    console.log('error', error)
});


fetch ('http://localhost:5000/products/vegetables')
.then(function (response){
    return response.json();
})
.then(function (data){
    console.log (data);
    let items = document.getElementById('vegList');
    data.forEach (vegetable => {
        let vegetables = document.createElement('li')
        vegetables.innerText = `${vegetable.name}`
        items.appendChild(vegetables)

    })
})
.catch(function (error){
    console.log('error', error)
});