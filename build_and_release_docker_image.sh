#!/bin/bash

TAG="$1"
if [ -z "$TAG" ] ; then
    echo "[-] TAG is required."
    exit 1
fi

REGISTRY="$2"
if [ -z "$REGISTRY" ] ; then
    echo "[-] REGISTRY is required."
    exit 1
fi

IMAGE_NAME="wpctf-website-2023:$TAG"

podman build --file Dockerfile --tag "$IMAGE_NAME" .
podman push "$IMAGE_NAME" "$REGISTRY/$IMAGE_NAME"
