import { useEffect, useState } from "react";
import request from "../utils/request";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const useCreateComments = () => {

    const create = (email, adId, comment) => {
        return request.post(baseUrl, {email, adId, comment});
    }

    return {
        create,
    }
}

export const useComments = (idAd) => {

    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        request.get(baseUrl)
            .then(response => {
                const commentsArray = Object.values(response);
                setComments(commentsArray);
            });
    }, []);

    const filteredComments = comments.filter(comment => comment.adId === idAd);

    const addComment = (newComment) => {
        setComments(prev => [...prev, newComment]);
    };

    return {
        filteredComments,
        addComment,
    }

}