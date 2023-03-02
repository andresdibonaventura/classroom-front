import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router"
import FooterScreen from "./Footer/FooterScreen";
import Header from "./header/Header";
import logo from "../assets/img/abefastt.png"
import fondo from "../assets/img/fondo2.png"

const HomeScreen = () => {
  const navigate = useNavigate()
  const [price, setPrice] = useState();
  const [price2, setPrice2] = useState();
  const [price3, setPrice3] = useState();

  useEffect(() => {
    const apiUrl = 'https://ipapi.co/json/';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const countryCode = data.country_code;
        if (countryCode === 'VE') {
          setPrice(35);
        } else {
          setPrice(55);
        }
      });

      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const countryCode = data.country_code;
        if (countryCode === 'VE') {
          setPrice2(55);
        } else {
          setPrice2(75);
        }
      });

      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const countryCode = data.country_code;
        if (countryCode === 'VE') {
          setPrice3(75);
        } else {
          setPrice3(100);
        }
      });
  }, []);





// const price2 = () => {
//   if (locale.region === "US"){
//     return 70
//   } else {
//     return 50
//   }
// }


// const price3 = () => {
//   if (locale.region === "US"){
//     return 100
//   } else {
//     return 70
//   }
// }

const plan1 = (countryCode) => {
  if (countryCode === 'VE'){
    navigate("/register-plan-1-V")

  }else {
    navigate("/register-plan-1")
  }
}
const plan2 = (countryCode) => {
  if (countryCode === 'VE'){
    navigate("/register-plan-2-V")

  }else {
    navigate("/register-plan-2")
  }
}
const plan3 = (countryCode) => {
  if (countryCode === 'VE'){
    navigate("/register-plan-3-V")

  }else {
    navigate("/register-plan-3")
  }
}
  return (
  
    <div className="cont">
      <section id="prices" >


     <img className="fondo" src={fondo} alt="" />
        <div className="text1">
      <a><img className="logo" src={logo} alt="logo" /></a>
      <h2 className="title-text">Mejora tus oportunidades laborales y aprende el idioma
       más relevante del mercado desde la comodidad de tu casa y con profesores experimentados</h2>
       <h2 className="title-text-2" >Clases personalizadas con disponibilidad de 6 días a la semana! </h2>
        </div>
      
      <div >
        <div id="prices" className="plans">


        <div className="plan1" onClick={() => plan1()}>
          <h2 className="plan-title">Básico</h2>
          <h4 className="plan-text"> 
          <li>Clases 1 vez a la semana</li>
          <li>Tutoría toda la semana</li>
          <li>Acceso a material de apoyo</li></h4>
          <h1 className="plan-price">{price}$/mes</h1>
          <button  className="plan-button" onClick={() => plan1()}>Inscríbete!</button>
        </div>


        <div className="plan1" onClick={() => plan2()}>
        <h2 className="plan-title">Intermedio</h2>
        <h4 className="plan-text">
          <li>Clases 2 veces a la semana</li>
          <li>Tutoría toda la semana</li>
          <li>Acceso a material de apoyo</li>
        </h4>
        <h1 className="plan-price">{price2}$/mes</h1>
        <button className="plan-button" onClick={() => plan2()}>Inscríbete!</button>
        </div>


        <div className="plan1" onClick={() => plan2()}>
          <h2 className="plan-title">Premium</h2>
          <h4 className="plan-text">
             <li>Clases 3 veces a la semana</li>
          <li>Tutoría toda la semana</li>
          <li>Acceso a material de apoyo</li></h4>
          <h1 className="plan-price">{price3}$/mes</h1>
          <button className="plan-button" onClick={() => plan3()}>Inscríbete!</button>
        </div>
          </div>
    
      
      
      </div>

      </section>
     
    </div>
  );
};

export default HomeScreen;
