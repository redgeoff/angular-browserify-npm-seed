angular-browserify-npm-seed
====

[![Build Status](https://travis-ci.org/redgeoff/angular-browserify-npm-seed.svg)](https://travis-ci.org/redgeoff/angular-browserify-npm-seed)

A seed project that builds with npm and uses browserify, angularjs and istanbul. This project is based on [plugin-seed](https://github.com/pouchdb/plugin-seed), the great work by [Calvin Metcalf](https://github.com/calvinmetcalf) & [Nolan Lawson](https://github.com/nolanlawson).

Getting angular, browserify and code coverage to work together is tough! You can use this seed project to get started.

[Why use angular and browserify together?](https://blog.codecentric.de/en/2014/08/angularjs-browserify/)

Getting Started
---

  git clone https://github.com/redgeoff/angular-browserify-npm-seed
  npm install
  bower install


Examples:
---

[Bundle All](https://github.com/redgeoff/angular-browserify-npm-seed/blob/master/examples/bundleall)

[Bundle Lib](https://github.com/redgeoff/angular-browserify-npm-seed/blob/master/examples/bundlelib)

Demos:
---

[Bundle All](https://redgeoff.github.io/angular-browserify-npm-seed/examples/bundleall)

[Bundle Lib](https://redgeoff.github.io/angular-browserify-npm-seed/examples/bundlelib)

Tests
---

  npm run test

Tests & Coverage
---

  npm run coverage

Serve Test Coverage:
---

  npm run dev

then visit [http://127.0.0.1:8001/coverage/lcov-report](http://127.0.0.1:8001/coverage/lcov-report)

Run tests in a browser:
---

  npm run dev

then visit [http://127.0.0.1:8001/test](http://127.0.0.1:8001/test)

Run automated tests in a browser:
---

  npm run test-firefox

or

  npm run test-phantomjs

Serve Examples:
---

  npm run build

then visit [http://127.0.0.1:8001/examples](http://127.0.0.1:8001/examples)

[Contributing](CONTRIBUTING.md)
---

Why are you building with npm and not grunt, gulp, etc...?
---

The short anwser: I gave up trying to fit the square peg that is browserify into the round hole that is karma.

I came very close to getting browserify, grunt, karma and karma-coverage working together using [karma-browserify-preprocessor](https://github.com/afbobak/karma-browserify-preprocessor), check out [angular-browserify-seed](https://github.com/redgeoff/angular-browserify-seed). The problem is that karma-browserify-preprocessor appears to break when trying to add node packages that include other node packages. The more I tinkered with it and the larger my project got, the more difficulty I had.

I then resorted to formatting my modules so that they could be browserified for the final bundle, but tested without browserify, e.g.

    /* istanbul ignore next */
    if (typeof window === 'undefined' || !window._) { var _ = require('underscore'); }

    function Bar() {

      this.get = function () {
        return 'bar ' + _.size({ one: 1, two: 2, three: 3 });
      };

    }

    /* istanbul ignore next */
    if (typeof module !== 'undefined' && module.exports) { module.exports = Bar; }

But... this is just really ugly, especially when you add lots of dependencies. And, the other problem was that I then had to manually add dependencies to karma.conf.js and a number of shims--an even uglier mess.

I also tried using angular-browserify, angular-browserifast, karma-commonjs and with all of them I had the show stopping problem that they did not support code coverage. Maybe someone will solve this problem in the future, but for now, I'm tired of messing around with my build enviornment and am ready to just move on with a proven structure.

So, I said forget it and decided to go with technologies that I have seen working: [plugin-seed](https://github.com/pouchdb/plugin-seed).

Can things be improved? Ohhh yes, and I hope you'll help!


