import { useState } from "react"
import { Link} from "react-router-dom";
function HireForm(props) {
  // person={person} hirePeople={hirePeople} setHiredPeople={setHiredPeople}
  const {person,hiredPeople,addHiredPerson} = props;
  const [wage, setWage] = useState(0)


  return (
    <form>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <Link to="/">
      <button type="submit" onClick={()=>addHiredPerson(person,wage)}>Hire</button>
      </Link>
    </form>
  )
}

export default HireForm
