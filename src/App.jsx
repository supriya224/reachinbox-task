/* eslint-disable no-undef */
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
// import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const decodedCredential = jwtDecode(credentialResponse.credential);
    const { name, email, picture } = decodedCredential;

    navigate('/home', {
      state: { name, email, picture },
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="border p-8">

 
    <h3 className="text-3xl my-3 text-center">Create a new Account</h3>
    <div className="w-fit text-center">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      <button className="w-full bg-blue-500 my-8 p-3">Create account</button>
      <p>Already have you an account ? <span>Sign In</span></p>
    </div>
    </div>
  </div>
  );
}

export default App;
