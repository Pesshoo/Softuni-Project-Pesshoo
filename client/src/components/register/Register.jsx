export default function Register() {
    return (
        <div class="register-box">
        <h2>Регистрация</h2>
        <form class="register-form">
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