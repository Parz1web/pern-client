import React from "react";
import "./deviceItem.css";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
const DeviceItem = ({ device }) => {
  const history = useNavigate();
  const info = device.info;
  return (
    <div
      className="device"
      onClick={() => history(DEVICE_ROUTE + "/" + device.id)}
    >
      <img
        src={process.env.REACT_APP_API_URL + device.img}
        alt="Цезарь"
        className="device_img"
      />
      <div className="device_info">
        <h3 className="device_title">{device.name}</h3>
        <h3 className="device_title">{device.price}</h3>
      </div>
    </div>
  );
};

export default DeviceItem;
