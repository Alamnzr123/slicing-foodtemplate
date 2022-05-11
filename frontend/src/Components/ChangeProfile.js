import React, { useState } from "react";
import ListNavbar from "./Navbar";
import Footer from "./Footer";
import Gambar1 from "../Assets/4662c85cb7661f579e2c9baff0ce5fdc.png";
import Gambar2 from "../Assets/cfef9bb1fc6e0bef50d5c8ef7a6cdff6.jpg";
import Gambar3 from "../Assets/65940ba73f12f048d870dfa487a052df.jpg";
import Logopencil from "../Assets/logo_pencil.svg";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const ChangeProfile = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div>
      <ListNavbar />
      <section>
        <div>
          <img className="ellipse127" src={Gambar1} alt="Gambar1" />
        </div>
        <h1 className="text_garneta">Garneta Sharina</h1>
        <div className="logo_pencil">
          <img src={Logopencil} />
        </div>
        <div className="Rectangle70_btn">
          <button className="btn_down">Change image Profile</button>
          <br />
          <button className="btn_down">Change Password</button>
        </div>
        <div className="line18"></div>
        <Footer />
      </section>
      <div className="navbar_myrecipe">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab == "1" ? "active" : ""}
              onClick={() => setActiveTab("1")}
            >
              My Recipe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "2" ? "active" : ""}
              onClick={() => setActiveTab("2")}
            >
              Saved Recipe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "3" ? "active" : ""}
              onClick={() => setActiveTab("3")}
            >
              Liked Recipe
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {" "}
            <div>
              <img
                className="rectangle327_profile"
                src={Gambar2}
                alt="Gambar2"
              />
              <h1 className="text_bombchicken_2">Bomb Chicken</h1>
            </div>
            <div>
              <img className="Rectangle328_2" src={Gambar3} alt="Gambar3" />
              <h1 className="text_banana_2">Bananas Pancake</h1>
            </div>
          </TabPane>
          <TabPane tabId="2">
            {" "}
            <div className="line18"></div>
            <div>
              <img
                className="rectangle327_profile"
                src={Gambar2}
                alt="Gambar2"
              />
              <h1 className="text_bombchicken_2">Bomb Chicken</h1>
            </div>
            <div>
              <img className="Rectangle328_2" src={Gambar3} alt="Gambar3" />
              <h1 className="text_banana_2">Bananas Pancake</h1>
            </div>
            <Footer />
          </TabPane>
          <TabPane tabId="3">
            {" "}
            <div className="line18"></div>
            <div>
              <img
                className="rectangle327_profile"
                src={Gambar2}
                alt="Gambar2"
              />
              <h1 className="text_bombchicken_2">Bomb Chicken</h1>
            </div>
            <div>
              <img className="Rectangle328_2" src={Gambar3} alt="Gambar3" />
              <h1 className="text_banana_2">Bananas Pancake</h1>
            </div>
            <Footer />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default ChangeProfile;
