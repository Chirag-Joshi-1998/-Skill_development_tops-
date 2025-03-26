
import React, { useState } from 'react';
export default function Profie() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
            {isAuthenticated ? (
                <h1>User Profile</h1>
            ) : (
                <button onClick={() => 
                    setIsAuthenticated(true)}>Log In</button>
            )}
        </div>
    );
}
