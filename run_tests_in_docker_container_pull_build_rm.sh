# This script will 
# - build latest node image
# - build docker image from it
# - run the image as container
# - after exit remove that container
# docker build --rm --pull -t comp.se.200-test-js-library:latest "." \
#     && docker run --rm comp.se.200-test-js-library \
#     && docker rmi comp.se.200-test-js-library

docker build --rm --pull -t comp.se.200-test-suite:latest "."

docker run --rm comp.se.200-test-suite --it --name test_suite_container

docker rmi comp.se.200-test-suite
