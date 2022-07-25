import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom";
import "./styles.css"
import Dashboard from "./pages/Dashboard/index";
import PersonProfile from "./pages/PersonProfile/index";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
console.log('hiredPeople', hiredPeople);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => {
        console.log('Data', data);
        setPeople(data.results);
      })
      .catch(err => console.log('fail to fetch', err))

  }, [])
  const addHiredPerson=(person,wage)=>{
    const copyOfhiredPeople = [...hiredPeople];
    copyOfhiredPeople.push({...person,wage:wage})
    setHiredPeople(copyOfhiredPeople);
  }

  console.log('people', people);
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />}/>
        <Route path="/person/:id" element={<PersonProfile addHiredPerson={addHiredPerson}/>} />
      </Routes>
    </>
  )
}
