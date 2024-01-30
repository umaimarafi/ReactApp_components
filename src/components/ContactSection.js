import React, { useState } from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: #3f9fc7;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
      .faq{
      background:#3f9fc7;
      border-radius:15px;
      color:white;
       padding:5px;
      }
      .faq h2{
         margin:1rem 0;
         text-align:center;
         font-size:2.4rem;
         font-weight:bold;
      }
    .faq-item {
         
      background-color:white;
      color:black;
      gap:1px;
      padding: 1rem;
      border-radius: 8px;
      margin-top:2rem;
      margin-bottom: 2rem;
      cursor: pointer;
      .question {
        font-size: 2rem;
        color: #3f9fc7;
        margin-bottom: 1rem;
        font-weight: bold;
      }
      .answer {
        font-size: 1.8rem;
        color: #3f9fc7;
        font-weight:bold;
      }
    }
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item" onClick={toggleOpen}>
      <div className="question">{question}</div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact Us" subheading="Let's get in Touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+923333333333" />
            <ContactInfoItem icon={<MdEmail />} text="cloudhostinginfo@gmail.com" />
            <ContactInfoItem text="Islamabad, Pakistan" />
            <div className='faq'> 
            <h2>FAQ's</h2>
            <FaqItem
              question="What are your business hours?"
              answer="Our business hours are from 9:00 AM to 5:00 PM, Monday to Friday."
            />
            <FaqItem
              question="How can I contact customer support?"
              answer="You can contact our customer support team via email at cloudservicessupport@gmail.com or by phone at +923333333333."
            />
            </div>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
