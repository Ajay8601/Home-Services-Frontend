import React, { useState } from 'react';
import './Home_page.css';
import CleaningModal from '../Hero/Cleaningmodal';
import Electrician from '../Hero/Electrician';
import Painting from '../Hero/Painting';
import Plumber from '../Hero/Plumber';
import Repaire from '../Hero/Repaire';
import Shifting from '../Hero/Shifting';

const HomeTaskFinder = () => {
  const [query, setQuery] = useState('');
  const [showcleaning, setshowcleaning] = useState(false);
  const [showElectrician, setshowElectrician] = useState(false); 
  const [showPainting, setshowPainting] = useState(false);
  const [showPlumbing, setshowPlumbing] = useState(false);
  const [showRepaire, setshowRepaire] = useState(false);
  const [showShifting, setshowShifting] = useState(false);

  const handleSearch = () => {
    const q = query.toLowerCase().trim();
    if (q.includes('clean')) setshowcleaning(true);
    else if (q.includes('electric')) setshowElectrician(true);
    else if (q.includes('paint')) setshowPainting(true);
    else if (q.includes('plumb')) setshowPlumbing(true);
    else if (q.includes('repair')) setshowRepaire(true);
    else if (q.includes('shift')) setshowShifting(true);
    else alert("No matching service found.");
  };

  return (
    <>
      <section className="home_section">
        <div className="hero_form">
          <h1>
            Find Home <span>Service/Repair</span> <br /> near you
          </h1>
          <h2>Explore Best Home Service & Repair near you</h2>
          <div className="Search_section">
            <div className="input_section">
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <div className="Search_icon">
              <button onClick={handleSearch}>
                <img src="Component/search_icon.svg" alt="icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="Category_section">
          <div className="clean">
            <button onClick={() => setshowcleaning(true)}>
              <img src="Image/cleaning.png" alt="clean_image" />
              <p>Cleaning</p>
            </button>
            <button onClick={() => setshowElectrician(true)}>
              <img src="Image/electricion.png" alt="electric" />
              <p>Electric</p>
            </button>
            <button onClick={() => setshowPainting(true)}>
              <img src="Image/painting.png" alt="painting" />
              <p>Painting</p>
            </button>
            <button onClick={() => setshowPlumbing(true)}>
              <img src="Image/plumbing1.png" alt="plumbing" />
              <p>Plumbing</p>
            </button>
            <button onClick={() => setshowRepaire(true)}>
              <img src="Image/Repair1.png" alt="repair" />
              <p>Repairing</p>
            </button>
            <button onClick={() => setshowShifting(true)}>
              <img src="Image/Shifting.png" alt="shifting" />
              <p>Shifting</p>
            </button>
          </div>
        </div>
      </section>

      {/* Modal Rendering */}
      {showcleaning && <CleaningModal onClose={() => setshowcleaning(false)} />}
      {showElectrician && <Electrician onClose={() => setshowElectrician(false)} />}
      {showPainting && <Painting onClose={() => setshowPainting(false)} />}
      {showPlumbing && <Plumber onClose={() => setshowPlumbing(false)} />}
      {showRepaire && <Repaire onClose={() => setshowRepaire(false)} />}
      {showShifting && <Shifting onClose={() => setshowShifting(false)} />}
    </>
  );
};

export default HomeTaskFinder;