# curso-asincronismo-js
This course provides knoledges about the asynchronism in javascript, using fetch for the consumption of APIs


## Overview

The course is divided in the following sections:

1. Callbacks
2. Promises
3. Async/Await
4. Consuming APIs with Fetch

The project of the course is a web page that consumes the API for football stats, it is possible to search for a team and see the statistics of the team, the players and the matches.


## Table of Contents

- [curso-asincronismo-js](#curso-asincronismo-js)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Api Endpoints](#api-endpoints)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [License](#license)


## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/AndresDiagoM/curso-asincronismo-js
2. Navigate to the project folder:
   ```bash
   cd curso-asincronismo-js
   ```
3. Install the dependencies:
   ```bash
    npm install
    ```
4. Open your browser and go to http://localhost:3000

The project is using Bootstrap 5, so you can see the documentation in the following link:

https://getbootstrap.com/docs/5.3

The project use bootstrap icons, you can see the documentation in the following link:

https://icons.getbootstrap.com/?q=face#usage

So remember to install using npm and add the following line in the head of the styles.css file:

```bash
npm i bootstrap@5.3.2
npm install bootstrap-icons
```
```

```css
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css");
```


## Usage

It is not necessary to use a server, with the live server of Visual Studio Code it is enough, but if you want to use a server, you can use the following command:

```bash
npm install -g live-server
```



## Api Endpoints

For using the API, it is necessary to use the API key, for this you can create an account in the following link:

https://highlightly.net/

Once you have an account, the website will give you code snippets to use the API, you can use the following code:

```bash
const url = 'https://sport-highlights-api.p.rapidapi.com/football/countries?name=France';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'xxxxxxxxxxxxxx--xxxxxxxxxx',
		'X-RapidAPI-Host': 'xxxxxxxxxxxxxx'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
```

| Endpoint | HTTP Method | CRUD Method | Result |
| -------- | ----------- | ----------- | ------ |
| /titles | GET | READ | get all movies | 
| /titles/:id | GET | READ | get a single movie |
| /titles/similars | GET |  READ | get similar series |




## Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Bootstrap.com][Bootstrap.com]][Bootstrap-url]
* [![JavaScript.com][JavaScript.com]][JavaScript-url]



## Contributing

If you find any mistakes or have suggestions for improvement, please feel free to create an issue or pull request. If you create a pull request, I'll do my best to respond in a timely manner.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/AndresDiagoM/my-store/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/nicolaschicaiza/pet_location/tree/develop
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/AndresDiagoM/my-store
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/AndresDiagoM/my-store/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/andres-felipe-diago-matta/
[product-screenshot]: src/assets/images/screenshot.png


[NodeJS.org]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white (NodeJS.org)
[NodeJS-url]: https://nodejs.org/es/ (NodeJS.org)

[Docker.com]: https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white (Docker.com)
[Docker-url]: https://www.docker.com/ (Docker.com)

[PostgreSQL.org]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white (PostgreSQL.org)
[PostgreSQL-url]: https://www.postgresql.org/ (PostgreSQL.org)

[Sequelize.org]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white (Sequelize.org)
[Sequelize-url]: https://sequelize.org/ (Sequelize.org)

[ExpressJS.com]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge (ExpressJS.com)
[ExpressJS-url]: https://expressjs.com/ (ExpressJS.com)

[JWT.io]: https://img.shields.io/badge/JSON%20Web%20Tokens-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white (JWT.io)
[JWT-url]: https://jwt.io/ (JWT.io)

[PassportJS.com]: https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=white (PassportJS.com)
[PassportJS-url]: http://www.passportjs.org/ (PassportJS.com)

[Vercel.com]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white (Vercel.com)
[Vercel-url]: https://vercel.com/ (Vercel.com)

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white (Bootstrap.com)
[Bootstrap-url]: https://getbootstrap.com/ (Bootstrap.com)

[JavaScript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black (JavaScript.com)
[JavaScript-url]: https://www.javascript.com/ (JavaScript.com)