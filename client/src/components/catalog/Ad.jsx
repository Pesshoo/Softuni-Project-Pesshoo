import { Link } from "react-router";

export default function Ad({
    _id,
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
                <Link to={`/ads/${_id}/details`} className="create-btn">Детайли</Link>
            </div>
        </div>
    )
}