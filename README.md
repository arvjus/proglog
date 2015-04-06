## Progress Logger - application for logging progress of R/C model aircraft training.

Powered by [AngularJS](https://angularjs.org)


### License

The MIT License (MIT)

Copyright © 2015 Arvid Juskaitis <arvydas.juskaitis@gmail.com>


### Some of screenshots

Click to view.


https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/admin.png
https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/admin.png
https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/admin.png

[![New log record](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/log-thumb.png)](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/log.png)

[![Plain log records](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/list-thumb.png)](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/list.png)

[![Log statistics](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/stats-thumb.png)](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/stats.png)

[![Administration](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/admin-thumb.png)](https://raw.githubusercontent.com/arvjus/proglog/master/screenshots/admin.png)



### Prerequisites

* PHP >= 5.x
* Node.js, npm v2.5.x
* Apache 2 Web Server (optional)


### Installation


Setup
-----
Install dependencies:
cd /path/to/proglog
npm install

Run dev server:
nmp start

http://localhost:8000/app/index.html



Clone repository, install components
```bash
$ git clone https://github.com/arvjus/fintrack
$ cd fintrack
$ composer.phar install
```

Install database, configure in app/configure/database.php

Migrate database, seed test data
```bash
$ php artisan migrate:make
$ php artisan migrate:refresh
$ php db:seed
```

Optionally, run unitests
```bash
$ phpunit
```


Start built-in web server
```bash
$ php artisan serve
```

Go to [http://localhost:8000](http://localhost:8000) and login with admin/admin123


### Changelog

2014-05-17 Release Version 1.0




