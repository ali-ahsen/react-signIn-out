import React,{ useState,useEffect } from 'react'
const User = () => {
    const [userList, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(json => setUsers(json))
      }, [])
 
  return (
    <div>
    <h3>Users List</h3>
    <table className="table table-hover">
   <thead>
    <tr>
      <th>First</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
  {userList.map(({ id, name, email, phone}) => 
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
              </tr>
            )}
    </tbody>
</table>
    </div>
  )
}

export default User


// {"id":1,"title":"His mother had always taught him","body":"His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.","userId":9,"tags":["history","american","crime"],"reactions":2}