import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyACe2lFnmz9GUtTDFHcQzLF1ohNcZTVunY",
    authDomain: "fitness-app-ef92f.firebaseapp.com",
    projectId: "fitness-app-ef92f",
    storageBucket: "fitness-app-ef92f.appspot.com",
    messagingSenderId: "841289850243",
    appId: "1:841289850243:web:a4973a002ea1aed759aab6",
    measurementId: "G-MHPZCEHRST"
};

// Initialize Firebase app only once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const GoogleSignIn = ({ onSignInSuccess, onSignInError }) => {
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Signed in user:', user);
            if (onSignInSuccess) {
                onSignInSuccess(user); // Pass user info to parent component if needed
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
            if (onSignInError) {
                onSignInError(error); // Pass error to parent component if needed
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
