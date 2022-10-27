let products = [
    {
        imgUrl: "./filterImages/dress1.png",
        name: "Fresia Garden skies kiss",
        price: "$1,250 USD",
        description: "The Fresia Garden skies is perfect for any occasion, with an embroidered bottom skirt and beautiful motifs of golden stars and moons",
        length: "ankle length",
        type: "Embroidery",
        collection: "FallWinter21'"

    },

    {
        imgUrl: "./filterImages/dress2.png",
        name: "Cloud Starlet Cape Gown",
        price: "$1,200",
        description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
        length: "floor length",
        type: "Cape-gown",
        collection: "FallWinter21'"
    },

    {
      imgUrl: "./filterImages/dress3.png",
      name: "Melrose Iridescent Gown",
      price: "$1,190",
      description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
      length: "Floor length",
      type: ["slit open", "buttons"],
      collection: "SpringSumer 22'"
  },

  {
    imgUrl: "./filterImages/dress4.png",
    name: "Gold Flower Dream",
    price: "$1,200",
    description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
    length: "Above ankle length",
    type: "puff sleeves",
    collection: "FallWinter 21'"
},
//cambiar imagenes

{
  imgUrl: "https://i.pinimg.com/564x/bf/8f/4e/bf8f4ec686ae803c07542bcf05ef84ce.jpg",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},

{
  imgUrl: "https://i.pinimg.com/564x/bf/8f/4e/bf8f4ec686ae803c07542bcf05ef84ce.jpg",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},
{
  imgUrl: "https://i.pinimg.com/564x/bf/8f/4e/bf8f4ec686ae803c07542bcf05ef84ce.jpg",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},

{
  imgUrl: "https://i.pinimg.com/564x/bf/8f/4e/bf8f4ec686ae803c07542bcf05ef84ce.jpg",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},

{
  imgUrl: "https://i.pinimg.com/564x/bf/8f/4e/bf8f4ec686ae803c07542bcf05ef84ce.jpg",
  name: "Gold Flower Dream",
  price: "$1,200",
  description: "Butterfly Blossom Dress perf4ect for any occasion, with an embroidered bottom skirt and beautiful motifs of our gerbera daisies",
  length: "length",
  type: "puff sleeves",
  collection: "FallWinter 21'"
},

{
  imgUrl: "https://i.pinimg.com/564x/bf/8f/4e/bf8f4ec686ae803c07542bcf05ef84ce.jpg",
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
container.innerHTML += `<div class="card mx-2 px-4 py-4">
<div class=" ">
  <figure class="image is-6by3">
    <img class= "card-image" src= ${product.imgUrl} alt="Placeholder image">
    
</div>
    <div class="media-content">
      <p class="title is-5 py-3 my-1">${product.name}</p>
      <p class="subtitle is-5 my-1">${product.price}</p>
      <p class="subtitle is-6">${product.collection}</p>
    </div>

</div>`

});


const keywordElem = document.getElementById('keyword');
keywordElem.addEventListener("change", (event) => handleKeyword(keywordElem));



//Métodos
function displayTypes(){
  const typesArr = []
  products.forEach((product)=> {
    if(!typesArr.includes(product.type)){
      typesArr.push(product.type)
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
})
}


function handleKeyword(input){
  console.log(input.value);
}

/* const filterTypes = products.map(product => ({


})); */