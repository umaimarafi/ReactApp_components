import React, { useState } from 'react';
import { MdAddAlert } from 'react-icons/md';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
   background:#3f9fc7;
     padding:25px;
     border-radius:15px;

  .form-group {
    padding:2px;
    width: 100%;
    margin-bottom: 2rem;
    margin:2px;
  }
  label {
    font-size: 1.8rem;
    color:white;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: black;            
    background-color:white;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: white;
    color: #3f9fc7;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    justify:center;
    transition:all 0.5s ease;
    
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !message) {
        alert('Please fill in all required fields.')
      return
    }
     
  }
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input required pattern='[a-zA-Z]{3,30}' title='Enter only alphabets a-z or A-Z'
              type="text"
              id="name"
              name="name"
              placeholder='Enter your Name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            title='Enter email in the format abc@gmail.com'
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder='Enter your Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea required title='Enter your queries or feedback '
              type="text"
              id="message"
              name="message"
              value={message}
              placeholder='Enter Message'
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyle>
    </>
  );
}