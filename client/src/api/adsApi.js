import { useEffect, useState } from "react";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/ads';

export const useAds = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(response => {
                const adsArray = Object.values(response);
                setAds(adsArray)
            })
    }, [])  

    return {
        ads,
    }
}

export const useCreateAd = () => {
    const create = (adData) => {
        return request.post(baseUrl, adData)
    }

    return {
        create,
    }
}