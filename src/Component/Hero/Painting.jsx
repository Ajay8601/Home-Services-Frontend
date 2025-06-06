import React, { useState } from 'react';
import PaintingEmployee from '../EmployeeId/PaintingEmployee';

const Painting = ({ onClose }) => {

  const [showpainting, setshowpainting] = useState(false);

  return (
    <>
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Painting</h2>
          <button onClick={onClose} className="close-button">
            <img src="/Component/cross.svg" alt="cross" height={30} />
          </button>
        </div>

        <div className="modal-body painting-services">
          <div className="service-card" onClick={()=> setshowpainting(true)}>
            <img src="/Image/Electrician/Painting1.jpeg" alt="Wall Paint" />
            <p>Wall Painting</p>
          </div>
          <div className="service-card" onClick={()=> setshowpainting(true)}>
            <img src="/Image/Electrician/Painting2.jpeg" alt="Wood Paint" />
            <p>Wood Painting</p>
          </div>
          <div className="service-card" onClick={()=> setshowpainting(true)}>
            <img src="/Image/Electrician/Painting3.jpeg" alt="Metal Paint" />
            <p>Metal Painting</p>
          </div>
          <div className="service-card" onClick={()=> setshowpainting(true)}>
            <img src="/Image/Electrician/Painting4.jpeg" alt="Exterior Paint" />
            <p>Exterior Painting</p>
          </div>
          <div className="service-card" onClick={()=> setshowpainting(true)}>
            <img src="/Image/Electrician/Painting5.jpeg" alt="Furniture Paint" />
            <p>Furniture Painting</p>
          </div>
        </div>
      </div>
    </div>
    {showpainting && <PaintingEmployee close={()=>setshowpainting(false)}/>}
    </>
  );
};

export default Painting;
