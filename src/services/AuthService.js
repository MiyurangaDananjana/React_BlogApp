// AuthService.js

class AuthService {
    constructor() {
      console.log('AuthService constructor');
    }

    async login(username, password) {

        console.log('username:', username);

        try {
            // Make API call to backend to authenticate user
            const response = await fetch('http://example.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                // Save token or user data to localStorage or state
                localStorage.setItem('token', data.token);

                return true; // Authentication successful

            } else {
                // Handle authentication error
                return false; // Authentication failed

            }
        } catch (error) {
            console.error('Error occurred during login:', error);
            return false; // Authentication failed
        }
    }

    async logout() {
        // Clear token or user data from localStorage or state
        localStorage.removeItem('token');
        // Optionally, make API call to backend to logout
    }

    async isAuthenticated() {
        // Check if token or user data exists in localStorage or state
        const token = localStorage.getItem('token');
        return !!token; // Return true if authenticated, false otherwise
    }
}

export default new AuthService();
