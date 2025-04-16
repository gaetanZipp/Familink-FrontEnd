import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuildingPage.css';

const BuildingPage = () => {
  const [lastname, setLastname] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [redirectCountdown, setRedirectCountdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectCountdown > 0) {
      const timer = setTimeout(() => {
        setRedirectCountdown(redirectCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (redirectCountdown === 0) {
      navigate(`/HomePage/${message.treeId}`);
    }
  }, [redirectCountdown, navigate, message.treeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!lastname.trim()) {
      setMessage({ text: 'Please enter a family name', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ text: 'Creating family tree...', type: 'info' });

    try {
      const response = await fetch('http://localhost:5109/api/FamilyTree', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lastname })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessage({ 
        text: `Family tree "${data.lastname}" created successfully!`,
        type: 'success',
        treeId: data.id
      });
      
      // Démarrer le compte à rebours de 10 secondes
      setRedirectCountdown(10);
      
    } catch (error) {
      console.error('Error creating family tree:', error);
      setMessage({ 
        text: 'Failed to create family tree. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="family-tree-form-container">
      <h1>Create a New Family Tree</h1>
      
      {message.text && (
        <div className={`alert ${message.type}`}>
          {message.text}
          {redirectCountdown !== null && message.type === 'success' && (
            <div className="countdown-loader">
              <div className="loader"></div>
              <p>Redirecting in {redirectCountdown} seconds...</p>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="lastname">Family Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter your family name"
            required
            disabled={isSubmitting || redirectCountdown !== null}
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting || !lastname.trim() || redirectCountdown !== null}
          className="submit-btn"
        >
          {isSubmitting ? 'Creating...' : 'Create Family Tree'}
        </button>
      </form>
    </div>
  );
};

export default BuildingPage;