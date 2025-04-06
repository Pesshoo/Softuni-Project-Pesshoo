import { useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";
import {useContext} from "react"

export default function Login() {

  const navigate = useNavigate();
  const {login} = useLogin();
  const {userLoginHandler} = useContext(UserContext);

  const submitAction = async (formData) => {
    const values = Object.fromEntries(formData);

    const authData = await login(values.email, values.password);

    userLoginHandler(authData)

    navigate('/');

    return values;
  }
  
    return (
        <div class="login-container">
        <h2>Вход в профила</h2>
        <form class="login-form" action={submitAction}>
          <label htmlFor="email">Имейл</label>
          <input type="email" id="email" name="email" placeholder="Въведи имейл" required/>
    
          <label htmlFor="password">Парола</label>
          <input type="password" id="password" name="password" placeholder="Въведи парола" required/>
    
          <button type="submit">Влез</button>
        </form>
      </div>
    )
}