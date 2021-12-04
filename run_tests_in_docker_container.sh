docker build --rm -t comp.se.200-test-suite:latest "."

docker run --rm comp.se.200-test-suite \
    --it \
    --name test_suite_container

# # If we would want to make volume-bind between container and host system
# # Check working directory and host system specifics
# docker run --rm comp.se.200-test-suite \
#     --it \
#     --name test_suite_container \
#     --mount type=bind,source="{pwd}/coverage,target=/test_suite/coverage sleep 5000
