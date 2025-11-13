import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Gambar1 from "../Assets/4da51338c06dd21688b82eae3bc9dfa6.jpg";
import Gambar2 from "../Assets/c08f710828e1d2aacf71af8c92583062.png";
import Navigation from "./Navigation";
import Footer from "./Footer4";
import jwt_decode from "jwt-decode";
import { Container, Form, FormGroup } from "reactstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import api, { authHeaders, assetUrl } from "../api";
import swal from "sweetalert";
import { toast } from "react-toastify";
import saved from "../Assets/bookmark.png";
import liked from "../Assets/liked.png";
import play from "../Assets/play.png";

const Section = styled.section`
  margin: 0 auto;
  margin-top: 150px;
  max-width: 800px;

  /* @media screen and (max-width: 992px) {

  }

  @media screen and (max-width: 768px) {
    
  } */

  @media screen and (max-width: 576px) {
    margin-top: 90px;
  }
`;

const Title = styled.h1`
  font-family: "Airbnb Cereal App Medium";
  color: var(--color-2);
  text-align: center;

  @media screen and (max-width: 576px) {
  }
`;

const Image = styled.img`
  min-width: 100%;
  min-height: 200px;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  border-radius: 15px !important;
  margin-top: 40px;
`;

const Icon = styled.div`
  z-index: 2;
  right: 30px;
  bottom: 30px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 576px) {
    right: 15px;
    bottom: 15px;
  }
`;

const Saved = styled.div`
  border-radius: 15px !important;
  padding: 9.9px;
  width: 47px;
  background-color: var(--secondary-color);

  &:hover {
    cursor: pointer;
    color: #cea905;
  }
`;

const Liked = styled.div`
  border-radius: 15px !important;
  padding: 6.8px;
  width: 47px;
  background-color: var(--main-color);

  &:hover {
    cursor: pointer;
  }
`;

const Detail = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  max-width: 900px;
`;

const Item = styled.h3`
  font-family: "Airbnb Cereal App Medium";
  color: var(--color-3);
  margin-bottom: 20px;
`;

const Ingredients = styled.p`
  margin: 0;
  font-family: "Airbnb Cereal App Light";
  white-space: pre-line;
  text-transform: capitalize;
`;

const Video = styled.button`
  width: 30%;
  height: 50px;
  border: 0;
  border-radius: 10px;
  background-color: #efc81a;
  color: #ffffff;

  &:hover {
    color: #cea905;
    box-shadow: var(--shadow-black-300);
  }

  @media screen and (max-width: 576px) {
    width: 60%;
  }
`;

const Play = styled.img`
  width: 15px;
  height: auto;
`;

const Comment = styled.section`
  margin: 0 auto;
  margin-top: 40px;
  max-width: 900px;
`;

const Textarea = styled.textarea`
  background-color: #f6f5f4;
  border: none;
  font-family: "Airbnb Cereal App Medium";
  border-radius: 10px;
  color: #666666;
  height: 350px;

  @media screen and (max-width: 576px) {
    height: 200px;
  }
`;

const Button = styled.button`
  width: 35%;
  height: 50px;
  border: 0;
  border-radius: 7px;
  background-color: #efc81a;
  color: #ffffff;
  margin: 30px 0 10px 0;

  &:hover {
    background-color: #cea905;
    box-shadow: var(--shadow-black-300);
  }

  @media screen and (max-width: 576px) {
    width: 60%;
  }
`;

const Profile = styled.img`
  max-width: 65px;
  min-width: 65px;
  max-height: 65px;
  min-height: 65px;
  object-fit: cover;
  object-position: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

toast.configure();

