import { useState } from "react";
import "./sign-up.scss";
import FormInput from "./form-input/form-input";
import { createAuthUserWithEmailAndPassword, createUserDoc } from "../utils/firebase";

const defaultForm = {
 displayName: "",
 email: "",
 password: "",
 confirmPassword: "",
};

const Signup = () => {
 const [formFields, setFormFields] = useState(defaultForm);
 const { displayName, email, password, confirmPassword } = formFields;

 const resetForm = () => {
  setFormFields(defaultForm);
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
   alert("password doesn't match");
   return;
  }
  try {
   const { user } = await createAuthUserWithEmailAndPassword(email, password);
   await createUserDoc(user, { displayName });
   resetForm();
  } catch (error) {
   if ((error.code = "auth/email-already-in-use")) {
    alert("cant create user,email already in use");
   }
  }
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormFields({ ...formFields, [name]: value });
 };

 return (
  <div className="sign-up-container">
   <h2>Signup</h2>
   <form onSubmit={handleSubmit}>
    <input label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
    <input label="Email" type="email" required onChange={handleChange} name="email" value={email} />
    <input label="Password" type="password" required onChange={handleChange} name="password" value={password} />
    <input label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

    <button type="submit">Sign Up</button>
   </form>
  </div>
 );
};
export default Signup;
