import { useParams } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useComments, useCreateComments } from "../../api/commentsApi";
import { useNotification } from "../notifications/Notifications";

export default function AdComments() {
  const { idAd } = useParams();
  const {email} = useContext(UserContext);
  const { create } = useCreateComments();
  const { filteredComments, addComment } = useComments(idAd);
  const {showNotification} = useNotification();
  
    const submitAction = async (formData) => {

        const commentInput = formData.get('comment');

        if (commentInput.trim() == '') {
            showNotification("The input field is empty", "error");
            return;
        }

        try {

            const newComment = await create(email, idAd, commentInput);

            addComment(newComment); 

            formData.set("comment", "");

        } catch(err){
            showNotification(err.message, "error");
        }

    }
  
  
    return (
    <div className="comment-section">
            <h3>Коментари</h3>

            <form action={submitAction}>
              <textarea name="comment"
                placeholder="Добави коментар..."
              ></textarea>
              {email
                ? <button type="submit">Публикувай</button>
                : <>
                <label className="comments-btn-label" htmlFor="sumbit-btn">Трябва да си си в акаунта за да публикуваш коментари!</label>
                <button type="submit" name="sumbit-btn" disabled>Публикувай</button>
                </>
              }
            </form>

            <ul className="comment-list">

            {filteredComments.map(comment => (
                <li key={comment._id}>{comment.email}: {comment.comment}</li>
            ))}

            </ul>
    </div>
    )
}