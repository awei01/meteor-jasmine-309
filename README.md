# xolvio:meteor-jasmine Issue 309 #

Repository to help illustrate issue detailed in https://github.com/xolvio/meteor-jasmine/issues/309.

## How to reproduce ##

1. Clone this repository
1. cd into this repository's folder
1. run `source run-tests.sh`. (may need to `chmod` `run-tests.sh` so it's executable)
1. Open your browser to `http://localhost:3000`
1. All your `Foo` tests should pass.
1. Make any edit in `packages/bar/packages.js`.
1. The `Foo` tests now fail.
