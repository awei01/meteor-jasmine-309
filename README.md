# xolvio:meteor-jasmine Issue 309 #

Repository to help illustrate issue detailed in https://github.com/xolvio/meteor-jasmine/issues/309.

## How to reproduce ##

1. Clone this repository
2. cd into this repository's folder
3. run `source run-tests.sh`. (may need to `chmod` `run-tests.sh` so it's executable)
4. Open your browser to `http://localhost:3000`
5. All your `Foo` tests should pass.
6. Make any edit in `packages/bar/packages.js`.
7. The `Foo` tests now fail. 
8. Refresh browser and `Foo` tests pass.
9. Repeat 6-8.
