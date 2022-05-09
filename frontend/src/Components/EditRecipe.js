import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Gambar1 from "../Assets/image-solid.svg";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const EditRecipe = () => {

  const hiddenFileInput = useRef(null);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [fileImage, setFileImage] = useState(null);
  const [ingredients, setIngredients] = useState('');
  const [video, setVideo] = useState('');
  const { id } = useParams();

//react-lifecycle
useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}show/myrecipe`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        .then((res) => {
          console.log(res.data)
          setTitle(res.data.data[0].title);
          setImage(`http://localhost:3001/uploads/recipe/${res.data.data[0].image}`);
          setIngredients(res.data.data[0].ingredients);
          setVideo(res.data.data[0].video);
        })
        .catch((err) => {
          console.log(err);
        });
      // document.getElementById('customBtn').innerHTML = image;
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);
  
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    const urlImage = URL.createObjectURL(fileUploaded);
    console.log(fileUploaded)
    document.getElementById('customBtn').innerHTML = fileUploaded.name;
    setFileImage(fileUploaded);
    setImage(urlImage);
    // props.handleFile(fileUploaded);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);

    formData.append('title', title);
    formData.append('image', fileImage);
    formData.append('ingredients', ingredients);
    formData.append('video', video);
    formData.append('user_id', decoded.id);

    console.log(formData);

    axios
    .put(`${process.env.REACT_APP_BACKEND_URL}edit/recipe/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        alert(response.data.message)
        return navigate("/profile")
        // if(response.data.status !== "success") {
        //   alert("error axios")
        //   // alert(response.data.status+": "+response.data.message)
        // } else {

        // }
    })
    .catch((err) => {
        alert(err)
    })
  };

  return (
    <div>
      <Navbar />
      <form method="post" encType="multipart/form-data" onSubmit={(e) => onSubmit(e)}>
      <div className="Rectangle329">
          <div>
            <img className="image_add" src={image ? image : Gambar1} alt="Gambar1" />
          </div>
      </div>
          <h1 className="text_addimage" id="customBtn" onClick={handleClick}>Add image</h1>
          <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />       
          
          <input type="text" value={title}  className="Rectangle330_add" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
          <textarea className="Rectangle331_add" value={ingredients}  placeholder="Ingredients" onChange={(e) => setIngredients(e.target.value)} required></textarea>
          <input type="text" value={video}  className="Rectangle332_add" placeholder="Video" onChange={(e) => setVideo(e.target.value)} required></input>
          <button type="submit" className="btnrectangle27">Post</button>
      </form>

      <footer className="Rectangle26_add">
        <h1 className="text_eat_cook2">Eat, Cook, Repeat</h1>
        <p className="text_shareyour">
          Share your best recipe by uploading here !
        </p>
        <p className="text_productcompany">
          Product &nbsp; Company &nbsp; Learn more &nbsp; Get in touch{" "}
        </p>
        <h3 className="text_arkademy">Arkademy</h3>
      </footer>
    </div>
  );
};

export default EditRecipe;
