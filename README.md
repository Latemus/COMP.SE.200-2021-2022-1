[![Build Status](https://app.travis-ci.com/Latemus/COMP.SE.200-2021-2022-1.svg?branch=main)](https://app.travis-ci.com/Latemus/COMP.SE.200-2021-2022-1) [![Coverage Status](https://coveralls.io/repos/github/Latemus/COMP.SE.200-2021-2022-1/badge.svg?branch=main)](https://coveralls.io/github/Latemus/COMP.SE.200-2021-2022-1?branch=main)

# COMP.SE.200-2021-2022-1

## How to run locally with npm
- Copy repository
- Check that npm is installed with command `npm --version`
- Run `npm install`
- Run `npm run test`

Test coverage report is generated to ./coverage folder. Open ./coverage/lcov-report/index.html in any browser to see it.

## How to run with docker
- Check that docker is installed with command `docker --version`
- Run script `./run_tests_in_docker_container.sh`
- If you want to make sure that the image and container are built with fresh node image and their container and image is removed afterwards, run script `./run_tests_in_docker_container_pull_build_rm.sh`
Test results are shown in the console.

## Other resources
- Test report can be found from test_report.pdf or test_report.docx
- Travis CI pipeline page: https://app.travis-ci.com/github/Latemus/COMP.SE.200-2021-2022-1
- Coveralls coverage raport page: https://coveralls.io/github/Latemus/COMP.SE.200-2021-2022-1