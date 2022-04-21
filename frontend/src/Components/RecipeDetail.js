import React, { Component } from "react";
import Gambar1 from "../Assets/4da51338c06dd21688b82eae3bc9dfa6.jpg";
import Gambar2 from "../Assets/c08f710828e1d2aacf71af8c92583062.png";
import {Link} from 'react-router-dom';

const RecipeDetail = () => {
  return (
    <div>
      <header>
        <ul>
          <li className="Home">Home</li>
          <li className="Recipe">Add Recipe</li>
          <li className="Profile">Profile</li>
        </ul>
        <h1 className="text_loreamsandwich">Loream Sandwich</h1>
        <div>
          <img className="Rectangle313_3" src={Gambar1} alt="Gambar1" />
        </div>
      </header>

      <section>
        <h1 className="text_ingredients">Ingredients</h1>
        <ol className="detail_txt_2">
          <li>- 2 eggs</li>
          <li>- 2 tbsp mayonnaise</li>
          <li>- 3 slices bread</li>
          <li>- a little butter</li>
          <li>- ⅓ carton of cress</li>
          <li>
            - 2-3 slices of tomato or a lettuce leaf and a slice of ham or
            cheese
          </li>
          <li>- crisps , to serve</li>
        </ol>
        <h1 className="text_videostep">Video Step</h1>
        <div className="Rectangle314_detail"></div>
        <Link to='/videorecipe'><div className="play_vector_main">
          <i className="vector_play"></i>
        </div></Link>
        <div className="Rectangle317_detail"></div>
        <Link to='/videorecipe'><div className="play_vector_main2">
          <i className="vector_play2"></i>
        </div></Link>
        <div className="Rectangle318_detail"></div>
        <Link to='/videorecipe'><div className="play_vector_main3">
          <i className="vector_play3"></i>
        </div></Link>
        <div className="Rectangle319_detail"></div>
        <Link to='/videorecipe'><div className="play_vector_main4">
          <i className="vector_play4"></i>
        </div></Link>
        <texarea className="Rectangle331_detail">Comment:</texarea>
        <button className="Rectangle27_detail">Send</button>
        <h1 className="text_comment_detail">Comment</h1>
        <h2 className="text_ayudia">Ayudia</h2>
        <h2 className="text_nice_recipe">
          Nice recipe. simple and delicious, thankyou
        </h2>
        <div>
          <img className="ellipse128_detail" src={Gambar2} alt="Gambar2" />
        </div>
      </section>

      <footer className="Rectangle_26_detail">
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

export default RecipeDetail;
