let productId;

const url = window.location.search;
    const searchParas = new URLSearchParams(url);
    productId = searchParas.get("id").replace('"', "");

    console.log(productId);

    const productDetail = products.find((object) => object.id == productId)    

    let containerItem= document.getElementById("container");
    
    containerItem.innerHTML += `
    <div class="card mx-2 px-4 py-4">
<div class=" ">
  <figure class="image is-6by3">
    <img class= "card-image" src= ${productDetail.imgUrl} alt="Placeholder image">
    
</div>
    <div class="media-content">
      <p class="title is-5 py-3 my-1">${productDetail.name}</p>
      <p class="subtitle is-5 my-1">${productDetail.price}</p>
      <p class="subtitle is-6">${productDetail.collection}</p>
    </div>

</div>`



/* products.forEach(product => {
    container.innerHTML += `
     `
    
    }); */