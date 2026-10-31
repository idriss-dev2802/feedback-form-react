import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmationMessage = `
      Nom : ${formData.name}
      Email : ${formData.email}
      Retour : ${formData.feedback}
    `;
    const isConfirmed = window.confirm(
      `Veuillez confirmer vos détails :\n\n${confirmationMessage}`,
    );
    if (isConfirmed) {
      console.log("Soumission du retour :", formData);
      setFormData({
        name: "",
        email: "",
        feedback: "",
      });
      alert("Merci pour vos précieux retours !");
    }
  }

  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We would Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre e-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Votre feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Soumettre le feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
