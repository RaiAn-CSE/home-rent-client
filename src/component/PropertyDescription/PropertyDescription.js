import React from "react";
import { FaRegSquare, FaCar, FaBed, FaBath } from "react-icons/fa";
import { TbCurrencyTaka, TbToolsKitchen2 } from "react-icons/tb";
import { GiElevator } from "react-icons/gi";
import "../../Pages/PropertyDetails/PropertyDetails";
const PropertyDescription = () => {
  return (
    <div>
      <p className="fs-4 border-bottom">Description</p>

      <div className="description-list">
        <div className="">
          <h5 className="fw-bold">Property Type</h5>
          <span>Commercial Space </span>
        </div>
        <div className="">
          <h5 className="fw-bold">Sq. Ft</h5>
          <span>
            <FaRegSquare className="font-awesome-icon me-2" /> 2280
          </span>
        </div>
        <div className="">
          <h5 className="fw-bold">Rent</h5>
          <span>
            <TbCurrencyTaka className="font-awesome-icon me-2" /> 1234
          </span>
        </div>
        <div className="">
          <h5 className="fw-bold">Garages</h5>
          <span>
            <FaCar className="font-awesome-icon me-2" /> 02
          </span>
        </div>

        <div className="">
          <h5 className="fw-bold">Bed</h5>
          <span>
            <FaBed className="font-awesome-icon me-2" /> 03
          </span>
        </div>
        <div className="">
          <h5 className="fw-bold">Bath</h5>
          <span>
            <FaBath className="font-awesome-icon me-2" /> 03
          </span>
        </div>
        <div className="">
          <h5 className="fw-bold">Kitchen</h5>
          <span>
            <TbToolsKitchen2 className="font-awesome-icon me-2" />
            02
          </span>
        </div>
        <div className="">
          <h5 className="fw-bold">Gas</h5>
          <span>Available</span>
        </div>
        <div className="">
          <h5 className="fw-bold">Elevator</h5>
          <span>
            <GiElevator className="font-awesome-icon me-2" />
            Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
