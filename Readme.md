# Project "Artemis"

<img src="http://img12.deviantart.net/fb21/i/2010/336/a/d/artemis_bas_relief_lineart_by_nightowl70-d342q0q.jpg" width="200">

[![Build Status](https://travis-ci.org/TheInteract/collector.svg?branch=master)](https://travis-ci.org/TheInteract/collector)
[![Dependency Status](https://gemnasium.com/badges/github.com/TheInteract/collector.svg)](https://gemnasium.com/github.com/TheInteract/collector)
[![Coverage Status](https://coveralls.io/repos/github/TheInteract/collector/badge.svg)](https://coveralls.io/github/TheInteract/collector)

Collector is a part of TheInteract project which is tracking user behavior based on javascript es6.

## Prerequisite
1. Nodejs __~6.9.x__
2. Docker __^1.6.x__

## Getting Started 
> for demo and dev environment

1. `npm install` - installation required dependency
2. `npm build` - build js bundle for client side
3. `npm run start:w` - start server side and docker for development __(!do not close this window)__
4. execute scripts for initiate demo data on mongodb (__or__ execute `init.sh`)
    - `docker exec -it interact-mongo mongo` - run mongo command on mongo container
    - `use interact` - switch to interact db
    - `db.user.insert({ hostname: 'localhost', uid: 'IC9-55938-5' })` - insert initiate data to `user` collection
    - `exit`- exit from mongo command
5. `npm run example` - start demo page 
    - access to demo page with `localhost:9999`
    - __do not close this window__
    
## Additional Command
- `npm run test:w` - run test environment and watch a file in directory
- `npm run build:w` - build js bundle for client side and watch file in client directory
- `npm run stats:prod` - create webpack analysis file with production environment

### Command Directory
#### Root Directory
- `lint`
- `test`
- `test:w`
- `example`
- `coverage`

#### Client Directory
- `build`
- `build:prod`
- `stats`
- `stats:prod`

#### Server Directory
- `start`
- `start:w`
- `docker:pull`
- `docker`