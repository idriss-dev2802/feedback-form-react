import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form className="feedback-form">
        <h2>We would Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name="name" placeholder="Votre nom" />
        <input type="email" name="email" placeholder="Votre e-mail" />
        <textarea name="feedback" placeholder="Votre feedback"></textarea>
        <button type="submit">Soumettre le feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
