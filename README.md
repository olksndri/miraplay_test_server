<h1>miraplay_test_server</h1>
<p>Base url: <strong>https://miraplay-test-server-p2yu.onrender.com</strong> </p>

<h2>Endpoints:</h2>
<ul>
<li>
  <p>Authenticate: GET /auth </p>
  <p>Special header. Authorization: Bearer Token </p>
</li>
<li>
  <p>Sign in: POST /auth/signin</p>
  <p>Request body: 
  {
    "email": "example@mail.com", 
    "password": "examplePassword123456789"
  }
  </p>
</li>
<li>
  <p>Sign up: POST /auth/signup</p>
  <p>Request body: 
  {
    "email": "example@mail.com", 
    "password": "examplePassword123456789"
  }
  </p>
</li>
</ul>
