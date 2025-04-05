import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="wrapper home-section">
            <div className="home-wrapper">
                <h1>Добре дошъл в <span>Ofertichka.bg</span>!</h1>
                <p>Мястото, където можеш лесно да купиш или продадеш всичко — от колелета до лаптопи.</p>
                <div className="home-buttons">
                    <a href="" className="create-btn">Разгледай обявите</a>
                    <a href="" className="create-btn">Качи обява</a>
                </div>
            </div>
        </section>
    )
}