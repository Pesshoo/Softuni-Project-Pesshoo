import { useState } from "react";
import { useAds } from "../../api/adsApi";
import Ad from "./Ad";

export default function Catalog() {
    const { ads } = useAds();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState('Всички');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const adsPerPage = 10;

    const filteredAds = ads.filter(ad => {
        const matchTitle = ad.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchCategory = category === 'Всички' || ad.category === category;
        const matchPrice =
          (!priceRange.min || Number(ad.price) >= Number(priceRange.min)) &&
          (!priceRange.max || Number(ad.price) <= Number(priceRange.max));
      
        return matchTitle && matchCategory && matchPrice;
      });

    const indexOfLastAd = currentPage * adsPerPage;
    const indexOfFirstAd = indexOfLastAd - adsPerPage;
    const currentAds = filteredAds.slice(indexOfFirstAd, indexOfLastAd);

    const totalPages = Math.ceil(filteredAds.length / adsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="catalog-heading">
                <h2>Намерени са {filteredAds.length} Обяви</h2>
                <input 
                    type="text" 
                    placeholder="Търси..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>

            <div className="catalog-wrapper">

                <aside className="filter-box">
                    <h2>Филтри</h2>
                    <label>
                        Категория:
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-filter">
                            <option value="Всички">Всички</option>
                            <option value="cars">Автомобили</option>
                            <option value="tech">Технологии</option>
                            <option value="fashion">Дрехи</option>
                            <option value="services">Услуги</option>
                            <option value="other">Други</option>
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
                        <input
                        type="number"
                        placeholder="Мин. цена"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                        />
                    </label>
                    <label>
                        Цена до:
                        <input
                        type="number"
                        placeholder="Макс. цена"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                        />
                    </label>

                </aside>

                <div className="catalog">
                    {currentAds.length !== 0
                        ? currentAds.map(ad => <Ad key={ad._id} {...ad}/>)
                        : <h1>Не са намерени активни обяви!</h1>
                    }
                </div>
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => paginate(index + 1)} 
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}