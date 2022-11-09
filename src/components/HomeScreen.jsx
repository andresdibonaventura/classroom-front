import React from "react";
import { Navigate, useNavigate } from "react-router"


const HomeScreen = () => {
  const navigate = useNavigate()
const submit = data => {
  navigate("/login")
}
  return (
    <div className="container1">
      <div className="col8">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          accusantium a fuga aspernatur amet, debitis blanditiis alias! Ut nobis
          necessitatibus magnam ratione quibusdam minima laudantium reiciendis
          fugiat voluptatum? Iste, hic?
        </div>
      </div>
      <div className="col4">
        <button className="login" onClick={submit}>login</button>
        <button className="login">register</button>
      
      </div>
    </div>
  );
};

export default HomeScreen;
