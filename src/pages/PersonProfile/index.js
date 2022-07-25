import { useEffect, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import HireForm from "./components/HireForm"

function PersonProfile(props) {
 
  const { addHiredPerson } = props;
  const [person, setPerson] = useState(null)
  // Add useLocation here...
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  
  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      setPerson(person);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>


  return (
    <article>
      <h2>{person.name.first} {person.name.last} </h2>
      <HireForm person={person} addHiredPerson={addHiredPerson}/>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate("/")}>Go Home</button>
    </article>
  )
}

export default PersonProfile
