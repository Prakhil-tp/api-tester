# api-tester
A script for testing APIs by using two different test cases. 

  - Test case 1 - Asynchronously calling the API for provided limit of times.
  - Test case 2 - Synchronously calling the API for provided limit of times.
  - After all, it will generate a results.csv file
## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
      $sudo apt-get install -y nodejs

- #### Other Operating Systems

  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

  If the installation was successful, you should be able to run the following command.

      $ node --version
      v12.15.0

      $ npm --version
      6.14.2

  If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

      $ npm install npm -g

###

---

## Install

    $ git clone https://github.com/Prakhil-tp/api-tester.git
    $ cd api-tester
    $ npm install

## Configure app

```
  cp .env.example .env
```

Add `.env` file to the root directory. Then edit it with your settings.

## Running the script

```javascript
  $ npm start
```
