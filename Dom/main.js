const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'Lenovo IdeaPad 3',
    price: 399,
    stars: 5,
    reviews: 150,
    seller: 'Amazon',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg'
  },
  {
    name: 'Dell Inspiron 15',
    price: 499,
    stars: 4,
    reviews: 100,
    seller: 'Best Buy',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425553_sd.jpg'
  },
  {
    name: 'Asus VivoBook 15',
    price: 349,
    stars: 4,
    reviews: 200,
    seller: 'Newegg',
    image:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/34-236-145-V01.jpg'
  },
  {
    name: 'Acer Aspire 5',
    price: 329,
    stars: 3,
    reviews: 300,
    seller: 'Acer Store',
    image:
      'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/images/20200901/Aspire-5_A515-56G_modelpreview.png'
  },
  {
    name: 'Apple MacBook Air',
    price: 999,
    stars: 5,
    reviews: 500,
    seller: 'Apple Store',
    image:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1603332211000'
  },
  {
    name: 'Microsoft Surface Laptop 4',
    price: 899,
    stars: 4,
    reviews: 120,
    seller: 'Microsoft Store',
    image:
      'https://c.s-microsoft.com/en-us/CMSImages/1920_Panel1_Surface_Laptop_4.png?version=e6221fb8-f2c8-b870-0338-0302f9d27e10'
  },
  {
    name: 'HP Pavilion 14',
    price: 599,
    stars: 4,
    reviews: 400,
    seller: 'HP Store',
    image:
      'https://store.hp.com/app/assets/images/product/5XN37AV_1/center_facing.png?_=1591487372777'
  },
  {
    name: 'Samsung Galaxy Book',
    price: 749,
    stars: 5,
    reviews: 50,
    seller: 'Samsung',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/levant/np750xed-kd1us/gallery/levant-galaxy-book2-pro-np750xed-kd1us-fronttitaniumgray-532428528?$720_576_PNG$'
  },
  {
    name: 'Google Pixelbook Go',
    price: 649,
    stars: 4,
    reviews: 80,
    seller: 'Google Store',
    image:
      'https://store.google.com/product-image/standard/pixelbook-go-front-open.png'
  }
]

const gallery = document.getElementById('gallery')

products.forEach((product) => {
  const productCard = document.createElement('div')
  productCard.className = 'product'

  const productImage = document.createElement('img')
  productImage.src = product.image
  productImage.alt = product.name

  const productName = document.createElement('h2')
  productName.textContent = product.name

  const productPrice = document.createElement('p')
  productPrice.className = 'price'
  productPrice.textContent = `$${product.price}`

  const productStars = document.createElement('p')
  productStars.textContent = `Rating: ${'★'.repeat(product.stars)} (${
    product.reviews
  } reviews)`

  const productSeller = document.createElement('p')
  productSeller.className = 'seller'
  productSeller.textContent = `Sold by: ${product.seller}`

  productCard.appendChild(productImage)
  productCard.appendChild(productName)
  productCard.appendChild(productPrice)
  productCard.appendChild(productStars)
  productCard.appendChild(productSeller)

  gallery.appendChild(productCard)
})
