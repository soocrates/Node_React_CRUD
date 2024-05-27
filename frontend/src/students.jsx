import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message || "");
  const [messageType, setMessageType] = useState(location.state?.messageType || ""); // State to manage message type

  useEffect(() => {
    fetchStudents();

    if (message) {
      // Clear the message after 3 seconds
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const fetchStudents = () => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      axios
        .delete(`http://localhost:3000/delete/${id}`)
        .then((res) => {
          console.log(res.data);
          setMessage(res.data.message || "Student record deleted successfully!");
          setMessageType("danger"); // Set message type to danger for delete
          fetchStudents(); // Refresh the list after deletion
        })
        .catch((err) => {
          console.log(err);
          setMessage(err.response.data.error || "Error deleting student record.");
          setMessageType("danger"); // Set message type to danger for error
        });
    }
  };

  return (
    <div className="container mt-4">
      <Link to="/add_records" className="btn btn-success mb-4">Add Record</Link>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
      {students.length !== 0 ? (
        <table className="table table-hover table-primary table-striped">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Student Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Result</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.result}</td>
                <td>
                  <Link to={`/update/${student.id}`} className="btn btn-info btn-sm me-2">Update</Link>
                  <button type="button" className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>Sorry, No Records Found !!</h4>
      )}
    </div>
  );
};

export default Students;
