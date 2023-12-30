import React from 'react'
import {NavLink, useNavigate} from "react-router-dom";
export const Nav = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const logOut = () => {
    navigate('/sign-in');
}
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">React App</a> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='home'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='user'>User</NavLink>
        </li>
        <li className="nav-item">
      <NavLink className="nav-link" to='posts'>Post</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to='products'>Products</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to='change-pass'>Change Password</NavLink>
        </li>
      </ul>
      
    </div>
  
  </div>
  
</nav>

{/* <button className="btn btn-sm btn-primary float-end"><Link to="change-pass"></Link>Change Password</button> */}
    <button className="btn btn-sm btn-danger float-end me-2" onClick={logOut}>Log Out</button>



    {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
</div>






  )
}
export default Nav