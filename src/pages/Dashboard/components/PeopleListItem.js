import { Link } from "react-router-dom";
function PeopleListItem(props) {
  const { person } = props
 /*
 Different between Link and Route
<Route> is an element that renders some components when a current URL matches the route's path.
<Link> is an element used to navigate through routes.

In below example our App component returns <Router> which is the main component for our routing. 
Inside <Router> we create ordered list containing <Link> elements to the specific routes.
 */
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
