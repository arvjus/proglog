## Progress Logger - log progress of R/C model aircraft training.

Powered by [AngularJS](https://angularjs.org)


### License

The MIT License (MIT)

Copyright © 2015 Arvid Juskaitis <arvydas.juskaitis@gmail.com>


### Some of screenshots

Click to view.

[![New log record](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/log-thumb.png)](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/log.png)

[![Plain log records](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/list-thumb.png)](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/list.png)

[![Log statistics](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/stats-thumb.png)](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/stats.png)

[![Administration](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/admin-thumb.png)](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/admin.png)



### Prerequisites

* PHP >= 5.x
* Node.js, npm v2.5.x
* Apache 2 Web Server (optional)


### Installation

Clone repository, install dependencies
```bash
$ git clone https://github.com/arvjus/proglog.git
$ cd proglog
$ npm install
```

Go to 'app' directory, start built-in web server
```bash
$ (cd app; php -S localhost:8000)
```

Go to [http://localhost:8000](http://localhost:8000)


### Backend

Few PHP sripts serves as data providers for application. 
Log records are stored in .csv format, with '|' (pipe) character as field separator.


### Configuration

Configuration files have JSON format, there are two of them - models.json and exercises.json. Application comes with some pre-configured models and exercises, some of them based on training program, available in Heli-X flight simulator. But that is easy to change to suit your own needs.
Hint - duplicate last item, called 'dummy', and create new one in exercises configuration file. That item contains all available options, supported by application.
