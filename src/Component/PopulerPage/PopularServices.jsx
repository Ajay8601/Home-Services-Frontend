import React, { useEffect, useState } from "react";
import "./PopularServices.css";
import { useNavigate } from "react-router-dom";
import Request from "../Request/Request";

const PopularServices = () => {
  const [showForm, setshowForm] = useState(false);

const services = [
  { img: "Images/PopulerServices/plumbing-service.jpg", alt: "Plumbing service", title: "Plumbing", description: "Expert plumbing services for all your needs." },
  { img: "Images/PopulerServices/Electrician-service.avif", alt: "Electrical service", title: "Electrical", description: "Reliable electrical services for your home." },
  { img: "Images/PopulerServices/cleaning-service.jpeg", alt: "Cleaning service", title: "Cleaning", description: "Professional cleaning services for your home." },
  { img: "Images/PopulerServices/Appliance Repair Services.jpg", alt: "Appliance repair service", title: "Appliance Repair", description: "Efficient appliance repair services." },
  { img: "Images/PopulerServices/Painting-service.jpg", alt: "Painting service", title: "Painting", description: "High-quality painting services for your home." },
  { img: "Images/PopulerServices/Carpentry-service.jpg", alt: "Carpentry service", title: "Carpentry", description: "Expert carpentry services for your home." },
  { img: "Images/PopulerServices/cctv-installation.jpeg", alt: "Home security service", title: "Home Security", description: "Professional home security solutions." },
  { img: "Images/PopulerServices/ac-repaire.jpg", alt: "AC repair service", title: "AC and HVAC", description: "Reliable AC and HVAC services." },
  { img: "Images/PopulerServices/gardering.jpg", alt: "Gardening service", title: "Gardening", description: "Professional gardening and landscaping services." }
];


  return (
    <>
      <section className="populer_section">
        <div className="titlename">
          <h1>Popular Services</h1>
        </div>
        <div className="populer_service">
          {services.map((service, index) => (
            <div className="plumbing_service" key={index}>
              <div className="img_section">
                <img src={service.img} alt={service.alt} />
              </div>
              <div className="button-text">
                <div className="text-section">
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                </div>
                <div className="button_key">
                  <button
                  onClick={()=>setshowForm(true)}
                    className="service-via"
                  >
                    Hire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showForm && <Request close={()=> setshowForm(false)}/>}
      </>

  );
};


export default PopularServices;
