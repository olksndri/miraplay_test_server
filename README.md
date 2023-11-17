<h1>miraplay_test_server</h1>

<p><strong>Увага!</strong> При першому вході завантаження може тривати довго, оскільки сервер задеплоєний на сервісі render, і при довгій відсутності запитів деплой бекенду на render "засинає". 
Також, деплой може впасти, через внутрішні проблеми render. У разі виникнення таких проблем - пишіть / дзвоніть мені, щоб перезапустити деплой беку. </p>

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

<h2>Список використаних технологій</h2>
<ul>
  <li>JavaScipt</li>
  <li>NodeJS</li>
  <li>Express</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>Styled Components</li>
  <li>JWT</li>
  <li>Joi</li>
  <li>Other: nodemon, dotenv, bcryptjs (синхронний алгоритм шифрування), cors, eslint</li>
</ul>
