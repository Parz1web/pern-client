import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="d-flex flex-row">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          className={`py-2 px-3 m-1`}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id && "danger"}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
