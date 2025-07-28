import './App.css'
import Mapty from './components/Mapty';

function App() {

  return (
    <>
      <div className="ipaddress-tracker">
        <div className="ipaddress-text-container">
          <div className="ipaddress-h1" style={{height: "36vh"}}>
            <h2 style={{ padding: "20px", color: "white" }}>
              UB IP ADDRESS TRACKER
            </h2>
            <div
              className="input-type"
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for any IP address or domain"
                style={{
                  padding: "10px",
                  borderRadius: "10px 0 0 10px",
                  border: "none",
                  width: "20%",
                  outline: "none",
                }}
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
            </div>
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
              <h3>192.212.174.101</h3>
            </div> 

            <div className="location">
              <h6>LOCATION</h6>
              <h3>Brooklyn, NY 10001</h3>
            </div>

            <div className="timezone">
              <h6>TIME-ZONE</h6>
              <h3>UTC -05:00</h3>
            </div>

            <div className="isp">
              <h6>ISP</h6>
              <h3>
                SpaceX Starlink</h3>
            </div>
          </div>
        </div>
</div>

<Mapty/>
    </>
  ); 
}

export default App
