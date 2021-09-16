# football-team-management-api

This is an api that is responsible for managing football teams and football players.

## User story

As a football manager, I want to be able to manage my football team and players. I would like to be able to fetch player details and also link football teams to stadiums.

## Usability

Currently this application can be used locally, by following the below instructions.

## Goals

- [x] Valuable git history
- [x] Basic Unit Tests
- [x] DB Design diagram
- [x] Create football a player or players with metadata
- [x] Create a football team with metadata
- [x] Add football players to a team
- [x] Transfer football players between teams
- [x] Link a football team to a stadium
- [x] Fetch football player details

## Run Locally

Clone the project

```bash
  git clone https://github.com/Sibabalwe-Qamata/football-team-management-api.git
```

Go to the project directory

```bash
  cd football-team-management-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Player Endpoints

#### Create a player

```http
  POST /players/create
```

##### Headers

| Key            | Value              | Description   |
| :------------- | :----------------- | :------------ |
| `Content-type` | `application-json` | **Required**  |
| `Accept`       | `application-json` | **Required**. |

##### Example Payload

```
{
	"team_id": 546516,
	"name": "Leaonado",
	"surname": "Messi",
	"height": 123,
	"position": 7
}
```

##### Response

```
{
  "player_id": "Z9lak8ZOXUaGnDpjFUnyQ3l3bil9FWsi",
  "team_id": 546516,
  "name": "Leaonado",
  "surname": "Messi",
  "height": 123,
  "position": 7
}
```

#### Get a player

```http
  GET /players/:{player_id}
```

##### Headers

| Key            | Value              | Description   |
| :------------- | :----------------- | :------------ |
| `Content-type` | `application-json` | **Required**  |
| `Accept`       | `application-json` | **Required**. |

##### Example Payload

```
{
	"team_id": 546516,
	"name": "Leaonado",
	"surname": "Messi",
	"height": 123,
	"position": 7
}
```

##### Example Response

```
{
	"team_id": 546516,
	"name": "Leaonado",
	"surname": "Messi",
	"height": 123,
	"position": 7
}
```

#### Create multiple players for the same team

```http
  POST /players/create/many
```

##### Headers

| Key            | Value              | Description   |
| :------------- | :----------------- | :------------ |
| `Content-type` | `application-json` | **Required**  |
| `Accept`       | `application-json` | **Required**. |

##### Example Payload

```
{
	"team_id": 546516,
	"players": [

		{
			"name": "Leaonado",
			"surname": "Messi",
			"height": 123,
			"position": 7
		},
		{
			"name": "Kat",
			"surname": "Mea",
			"height": 189,
			"position": 2
		},
		{
			"name": "Sizwe",
			"surname": "Moit",
			"height": 196,
			"position": 4
		}
	]
}
```

#### Edit player details

```http
  PATCH /players/:{player_id}/edit
```

##### Headers

| Key            | Value              | Description   |
| :------------- | :----------------- | :------------ |
| `Content-type` | `application-json` | **Required**  |
| `Accept`       | `application-json` | **Required**. |

##### Example Payload

```
{
	"name": "Leaonado",
	"surname": "Messi",
	"height": 123,
	"position": 7
}

```

##### Example Response

```

{
	"player_id": "Z9lak8ZOXUaGnDpjFUnyQ3l3bil9FWsi",
	"team_id": 546516,
	"name": "Leaonado",
	"surname": "Messi",
	"height": 123,
	"position": 7
}

```

#### Edit player team details (Transfer playe to another team)

```http
  PATCH /players/:{player_id}/edit/team
```

##### Headers

| Key            | Value              | Description   |
| :------------- | :----------------- | :------------ |
| `Content-type` | `application-json` | **Required**  |
| `Accept`       | `application-json` | **Required**. |

##### Example Payload

```
{
	"team_id": "546517",
}

```

##### Example Response

```

{
	"player_id": "Z9lak8ZOXUaGnDpjFUnyQ3l3bil9FWsi",
	"team_id": 546517,
	"name": "Leaonado",
	"surname": "Messi",
	"height": 123,
	"position": 7
}

```

## Team Endpoints

#### Create a team

```http
  POST /teams/create
```

##### Headers

| Key            | Value              | Description   |
| :------------- | :----------------- | :------------ |
| `Content-type` | `application-json` | **Required**  |
| `Accept`       | `application-json` | **Required**. |

##### Example Payload

```
{
	"stadium_id": 152,
	"team": {
		"name": "Bafana Bafana",
		"location": "South Africa",
		"headcoach": "Hugo Broos",
		"founded": "1991-06-11T14:15:48+02:00"
	}
}
```

##### Response

```
{
	"team_id": 420084,
	"name": "Bafana Bafana",
	"location": "South Africa",
	"headcoach": "Hugo Broos",
	"founded": "1991-06-11T14:15:48+02:00"
}
```

#### Link a team with a stadium

```http
  PATCH /teams/link/:team_id/stadium/:stadium_id
```

##### Headers

| Key            | Value              | Description   |
| :------------- | :----------------- | :------------ |
| `Content-type` | `application-json` | **Required**  |
| `Accept`       | `application-json` | **Required**. |

##### Example Payload

```
None
```

##### Response

```
{
	"team_id": 546516,
	"stadium_id": 120,
	"name": "Bafana Bafana",
	"location": "South Africa",
	"headcoach": "Hugo Broos",
	"founded": "1991-06-11T14:15:48+02:00"
}
```

## ER Diagram

[DB-Design-diagram](https://lucid.app/lucidchart/cef46ff3-3099-4095-abbf-d030a480be1b/view?page=0_0#)

## Documentation / Report

[Documentation](https://docs.google.com/document/d/1dpw2FDltt2I7qjhMA0qVmbLEnlHXmLhWlUJ9yAFl1gA/edit?usp=sharing)

## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [Lucid chart tool](https://lucid.app/)
- [Clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Mockaroo](https://www.mockaroo.com/)
- [Guide to set up Typescript (Nodejs) projects](https://ultimatecourses.com/blog/setup-typescript-nodejs-express)

## Appendix

Any additional information goes here
