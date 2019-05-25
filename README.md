# Weather Now (Beta)
> A simple app to query current weather, based on OpenWeatherMap.

## Configuration

- Rails master key: `06c8a6f73e675bc850f9e750851f7bcb`

## Environment dependencies
- Ruby = 2.6.3
- Node >= 10.15.3
- Yarn >= 1.16.0
- PostgreSQL = 11.3

## How to set up this project
1. Clone this repo.
2. Create a file named as `master.key`, which should be localized into `/config` folder.
3. Duplicate the file `database.yml.sample`, localized on folder `/config`, name it as `database.yml` and insert your Postgres configuration.
4. Duplicate the file `.env.sample`, localized on root path and name it as `.env.development`, complete the parameters.
5. Duplicate the file `env.js.sample`, localized on folder `/app/javascript/src/config`, name it as `env.js` and complete the parameters.
6. Install the dependencies following these commands:
```sh
  $ bundle
  $ yarn
```
7. Create the database:
```sh
  $ rails db:create
```
8. Enable development mode cache:
```sh
  $ rails dev:cache
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

## Extra information
- If you don't have an OpenWeatherMap `appid`, you can create one by accessing this guide: https://openweathermap.org/guide.