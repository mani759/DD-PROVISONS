// ========== CONFIGURE YOUR WHATSAPP NUMBER HERE ==========
const whatsappNumber = "917386032284"; // 👈 Replace with your WhatsApp number (no + or spaces)

// ========== PRODUCT LIST ==========
const products = [
  {"name":"Agarbathi (1 pack)","price":"₦520","image":"img133.jpg","category":"Personal Care & Cleaning","offer":"buy 1 get 1"},
  {"name":"Agarbathi -Mangaldeep (Big)","price":"₦3050","image":"img133.jpg","category":"Personal Care & Cleaning","offer":"50% off"},
  {"name":"Ajwain (100 gm)","price":"₦1610","image":"img12.jpg","category":"Masala & Spices"},
  {"name":"Almond (100 gms)","price":"₦2880","image":"img28.jpg","category":"Others / General","offer":"15% off"},
  {"name":"Amrutanjan (25 gms)","price":"₦2580","image":"img27.avif","category":"Personal Care & Cleaning"},
  {"name":"Ani Seeds Powder (50 gms)","price":"₦1430","image":"img29.jpg","category":"Masala & Spices"},
  {"name":"Appalam - Bindu (120 gms)","price":"₦3910","image":"img30.jpg","category":"Snacks & Mixes"},
  {"name":"Atta - Wheat Flour - Mehek (5 Kg)","price":"₦10900","image":"img141.jgp","category":"Flours & Atta","offer":"buy 1 get 1"},
  {"name":"Atta - Wheat Flour - Mehek (500 g)","price":"₦1500","image":"img31.jpg","category":"Flours & Atta"},
  {"name":"Atta - Nigeria Multigrain - Swallow (500 g)","price":"₦10900","image":"img140.jpg","category":"Flours & Atta"},
  {"name":"Bajji Bonda Mix (200 gms)","price":"₦1300","image":"img26.jpg","category":"Snacks & Mixes"},
  {"name":"Baking Soda (90 gms)","price":"₦560","image":"img32.jpg","category":"Masala & Spices"},
  {"name":"Basil Seeds (100 gms)","price":"₦3290","image":"img33.jpg","category":"Masala & Spices"},
  {"name":"Bathroom Air Freshner - Sunrise (50 gms)","price":"₦500","image":"img34.jpg","category":"Personal Care & Cleaning"},
  {"name":"Besan Flour - Tansukh (1 Kg)","price":"₦3220","image":"img35.jpg","category":"Flours & Atta"},
  {"name":"Besan Flour - Madam (1 Kg)","price":"₦5250","image":"img8.jpg","category":"Flours & Atta"},
  {"name":"Biriyani Masala - Sakthi/Aachi (50 gms)","price":"₦2020","image":"img22.jpg","category":"Masala & Spices"},
  {"name":"Black Pepper Powder (200 gms)","price":"₦7800","image":"img38.jpg","category":"Masala & Spices"},
  {"name":"Black Pepper Whole (50 gms)","price":"₦2980","image":"img39.jpg","category":"Masala & Spices"},
  {"name":"Black Pepper Whole (100 gms)","price":"₦5640","image":"img39.jpg","category":"Masala & Spices"},
  {"name":"Black Pepper Whole (200 gms)","price":"₦10150","image":"img39.jpg","category":"Masala & Spices"},
  {"name":"Black Split Urid Dhal (1 Kg)","price":"₦5920","image":"img42.jpg","category":"Pulses & Dals"},
  {"name":"Camphor Tablets (20 gms)","price":"₦4030","image":"img41.jpg","category":"Personal Care & Cleaning"},
  {"name":"Cardamon Seeds (10 gms)","price":"₦1590","image":"img40.jpg","category":"Masala & Spices"},
  {"name":"Cashew Broken (500 gms)","price":"₦5400","image":"img43.jpg","category":"Others / General"},
  {"name":"Cashew Whole (1 Kg - 240)","price":"₦0","image":"img44.jpg","category":"Others / General"},
  {"name":"Channa Dhal (500 gms)","price":"₦2650","image":"img45.jpg","category":"Pulses & Dals"},
  {"name":"Chat Masala - Pathanjali (100 gms)","price":"₦1625","image":"img46.jpg","category":"Masala & Spices"},
  {"name":"Chia Seeds (100 gms)","price":"₦4020","image":"img47.jpg","category":"Masala & Spices"},
  {"name":"Chick Peas (500 gms) - White","price":"₦4030","image":"img48.jpg","category":"Pulses & Dals"},
  {"name":"Chilli Chicken 65 Masala - Sakthi (50 gms)","price":"₦2020","image":"img22.jpg","category":"Masala & Spices"},
  {"name":"Chilly Parotta (150 gms)","price":"₦4670","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Chutney Dal (Roasted Gram - 200 gms)","price":"₦3170","image":"img49.jpg","category":"Pulses & Dals"},
  {"name":"Cinnamon Sticks (100 gms)","price":"₦2625","image":"img50.jpg","category":"Masala & Spices"},
  {"name":"Cloves (20 gm)","price":"₦1180","image":"img51.jpg","category":"Masala & Spices"},
  {"name":"Cloves (100 gm)","price":"₦6870","image":"img51.jpg","category":"Masala & Spices"},
  {"name":"Coconut Oil (Virgin) Satvik (200 ml)","price":"₦4600","image":"img52.jpg","category":"Oils & Ghee"},
  {"name":"Coconut Oil (Virgin) Satvik (500 ml)","price":"₦10930","image":"img52.jpg","category":"Oils & Ghee"},
  {"name":"Coffee Powder - Nescafe Classic (45 gms)","price":"₦6990","image":"img14.jpg","category":"Snacks & Mixes"},
  {"name":"Coffee Powder - Nescafe Classic (100 gms)","price":"₦11890","image":"img53.jpg","category":"Snacks & Mixes"},
  {"name":"Coffee Powder - Nescafe Classic (200 gms)","price":"₦20200","image":"img53.jpg","category":"Snacks & Mixes"},
  {"name":"Country Chicken Masala (50 gms)","price":"₦1890","image":"img22.jpg","category":"Masala & Spices"},
  {"name":"Coriander Powder Everest (100 gms)","price":"₦1680","image":"img54.jpg","category":"Masala & Spices"},
  {"name":"Coriander Seeds (100 gms)","price":"₦1500","image":"img55.jpg","category":"Masala & Spices"},
  {"name":"Corn Flour (Checkers - 450 gms)","price":"₦1800","image":"img56.jpg","category":"Flours & Atta"},
  {"name":"Cranberry Chatpata (100 gms)","price":"₦4900","image":"img57.jpg","category":"Snacks & Mixes"},
  {"name":"Cumin Seeds (100 gms)","price":"₦2530","image":"img58.jpg","category":"Masala & Spices"},
  {"name":"Cumin Powder (50 gms)","price":"₦1790","image":"img58.jpg","category":"Masala & Spices"},
  {"name":"Cumin Powder (100 gms)","price":"₦2070","image":"img58.jpg","category":"Masala & Spices"},
  {"name":"Cumin Powder (Everest - 100 gms)","price":"₦3430","image":"img59.jpg","category":"Masala & Spices"},
  {"name":"Dal Rice Powder (100 gms)","price":"₦3550","image":"img60.jpg","category":"Masala & Spices"},
  {"name":"Dishwash Liquid - Morning Fresh (1 Ltr)","price":"₦2850","image":"img61.jpg","category":"Personal Care & Cleaning"},
  {"name":"Dishwash Liquid - Morning Fresh (700 ml)","price":"₦2200","image":"img61.jpg","category":"Personal Care & Cleaning"},
  {"name":"Dishwash Liquid - Morning Fresh (450 ml)","price":"₦1530","image":"img61.jpg","category":"Personal Care & Cleaning"},
  {"name":"Dried Green Peas (1 Kg)","price":"₦2480","image":"img62.jpg","category":"Pulses & Dals"},
  {"name":"Dry Chilli Kashmiri Whole (100 gms)","price":"₦2340","image":"img63.jpg","category":"Masala & Spices"},
  {"name":"Egg Kuruma (Sakthi – 50 gms)","price":"₦2020","image":"img64.jpg","category":"Masala & Spices"},
  {"name":"Falooda Mix (200 gms)","price":"₦5960","image":"img65.jpg","category":"Snacks & Mixes"},
  {"name":"Flax Seeds (200 gm)","price":"₦2620","image":"img66.jpg","category":"Masala & Spices"},
  {"name":"Flax Seeds (100 gm)","price":"₦1610","image":"img66.jpg","category":"Masala & Spices"},
  {"name":"Garam Masala – LG (100 gms)","price":"₦1210","image":"img67.jpg","category":"Masala & Spices"},
  {"name":"Garlic Dal Powder (100 gms)","price":"₦4180","image":"img68.jpg","category":"Masala & Spices"},
  {"name":"Ghee Kavin (500 gms)","price":"₦10200","image":"img69.jpg","category":"Oils & Ghee"},
  {"name":"Ginger Powder (Everest – 100 gms)","price":"₦6210","image":"img70.jpg","category":"Masala & Spices"},
  {"name":"GRB Payasam Mix (180 gms)","price":"₦5060","image":"img71.jpg","category":"Snacks & Mixes"},
  {"name":"Health Mix – Ulandankali (250 gms)","price":"₦8600","image":"img72.jpg","category":"Flours & Atta"},
  {"name":"Health Mix – Carrot Malt (250 gms)","price":"₦14420","image":"img73.jpg","category":"Flours & Atta"},
  {"name":"Health Mix – Ragi Cocoa Malt (250 gms)","price":"₦12970","image":"img74.jpg","category":"Flours & Atta"},
  {"name":"Hing – LG/MTR (50 gms)","price":"₦2490","image":"img75.jpg","category":"Masala & Spices"},
  {"name":"Hing – Premia Brown (50 gms)","price":"₦2490","image":"img76.jpg","category":"Masala & Spices"},
  {"name":"Hing Yellow (50 gms)","price":"₦2250","image":"img77.jpg","category":"Masala & Spices"},
  {"name":"Honey (Dabur) 100 gm","price":"₦2530","image":"img78.jpg","category":"Others / General"},
  {"name":"Idli Rawa (Madam – 1 Kg)","price":"₦3840","image":"img10.jpg","category":"Flours & Atta"},
  {"name":"Idly Rice – Omsom (5 Kg)","price":"₦17860","image":"img12.jpg","category":"Flours & Atta"},
  {"name":"Idly Rice – Vitali (5 Kg)","price":"₦16450","image":"img12.jpg","category":"Flours & Atta"},
  {"name":"Idly Rice – Vitali (2 Kg)","price":"₦7570","image":"img12.jpg","category":"Flours & Atta"},
  {"name":"Jaggery Powder (500 gm)","price":"₦4650","image":"img79.jpg","category":"Masala & Spices"},
  {"name":"Kadal Paasi (Dagad Phool – 50 gms)","price":"₦2840","image":"img80.jpg","category":"Masala & Spices"},
  {"name":"Kitchen King Masala – Navnath (100 gms)","price":"₦2560","image":"img81.jpg","category":"Masala & Spices"},
  {"name":"Maida – Madam (500 gms)","price":"₦2390","image":"img82.jpg","category":"Flours & Atta"},
  {"name":"Mayonnaise – Veg (100 gms)","price":"₦3300","image":"img83.jpg","category":"Snacks & Mixes"},
  {"name":"Mehandi Cone (1 No.)","price":"₦460","image":"img84.jpg","category":"Personal Care & Cleaning"},
  {"name":"Methi Seeds (200 gms)","price":"₦2640","image":"img85.jpg","category":"Masala & Spices"},
  {"name":"Mixed Masala Kulambu (Sakthi 50 gms)","price":"₦1660","image":"img86.jpg","category":"Masala & Spices"},
  {"name":"Moog Dhal – Green Whole (500 gms)","price":"₦2390","image":"img87.jpg","category":"Pulses & Dals"},
  {"name":"Moong Dal – Yellow Split (500 gms)","price":"₦6900","image":"img88.jpg","category":"Pulses & Dals"},
  {"name":"Mustard Oil (1 Ltr)","price":"₦7820","image":"img89.jpg","category":"Oils & Ghee"},
  {"name":"Mustard Seeds (50 gms)","price":"₦560","image":"img90.jpg","category":"Masala & Spices"},
  {"name":"Mustard Seeds (100 gms)","price":"₦1290","image":"img90.jpg","category":"Masala & Spices"},
  {"name":"Mustard Seeds (200 gms)","price":"₦2160","image":"img90.jpg","category":"Masala & Spices"},
  {"name":"Noodles (Maggi Veg – 280 gms)","price":"₦2590","image":"img11.jpg","category":"Snacks & Mixes"},
  {"name":"Noodles Masala (50 gms)","price":"₦2020","image":"img91.jpg","category":"Masala & Spices"},
  {"name":"Pappad – Palak (100 gms)","price":"₦3160","image":"img92.jpg","category":"Snacks & Mixes"},
  {"name":"Pappad – Jeera (100 gms)","price":"₦3160","image":"img93.jpg","category":"Snacks & Mixes"},
  {"name":"Pappad – Red Chilly (100 gms)","price":"₦3160","image":"img94.jpg","category":"Snacks & Mixes"},
  {"name":"Pappad – Aaloo (100 gms)","price":"₦3160","image":"img95.jpg","category":"Snacks & Mixes"},
  {"name":"Phenyle (1000 ml)","price":"₦7130","image":"img96.jpg","category":"Personal Care & Cleaning"},
  {"name":"Pickle (Mixed – 777 – 200 gms)","price":"₦5630","image":"img97.jpg","category":"Snacks & Mixes"},
  {"name":"Pithambari (150 gms)","price":"₦1730","image":"img98.jpg","category":"Personal Care & Cleaning"},
  {"name":"Pizza/Pasta Sauce (100 gms)","price":"₦3300","image":"img99.jpg","category":"Snacks & Mixes"},
  {"name":"Poha – Madam (1 Kg)","price":"₦4500","image":"img100.jpg","category":"Flours & Atta"},
  {"name":"Poha (500 gms)","price":"₦2100","image":"img100.jpg","category":"Flours & Atta"},
  {"name":"Poha (200 gms)","price":"₦1050","image":"img100.jpg","category":"Flours & Atta"},
  {"name":"Puffed Rice (500 gm)","price":"₦2640","image":"img101.jpg","category":"Flours & Atta"},
  {"name":"Ragi Flour – Madam (1 Kg)","price":"₦4440","image":"img3.jpg","category":"Flours & Atta"},
  {"name":"Rajma (1 Kg)","price":"₦7480","image":"img102.jpg","category":"Pulses & Dals"},
  {"name":"Rajma (500 gm)","price":"₦4030","image":"img102.jpg","category":"Pulses & Dals"},
  {"name":"Red Chilli Powder (50 gms)","price":"₦900","image":"img103.jpg","category":"Masala & Spices"},
  {"name":"Red Chilli Powder (100 gms)","price":"₦2160","image":"img103.jpg","category":"Masala & Spices"},
  {"name":"Red Chilli Powder Tikalal Everest (100 gms)","price":"₦3000","image":"img104.jpg","category":"Masala & Spices"},
  {"name":"Red Chilli Powder Kashmiri Everest (100 gms)","price":"₦3000","image":"img104.jpg","category":"Masala & Spices"},
  {"name":"Rice Atta (Madam – 1 Kg)","price":"₦3580","image":"img2.jpg","category":"Flours & Atta"},
  {"name":"Rice – Golden Grain Rozana (1 Kg)","price":"₦3910","image":"img105.jpg","category":"Flours & Atta"},
  {"name":"Rice Mogra – India Gate (5 Kg)","price":"₦16100","image":"img1.jpg","category":"Flours & Atta"},
  {"name":"Rice Golden Grain Sella (1 Kg)","price":"₦3600","image":"img19.jpg","category":"Flours & Atta"},
  {"name":"Rice Feast Rozana – India Gate (5 Kg)","price":"₦18170","image":"img21.jpg","category":"Flours & Atta"},
  {"name":"Rice India Gate Sona Masoori (5 Kg)","price":"₦17850","image":"img106.jpg","category":"Flours & Atta"},
  {"name":"Rock Salt (1 Kg)","price":"₦3410","image":"img107.jpg","category":"Masala & Spices"},
  {"name":"Roohafza Syrup (750 ml)","price":"₦6860","image":"img108.jpg","category":"Snacks & Mixes"},
  {"name":"Roohafza Syrup (750 ml)","price":"₦7940","image":"img108.jpg","category":"Snacks & Mixes"},
  {"name":"Sabja Seed (100 gms)","price":"₦1670","image":"img109.jpg","category":"Masala & Spices"},
  {"name":"Sabudana (500 gms)","price":"₦2340","image":"img110.jpg","category":"Flours & Atta"},
  {"name":"Salt - Tata (1 Kg)","price":"₦1680","image":"img111.jpg","category":"Masala & Spices"},
  {"name":"Sambar Powder - Navnath (100 gms)","price":"₦2560","image":"img112.jpg","category":"Masala & Spices"},
  {"name":"Sambar Chilly Powder - Aachi (100 gms)","price":"₦4490","image":"img113.jpg","category":"Masala & Spices"},
  {"name":"Sambar Masala - Sakthi (50 gms)","price":"₦1710","image":"img114.jpg","category":"Masala & Spices"},
  {"name":"Ketchup - Tomato Kisan (500 gms)","price":"₦3570","image":"imgg5.jpg","category":"Snacks & Mixes"},
  {"name":"Sesame Oil (500 ml)","price":"₦4600","image":"img139.jpg","category":"Oils & Ghee"},
  {"name":"Sooji Rava - Madam (500 gms)","price":"₦2450","image":"img9.jpg","category":"Flours & Atta"},
  {"name":"Soup Mix (Knorr Veg - 40 gms)","price":"₦2470","image":"img138.jpg","category":"Snacks & Mixes"},
  {"name":"Soup Mix (Knorr Mexican Corn Tomato - 50 gms)","price":"₦2650","image":"img137.jpg","category":"Snacks & Mixes"},
  {"name":"Star Ani Seeds (50 gm)","price":"₦4330","image":"img136.jpg","category":"Masala & Spices"},
  {"name":"Sugar - Dangote (500 g)","price":"₦1440","image":"img135.jpg","category":"Masala & Spices"},
  {"name":"Sunflower Oil - Golden (1 Ltr)","price":"₦5880","image":"img6.jpg","category":"Oils & Ghee"},
  {"name":"Sunflower Oil - Fiona (5 Ltrs)","price":"₦24730","image":"img4.jpg","category":"Oils & Ghee"},
  {"name":"Talcum Powder (Nycil - 210 gms)","price":"₦8460","image":"img115.jpg","category":"Personal Care & Cleaning"},
  {"name":"Talcum Powder (Dermicool - 210 gms)","price":"₦8460","image":"img116.jpg","category":"Personal Care & Cleaning"},
  {"name":"Tandoori Masala (Everest - 100 gms)","price":"₦4260","image":"img117.jpg","category":"Masala & Spices"},
  {"name":"Tamarind (100 gms)","price":"₦1500","image":"img134.jpg","category":"Masala & Spices"},
  {"name":"Tamarind (200 gms)","price":"₦2400","image":"img134.jpg","category":"Masala & Spices"},
  {"name":"Tea - Tata Gold (250 gms)","price":"₦4720","image":"img118.jpg","category":"Snacks & Mixes"},
  {"name":"Tea Powder - Tata Agni (250 gms)","price":"₦2730","image":"img119.jpg","category":"Snacks & Mixes"},
  {"name":"Tea Powder - Taj Mahal (100 gms)","price":"₦5050","image":"img120.jpg","category":"Snacks & Mixes"},
  {"name":"Clothes Whitener (Hypo - 180ml Sachet)","price":"₦200","image":"img121.jpg","category":"Personal Care & Cleaning"},
  {"name":"Tooth Paste - Dabur Red (150 gms)","price":"₦3050","image":"img122.jpg","category":"Personal Care & Cleaning"},
  {"name":"Toor Dal (500 gms)","price":"₦4630","image":"img123.jpg","category":"Pulses & Dals"},
  {"name":"Turmeric Powder (100 gms)","price":"₦1680","image":"img124.jpg","category":"Masala & Spices"},
  {"name":"Urad Dhal Split (1 Kg)","price":"₦7450","image":"img125.jpg","category":"Pulses & Dals"},
  {"name":"VathaKuzhambu Powder (50 gms)","price":"₦1900","image":"img126.jpg","category":"Masala & Spices"},
  {"name":"Vermicilli (500 gms)","price":"₦2040","image":"img127.jpg","category":"Flours & Atta"},
  {"name":"Vermicilli (200 gms) - Lemon","price":"₦5320","image":"img127.jpg","category":"Flours & Atta"},
  {"name":"Vermicilli (180 gms) - Millet/Wheat/Ragi/Varagu","price":"₦4890","image":"img127.jpg","category":"Flours & Atta"},
  {"name":"Vicks VapoRub Strong (25 gms)","price":"₦3470","image":"img128.jpg","category":"Personal Care & Cleaning"},
  {"name":"Vicks VapoRub BabyRub (25 gms)","price":"₦3640","image":"img129.jpg","category":"Personal Care & Cleaning"},
  {"name":"Washing Powder (Good Mama - 800 gms)","price":"₦1880","image":"img130.jpg","category":"Personal Care & Cleaning"},
  {"name":"Washing Soap (Viva - 250 gms)","price":"₦800","image":"img131.jpg","category":"Personal Care & Cleaning"},
  {"name":"Yoghurt Chilly (More Milagai - 150g)","price":"₦4080","image":"img132.jpg","category":"Snacks & Mixes"}
];

