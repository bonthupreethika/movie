import React from "react";
import Actress from "./Actress";
import a1 from "./assets/A1.jpeg";
import a2 from "./assets/A2.jpeg"; 
import a3 from "./assets/A3.jpeg";
import a4 from "./assets/A4.jpeg";
import a5 from "./assets/A5.jpeg";
import a6 from "./assets/A6.jpeg";
import a7 from "./assets/A7.jpeg";
import a8 from "./assets/A8.jpeg";
import a9 from "./assets/A9.jpeg";
import a10 from "./assets/A10.jpeg";
import a11 from "./assets/A11.jpeg";

function Actressdetails() {
  return (
    <div className="actress-container">
      <Actress
        img={a1}
        name="Millie Bobby Brown"
        works="Stranger Things, Enola Holmes"
        genres="Drama, Sci-Fi"
        description="Millie Bobby Brown gained fame for her role as Eleven in Stranger Things, showcasing her incredible talent at a young age."
      />

      <Actress
        img={a2}
        name="Winona Ryder"
        works="Stranger Things, Beetlejuice"
        genres="Drama, Horror"
        description="Winona Ryder is known for her iconic roles in various films and is acclaimed for her performance as Joyce Byers in Stranger Things."
      />

      <Actress
        img={a3}
        name="Natalia Dyer"
        works="Stranger Things, Velvet Buzzsaw"
        genres="Drama, Horror"
        description="Natalia Dyer is recognized for her role as Nancy Wheeler in Stranger Things, bringing depth to her character."
      />

      <Actress
        img={a4}
        name="Scarlett Johansson"
        works="Lost in Translation, Black Widow"
        genres="Action, Drama"
        description="Scarlett Johansson is a versatile actress known for her roles in both indie films and blockbuster franchises."
      />

      <Actress
        img={a5}
        name="Jennifer Lawrence"
        works="The Hunger Games, Silver Linings Playbook"
        genres="Drama, Action"
        description="Jennifer Lawrence is an Academy Award-winning actress known for her dynamic performances and strong on-screen presence."
      />

      <Actress
        img={a6}
        name="Angelina Jolie"
        works="Maleficent, Girl, Interrupted"
        genres="Action, Drama"
        description="Angelina Jolie is a celebrated actress and humanitarian known for her powerful roles and impactful film work."
      />

      <Actress
        img={a7}
        name="Emma Stone"
        works="La La Land, Easy A"
        genres="Musical, Comedy"
        description="Emma Stone is an Academy Award-winning actress known for her charismatic performances and versatility in different genres."
      />

      <Actress
        img={a8}
        name="Gal Gadot"
        works="Wonder Woman, Fast & Furious"
        genres="Action, Adventure"
        description="Gal Gadot is known for her role as Wonder Woman, bringing strength and grace to her performances."
      />

      <Actress
        img={a9}
        name="Sandra Bullock"
        works="Gravity, The Blind Side"
        genres="Drama, Comedy"
        description="Sandra Bullock is a highly acclaimed actress known for her work in both comedies and dramas, winning an Academy Award."
      />

      <Actress
        img={a10}
        name="Charlize Theron"
        works="Mad Max: Fury Road, Monster"
        genres="Action, Drama"
        description="Charlize Theron is an Academy Award-winning actress known for her versatility and powerful performances."
      />

      <Actress
        img={a11}
        name="Jessica Chastain"
        works="The Help, Zero Dark Thirty"
        genres="Drama, Thriller"
        description="Jessica Chastain is known for her strong performances and has received multiple accolades for her work."
      />

    </div>
  );
}

export default Actressdetails;
