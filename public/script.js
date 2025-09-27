// 3 products with images
const products = [
  { name: "Laptop", price: "₹1200", desc: "laptops include a selection of pre-configured models with a variety of processors, graphics cards, hard drives, RAM, storage drives, touchscreen technology, and more. With a choice of screen resolution, you can configure an HD laptop or a 4K laptop.", img: "laptop.jpg" },
  { name: "Phone", price: "₹800", desc: "a portable electronic device used for communication through voice calls, text messages, and internet access. It incorporates various technologies, such as computing, programming, and the internet, to enable wireless communication and access to a wide range of applications and services.", img: "phone.jpg" },
  { name: "Watch", price: "₹200", desc: "A watch is a small, portable timepiece, either worn on the wrist via a strap (a wristwatch) or carried in a pocket (a pocket watch), designed to tell the time", img: "watch.jpg" },
  { name: "headphnes", price: "₹1200", desc: "A watch is a small, portable timepiece, either worn on the wrist via a strap (a wristwatch) or carried in a pocket (a pocket watch), designed to tell the time", img: "headphones.jpg" },
  { name: "earphones", price: "₹1200", desc: " An earphone is a small loudspeaker that a listener wears or holds close to their ear to listen to audio from a device like a phone, computer, or music player privately", img: "earphones.jpg" },
  { name: "sunglasses", price: "₹1200", desc: "An earphone is a small loudspeaker that a listener wears or holds close to their ear to listen to audio from a device like a phone, computer, or music player privately", img: "sunglasses.jpg" },
  { name: "cloths", price: "₹900", desc: "Cotton cloth is a versatile, natural textile made from the soft, fluffy fibers surrounding the seeds of the cotton plant", img: "cloth.jpg" },
  { name: "Home appliances", price: "₹15000", desc: "Home appliances are electrical or mechanical devices, also called domestic or household appliances, that perform domestic chores like cooking, cleaning, and food preservation", img: "app.jpg" }
];


// Background images
const homeBackgrounds = ["home1.jpg", "home2.jpg","home3.jpg","home4.jpg"];
const productBackgrounds = ["product1.jpg", "product2.jpg"];

// Set random background
function setRandomBackground() {
  const body = document.body;
  if (body.classList.contains("home")) {
    const img = homeBackgrounds[Math.floor(Math.random() * homeBackgrounds.length)];
    body.style.background = `url('${img}') no-repeat center center fixed`;
    body.style.backgroundSize = "cover";
  } else if (body.classList.contains("product")) {
    const img = productBackgrounds[Math.floor(Math.random() * productBackgrounds.length)];
    body.style.background = `url('${img}') no-repeat center center fixed`;
    body.style.backgroundSize = "cover";
  }
}

// Display products on home page
function displayProducts() {
  const container = document.querySelector(".products");
  if (!container) return;
  container.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="product-img">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
     
    `;
    div.onclick = () => showProduct(product.name, product.price, product.desc, product.img);
    container.appendChild(div);
  });
}

// Save product details and navigate to product page
function showProduct(name, price, desc, img) {
  localStorage.setItem('productName', name);
  localStorage.setItem('productPrice', price);
  localStorage.setItem('productDesc', desc);
  localStorage.setItem('productImg', img);
  window.location.href = 'product.html';
}

// Load product details on product page
function loadProductDetails() {
  if (document.getElementById('productName')) {
    document.getElementById('productName').innerText = localStorage.getItem('productName');
    document.getElementById('productPrice').innerText = 'Price: ' + localStorage.getItem('productPrice');
    document.getElementById('productDesc').innerText = 'Description: ' + localStorage.getItem('productDesc');

    const imgSrc = localStorage.getItem('productImg');
    if (imgSrc) {
      let imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.alt = localStorage.getItem('productName');
      imgElement.className = "detail-img";
      document.body.insertBefore(imgElement, document.getElementById('productName').nextSibling);
    }
  }
}

// Go back to home
function goBack() {
  window.location.href = 'index.html';
}

// On page load
window.onload = function() {
  setRandomBackground();
  displayProducts();
  loadProductDetails();
}