import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function IronbnbList() {
  const [loading, setFetching] = useState(true);
  const [waiting, setWaiting] = useState(true);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    //console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setApartments(response.data);
      setFetching(false);
    });
  }, []);

  useEffect(() => {
    // set a timer that after 2 seconds displays the list of appartments
    const id = setTimeout(() => {
      setWaiting(false);
    }, 2000);
    return () => {
      clearInterval(id);
      console.log("Component Unmounting");
    };
  }, []);



  return (
    <div>
      <h3>List of apartments</h3>
      {loading || waiting ? (
        <p>Loading ...</p>
      ) : (
        apartments.map((apt) => (
          <div key={apt._id} className="card">
            <img src={apt.img} alt="apartment" />
            <h3>{apt.title}</h3>
            <p>Price: {apt.pricePerDay}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default IronbnbList;
