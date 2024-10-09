import React, { useState } from 'react';

const Contact = () => {
  // State variables for email, password, and login status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  // Predefined credentials (for demonstration purposes)
  const predefinedEmail = 'user@example.com';
  const predefinedPassword = 'password123';

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if the credentials match
    if (email === predefinedEmail && password === predefinedPassword) {
      setLoginMessage('Login successful!');
    } else {
      setLoginMessage('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative bg-BgColor">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            title="Google Map"
            width="100%"
            height="600"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7630.485435425857!2d81.01153833978219!3d17.011760494681326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36634927d51e5d%3A0x5ce27a2c90a99ebc!2sPragadavaram%2C%20Andhra%20Pradesh%20534461!5e0!3m2!1sen!2sin!4v1728486465965!5m2!1sen!2sin"
            style={{
              filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
              width: '100%',
              height: '100%',
            }}
            allowFullScreen
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">User Login</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Please enter your login credentials.</p>
            <form onSubmit={handleLogin}>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
            </form>
            {loginMessage && <p className="text-xs text-gray-500 mt-3">{loginMessage}</p>} {/* Display feedback */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
