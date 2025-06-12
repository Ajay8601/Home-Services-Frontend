import React, { useRef, useState, useEffect } from "react";
import "./mbs.css";
import Request from "../Request/Request";

const MostBookedServices = () => {
  const scrollContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [services, setServices] = useState([]);
  const [requestForm, setRequestForm] = useState(false);

  const mostBookedServices = [
    { img: "Images/most-booked-images/instence-bathroom-cleaner.webp", title: "Intense Bathroom Cleaning", rating: "4.5 (1.1M)", price: "₹499" },
    { img: "Images/most-booked-images/bathroom.png", title: "Classic Bathroom Cleaning", rating: "4.8 (1.4M)", price: "₹399" },
    { img: "Images/most-booked-images/fully-automatic-washing.webp", title: "Fully Automatic Washing Machine", rating: "4.2 (249K)", price: "₹149" },
    { img: "Images/most-booked-images/Sofa cleaning.webp", title: "Sofa Cleaning", rating: "4.1 (400K)", price: "₹499" },
    { img: "Images/most-booked-images/Haircut.webp", title: "Haircut for Men", rating: "4.5 (309K)", price: "₹249" },
    { img: "Images/most-booked-images/glow-facials.webp", title: "Instant Glow Facials", rating: "4.5 (149K)", price: "₹799" },
    { img: "Images/most-booked-images/Deluxe Peicure.webp", title: "Deluxe Pedicure", rating: "4.55 (258K)", price: "₹549" },
    { img: "Images/most-booked-images/Elysian firming wine.webp", title: "Elysian Firming Wine Glow Facial", rating: "4.28 (126K)", price: "₹999" }
  ];

  useEffect(() => {
    // Load services once when component mounts
    setServices(mostBookedServices);
  }, []);

  // Update scroll button visibility
  const updateScrollState = () => {
    const scrollElement = scrollContainerRef.current;
    if (scrollElement) {
      setIsAtStart(scrollElement.scrollLeft === 0);
      setIsAtEnd(scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth - 1);
    }
  };

  useEffect(() => {
    const scrollElement = scrollContainerRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", updateScrollState);
      updateScrollState();
    }
    return () => {
      scrollElement?.removeEventListener("scroll", updateScrollState);
    };
  }, [services]);

  // Scroll actions
  const scrollLeft = () => scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <>
      <section className="most-booked-services">
        <h1>Most Booked Services</h1>
        <div className="scroll-container">
          {/* Left Arrow */}
          {!isAtStart && (
            <button className="scrollBtn-1" onClick={scrollLeft}>
              <img src="/Component/arrow.svg" alt="Previous" height={30} />
            </button>
          )}

          {/* Scrollable Services */}
          <div className="most-booked" ref={scrollContainerRef}>
            {services.map((service, index) => (
              <div key={index} className="mbs" onClick={() => setRequestForm(true)}>
                <img src={service.img} alt={service.title} />
                <h3>{service.title}</h3>
                <h5>
                  <img src="/Component/star.png" alt="Star" />
                  <p>{service.rating}</p>
                </h5>
                <h6>{service.price}</h6>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {!isAtEnd && (
            <button className="scrollBtn-2" onClick={scrollRight}>
              <img src="/Component/arrow.svg" alt="Next" height={30} />
            </button>
          )}
        </div>
      </section>

      {/* Request Form Popup */}
      {requestForm && <Request close={() => setRequestForm(false)} />}
    </>
  );
};

export default MostBookedServices;
