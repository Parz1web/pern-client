import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./devicePage.css";
import { fetchOneDevice } from "../http/deviceAPI";
const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container>
      <div className="project-details">
        <h1 className="title-1">{device.name}</h1>
        <div className="project-details__cover">
          <img src={process.env.REACT_APP_API_URL + device.img} alt="Цезарь" />
        </div>
        <div className="project-details__desc">
          <h1 className="text-center">Характеристики</h1>
          {device.info.map((info, index) => (
            <p key={info.id}>
              <strong>{info.title}:</strong> {info.description}
            </p>
          ))}
        </div>
        <div className="btn-outline mb-4">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVR4nO1ZS24TQRAdOREI8RF4ZHledXu88corQHySayAUcRPz2YLNkiiJuAOfCCUnAeUCIQkCGbLFYWNUoo0tK2a6errHgzQllWSN21PvdVV1dZWjqJJKKvEhNaXUGoCnRPSeiA4AnAL4ZfSUnxHROwBPlFL3+TfRskUppYloAOCYiMYSBXBERH2ttSocOBHFAF4DOJMCP4fICMCO1rpeFPhHAL7nBX6ODoloIyT2Vd71AMDHcx7ZZltekWutLwHYDw2epiT22KYv/CtEtFsUeJqS2PfiiSLChhbrVu6EXSL4MatS6qETeD7WzMmwVAL4c+LFwUOHK2y3273wr3c2m83LXIU5NIQ1ZEtcYaVFKgv8vBDRTdsKzsWu1WqR5OUDqatFOzS1c0uwUS9s37vicreZA7ZoJ0+I6OWstwBsW9o4tLoA8q3SJdlsCMzowMWe1vqejVufhSYA4MtkbaPRuGJrA0DPhsBuAQSOJ2vr9fo1AYG3NgQOCgih/szadQGBT5kEAPwIRcAcDv25JN4R2BnaEDjzWbwybN0W2ht5JcAJmBP8icTLtgSsQ4ibeIkHzImzzmHj2I4Oy5LETgqbJDZjkbISeJNJgBMzVBLzWjM7ciXQyzRirrvBkjiO46uuBJIkuWNjo2aGTt6TmNe6XlXI9jLHwsWmbDkA4Lm0oRmVhQCkDY1Dif/bkXU6nYsBPLApAm92MZY09ZwPplC5xvh4gX5L0/SGmIAhsREiniWaJMmDKI8IWr4Q+iryNFp0qs6lGC3ODHf3CiTwwedwdyKrPGAqAPwmez0KJTyr5JMhAPCvuRPWVvhYM+PBkYdY/8m73m63r0dFC1dHnpgB+OwA/pCvB2maIiqB1HjoBOAxjz648eDOjrsuo/z5o/mulyTJ3VL8zVpJJdH/L78Bvc+TwnNlmE0AAAAASUVORK5CYII="
            alt=""
          />
          {device.price} руб.
        </div>
      </div>
    </Container>
  );
};

export default DevicePage;
