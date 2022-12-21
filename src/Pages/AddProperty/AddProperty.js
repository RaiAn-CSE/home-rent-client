import React from "react";
import "./AddProperty.css";
import Form from "react-bootstrap/Form";

const AddProperty = () => {
  return (
    <div>
      <h3 className="text-center">Add Your Property For Rent</h3>
      <div className=" d-flex justify-content-center">
        <div className="add-property-box">
          <h4>Personal Information</h4>
          <div className="row my-2">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>Name*</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>Phone No*</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" />
              </Form>
            </div>
          </div>
          <h4> Rental information</h4>
          <Form>
            <Form.Group className="mb-2" controlId="">
              <Form.Label>Property Title*</Form.Label>
              <Form.Control type="text" placeholder="enter property title" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="">
              <Form.Label>Property Details</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                placeholder="write details of a property"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Rent</Form.Label>
              <Form.Control type="number" placeholder="rent amount" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Negotiable" />
            </Form.Group>
          </Form>

          <div className="row mb-2">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>Property Size*</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="size of a property in sqft."
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>City*</Form.Label>
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
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>Area*</Form.Label>
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
          </div>
          <div className="row mb-2">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>Rent Category*</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="">Choose</option>
                    <option value="Residential Apartment">
                      Residential Apartment
                    </option>
                    <option value="Flat">Flat</option>
                    <option value="Commercial Space">Commercial Space</option>
                    <option value="Office Space">Office Space</option>
                    <option value="Shop & Restaurant Space">
                      Shop & Restaurant Space
                    </option>
                    <option value="Community Center">Community Center</option>
                    <option value="Sublet">Sublet</option>
                    <option value="Room for Bachelor">Room for Bachelor</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-8 col-sm-8 col-sm-12">
              <Form>
                <Form.Group controlId="">
                  <Form.Label>Address*</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={3}
                    placeholder="write details of your property"
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>Room*</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>Bath*</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Label>Kitchen*</Form.Label>
                <Form.Control type="number" />
              </Form>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>Garage*</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Group>
                  <Form.Label>Gas*</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <Form>
                <Form.Label>Elevator*</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option></option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </Form.Select>
              </Form>
            </div>
          </div>
          <Form.Group controlId="formFileLg" className="mb-2">
            <Form.Label>Upload Property Image</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
