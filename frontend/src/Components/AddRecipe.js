import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Gambar1 from "../Assets/image-solid.svg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AddRecipe = () => {

  const hiddenFileInput = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [image, setImage] = useState('');

  const [form, setForm] = useState({
    title: '',
    ingredients: '',
    video: '',
  });

  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };
  
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById('customBtn').innerHTML = fileUploaded.name;
    setImage(fileUploaded);
    // props.handleFile(fileUploaded);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const { title, ingredients, video } = form;
    const decoded = jwt_decode(token);

    formData.append('title', title);
    formData.append('image', image);
    formData.append('ingredients', ingredients);
    formData.append('video', video);
    formData.append('user_id', decoded.id);

    console.log(formData);

    axios
      .post('http://localhost:3001/insert/recipe', formData, {
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
        alert("error")
    })
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return navigate("/login");
    }
  }, [navigate]);



  return (
    <div>
      <Navbar />
      <form method="post" encType="multipart/form-data" onSubmit={(e) => onSubmit(e)}>
      <div className="Rectangle329">
          <div>
            <img className="image_add" src={Gambar1} alt="Gambar1" />
          </div>
      </div>
          <h1 className="text_addimage" id="customBtn" onClick={handleClick}>Add image</h1>
          <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />       
          <input type="text" className="Rectangle330_add" placeholder="Title" onChange={(e) => onChangeInput(e, 'title')} required />
          <textarea className="Rectangle331_add" placeholder="Ingredients" onChange={(e) => onChangeInput(e, 'ingredients')} required></textarea>
          <input type="text" className="Rectangle332_add" placeholder="Video" onChange={(e) => onChangeInput(e, 'video')} required></input>
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

export default AddRecipe;
