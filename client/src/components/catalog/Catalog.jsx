import { useAds } from "../../api/adsApi"
import Ad from "./Ad";

export default function Catalog() {
    const { ads } = useAds();

    return (
        <>
        <div className="catalog-heading">
            <h2>Намерени са {ads.length} Обяви</h2>
        </div>
        <div className="catalog">

            {ads.map(ad => <Ad key={ad._id} {...ad}/>)}

        </div>
        </>
    )
}