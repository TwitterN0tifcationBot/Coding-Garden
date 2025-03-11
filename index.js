<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login with Google or Email</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #1e1e2f;
            color: #ffffff;
            text-align: center;
        }
        .login-button {
            background-color: #7289da;
            color: #ffffff;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px;
            transition: background-color 0.3s ease;
        }
        .login-button:hover {
            background-color: #4e5d94;
        }
        .email-login {
            display: none;
            margin-top: 20px;
        }
        .email-login input {
            padding: 10px;
            margin: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 200px;
        }
        .email-login button {
            background-color: #7289da;
            color: #ffffff;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
        }
        .email-login button:hover {
            background-color: #4e5d94;
        }
    </style>
</head>
<body>
    <h1>Welcome to Coding Garden</h1>
    <button class="login-button" onclick="loginWithGoogle()">Login with Google</button>
    <button class="login-button" onclick="showEmailLogin()">Login with Email</button>

    <div class="email-login" id="emailLogin">
        <input type="email" id="email" placeholder="Enter your email">
        <input type="password" id="password" placeholder="Enter your password">
        <button onclick="loginWithEmail()">Login</button>
    </div>

    <script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"></script>
    <script>
        // Firebase configuration (replace with your own)
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };

        // Initialize Firebase
        const app = firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();

        // Login with Google
        function loginWithGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
                .then((result) => {
                    alert(`Welcome, ${result.user.displayName}!`);
                })
                .catch((error) => {
                    console.error("Error logging in with Google:", error);
                });
        }

        // Show email login form
        function showEmailLogin() {
            document.getElementById('emailLogin').style.display = 'block';
        }

        // Login with Email
        function loginWithEmail() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert(`Welcome, ${userCredential.user.email}!`);
                })
                .catch((error) => {
                    console.error("Error logging in with email:", error);
                });
        }
    </script>
</body>
</html>
