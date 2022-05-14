import React, { useState, useEffect } from "react";
import ListNavbar from "./Navigation";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Footer from "./Footer";
import swal from "sweetalert";
import Gambar1 from "../Assets/4662c85cb7661f579e2c9baff0ce5fdc.png";
import Gambar2 from "../Assets/cfef9bb1fc6e0bef50d5c8ef7a6cdff6.jpg";
import Gambar3 from "../Assets/65940ba73f12f048d870dfa487a052df.jpg";
import Gambar4 from "../Assets/logo_pencil.svg";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import classnames from "classnames";

const Section = styled.section`
  margin: 0 auto;
  margin-top: 150px;
  max-width: 800px;

  @media screen and (max-width: 576px) {
    margin-top: 90px;
  }
`;

const Photo = styled.img`
  height: 150px;
  width: 150px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

const Icon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Username = styled.p`
  font-size: 24px;
  font-family: "Airbnb Cereal App Medium";
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
`;

const Action = styled.div`
  margin: 0 auto;
  width: 320px;
  height: 80px;
  border-radius: 15px;
  background-color: #e7e7e7;
  position: relative;
  transition: 0.5s;
`;

const Button = styled.button`
  border: none;
  width: 320px;
  height: 40px;
  background-color: none;
  color: #3f3a3a;
  font-size: 14px;
  border-radius: 15px;
`;

const Menu = styled.div`
  margin-top: 10px;
  margin-bottom: -70px;
  display: block;
  width: 100%;
  padding: 80px;

  @media screen and (max-width: 576px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

const Image = styled.img`
  width: 270px;
  height: 180px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

const Title = styled.p`
  width: 150px;
  font-size: 24px;
  font-family: "Airbnb Cereal App Medium";
  color: var(--color-1);
  position: absolute;
  bottom: 0;
  left: 15px;
`;

const Option = styled.div`
  position: absolute;
  top: 10px;
  right: 0;

  @media screen and (max-width: 576px) {
    top: 10px;
    right: 70px;
  }
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
          .get(`${process.env.REACT_APP_BACKEND_URL}/show/myrecipe/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setMyRecipe(res.data.data);
          })
          .catch((err) => {
            console.log(err.res.data);
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
          .delete(`${process.env.REACT_APP_BACKEND_URL}/delete/recipe/${id}`, {
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
    <>
      <ListNavbar />
      <Container fluid>
        <Section>
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <Photo src={Gambar1} alt="username" />
              <Icon src={Gambar4} alt="Icon" />
            </div>
          </div>
          <Username>Garneta Sharina</Username>
          <Action className="mx-auto">
            <Button className="d-block">Change Photo Profile</Button>
            <Link
              to="/user/change-password/:id"
              style={{ textDecoration: "none" }}
            >
              <Button className="d-block">Change Password</Button>
            </Link>
          </Action>
        </Section>
        <Menu>
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
          <hr />
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-4 ml-5">
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  myRecipe.map((e, i) => (
                    <Col key={i}>
                      <Card className="border-0">
                        <CardBody className="p-0">
                          <Image
                            src={`${process.env.REACT_APP_BACKEND_URL}/uploads/recipe/${e.image}`}
                            alt={e.title}
                          />
                          <Title>{e.title}</Title>

                          <Option>
                            <Link to={`/recipe/${e.id}`} className="btn-view">
                              <i class="fa-solid fa-eye"></i>
                            </Link>
                            <Link
                              to={`/editrecipe/${e.id}`}
                              className="btn-edit"
                            >
                              <i className="far fa-edit"></i>
                            </Link>
                            <button
                              onClick={() => deleteRecipe(e.id)}
                              className="btn-delete"
                            >
                              <i className="far fa-trash-can"></i>
                            </button>
                          </Option>
                        </CardBody>
                      </Card>
                    </Col>
                  ))
                )}
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-4 ml-5">
                <Col>
                  <Card className="border-0">
                    <CardBody className="p-0">
                      <Image src={Gambar2} alt="Gambar2" />
                      <Title>Chicken</Title>
                      <Option>
                        <Link to={`/recipe/:id`} className="btn-view">
                          <i class="fa-solid fa-eye"></i>
                        </Link>
                        <Link to="/recipe/:id" className="btn-delete">
                          <i className="far fa-trash-can"></i>
                        </Link>
                      </Option>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-4 ml-5">
                <Col>
                  <Card className="border-0">
                    <CardBody className="p-0">
                      <Image src={Gambar2} alt="Chicken" />
                      <Title>Chicken</Title>
                      <Option>
                        <Link to="/recipe" className="btn-view">
                          <i class="fa-solid fa-eye"></i>
                        </Link>
                        <Link to="/recipe/:id" className="btn-delete">
                          <i className="far fa-trash-can"></i>
                        </Link>
                      </Option>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Menu>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