const RecipeDetail = () => {
  const input = useRef(null);
  const navigate = useNavigate();
  const [detailRecipe, setDetailRecipe] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    comment: "",
  });

  useEffect(() => {
    getDetail();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getDetail = () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        swal({
          title: "Failed!",
          text: "Please login first",
          icon: "warning",
        });
        return navigate("/");
      } else {
        api.get(`/recipe/detail/${id}`)
          .then((res) => {
            console.log(JSON.stringify(res.data)); // setDetailRecipe(res.data.data);
            // setIsLoading(false);
          })
          .catch((err) => {
            setIsError(true);
            setErrorMessage(err);
            // console.log(err.response.data.data.errors);
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      const body = {
        user_id: decoded.id,
        recipe_id: id,
        comment_text: form.comment,
      };
      if (token) {
        api.post(`/post/comment/`, body)
          .then((res) => {
            input.current.value = "";
          })
          .catch((err) => {
            if (err.response.status === 422) {
              const error = err.response.data.errors;
              error.map((e) => {
                return toast.error(e, {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              });
            } else {
              toast.error(err.response.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navigation />

      <Container fluid>
        {/* Detail Recipe Section Start */}

        <Section>
          <Title>
            {" "}
            {isLoading ? (
              <div>Loading..</div>
            ) : isError ? (
              <div>{errorMessage}</div>
            ) : (
              <>{detailRecipe.title}</>
            )}
          </Title>
          <div className="position-relative mb-5 text-center">
            <Image src={assetUrl(`/uploads/recipe/${detailRecipe.image}`)} alt={detailRecipe.title} />
            <Icon>
              <Saved>
                <img src={saved} alt="Bookmark" />
              </Saved>
              <Liked>
                <img src={liked} alt="Like" />
              </Liked>
            </Icon>
          </div>
        </Section>

        <Detail>
          <Item>Ingredients</Item>
          <Ingredients>
            {" "}
            {isLoading ? (
              <div>Loading..</div>
            ) : isError ? (
              <div>{errorMessage}</div>
            ) : (
              <>{detailRecipe.ingredients}</>
            )}
          </Ingredients>
        </Detail>
        <Detail>
          <Item>Video Step</Item>
          <Link to="">
            <iframe src="https://www.youtube.com/embed/81nKBMetvAI">
              {" "}
              <Play src={play} alt="Play" />
            </iframe>
          </Link>
        </Detail>

        {/* Detail Recipe Section End */}

        {/* Comment Section Start */}
        <Comment>
          <Form onSubmit={(e) => onSubmit(e)}>
            <FormGroup>
              <Textarea
                className="form-control px-4 py-4"
                placeholder="Comment :"
                style={{
                  backgroundColor: "#f6f5f4",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
                ref={input}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
              ></Textarea>
              <div className="d-flex justify-content-center">
                <Button type="submit">Send</Button>
              </div>
            </FormGroup>
          </Form>
        </Comment>
        <Detail>
          <Item>Comment</Item>
          {/* {isLoading ? (
            <div>Loading</div>
          ) : (
            comments.map((e, i) => ( */}
          <div className="d-flex align-items-center mb-3">
            <Profile
              src={Gambar1}
              // src={`${process.env.REACT_APP_BACKEND_URL}/uploads/user/${e.photo}`}
              alt="Gambar profile"
              className="rounded-circle"
            />
            <Info className="h-100">
              <h6></h6>
              <span></span>
            </Info>
            {/* <div className="h-100" style={{ marginLeft: 'auto' }}>
                  <Link to={`/recipe/${e.id}`} className="btn-view">
                    <i class="fa-solid fa-edit"></i>
                  </Link>
                  <Link to={`/recipe/edit/${e.id}`} className="btn-delete">
                    <i className="far fa-trash-can"></i>
                  </Link>
                </div> */}
          </div>
          {/* ))
          )} */}
        </Detail>
        {/* Comment Section End */}
      </Container>

      <Footer />
    </>
  );

  // return (
  //   <div>
  //     <header>
  //       <Navbar />
  //       <h1 className="text_loreamsandwich">Loream Sandwich</h1>
  //       <div>
  //         <img className="Rectangle313_3" src={Gambar1} alt="Gambar1" />
  //       </div>
  //     </header>

  //     <section>
  //       <h1 className="text_ingredients">Ingredients</h1>
  //       <ol className="detail_txt_2">
  //         <li>- 2 eggs</li>
  //         <li>- 2 tbsp mayonnaise</li>
  //         <li>- 3 slices bread</li>
  //         <li>- a little butter</li>
  //         <li>- ⅓ carton of cress</li>
  //         <li>
  //           - 2-3 slices of tomato or a lettuce leaf and a slice of ham or
  //           cheese
  //         </li>
  //         <li>- crisps , to serve</li>
  //       </ol>
  //       <h1 className="text_videostep">Video Step</h1>
  //       <div className="Rectangle314_detail"></div>
  //       <Link to="/videorecipe">
  //         <div className="play_vector_main">
  //           <i className="vector_play2"></i>
  //         </div>
  //       </Link>
  //       <div className="Rectangle317_detail"></div>
  //       <Link to="/videorecipe">
  //         <div className="play_vector_main2">
  //           <i className="vector_play2"></i>
  //         </div>
  //       </Link>
  //       <div className="Rectangle318_detail"></div>
  //       <Link to="/videorecipe">
  //         <div className="play_vector_main3">
  //           <i className="vector_play3"></i>
  //         </div>
  //       </Link>
  //       <div className="Rectangle319_detail"></div>
  //       <Link to="/videorecipe">
  //         <div className="play_vector_main4">
  //           <i className="vector_play4"></i>
  //         </div>
  //       </Link>
  //       <textarea
  //         type="text"
  //         className="Rectangle331_detail"
  //         placeholder="Comment:"
  //       />
  //       <button className="Rectangle27_detail">Send</button>
  //       <h1 className="text_comment_detail">Comment</h1>
  //       <h2 className="text_ayudia">Ayudia</h2>
  //       <h2 className="text_nice_recipe">
  //         Nice recipe. simple and delicious, thankyou
  //       </h2>
  //       <div>
  //         <img className="ellipse128_detail" src={Gambar2} alt="Gambar2" />
  //       </div>
  //     </section>

  //     <Footer />
  //   </div>
  // );
};

export default RecipeDetail;
