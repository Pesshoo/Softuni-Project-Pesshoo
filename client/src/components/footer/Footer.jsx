import { Link } from "react-router";

export default function Footer() {

    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Ofertichka.Bg. Всички права запазени.</p>
            <p>
                <a href="/privacy">Поверителност</a> | 
                <a href="/terms">Условия</a> | 
                <a href="/contact">Контакт</a>
            </p>
        </footer>
    )
}