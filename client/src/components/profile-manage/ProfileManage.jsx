import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function ProfileManage() {
    const { email, username } = useContext(UserContext);
    

    return (
        <section className="profile-management">
            <div className="profile-wrapper">
                <h2 className="profile-heading">Информация за профил</h2>
                <form className="profile-form">
                    <div className="form-group">
                        <label htmlFor="email">Имейл:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Потребителско име:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            className="form-input"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}