export default function Login() {
    return (
        <div class="login-container">
        <h2>Вход в профила</h2>
        <form class="login-form">
          <label for="email">Имейл</label>
          <input type="email" id="email" name="email" placeholder="Въведи имейл" required/>
    
          <label for="password">Парола</label>
          <input type="password" id="password" name="password" placeholder="Въведи парола" required/>
    
          <button type="submit">Влез</button>
        </form>
      </div>
    )
}