// ========== SHOPPING CART STATE ==========
let cart = JSON.parse(localStorage.getItem("groceryCart")) || [];

// ========== DOM ELEMENTS ==========
const productsContainer = document.getElementById("products-container");
const categoryButtons = document.querySelectorAll(".category-card");
const searchInput = document.getElementById("search-input");
const clearSearch = document.getElementById("clear-search");
const cartToggle = document.getElementById("cart-toggle");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");
const cartItemsContainer = document.getElementById("cart-items");
const cartBadge = document.getElementById("cart-badge");
const cartTotalPrice = document.getElementById("cart-total-price");
const checkoutBtn = document.getElementById("checkout-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

// ========== HELPER: EXTRACT NUMERIC PRICE ==========
function extractPrice(priceString) {
  const numericPrice = parseFloat(priceString.replace(/[^0-9.]/g, ""));
  return isNaN(numericPrice) ? 0 : numericPrice;
}

// ========== HELPER: FORMAT PRICE ==========
function formatPrice(price) {
  return "₦" + price.toFixed(2);
}

// ========== CART: ANIMATE BUTTON ==========
function animateCartButton() {
  // Remove animation class if it exists
  cartToggle.classList.remove("animate");
  
  // Trigger reflow to restart animation
  void cartToggle.offsetWidth;
  
  // Add animation class
  cartToggle.classList.add("animate");
  
  // Animate badge
  cartBadge.classList.remove("pulse");
  void cartBadge.offsetWidth;
  cartBadge.classList.add("pulse");
  
  // Remove animation class after animation completes
  setTimeout(() => {
    cartToggle.classList.remove("animate");
    cartBadge.classList.remove("pulse");
  }, 600);
}

// ========== CART: ADD PRODUCT ==========
function addToCart(product) {
  const existingItem = cart.find((item) => item.name === product.name);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
      priceNumeric: extractPrice(product.price)
    });
  }
  
  saveCart();
  updateCartUI();
  animateCartButton();
  showCartNotification(product.name);
}

