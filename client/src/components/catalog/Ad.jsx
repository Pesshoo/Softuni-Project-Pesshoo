export default function Ad({
    title,
    price,
    imageUrl,
}) {

    return (
        <div class="product-item">
            <img src={imageUrl} alt="Продукт 1"/>
            <div class="product-info">
                <h3 class="product-title">{title}</h3>
                <p class="product-price">Цена: {price} лв.</p>
                <a href="/catalog/details" className="create-btn">Детайли</a>
            </div>
        </div>
    )
}