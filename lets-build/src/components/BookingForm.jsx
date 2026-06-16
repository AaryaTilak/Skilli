import React, { useState } from 'react';
import { Calendar, User, Mail, ClipboardList, Send, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const departments = [
    'Cardiology Department',
    'Orthopedics Clinic',
    'Neurology Care',
    'Pediatric Medicine',
    'General Practice',
    'Dental Clinic'
  ];

  const doctors = [
    'Dr. Sophia Bennett (Cardiologist)',
    'Dr. Marcus Vance (Orthopedic Surgeon)',
    'Dr. Elena Rostova (Neurologist)',
    'Dr. Alex Mercer (Pediatrician)',
    'Dr. Clara Adams (General Practitioner)',
    'Dr. James Cole (Dentist)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.department) tempErrors.department = 'Please select a department';
    if (!formData.doctor) tempErrors.doctor = 'Please select a doctor';
    if (!formData.date) {
      tempErrors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        tempErrors.date = 'Date cannot be in the past';
      }
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        department: '',
        doctor: '',
        date: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="booking-card" id="appointment-form">
      {submitted ? (
        <div className="booking-success">
          <CheckCircle2 className="success-icon" size={64} />
          <h2>Appointment Requested!</h2>
          <p>
            Thank you for booking with us. We have received your request and will contact you via email or phone within 2 hours to confirm your scheduled slot.
          </p>
          <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
            Book Another Appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="booking-form-header">
            <h3>Book an Appointment</h3>
            <p>Fill out the form below and our coordinators will reach out shortly.</p>
          </div>

          <div className="form-grid">
            {/* Full Name */}
            <div className="input-group">
              <label className="input-label" htmlFor="name">Full Name</label>
              <div className="input-with-icon">
                <User className="field-icon" size={18} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`input-field ${errors.name ? 'error' : ''}`}
                />
              </div>
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="input-group">
              <label className="input-label" htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <Mail className="field-icon" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className={`input-field ${errors.email ? 'error' : ''}`}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            {/* Department */}
            <div className="input-group">
              <label className="input-label" htmlFor="department">Department</label>
              <div className="input-with-icon">
                <ClipboardList className="field-icon" size={18} />
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`input-field ${errors.department ? 'error' : ''}`}
                >
                  <option value="">Select Medical Service</option>
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              {errors.department && <span className="error-text">{errors.department}</span>}
            </div>

            {/* Doctor */}
            <div className="input-group">
              <label className="input-label" htmlFor="doctor">Choose Specialist</label>
              <div className="input-with-icon">
                <User className="field-icon" size={18} />
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className={`input-field ${errors.doctor ? 'error' : ''}`}
                >
                  <option value="">Select Available Doctor</option>
                  {doctors.map((doc, idx) => (
                    <option key={idx} value={doc}>{doc}</option>
                  ))}
                </select>
              </div>
              {errors.doctor && <span className="error-text">{errors.doctor}</span>}
            </div>

            {/* Date */}
            <div className="input-group">
              <label className="input-label" htmlFor="date">Select Date</label>
              <div className="input-with-icon">
                <Calendar className="field-icon" size={18} />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`input-field ${errors.date ? 'error' : ''}`}
                />
              </div>
              {errors.date && <span className="error-text">{errors.date}</span>}
            </div>

            {/* Message */}
            <div className="input-group full-width">
              <label className="input-label" htmlFor="message">Message / Symptoms (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your symptoms or reason for visit..."
                className="input-field"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span>Scheduling...</span>
            ) : (
              <>
                <span>Submit Appointment Request</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
