export default function CreatePost() {
    return (
        <div class="ad-box">
        <h2>Създай Обява</h2>
        <form class="ad-form">
          <label for="title">Име на продукта</label>
          <input type="text" id="title" name="title" placeholder="Пример: BMW Е36" required/>
    
          <label for="price">Цена (лв)</label>
          <input type="number" id="price" name="price" placeholder="Пример: 5000" required/>
    
          <label for="description">Описание</label>
          <textarea id="description" name="description" placeholder="Въведи описание..." rows="4" required></textarea>
    
          <label for="category">Категория</label>
          <select id="category" name="category" required>
            <option value="">Избери категория</option>
            <option value="cars">Автомобили</option>
            <option value="tech">Техника</option>
            <option value="fashion">Мода</option>
            <option value="services">Услуги</option>
            <option value="other">Друго</option>
          </select>
    
          <label for="image">Снимка</label>
          <input type="text" id="image" name="image" placeholder="Линк..." required/>
    
          <button type="submit">Създай обява</button>
        </form>
      </div>
    )
}