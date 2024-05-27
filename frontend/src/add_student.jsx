import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add_Students = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      name,
      dob,
      result
    };

    axios.post('http://localhost:3000/create', studentData)
      .then(res => {
        console.log(res);
        navigate('/', { state: { message: res.data.message || "Student record created successfully!", messageType: "success" } });
      })
      .catch(err => {
        console.log(err);
        setErrorMessage(err.response.data.error || "Error creating student record.");
      });

    console.log("Form Submitted", studentData);
  };

  console.log("Rendering Add_Students component");

  return (
    <div className="container d-flex align-items-center flex-column mt-4">
      <h3><u>Add Record</u></h3>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Student Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="studentName" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input 
            type="date" 
            className="form-control" 
            id="dob" 
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="result" className="form-label">Result</label>
          <select 
            className="form-control" 
            id="result" 
            value={result}
            onChange={(e) => setResult(e.target.value)}
            required
          >
            <option value="">Select Result</option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Add_Students;
