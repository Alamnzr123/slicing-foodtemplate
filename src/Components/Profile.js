import React from 'react';
import Navbar from "./Navbar";
import Gambar1 from "../Assets/4662c85cb7661f579e2c9baff0ce5fdc.png";
import Gambar2 from "../Assets/cfef9bb1fc6e0bef50d5c8ef7a6cdff6.jpg";
import Gambar3 from "../Assets/65940ba73f12f048d870dfa487a052df.jpg";

const Profile = () => {
    return(
        <div>
            <Navbar />
            <section>
            <div>
                <img className="ellipse127" src={Gambar1} alt="Gambar1" />
            </div>
            <h1 className="text_garneta">Garneta Sharina</h1>
            <nav className="navbar_myrecipe">
                <a>My Recipe</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a>Saved Recipe</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a>Liked Recipe</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </nav>
            <div className="line18"></div>
            <div>
                <img className="rectangle327_profile" src={Gambar2} alt="Gambar2"/>
                <h1 className="text_bombchicken_2">Bomb Chicken</h1>
            </div>
            <div>
                <img className="Rectangle328_2" src={Gambar3} alt="Gambar3" />
                <h1 className="text_banana_2">Bananas Pancake</h1>
            </div>
            <footer>
                <div className="Rectangle26_2">
                    <p className="text_productcompany2">Product &nbsp;&nbsp;      Company  &nbsp;&nbsp;      Learn more &nbsp;&nbsp;      Get in touch </p>
                </div>
            </footer>

          
            </section>

        </div>

    )

}

export default Profile;