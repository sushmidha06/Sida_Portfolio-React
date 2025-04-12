import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    // Use the name attribute to update the specific part of formData
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxCpBkLDUkr-FKxq06ItFQd3MIzrlgU8U_yQWEbUio8rGz_d2_ENzLj4nQnjLuhNWe3/exec", {
        method: "POST",
        mode: "no-cors", // Needed for Google Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Form submitted successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="contact-form">
      <div className="input-group">
        <input
          type="text"
          name="firstName"  // Added name attribute
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"  // Added name attribute
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <input
        type="email"
        name="email"  // Added name attribute
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"  // Added name attribute
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ContactForm;

