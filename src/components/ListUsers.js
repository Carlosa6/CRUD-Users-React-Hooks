import React from "react";

const ListUsers = props => {

  return (
    <div className="table-responsive">
      <table className="table mt-4 table-bordered table-striped table-hover">
      <thead className="bg-primary text-white text-center">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {
          props.users.length > 0 ? 
          (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button 
                    className="btn btn-warning"
                    onClick={
                      () => { props.editRow(user) }
                    }
                    >Edit</button>
                  <button 
                    className="btn ml-2 btn-danger"
                    onClick={ () => props.deleteUser(user.id) }
                    >Delete</button>
                </td>
              </tr>
            ))
          ) : (
              <tr>
                <td colSpan={3} className="h4">No Users</td>
              </tr>
          )
        }
        
      </tbody>
    </table>
    </div>
  );
};

export default ListUsers;
