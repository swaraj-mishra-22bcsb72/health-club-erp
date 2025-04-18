import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase';

const provider = new GoogleAuthProvider();

const GoogleSignIn = ({ onSignInSuccess, onSignInError }) => {
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Signed in user:', user);
            if (onSignInSuccess) {
                onSignInSuccess(user);
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
            if (onSignInError) {
                onSignInError(error);
            }
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
                onClick={handleGoogleSignIn}
                style={{
                    backgroundColor: '#DB4437',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#C33D2E')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#DB4437')}
            >
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleSignIn;
