import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faUserAlt,
  faEnvelope,
  faHome
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function App() {
  const [openNav, setNav] = useState(false);

  const clickHandler = () => {
    setNav(!openNav);
  };

  return (
    <React.Fragment>
      <div
        className={openNav === true ? "container show-nav" : "container"}
        id="container"
      >
        <div className="circle-container">
          <div className="circle">
            <button id="close" onClick={clickHandler}>
              <FontAwesomeIcon className="high" icon={faTimes} />
            </button>
            <button id="open" onClick={clickHandler}>
              <FontAwesomeIcon className="high" icon={faBars} />
            </button>
          </div>
        </div>

        <div className="content">
          <h1>Amazing Article</h1>
          <small>
            by Karthick Rajan{" "}
            <span role="img" aria-label="">
              🤪
            </span>
          </small>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem facilis distinctio nisi! Vel eius ab sequi
            repellendus reiciendis voluptatum id qui dolores earum incidunt
            nulla, molestias quam quidem dicta odit fuga ratione provident natus
            quibusdam dolor labore est. Illum nisi voluptatem esse nostrum ipsa
            accusamus perspiciatis vel quaerat labore in natus voluptatum, sequi
            harum libero, et cumque nesciunt reiciendis voluptates laudantium
            deserunt. Placeat aliquid neque commodi nostrum necessitatibus?
            Accusamus ullam vel ea nesciunt sint suscipit laboriosam eos saepe
            ducimus quo, nam perspiciatis exercitationem laborum deleniti
            facilis pariatur minima rem maiores neque fugiat quae rerum,
            recusandae soluta magni. Praesentium, sed nostrum?
          </p>
          <p>
            Illum error officiis voluptate maiores consequatur, ad, ducimus
            magni impedit libero officia dolorum eum nesciunt doloribus
            exercitationem sunt pariatur excepturi adipisci cumque natus rem
            tempora accusamus rerum velit sequi. Tempora magni quasi sunt
            placeat officia rem porro repudiandae optio corrupti aut quam nihil
            inventore sit, totam quibusdam dolorem, minus eius, expedita
            architecto quisquam vero pariatur incidunt. Officiis libero
            exercitationem eveniet modi. Quos enim quasi sit praesentium aut
            minima maiores doloremque odio magnam culpa, magni cupiditate harum
            dolorum. Necessitatibus qui rerum consequatur officia amet,
            aspernatur officiis tempora labore ab. Error, eum asperiores!
            Consequatur deserunt dolorem aut accusamus cum eius rerum veniam?
          </p>
          <h3>
            Look a cute doggie!{" "}
            <span role="img" aria-label="">
              🥰
            </span>
          </h3>
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="doggie"
          />
          <p>
            Maiores, necessitatibus! Deserunt culpa ullam repudiandae pariatur
            nisi qui veniam nobis, consectetur iste laudantium modi dolores
            totam quos ratione ipsum aspernatur iure optio? Itaque tenetur nemo
            aspernatur eveniet maiores, laudantium sequi odio repellat
            perferendis voluptas. Necessitatibus impedit esse aliquid vero aut
            quibusdam, culpa iste delectus consectetur quasi cumque, iure
            distinctio blanditiis, adipisci voluptatum veniam. Maxime iste illo
            praesentium natus ex? Sapiente dicta rerum dignissimos omnis porro
            obcaecati quidem fugit. Sit commodi dolor doloribus distinctio odit
            quaerat possimus asperiores provident aliquam! Magni laboriosam quo
            quisquam earum accusamus fuga aut tempore labore quos dolorum nobis
            fugiat cupiditate alias sit, quasi numquam deserunt!
          </p>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <FontAwesomeIcon className="icon" icon={faHome} /> Home
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faUserAlt} /> About
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faEnvelope} /> Contact
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