// ========== CART: UPDATE QUANTITY ==========
function updateQuantity(productName, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productName);
    return;
  }
  
  const item = cart.find((p) => p.name === productName);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartUI();
  }
}

// ========== CART: REMOVE PRODUCT ==========
function removeFromCart(productName) {
  cart = cart.filter((item) => item.name !== productName);
  saveCart();
  updateCartUI();
}

// ========== CART: CLEAR ALL ==========
function clearAllCart() {
  if (confirm("Are you sure you want to clear the entire cart?")) {
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
  }
}

// ========== CART: SAVE TO LOCALSTORAGE ==========
function saveCart() {
  localStorage.setItem("groceryCart", JSON.stringify(cart));
}

// ========== CART: UPDATE UI ==========
function updateCartUI() {
  // Update badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItems;
  
  // Update cart items display
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
    checkoutBtn.disabled = true;
  } else {
    cartItemsContainer.innerHTML = cart.map((item) => `
      <div class="cart-item">
        <div class="cart-item-details">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">${item.price} × ${item.quantity} = ${formatPrice(item.priceNumeric * item.quantity)}</p>
          <div class="cart-item-controls">
            <button class="quantity-btn" onclick="updateQuantity('${item.name.replace(/'/g, "\\'")}', ${item.quantity - 1})">−</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity('${item.name.replace(/'/g, "\\'")}', ${item.quantity + 1})">+</button>
            <button class="remove-item-btn" onclick="removeFromCart('${item.name.replace(/'/g, "\\'")}')">Remove</button>
          </div>
        </div>
      </div>
    `).join("");
    checkoutBtn.disabled = false;
  }
  
  // Update total price
  const totalPrice = cart.reduce((sum, item) => sum + (item.priceNumeric * item.quantity), 0);
  cartTotalPrice.textContent = formatPrice(totalPrice);
}

