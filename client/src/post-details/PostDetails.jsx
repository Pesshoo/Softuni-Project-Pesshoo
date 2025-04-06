export default function PostDetails() {
    return (
        <div class="product-container">
    <div class="product-image-container">
      <img src="/images/product1.avif" alt="Име на продукта"/>
    </div>
    <div class="product-info">
      <h1 class="product-name">BMW E36 Тениска</h1>
      <p class="product-category-text">Категория: Мърч / Автомобили</p>
      <p class="product-price-text">Цена: <span>29.99 лв</span></p>
      <p class="product-description-text">
        Уникална тениска за всички фенове на BMW E36. Изработена от 100% памук, с принт, който не избледнява.
      </p>
      <button class="add-to-cart-button">Добави в количката</button>
    </div>
  </div>
    )
}