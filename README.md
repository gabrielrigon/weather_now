# Weather Now (Beta)
> A simple app to query current weather, based on OpenWeatherMap.

## Configuration

- Rails master key: `06c8a6f73e675bc850f9e750851f7bcb`

## Evironment dependencies
- Ruby = 2.6.3
- Node >= 10.15.3
- Yarn >= 1.16.0
- PostgreSQL = 11.3

## How to set up this project
1. Clone this repo.
2. Create a file named as `master.key`, which should be localized into `/config` folder.
3. Duplicate the file `database.yml.sample`, localized on folder `/config`, and name it as `database.yml`.
4. On this file (`database.yml`), insert your Postgres configuration.
5. Install the dependencies following these commands:
```sh
  $ bundle
  $ yarn
```
6. Create the database:
```sh
  $ rails db:create
```

## How to run (in development mode) this project
1. After set up, you need to run webpack dev server (in another window):
```sh
  $ ./bin/webpack-dev-server
```
2. Then, finally, run Rails server:
```sh
  $ rails s -p 3000
```