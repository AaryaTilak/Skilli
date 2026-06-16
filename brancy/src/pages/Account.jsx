import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: '', email: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) return;
    
    // Setup dummy logged-in user
    setUser({
      username: loginData.email.split('@')[0],
      email: loginData.email
    });
    setIsLoggedIn(true);
    alert('Logged in successfully!');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!registerData.name || !registerData.email || !registerData.password) return;
    
    setUser({
      username: registerData.name,
      email: registerData.email
    });
    setIsLoggedIn(true);
    alert('Account registered and logged in successfully!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ username: '', email: '' });
    setLoginData({ email: '', password: '' });
    setRegisterData({ name: '', email: '', password: '' });
  };

  return (
    <main className="main-content">
      {/* Header banner */}
      <section 
        className="page-header-area" 
        style={{ 
          backgroundImage: `url(https://template.hasthemes.com/brancy/brancy/assets/images/photos/bg1.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="page-header-content">
                <h2 className="title text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>
                  {isLoggedIn ? 'My Account' : 'Login / Register'}
                </h2>
                <div className="breadcrumbs text-white-50 mt-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="text-white-50">Home</a>
                  <span className="mx-2">/</span>
                  <span>Account</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Content */}
      <section className="section-space">
        <div className="container">
          {isLoggedIn ? (
            /* Logged In Dashboard View */
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="border p-4 bg-light rounded text-center">
                  <div className="user-avatar mb-3">
                    <i className="fa fa-user-circle-o text-secondary" style={{ fontSize: '96px' }}></i>
                  </div>
                  <h4 className="font-weight-bold text-dark mb-1">{user.username}</h4>
                  <p className="text-secondary mb-4">{user.email}</p>
                  <button 
                    onClick={handleLogout} 
                    className="btn btn-danger w-100"
                    style={{ borderRadius: '4px' }}
                  >
                    Log Out
                  </button>
                </div>
              </div>
              
              <div className="col-md-8">
                <div className="border p-4 bg-white rounded">
                  <h3 className="mb-4 font-weight-bold" style={{ fontSize: '22px' }}>Dashboard Overview</h3>
                  <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                    Hello <strong>{user.username}</strong>! (Not you? <span onClick={handleLogout} style={{ color: '#0056b3', cursor: 'pointer', textDecoration: 'underline' }}>Log out</span>).
                    From your account dashboard, you can view your recent orders, manage your shipping addresses, and edit password details.
                  </p>
                  
                  <div className="row mt-4">
                    <div className="col-md-6 mb-3">
                      <div className="border p-3 rounded">
                        <h5 className="font-weight-bold mb-2">Billing Address</h5>
                        <p className="text-muted m-0" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                          {user.username}<br />
                          121 Beauty Square, Suite A<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="border p-3 rounded">
                        <h5 className="font-weight-bold mb-2">Recent Orders</h5>
                        <p className="text-muted m-0" style={{ fontSize: '13px' }}>
                          No orders placed yet. Explore our products to make your first purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Login & Register Toggles */
            <div className="row">
              {/* Login Form */}
              <div className="col-md-6 mb-5 mb-md-0">
                <div className="border p-4 p-md-5 bg-white rounded">
                  <h3 className="mb-4 font-weight-bold" style={{ fontSize: '24px' }}>Login</h3>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-3">
                      <label className="form-label font-weight-bold text-dark">Email Address <span className="text-danger">*</span></label>
                      <input 
                        type="email" 
                        className="form-control" 
                        value={loginData.email} 
                        onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))} 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label font-weight-bold text-dark">Password <span className="text-danger">*</span></label>
                      <input 
                        type="password" 
                        className="form-control" 
                        value={loginData.password} 
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))} 
                        required 
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-black text-white font-weight-bold w-100 py-3"
                      style={{ backgroundColor: '#222', border: 'none', borderRadius: '4px' }}
                    >
                      Log In
                    </button>
                  </form>
                </div>
              </div>

              {/* Register Form */}
              <div className="col-md-6">
                <div className="border p-4 p-md-5 bg-white rounded">
                  <h3 className="mb-4 font-weight-bold" style={{ fontSize: '24px' }}>Register</h3>
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="mb-3">
                      <label className="form-label font-weight-bold text-dark">User Name <span className="text-danger">*</span></label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={registerData.name} 
                        onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))} 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label font-weight-bold text-dark">Email Address <span className="text-danger">*</span></label>
                      <input 
                        type="email" 
                        className="form-control" 
                        value={registerData.email} 
                        onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))} 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label font-weight-bold text-dark">Password <span className="text-danger">*</span></label>
                      <input 
                        type="password" 
                        className="form-control" 
                        value={registerData.password} 
                        onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))} 
                        required 
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-black text-white font-weight-bold w-100 py-3"
                      style={{ backgroundColor: '#222', border: 'none', borderRadius: '4px' }}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
