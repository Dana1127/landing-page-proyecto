let products = [
    {
        id: 1,
        imgUrl: "./filterImages/dress1.png",
        name: "Fresia Garden skies kiss",
        price: "$1,250 USD",
        description: "The Fresia Garden skies is perfect for any occasion, with an embroidered bottom skirt and beautiful motifs of golden stars and moons",
        length: "ankle length",
        type: ["Embroidery"],
        collection: "FallWinter21'"

    },

    {
      id: 2,
        imgUrl: "./filterImages/dress2.png",
        name: "Cloud Starlet Cape Gown",
        price: "$1,200",
        description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
        length: "floor length",
        type: ["Cape-gown"],
        collection: "FallWinter21'"
    },

    {
      id: 3,
      imgUrl: "./filterImages/dress3.png",
      name: "Melrose Iridescent Gown",
      price: "$1,190",
      description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
      length: "Floor length",
      type: ["slit open", "buttons"],
      collection: "SpringSumer 22'"
  },

  {
    id: 4,
    imgUrl: "./filterImages/dress4.png",
    name: "Gold Flower Dream",
    price: "$1,200",
    description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
    length: "Above ankle length",
    type: ["puff sleeves"],
    collection: "FallWinter 21'"
},
//cambiar imagenes

{
  id: 5,
  imgUrl: "./filterImages/dress5.png",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},

{
  imgUrl: "./filterImages/dress6.png",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},
{
  imgUrl: "./filterImages/dress7.png",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},

{
  imgUrl: "./filterImages/dress8.png",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},

{
  imgUrl: "./filterImages/dress9.png",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},

{
  imgUrl: "./filterImages/dress10.png",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},

  ]

 displayTypes ();

let container = document.getElementById('products-container');

products.forEach(product => {
container.innerHTML += `<a href= './item.html?id=${product.id}'>
<div class="card mx-2 px-4 py-4">
<div class=" ">
  <figure class="image is-6by3">
    <img class= "card-image" src= ${product.imgUrl} alt="Placeholder image">
    
</div>
    <div class="media-content">
      <p class="title is-5 py-3 my-1">${product.name}</p>
      <p class="subtitle is-5 my-1">${product.price}</p>
      <p class="subtitle is-6">${product.collection}</p>
    </div>

</div>
</a> `

});


const keywordElem = document.getElementById('keyword');
keywordElem.addEventListener("change", (event) => handleKeyword(keywordElem));



//Métodos
function displayTypes(){
  const typesArr = []
  products.forEach((product)=> {
    if(!typesArr.includes(product.type)){
      typesArr.push(...product.type)
    }
  });
  console.log(typesArr)

  //Colocar nombres en el dropdown
  const dropdown = document.getElementById('type')

  typesArr.forEach((type)=> {
  const optionElem = document.createElement('option')
  optionElem.value = type
  optionElem.textContent = type

  dropdown.append(optionElem)
  console.log(type);


})
}


function handleKeyword(input){
  
  console.log(input.value);
}

