let products = [
    {
        imgUrl: "",
        name: "",
        price: "$1,200",
        description: "",
        size: "",
        type: "",
        collection: ""

    },

    {
        imgUrl: "",
        name: "",
        price: "$1,200",
        description: "",
        size: "",
        type: "",
        collection: ""
    }
  ]

let container = document.getElementById('container');

products.forEach(product => {
container.innerHTML += `<section class="product-look">
<figure>
  <img src="/scr/person3.png" alt="">
</figure>
<article class="text-testimonies">
  <h2> ${product.name}</h2>
  <p> ${product.price}</p>
  <p>${product.description}</p>
</article>
</section>`

});
