docker build --rm -t comp.se.200-test-suite:latest "."

docker run --rm comp.se.200-test-suite \
    --it \
    --name test_suite_container

# # If we would want to make volume-bind between container and host system
# docker run --rm comp.se.200-test-suite \
#     --it \
#     --name test_suite_container \
#     --mount type=bind,source=/home/lv/OpinnotLocal/testikurssi/COMP.SE.200-2021-2022-1/coverage,target=/test_suite/coverage sleep 5000
