document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category');
  const products = Array.from(document.querySelectorAll('.product'));

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');

      products.forEach(product => {
        const productCategory = product.querySelector('.product-category');
        if (selectedCategory === 'All' || productCategory.getAttribute('data-category') === selectedCategory) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });

  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
    if (!searchInput.classList.contains('hidden')) {
      searchInput.focus();
    }
  });

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    products.forEach(product => {
      const productName = product.querySelector('.product-name').textContent.toLowerCase();

      if (productName.includes(searchTerm)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });

  searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
      searchInput.classList.add('hidden');
    }
  });

  // Código para redireccionar a la página de detalles al hacer clic en una imagen
  const productImages = document.querySelectorAll('.product-image');
  productImages.forEach(image => {
    image.addEventListener('click', () => {
      // Obtener el ID o cualquier otro identificador único del producto
      const productId = image.getAttribute('data-product-id');

      // Redireccionar a la página de detalles con el ID del producto
      window.location.href = 'detalle_producto.html?id=' + productId;
    });
  });

  // Código para mostrar los detalles del producto en la página de detalle_producto.html
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  if (productId) {
    const selectedProduct = products.find(product => product.getAttribute('data-product-id') === productId);

    if (selectedProduct) {
      const productImage = selectedProduct.querySelector('.product-image');
      const productName = selectedProduct.querySelector('.product-name').textContent;
      const productPrice = selectedProduct.querySelector('.product-price').textContent;
      const productSize = selectedProduct.getAttribute('data-size');
      const productColor = selectedProduct.getAttribute('data-color');

      const detailImage = document.querySelector('.product-image');
      const detailName = document.querySelector('.product-name');
      const detailPrice = document.querySelector('.product-price');
      const detailSize = document.querySelector('.product-size');
      const detailColor = document.querySelector('.product-color');

      detailImage.setAttribute('src', productImage.getAttribute('src'));
      detailName.textContent = productName;
      detailPrice.textContent = productPrice;
      detailSize.textContent = `Talla: ${productSize}`;
      detailColor.textContent = `Color: ${productColor}`;
    }
  }
});
