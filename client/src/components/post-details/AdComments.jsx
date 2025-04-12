import { useParams } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useComments, useCreateComments } from "../../api/commentsApi";

export default function AdComments() {
  const { idAd } = useParams();
  const {email} = useContext(UserContext);
  const { create } = useCreateComments();
  const { filteredComments, addComment } = useComments(idAd);
  
    const submitAction = async (formData) => {

        const commentInput = formData.get('comment');

        if (commentInput.trim() == '') {
            return;
        }

        const newComment = await create(email, idAd, commentInput);
        addComment(newComment); 
        formData.set("comment", "");

    }
  
  
    return (
    <div className="comment-section">
            <h3>Коментари</h3>

            <form action={submitAction}>
              <textarea name="comment"
                placeholder="Добави коментар..."
              ></textarea>
              <button type="submit">Публикувай</button>
            </form>

            <ul className="comment-list">

            {filteredComments.map(comment => (
                <li key={comment._id}>{comment.email}: {comment.comment}</li>
            ))}

            </ul>
    </div>
    )
}