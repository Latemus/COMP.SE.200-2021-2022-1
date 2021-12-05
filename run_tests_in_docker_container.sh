# This script will 
# - build latest node image
# - build docker image from it
# - run the image as container

docker build --rm -t comp.se.200-test-suite:latest "."

docker run --rm comp.se.200-test-suite --it --name test_suite_container