
import React, { useState } from 'react';
import './App.css';
import Mapty from './components/Mapty';


function App() {
  const [query, setQuery] = useState('');
  const [info, setInfo] = useState({
    ip: '192.212.174.101',
    location: 'Brooklyn, NY 10001',
    timezone: 'UTC -05:00',
    isp: 'SpaceX Starlink',
    lat: 40.6782,
    lon: -73.9442,
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!query) return;
    try {

      const res = await fetch(`http://ip-api.com/json/${query}`);
      const data = await res.json();
      if (data.status === 'fail') {
        setError('IP or domain not found');
        return;
      }
      setInfo({
        ip: data.query,
        location: `${data.city}, ${data.regionName} ${data.zip}`,
        timezone: data.timezone,
        isp: data.isp,
        lat: data.lat,
        lon: data.lon,
      });
    } catch (err) {
      setError('Error fetching data');
    }
  };

  return (
    <>
      <div className="ipaddress-tracker">
        <div className="ipaddress-text-container">
          <div className="ipaddress-h1" style={{ height: "36vh" }}>
            <h2 style={{ padding: "20px", color: "white" }}>
              UB IP ADDRESS TRACKER
            </h2>
            <form
              className="input-type"
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Search for any IP address or domain"
                style={{
                  padding: "10px",
                  borderRadius: "10px 0 0 10px",
                  border: "none",
                  width: "20%",
                  outline: "none",
                }}
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <input
                type="submit"
                value="🔍"
                style={{
                  padding: "9px",
                  backgroundColor: "black",
                  border: "none",
                  borderRadius: "0 10px 10px 0",
                  cursor: "pointer",
                }}
              />
            </form>
            {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
          </div>
        </div>

        <div
          className="information-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="information-display"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              alignItems: "center",
              height: "15vh",
              width: "70%",
              position: "absolute",
              top: "20%",
              borderRadius: "20px",
              background: "white",
              boxShadow: "0px 2px 2px 0px black",
            }}
          >
            <div className="ipaddress">
              <h6>IP ADDRESS</h6>
              <h3>{info.ip}</h3>
            </div>

            <div className="location">
              <h6>LOCATION</h6>
              <h3>{info.location}</h3>
            </div>

            <div className="timezone">
              <h6>TIME-ZONE</h6>
              <h3>{info.timezone}</h3>
            </div>

            <div className="isp">
              <h6>ISP</h6>
              <h3>{info.isp}</h3>
            </div>
          </div>
        </div>
      </div>

      <Mapty lat={info.lat} lon={info.lon} />
    </>
  );
}

export default App
