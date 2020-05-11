import React,{ useState } from "react";
import "./styles.css";
import ListUsers from './components/ListUsers';
import FormUser from './components/FormUser';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const userData = [
    { id:uuidv4(), name:'Andreas', email:'andrww3@correo.com' },
    { id:uuidv4(), name:'Julio', email:'julio99@correo.com' }
  ]

  //states
  const [ users,setUsers ] = useState(userData);
  const [ editing,setEditing ] = useState(false);
  const [ currentUser,setCurrentUser ] = useState({
    id:null, name:'', email:''
  })

  //agregar usuario
  const addUser = user => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ]) 
  }

  //eliminar usuario
  const deleteUser = id => {
    //filtrar la info para eliminar
    setUsers(users.filter(user => user.id !== id))
  }

  //editar usuario
  const editRow = user => {
    setEditing(true)
    setCurrentUser({
      id:user.id,
      name: user.name,
      email: user.email
    })
  }

  const updateUser = (id,updateUser) => {
    setEditing(false);
    //buscar al usuario por id, cuando lo encuentra actualiza los nuevos datos o escribe los mismos
    setUsers(users.map(user => user.id === id ? updateUser : user));
  }

  return (
    <div className="container">
      <h1>Create CRUD App with React Hooks</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          
          {
            editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add User</h2>
                <FormUser addUser={addUser} />
              </div>
            )
          }
          
        </div>
        <div className="col-md-6 col-sm-12">
          <h2>View Users</h2>
          <ListUsers 
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
