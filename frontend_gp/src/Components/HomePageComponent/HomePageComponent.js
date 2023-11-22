import "./HomePageComponent.css";
import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { Button } from "antd";
import p1 from "./p1.png";

function HomePageComponent() {
  return (
    <div className="home-page-component">
      <HeaderComponent defaultSelectedKeys={['1']}/>

      <h2> Generic porfolio</h2>
      <p> the easiest and fast way to Show off Your Work 
           Free trial. No credit card required.</p>

      <Button className="start-btn">TRY IT FOR FREE </Button>
      <img src={p1} className="p1"/>


    </div>
  );
};

export default HomePageComponent;
