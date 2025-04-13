import { Link } from "react-router";

export default function Ad({
    _id,
    title,
    price,
    imageUrl,
}) {

    return (
        <div className="product-item">
            <img src={imageUrl} alt="Продукт 1"/>
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">Цена: {price} лв.</p>
                <Link to={`/ads/${_id}/details`} className="create-btn">Детайли</Link>
            </div>
        </div>
    )
}