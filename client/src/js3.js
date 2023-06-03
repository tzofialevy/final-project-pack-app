import React from 'react';

const USERS_URL = 'https://example.com/api/users';

   // <tr *ngfor="item in users">
        // </tr>

export default function Table () {
   const [users, setUsers] = useState([]);
  //  costractor(){}
  //  componentDidMount=()=>{
  //    fetch('https://example.com/api/users?page=0')
  //  .then(response => response.json())
  //  .then(data => {setUsers(data); console.log(data)});
  //  },[]
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
    

       </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn">first</button>
        <button className="previous-page-btn">previous</button>
        <button className="next-page-btn">next</button>
        <button className="last-page-btn">last</button>
      </section>
    </div>
  )
};
