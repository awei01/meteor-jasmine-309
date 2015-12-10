#!/bin/bash
export VELOCITY_TEST_PACKAGES=1
meteor test-packages --driver-package velocity:html-reporter foo
#meteor test-packages --driver-package velocity:html-reporter foo bar
