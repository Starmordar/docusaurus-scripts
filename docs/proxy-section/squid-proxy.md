---
description: Squid proxy setup and overview
---

## Set Up Squid Proxy for Private Connections (Ubuntu 20)

![Header Image](../../static/img/intro-to-cloud.d49bc5f7.jpeg)

### Introduction

Proxy servers are a type of server application that functions as a gateway between an end user and an internet resource. Through a proxy server, an end user is able to control and monitor their web traffic for a wide variety of purposes, including privacy, security, and caching. For example, you can use a proxy server to make web requests from a different IP address than your own. You can also use a proxy server to research how the web is served differently from one jurisdiction to the next, or avoid some methods of surveillance or web traffic throttling.

Squid is a stable, popular, open-source HTTP proxy. In this tutorial, you will be installing and configuring Squid to provide an HTTP proxy on a Ubuntu 20.04 server.

### Step 1 — Installing Squid Proxy

Squid has many use cases beyond routing an individual user’s outbound traffic. In the context of large-scale server deployments, it can be used as a distributed caching mechanism, a load balancer, or another component of a routing stack. However, some methods of horizontally scaling server traffic that would typically have involved a proxy server have been surpassed in popularity by containerization frameworks such as Kubernetes, which distribute more components of an application. At the same time, using proxy servers to redirect web requests as an individual user has become increasingly popular for protecting your privacy. This is helpful to keep in mind when working with open-source proxy servers which may appear to have many dozens of features in a lower-priority maintenance mode. The use cases for a proxy have changed over time, but the fundamental technology has not.

Begin by running the following commands as a non-root user to update your package listings and install Squid Proxy:

```bash
sudo apt update
sudo apt install squid
```

## Only h2 and h3 will be in the TOC by default.

You can configure the TOC heading levels either per-document or in the theme configuration.

The headers are well-spaced so that the hierarchy is clear.

- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times

## Custom ID headers {#custom-id}

With `{#custom-id}` syntax you can set your own header ID.
