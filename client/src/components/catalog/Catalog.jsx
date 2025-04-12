import { useState } from "react";
import { useAds } from "../../api/adsApi"
import Ad from "./Ad";

export default function Catalog() {
    const { ads } = useAds();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAds = ads.filter(ad =>
        ad.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <div className="catalog-heading">
            <h2>Намерени са {filteredAds.length} Обяви</h2>
            <input type="text" placeholder="Търси..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="catalog-wrapper">

            <aside className="filter-box">
                <h2>Филтри</h2>
                <label>
                Категория:
                <select>
                    <option>Всички</option>
                    <option>Електроника</option>
                    <option>Мебели</option>
                </select>
                </label>

                <label>
                Състояние:
                <select>
                    <option>Всички</option>
                    <option>Ново</option>
                    <option>Използвано</option>
                </select>
                </label>

                <label>
                Цена от:
                <input type="number" />
                </label>
                <label>
                Цена до:
                <input type="number" />
                </label>

                <button>Приложи</button>
            </aside>

            <div className="catalog">

                {filteredAds.map(ad => <Ad key={ad._id} {...ad}/>)}

            </div>
        </div>
        </>
    )
}