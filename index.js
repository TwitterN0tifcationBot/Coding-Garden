<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Toggle Button</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #1e1e2f; /* Default dark theme */
            color: #ffffff; /* Default light text */
            transition: background-color 0.3s, color 0.3s;
        }
        .theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #7289da;
            color: #ffffff;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .theme-toggle:hover {
            background-color: #4e5d94;
        }
        /* Light theme styles */
        body.light-theme {
            background-color: #ffffff;
            color: #000000;
        }
    </style>
</head>
<body>
    <h1>Welcome to Coding Garden</h1>
    <p>Switch between dark and light themes with the button below.</p>
    <button class="theme-toggle" onclick="toggleTheme()">Switch to Light Theme</button>

    <script>
        function toggleTheme() {
            const body = document.body;
            const button = document.querySelector('.theme-toggle');

            // Toggle the theme class
            body.classList.toggle('light-theme');

            // Update button text based on the current theme
            if (body.classList.contains('light-theme')) {
                button.textContent = 'Switch to Dark Theme';
            } else {
                button.textContent = 'Switch to Light Theme';
            }
        }
    </script>
</body>
</html>
