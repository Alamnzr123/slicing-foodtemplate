import React, { useState, useEffect } from "react";
import ListNavbar from "./Navbar";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Footer from "./Footer";
import swal from "sweetalert";
import Gambar1 from "../Assets/4662c85cb7661f579e2c9baff0ce5fdc.png";
import Gambar2 from "../Assets/cfef9bb1fc6e0bef50d5c8ef7a6cdff6.jpg";
import Gambar3 from "../Assets/65940ba73f12f048d870dfa487a052df.jpg";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const Image = styled.img`
  width: 270px;
  height: 180px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

const Profile = () => {
  const navigate = useNavigate();
  // State for current active Tab
  const [activeTab, setActiveTab] = useState("1");

  const [myRecipe, setMyRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMyRecipe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getMyRecipe = () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return navigate("/login");
      } else {
        const decoded = jwt_decode(token);
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}show/myrecipe/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setMyRecipe(res.data.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteRecipe = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this recipe",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const token = localStorage.getItem("token");
        axios
          .delete(`${process.env.REACT_APP_BACKEND_URL}delete/recipe/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            swal({
              title: "Success!",
              text: res.data.message,
              icon: "success",
            });
            getMyRecipe();
          })
          .catch((err) => {
            swal(err.response.data.message, {
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <ListNavbar />
      <section>
        <div>
          <img className="ellipse127" src={Gambar1} alt="Gambar1" />
        </div>
        <h1 className="text_garneta">Garneta Sharina</h1>
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
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="row">
                {myRecipe.map((e, i) => (
                  <div className="col-lg-6" key={i}>
                    <div className="rectangle327_profile">
                      <img
                        style={{ width: "100%" }}
                        src={`${process.env.REACT_APP_BACKEND_URL}uploads/recipe/${e.image}`}
                        alt={e.title}
                      />
                      <h1 className="text_bombchicken_2">{e.title}</h1>
                      <button
                        className="btn btn-primary"
                        onClick={() => deleteRecipe(e.id)}
                      >
                        Hapus
                      </button>
                      <Link to={`/editrecipe/${e.id}`}>
                        <button
                          style={{ right: "30px" }}
                          className="btn btn-success"
                        >
                          Edit
                        </button>
                      </Link>
                    </div>
                    {/* <div className="rectangle329_profile">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}uploads/recipe/${e.image}`}
                      alt={e.title}
                    />
                    <h1 className="text_bombchicken_3">{e.title}</h1>
                    <button
                      className="btn btn-primary"
                      onClick={() => deleteRecipe(e.id)}
                    >
                      Hapus
                    </button>
                    <Link to={`/editrecipe/${e.id}`}>
                      <button className="btn btn-success">Edit</button>
                    </Link>
                  </div> */}
                  </div>
                ))}
              </div>
            )}
          </TabPane>

          <TabPane tabId="2">
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
          <TabPane tabId="3">
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
        </TabContent>
      </div>
    </div>
  );
};

export default Profile;
