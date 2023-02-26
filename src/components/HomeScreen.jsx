import React from "react";
import { Navigate, useNavigate } from "react-router"
import FooterScreen from "./Footer/FooterScreen";
import Header from "./header/Header";


const HomeScreen = () => {
  const navigate = useNavigate()
const submit = data => {
  navigate("/login")
}

const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"

const price = () => {
  if (locale.region === "US"){
    return 50
  } else {
    return 30
   }
}


const price2 = () => {
  if (locale.region === "US"){
    return 70
  } else {
    return 50
  }
}


const price3 = () => {
  if (locale.region === "US"){
    return 100
  } else {
    return 70
  }
}

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
     <img src="https://img.freepik.com/fotos-premium/joven-caucasica-que-estudia-ingles-aislada-fondo-amarillo-diciendo-noticia-secreta-frenado-caliente-mirando-lado_1187-221747.jpg?w=2000" alt="" />
        <div className="text1">
      <a><img src="../assets/img/abefastt.png" alt="logo" /></a>
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
          <h1 className="plan-price">{price()}$/mes</h1>
          <button  className="plan-button" onClick={() => plan1()}>Inscribete!</button>
        </div>
        <div className="plan1" onClick={() => plan2()}>
        <h2 className="plan-title">Intermedio</h2>
        <h4 className="plan-text">
          <li>Clases 2 veces a la semana</li>
          <li>Tutoria toda la semana</li>
          <li>Acceso a material de apoyo</li>
        </h4>
        <h1 className="plan-price">{price2()}$/mes</h1>
        <button className="plan-button" onClick={() => plan2()}>Inscribete!</button>
        </div>
        <div className="plan1">
          <h2 className="plan-title">Avanzado</h2>
          <h4 className="plan-text">
             <li>Clases 3 veces a la semana</li>
          <li>Tutoria toda la semana</li>
          <li>Acceso a material de apoyo</li></h4>
          <h1 className="plan-price">{price3()}$/mes</h1>
          <button className="plan-button" onClick={() => plan3()}>Inscribete!</button>
        </div>
          </div>
        <button className="login" onClick={submit}>Login</button>
      
      
      </div>


     
    </div>
  );
};

export default HomeScreen;
