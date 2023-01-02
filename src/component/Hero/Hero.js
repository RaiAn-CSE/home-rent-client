import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="hero-title">
        <p>Rent a Property Easily</p>
        <span>Rent your desired property from us</span>
      </div>
      <div className="hero-property">
        <div className="search-property">
          <div className="form">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-lg-4 search-category">
                <Form>
                  <Form.Group>
                    <Form.Label className="float-start filter-label">
                      City
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="">Choose City</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Barisal">Barisal</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Mymensingh">Mymensingh</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </div>
              <div className="col-md-2 col-6 col-lg-2 search-category">
                <Form>
                  <Form.Group>
                    <Form.Label className="float-start filter-label">
                      Area
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="">Choose Area</option>
                      <option value="Dhanmondi">Dhanmondi</option>
                      <option value="Mohammadpur">Mohammadpur</option>
                      <option value="Mirpur">Mirpur</option>
                      <option value="Uttara">Uttara</option>
                      <option value="Bashundhara">Bashundhara</option>
                      <option value="Badda">Badda</option>
                      <option value="Khilkhet">Khilkhet</option>
                      <option value="Farmgate">Farmgate</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </div>
              <div className="col-md-2 col-6 col-lg-2 search-category">
                <Form>
                  <Form.Group>
                    <Form.Label className="float-start filter-label">
                      Category
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="">Choose</option>
                      <option value="Commercial Space">Commercial Space</option>
                      <option value="Office Space">Office Space</option>
                      <option value="Apartment Building">
                        Apartment Building
                      </option>
                      <option value="Flat Rent">Flat Rent</option>
                      <option value="Hostel Rent">Hostel Rent</option>
                      <option value="Only For Boys">Only For Boys</option>
                      <option value="Only For Girls">Only For Girls</option>
                      <option value="For Family">For Family</option>
                      <option value="Community Center">Community Center</option>
                      <option value="Shop & Restaurant Space">
                        Shop & Restaurant Space
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 mt-md-4 mt-lg-4 mt-sm-3 ">
                <Link className="browse-property" to="/allProperty">
                  Browse Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
