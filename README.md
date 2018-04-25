## Installing dependecies

First step to run this project locally is to install the dependecies, so run:
`npm install`

Important => This project was builded with Node on version 8.11.1 and npm 5.6.0! So if there's any conflict with node version,
please bear in mind that you might need to use these specifieds versions in order to run it locally. Thanks! 


## Development local server

Run `npm start` for a dev server. The app will automatically open the browser on the host: `http://localhost:4200`
It does need a proxy config file that is on root folder, the proxy is to avoid CORS on GitHub API. The file is already there,
so if you want to check how it is setup you can see the `proxy.conf.json` file.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Live version

There's a live version of this app that uses a NodeJs application as a proxy hosted on heroku.
The link for the live version is: https://git-list.firebaseapp.com