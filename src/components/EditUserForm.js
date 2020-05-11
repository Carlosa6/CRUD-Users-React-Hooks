import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

  const { register,setValue, errors, handleSubmit } = useForm({
    defaultValues: props.currentUser
  });

  setValue('name', props.currentUser.name);
  setValue('email', props.currentUser.email);

  const onSubmit = (data,e) => {
    e.preventDefault();

    data.id = props.currentUser.id; //para guardar el id que se pasó en el otro props

    props.updateUser(props.currentUser.id,data);

    e.target.reset();
  }

  return(
    <form className="mt-4 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Name</label>
        <input className="form-control mb-2" name="name" type="text" placeholder="Your Name" ref={
            register({
              required:{
                value:true,
                message:'The name is required'
              }
            })
        } />

{ errors.name && <span className="text-danger my-2">{errors.name.message}</span> }
      </div>

      <div className="form-group">
        <label>Email</label>
        <input className="form-control mb-2" placeholder="Your email" type="email" name="email" ref={
            register({
              required:{
                value:true,
                message:'The email is required'
              }
            })
        } />

{ errors.email && <span className="text-danger my-2">{errors.email.message}</span> }
      </div>

      <div className="form-group">
        <button className="btn btn-primary" type="submit">Edit User</button>
      </div>
    </form>
  )
}

export default EditUserForm;