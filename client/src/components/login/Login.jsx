import { useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";
import {useContext} from "react"
import { useNotification } from "../notifications/Notifications";

export default function Login() {

  const navigate = useNavigate();
  const {login} = useLogin();
  const {userLoginHandler} = useContext(UserContext);
  const { showNotification } = useNotification();

  const submitAction = async (formData) => {
    const values = Object.fromEntries(formData);

    try {
      const authData = await login(values.email, values.password);

      userLoginHandler(authData)

      navigate('/');

      showNotification("Успешно влизане!", "success");
  
      return values;

    } catch(err){
        showNotification(err.message, "error");
      }
    }
  
    return (
        <div className="login-container">
        <h2>Вход в профила</h2>
        <form className="login-form" action={submitAction}>
          <label htmlFor="email">Имейл</label>
          <input type="email" id="email" name="email" placeholder="Въведи имейл" required/>
    
          <label htmlFor="password">Парола</label>
          <input type="password" id="password" name="password" placeholder="Въведи парола" required/>
    
          <button type="submit">Влез</button>
        </form>
      </div>
    )
}