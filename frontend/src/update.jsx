import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/student/${id}`)
      .then(res => {
        const student = res.data;
        setName(student.name);
        setDob(new Date(student.dob).toISOString().split('T')[0]);
        setResult(student.result);
      })
      .catch(err => {
        console.log(err);
        setErrorMessage(err.response.data.error || "Error fetching student data.");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      name,
      dob,
      result
    };

    axios.put(`http://localhost:3000/update/${id}`, studentData)
      .then(res => {
        console.log(res);
        navigate('/', { state: { message: res.data.message || "Student record updated successfully!", messageType: "info" } });
      })
      .catch(err => {
        console.log(err);
        setErrorMessage(err.response.data.error || "Error updating student record.");
      });

    console.log("Form Submitted", studentData);
  };

  return (
    <div className="container d-flex align-items-center flex-column mt-4">
      <h3><u>Update Record</u></h3>
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

export default Update;
