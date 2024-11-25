


async function getProducts(){

    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();

    let arr = data.recipes;
    
    let newProduct = arr.map(function(product){

        return `

        <div class="product">
            <h3>${product.title}</h3>
            <img src="${product.image_url}">
        </div>
        `;


    }).join('');
    document.querySelector('.products .items').innerHTML+= newProduct;
}

getProducts();
