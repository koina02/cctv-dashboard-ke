import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake auth check (replace this with API call later)
    if (email === 'admin@cctv.com' && password === 'admin123') {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 text-white">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            CCTV Vision
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field bg-gray-700 text-white placeholder-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field bg-gray-700 text-white placeholder-gray-400"
          />

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <div className="flex items-center justify-between text-xs text-gray-400">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-purple-500 border-gray-600 bg-gray-800"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-purple-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center"
          >
            Log In <FiArrowRight className="ml-2" />
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-gray-800 text-sm text-gray-400">OR</span>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full py-2 border border-gray-600 rounded-lg text-sm hover:bg-gray-700 transition">
            Continue with GitHub
          </button>
          <button className="w-full py-2 border border-gray-600 rounded-lg text-sm hover:bg-gray-700 transition">
            Continue with Twitter
          </button>
        </div>
      </div>

      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg shadow-md mt-4 p-6 text-center text-sm text-gray-300">
        Don’t have an account?{' '}
        <Link to="/register" className="text-purple-400 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
