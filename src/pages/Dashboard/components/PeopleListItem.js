import { Link } from "react-router-dom";
function PeopleListItem(props) {
  const { person } = props
 
  return (

    <li>
      <Link to={`/person/${person.email}`} state={{ person }}>
        {person.name.first} {person.name.last}
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>


  )
}

export default PeopleListItem
