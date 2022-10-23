let products = [
    {
        imgUrl: "./filterImages/dress1.png",
        name: "Fresia Garden skies kiss",
        price: "$1,250 USD",
        description: "The Fresia Garden skies is perfect for any occasion, with an embroidered bottom skirt and beautiful motifs of golden stars and moons",
        sizes: "US 0, US 2, US 4, US 6",
        type: "Embroidery, ankle length",
        collection: "FallWinter21'"

    },

    {
        imgUrl: "https://i.pinimg.com/564x/55/93/1c/55931cd010f3fe3663fb2ce9222cc13a.jpg",
        name: "Cloud Starlet Cape Gown",
        price: "$1,200",
        description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
        sizes: "US 0, US 2, US 4, US 6",
        type: "Cape-gown, floor length",
        collection: "FallWinter21'"
    },

    {
      imgUrl: "https://i.pinimg.com/564x/73/3b/2d/733b2d0d14dc2237981cf02e8585b2eb.jpg",
      name: "Melrose Iridescent Gown",
      price: "$1,190",
      description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
      sizes: "US 0, US 2, US 4, US 6",
      type: "Floor length, slit open, buttons",
      collection: "SpringSumer 22'"
  },

  {
    imgUrl: "https://i.pinimg.com/564x/bf/8f/4e/bf8f4ec686ae803c07542bcf05ef84ce.jpg",
    name: "Gold Flower Dream",
    price: "$1,200",
    description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
    sizes: "US 0, US 2, US 4, US 6",
    type: "Above ankle length, puff sleeves",
    collection: "FallWinter 21'"
},

  ]

let container = document.getElementById('container');

products.forEach(product => {
container.innerHTML += `<div class="card mx-2 px-4 py-4">
<div class=" ">
  <figure class="image is-6by3 card-image">
    <img src= ${product.imgUrl} alt="Placeholder image">
</div>
    <div class="media-content">
      <p class="title is-4 py-3">${product.name}</p>
      <p class="subtitle is-6">${product.price}</p>
    </div>

  <div class="content">
  ${product.description}
  </div>
</div>`

});
