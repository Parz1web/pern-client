import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import DeviceItem from "./DeviceItem";
import "./deviceItem.css";
const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="devices">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
});

export default DeviceList;
