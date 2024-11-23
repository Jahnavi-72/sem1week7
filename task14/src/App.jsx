import React, { useState } from 'react';

function SubmitForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h1>Submit Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitForm;