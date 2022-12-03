import React from 'react'


const UserInfo = (props) => {
    const {user} = props
  return (
    <div>
      <ul className="list-group">
                <li className="list-group-item"> <strong> User ID:</strong>  {user._id}</li>
                <li className="list-group-item"> <strong> Name:</strong>  {user.name}</li>
                <li className="list-group-item"> <strong> email:</strong>  {user.email}</li>
                <li className="list-group-item"> <strong> Account created on:</strong> {user.date} </li>
            </ul>
    </div>
  )
}

export default UserInfo
