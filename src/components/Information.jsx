import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Information = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    shortname: "",
    airlineCode: "",
    location: "",
    createdDate: "",
  });

  const handleInputChange = (e) => {
    setDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-image bg-cover bg-center">
      <div className="min-w-96 text-white p-1 rounded-custom-40 py-30 px-40 border-2 border-white bg-gradient-to-r from-custom-hsla-1 via-custom-hsla-2 to-custom-hsla-3">
        <form onSubmit={submitForm}>
          <h1 className="text-3xl text-center">Enter The Details</h1>
          <div className="input-box information">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={details.name}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box information">
            <label>Short Name</label>
            <input
              type="text"
              name="shortname"
              value={details.shortname}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box information">
            <label>Airline Code</label>
            <input
              type="text"
              name="airlineCode"
              value={details.airlineCode}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box information">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={details.location}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box information">
            <label>Created Date</label>
            <input
              type="date"
              name="createdDate"
              value={details.createdDate}
              required
              onChange={handleInputChange}
            />
          </div>
          <button
            className="w-full h-11 bg-white rounded-full text-slate-700 dark:md:hover:bg-fuchsia-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Information;
