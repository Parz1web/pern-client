import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../modals/CreateBrand";
import CreateType from "../modals/CreateType";
import CreateDevice from "../modals/CreateDevice";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className="d-flex flex-column align-items-center">
      <h2 className="title-1">Панель администратора</h2>
      <Button
        style={{ backgroundColor: "#1aa090", width: 200 }}
        variant={"outline-light"}
        className="mt-4 p-1"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        style={{ backgroundColor: "#1aa090", width: 200 }}
        variant={"outline-light"}
        className="mt-4 p-1"
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        style={{ backgroundColor: "#1aa090", width: 200 }}
        variant={"outline-light"}
        className="mt-4 p-1"
        onClick={() => setDeviceVisible(true)}
      >
        Добавить рукоделие
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default Admin;