// ========== CART: NOTIFICATION ==========
function showCartNotification(productName) {
  console.log(`✓ ${productName} added to cart!`);
}

// ========== CART: TOGGLE SIDEBAR ==========
function toggleCart() {
  cartSidebar.classList.toggle("active");
  cartOverlay.classList.toggle("active");
}

// ========== CART: CLOSE SIDEBAR ==========
function closeCart() {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
}

// ========== CART: CHECKOUT ON WHATSAPP ==========
function checkoutOnWhatsApp() {
  if (cart.length === 0) return;
  
  let message = `Hello DD Provisions 👋,\n\nI want to order the following items:\n\n`;
  
  cart.forEach((item) => {
    const subtotal = formatPrice(item.priceNumeric * item.quantity);
    message += `🛒 *${item.name}*\n   Qty: ${item.quantity} × ${item.price} = ${subtotal}\n\n`;
  });
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.priceNumeric * item.quantity), 0);
  message += `\n💰 *Total: ${formatPrice(totalPrice)}*\n\nPlease confirm availability and proceed with delivery details.`;
  
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ========== SCROLL TO PRODUCTS FUNCTION ==========
function scrollToProducts() {
  setTimeout(() => {
    productsContainer.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }, 100);
}

// ========== RENDER PRODUCTS FUNCTION ==========
function displayProducts(filteredProducts) {
  productsContainer.innerHTML = "";

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `<p style="text-align: center; width: 100%; padding: 40px; font-size: 1.2em; color: #666;">No products found.</p>`;
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <div class="image-container">
        ${product.offer ? `<span class="offer-badge">${product.offer}</span>` : ""}
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200';" />
      </div>
      <div class="product-details">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <div class="product-btn-container">
          <button class="add-to-cart-btn" onclick="addToCart({
            name: '${product.name.replace(/'/g, "\\'")}',
            price: '${product.price}',
            image: '${product.image}',
            category: '${product.category}'
          })">
            <i class="ri-shopping-cart-line"></i> Add
          </button>
          <button class="whatsapp-btn">
            <i class="ri-whatsapp-line"></i> Order
          </button>
        </div>
      </div>
    `;

    // WhatsApp button (direct order without cart)
    const whatsappBtn = productCard.querySelector(".whatsapp-btn");
    whatsappBtn.addEventListener("click", () => {
      const message = `Hello DD Provisions 👋,\n\nI want to order:\n🛒 *${product.name}* - ${product.price}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });

    productsContainer.appendChild(productCard);
  });
}

