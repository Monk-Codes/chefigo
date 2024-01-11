import { signInWithGooglePopup, createUserDoc } from "../utils/firebase";
import Signup from "./sign-up";

const SignIn = () => {
 const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDoc(user);
 };

 return (
  <div>
   <h1>signin</h1>
   <button onClick={logGoogleUser}>Sign In with Google</button>
   <Signup />
  </div>
 );
};
export default SignIn;
