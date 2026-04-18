import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const loadData = async () => {
    const res = await axios.get("http://localhost:5000/feedback");
    setFeedbacks(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/feedback", {
      name,
      message,
    });

    setName("");
    setMessage("");
    loadData();
  };

  return (
    <div className="container">
      <h1>🎓 Student Feedback System</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Write your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Submit Feedback</button>
      </form>

      <h2>💬 Feedback List</h2>

      <div className="feedback-container">
        {feedbacks.map((f, index) => (
          <div className="card" key={index}>
            <h3>{f.name}</h3>
            <p>{f.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;