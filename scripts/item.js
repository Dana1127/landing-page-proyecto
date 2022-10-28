let productId;

const url = window.location.search;
    const searchParas = new URLSearchParams(url);
    productId = searchParas.get("id").replace('"', "");

    console.log(productId);

    const productDetail = products.find((object) => object.id == productId)    

    let containerItem= document.getElementById("container");
    
    containerItem.innerHTML += `
    <section class="align-sections">
    <div class="card mx-2 px-4 py-4">
<div class=" ">
  <figure class="image is-6by3">
    <img class= "card-image" src= ${productDetail.imgUrl} alt="Placeholder image">
    
</div>
</div>
    <section class="text">
      <p class="title is-3 py-3 mx-3">${productDetail.name}</p>
      <p class="subtitle is-5 my-1 mx-3 has-text-weight-bold">${productDetail.price}</p>
      <p class="subtitle is-5 mx-3">${productDetail.collection}</p>
      <p class="subtitle is-5 mx-3">${productDetail.description}</p>

      
    <ul>
    <li class="subtitle is-6 mx-3 has-text-weight-bold">Length: ${productDetail.length}</li>
    <li class="subtitle is-6 mx-3 has-text-weight-bold"> Type: ${productDetail.type}</li>
</ul>

    </section>

    </section>

`

