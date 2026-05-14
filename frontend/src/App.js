import React, { useState } from 'react';

const EVENTS = [
  'Tech Conference 2025',
  'Web Dev Workshop',
  'AI & ML Summit',
  'Startup Pitch Night',
  'Open Source Hackathon',
  'Cloud Computing Expo',
];

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  eventName: '',
};

function App() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side check
    const { fullName, email, phone, eventName } = form;
    if (!fullName.trim() || !email.trim() || !phone.trim() || !eventName) {
      setError('Please fill in all fields before submitting.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed.');
      }

      setSuccess(true);
      setForm(INITIAL_FORM);
    } catch (err) {
      setError(err.message || 'Could not connect to server. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setError('');
    setForm(INITIAL_FORM);
  };

  return (
    <div className="page">
      {/* Header */}
      <div className="header">
        <h1>🎟️ Event Registration</h1>
        <p>Fill in the details below to register for an event.</p>
      </div>

      <div className="card">
        {/* Success State */}
        {success ? (
          <>
            <div className="success-box">
              <div className="checkmark">✅</div>
              <h2>Registration Successful!</h2>
              <p>Your details have been saved. See you at the event!</p>
            </div>
            <button className="btn-register-again" onClick={handleReset}>
              Register for Another Event
            </button>
          </>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} noValidate>
            {error && <div className="error-msg">⚠️ {error}</div>}

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. Shubham Patil"
                value={form.fullName}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. shubham@email.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g. 9876543210"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventName">Select Event</label>
              <select
                id="eventName"
                name="eventName"
                value={form.eventName}
                onChange={handleChange}
              >
                <option value="">-- Choose an Event --</option>
                {EVENTS.map((event) => (
                  <option key={event} value={event}>
                    {event}
                  </option>
                ))}
              </select>
            </div>

            <button
              id="submitBtn"
              type="submit"
              className="btn-submit"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Register Now'}
            </button>
          </form>
        )}
      </div>

      <div className="footer">
        Powered by MERN Stack &nbsp;•&nbsp; MongoDB · Express · React · Node
      </div>
    </div>
  );
}

export default App;
