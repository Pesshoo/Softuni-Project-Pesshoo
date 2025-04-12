import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router';

export default function ProfileManage() {
    const { email, username, userLoginHandler } = useContext(UserContext);
    const [newEmail, setNewEmail] = useState(email);
    const [newUsername, setNewUsername] = useState(username);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newEmail || !newUsername) {
            alert('Моля, попълнете всички полета!');
            return;
        }

        const updatedData = { email: newEmail, username: newUsername };
        userLoginHandler(updatedData);
        navigate('/profile');
    };

    return (
        <section className="profile-management">
            <div className="profile-wrapper">
                <h2 className="profile-heading">Управление на профил</h2>
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                        <label htmlFor="email">Имейл:</label>
                        <input
                            type="email"
                            id="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Потребителско име:</label>
                        <input
                            type="text"
                            id="username"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Запази промените</button>
                </form>
            </div>
        </section>
    );
}