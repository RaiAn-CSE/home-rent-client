import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./PropertyBanner.css";

const PropertyBanner = () => {
  return (
    <div className="banner-background">
      <div className="container">
        <div className="hero-property d-flex justify-content-center">
          <div className="search-property-form">
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
                        <option value="Residential Apartment">
                          Residential Apartment
                        </option>
                        <option value="Flat">Flat</option>
                        <option value="Commercial Space">
                          Commercial Space
                        </option>
                        <option value="Office Space">Office Space</option>
                        <option value="Shop & Restaurent Space">
                          Shop & Restaurent Space
                        </option>
                        <option value="Community Center">
                          Community Center
                        </option>
                        <option value="Sublet">Sublet</option>
                        <option value="Room for Bachelor">
                          Room for Bachelor
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Form>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 mt-md-4 mt-lg-4 mt-sm-3 ">
                  <Link className="browse-property" to="">
                    Browse Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;
