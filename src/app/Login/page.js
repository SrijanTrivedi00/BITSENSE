'use client';
import { useState } from 'react';
import { auth } from '../utility/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function LoginPageWrapper() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [showpass,setShowpass]=useState("password");
  const router=useRouter();

  const handleSubmit = async () => {
    if (!isLogin && password !== confirmPass) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Logged in successfully!");
        router.push('/');

      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Account created successfully!");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transition-all">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {isLogin ? 'Login' : 'Create Account'}
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLogin && (
          
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-xl border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-200"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <span
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
            }}
          >
            {isLogin ? 'Sign up' : 'Login'}
          </span>
        </p>

        {message && (
          <p className="text-center text-sm mt-4 text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
}