// ========== FILTER BY CATEGORY ==========
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".category-card.active").classList.remove("active");
    btn.classList.add("active");

    searchInput.value = "";
    clearSearch.style.display = "none";

    const category = btn.getAttribute("data-filter");

    if (category === "All") {
      displayProducts(products);
    } else if (category === "Offers") {
      const filtered = products.filter((p) => p.offer);
      displayProducts(filtered);
    } else {
      const filtered = products.filter((p) => p.category === category);
      displayProducts(filtered);
    }

    scrollToProducts();
  });
});

// ========== SEARCH FUNCTIONALITY ==========
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  
  if (query.length > 0) {
    clearSearch.style.display = "block";
  } else {
    clearSearch.style.display = "none";
  }

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query)
  );
  displayProducts(filtered);

  if (query.length > 0) {
    scrollToProducts();
  }
});

// ========== CLEAR SEARCH ==========
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  clearSearch.style.display = "none";
  displayProducts(products);
  
  document.querySelector(".category-card.active").classList.remove("active");
  document.querySelector('.category-card[data-filter="All"]').classList.add("active");
});

// ========== CART: EVENT LISTENERS ==========
cartToggle.addEventListener("click", toggleCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
checkoutBtn.addEventListener("click", checkoutOnWhatsApp);
clearCartBtn.addEventListener("click", clearAllCart);

// ========== INITIAL LOAD ==========
displayProducts(products);
updateCartUI();