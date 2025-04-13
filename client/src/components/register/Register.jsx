import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import {useContext} from "react"
import { useRegister } from "../../api/authApi";
import { useNotification } from "../notifications/Notifications";

export default function Register() {

  const navigate = useNavigate();
    const {register} = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const { showNotification} = useNotification()

    const registerHandler = async (formData) => {

        const values = Object.fromEntries(formData);

        const confirmPassword = formData.get('confirm-password');

        if (values.password !== confirmPassword) {
          showNotification('Password missmatch!', "error");
          return;
      }
        
        try {

          const authData = await register(values.email, values.password);

          console.log(authData);
  
          userLoginHandler(authData);
  
          navigate('/')

          showNotification("Successful Registration!", "success");

        } catch(err){
          showNotification(err.message, "error");
        }

    }

    return (
        <div class="register-box">
        <h2>Регистрация</h2>
        <form class="register-form" action={registerHandler}>
          <label for="name">Име</label>
          <input type="text" id="name" name="name" placeholder="Въведи име" required/>
    
          <label for="email">Имейл</label>
          <input type="email" id="email" name="email" placeholder="Въведи имейл" required/>
    
          <label for="password">Парола</label>
          <input type="password" id="password" name="password" placeholder="Въведи парола" required/>
    
          <label for="confirm-password">Потвърди парола</label>
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Повтори паролата" required/>
    
          <button type="submit">Регистрирай се</button>
        </form>
      </div>
    )
}