import React, { Component } from "react";
import Navbar from "./Navbar";
import Gambar1 from "../Assets/image-solid.svg";

const AddRecipe = () => {
  return (

    <p></p>
    
    <div>
      <Navbar />
      <section>
        <div className="Rectangle329">
          <div>
            <img className="image_add" src={Gambar1} alt="Gambar1" />
          </div>
        </div>
        <h1 className="text_addphoto">Add Photo</h1>
        <textarea type="text" className="Rectangle330_add">
          Title
        </textarea>
        <textarea className="Rectangle331_add">Ingredients</textarea>
        <textarea className="Rectangle332_add"> Video </textarea>
        <button className="btnrectangle27">Post</button>
      </section>

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
