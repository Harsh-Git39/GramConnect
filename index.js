<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About GramConnect</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #333;
        }

        header {
            background-color: #f8f8f8;
            padding: 15px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
        }

        .logo {
            display: flex;
            align-items: center;
            font-size: 22px;
            font-weight: bold;
            color: #0aad5c;
        }

        .logo svg {
            width: 28px;
            height: 28px;
            margin-right: 8px;
        }

        nav a {
            margin: 0 10px;
            text-decoration: none;
            color: #333;
            font-weight: 500;
        }

        nav a:hover {
            color: #0aad5c;
        }

        .auth-buttons button {
            border: none;
            padding: 6px 14px;
            margin-left: 8px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }

        .login-btn {
            background-color: white;
            border: 1px solid #0aad5c;
            color: #0aad5c;
        }

        .signup-btn {
            background-color: #0aad5c;
            color: white;
        }

        main {
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
        }

        h1 {
            color: #0aad5c;
        }

        h2 {
            margin-top: 30px;
            color: #333;
        }

        ul {
            margin-top: 10px;
        }

        ul li {
            margin-bottom: 8px;
        }

        footer {
            margin-top: 40px;
            padding: 20px;
            background-color: #f8f8f8;
            border-top: 1px solid #ddd;
            text-align: center;
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>

<header>
    <div class="logo">
        <!-- SVG Leaf Icon -->
        <svg viewBox="0 0 24 24" fill="#0aad5c" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8 6 2 8 2 14C2 19 6 22 12 22C18 22 22 18 22 12C22 6 18 2 12 2Z"/>
        </svg>
        GramConnect
    </div>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    <div class="auth-buttons">
        <button class="login-btn">Login</button>
        <button class="signup-btn">Sign Up</button>
    </div>
</header>

<main>
    <h1>About GramConnect</h1>
    <p>
        GramConnect is a revolutionary platform designed to bridge the gap between daily wage workers from farming 
        communities and farmers across India. Our mission is to create a sustainable ecosystem that benefits both 
        workers and farmers through technology.
    </p>

    <h2>Our Vision</h2>
    <p>
        To empower rural communities by providing equal opportunities for agricultural workers while helping farmers 
        find skilled and reliable labor for their farming needs.
    </p>

    <h2>How We Help</h2>
    <ul>
        <li>Connect skilled agricultural workers with farmers in need</li>
        <li>Provide transparent pricing and secure payment systems</li>
        <li>Enable direct communication between workers and farmers</li>
        <li>Offer flexible scheduling based on mutual availability</li>
        <li>Build trust through verified profiles and rating systems</li>
    </ul>

    <h2>Contact Us</h2>
    <p>Email: <a href="mailto:support@gramconnect.in">support@gramconnect.in</a></p>
    <p>Phone: +91-1800-GRAM-CONNECT</p>
    <p>Address: Agricultural Innovation Hub, New Delhi, India</p>
</main>

<footer>
    &copy; 2025 GramConnect. All rights reserved.
</footer>

</body>
</html>
