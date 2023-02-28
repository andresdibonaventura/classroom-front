import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router"
import FooterScreen from "./Footer/FooterScreen";
import Header from "./header/Header";
import logo from "../assets/img/abefastt.png"
import fondo from "../assets/img/fondo.jpg"

const HomeScreen = () => {
  const navigate = useNavigate()
  const [price, setPrice] = useState();

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
  }, []);

  
  // useEffect(() => {
  //   const region = navigator.language;

  //   if (region === 'es-VE') {
  //     setPrice2(55);
  //   } else {
  //     setPrice2(70);
  //   }
  // }, []);


  
  // useEffect(() => {
  //   const region = navigator.language;

  //   if (region === 'es-VE') {
  //     setPrice3(70);
  //   } else {
  //     setPrice3(100);
  //   }
  // }, []);



// const price = () => {
//   if (locale.region === "US"){
//     return 50
//   } else {
//     return 30
//    }
// }


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

const plan1 = () => {
  navigate("/register-plan-1")
}
const plan2 = () => {
  navigate("/register-plan-2")
}
const plan3 = () => {
  navigate("/register-plan-3")
}
  return (
  
    <div className="cont">
     <img className="fondo" src={fondo} alt="" />
        <div className="text1">
      <a><img className="logo" src={logo} alt="logo" /></a>
      <h2 className="title-text">Aprende ingles online!</h2>
      <h2 className="title-text">Mejora tus oportunidades laborales y aprende el idioma mas relevante del mercado desde la comodidad de tu casa y con profesores experimentados</h2>
        </div>
      
      <div >
        <div className="plans">
        <div className="plan1" onClick={() => plan1()}>
          <h2 className="plan-title">Basico</h2>
          <h4 className="plan-text"> 
          <li>Clases 1 vez a la semana</li>
          <li>Tutoria toda la semana</li>
          <li>Acceso a material de apoyo</li></h4>
          <h1 className="plan-price">{price}$/mes</h1>
          <button  className="plan-button" onClick={() => plan1()}>Inscribete!</button>
        </div>
        <div className="plan1" onClick={() => plan2()}>
        <h2 className="plan-title">Intermedio</h2>
        <h4 className="plan-text">
          <li>Clases 2 veces a la semana</li>
          <li>Tutoria toda la semana</li>
          <li>Acceso a material de apoyo</li>
        </h4>
        <h1 className="plan-price">$/mes</h1>
        <button className="plan-button" onClick={() => plan2()}>Inscribete!</button>
        </div>
        <div className="plan1">
          <h2 className="plan-title">Avanzado</h2>
          <h4 className="plan-text">
             <li>Clases 3 veces a la semana</li>
          <li>Tutoria toda la semana</li>
          <li>Acceso a material de apoyo</li></h4>
          <h1 className="plan-price">$/mes</h1>
          <button className="plan-button" onClick={() => plan3()}>Inscribete!</button>
        </div>
          </div>
    
      
      
      </div>


     
    </div>
  );
};

export default HomeScreen;
