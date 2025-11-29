
async function loadProducts(category){
  const res = await fetch('products.json');
  const products = await res.json();
  const container = document.getElementById('product-list');
  const search = document.getElementById('search').value.toLowerCase();

  container.innerHTML = '';

  products
    .filter(p => (!category || p.category===category))
    .filter(p => p.name.toLowerCase().includes(search))
    .forEach(p => {
      container.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a href="${p.link}" target="_blank">Buy Now</a>
      </div>`;
    });
}

function init(){ loadProducts(); }
