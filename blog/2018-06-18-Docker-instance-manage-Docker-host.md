---
slug: docker-instance-manage-docker-host
title: "Docker Instance Manage Docker Host"
date: 2018-06-18T14:49:14+02:00
draft: false
authors: frbayart
tags: [docker, ubuntu]
---

# How to connect on Docker host from a Docker instance

<!--truncate-->

By sharing `/var/run/docker.sock` we can easily control our Docker host from an instance, it can be helpful to deploy some test.

Run Ubuntu LTS Bionic (17.10) with volume `/var/run/docker.sock`:
```
docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock ubuntu:17.10
```

Install requiered dependencies, add GPG key and install Docker Community Edition (all this commands come from docs.docker.com)
```
apt update && apt-get install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository    "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) edge"
apt update && apt install -y docker-ce
```

Simple test to verify the configuration
`docker ps`

You should see your Docker host instances.