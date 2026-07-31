import defaultUser from "../assets/user-1.png";
import Navbar from "../components/Navbar";
import { menuItems } from "../utils/constants";

function ProfileCard({ profile }) {
    return (
        <div className="app">
            <Navbar menuItems={menuItems} />

            <main className="profile-content">
                <div className="profile-card">
                    <img
                        className="profile-avatar"
                        src={profile.avatar}
                        alt={`${profile.first_name} ${profile.last_name}`}
                        onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = defaultUser;
                        }}
                    />

                    <h2 className="profile-name">
                        {profile.first_name} {profile.last_name}
                    </h2>

                    <p className="profile-email">
                        {profile.email}
                    </p>
                </div>
            </main>
        </div>
    );
}

export default ProfileCard;