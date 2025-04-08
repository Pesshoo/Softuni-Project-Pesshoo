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

export const useAd = (idAd) => {
    const [ad, setAd ] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${idAd}`)
            .then(setAd)
    }, [idAd])

    return {
        ad,
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

export const useEdit = () => {

    const editAd = (idAd, adData) => {
        return request.put(`${baseUrl}/${idAd}`, {...adData, _id: idAd})
    }

    return {
        editAd,
    }
    
}

export const useDelete = () => {

    const removeAd = (idAd) => {
        return request.delete(`${baseUrl}/${idAd}`)
    }

    return {
        removeAd,
    }
    
}