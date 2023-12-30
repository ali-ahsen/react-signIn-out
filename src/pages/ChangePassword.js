import React, { useState} from 'react';
const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    userData.password = newPassword;

    localStorage.setItem('userData', JSON.stringify(userData));
    // reset field 
    setNewPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Change Password</h3>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter New Password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success">
        Save
        {/* <NavLink className="nav-link" to="/sign-in">Save</NavLink> */}
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
