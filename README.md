# goreactapp

[![Go Report Card](https://goreportcard.com/badge/github.com/josephspurrier/goreactapp)](https://goreportcard.com/report/github.com/josephspurrier/goreactapp)
[![Build Status](https://travis-ci.org/josephspurrier/goreactapp.svg)](https://travis-ci.org/josephspurrier/goreactapp)
[![Coverage Status](https://coveralls.io/repos/github/josephspurrier/goreactapp/badge.svg?branch=master&timestamp=20200313-01)](https://coveralls.io/github/josephspurrier/goreactapp?branch=master)

[![Swagger Validator](https://online.swagger.io/validator?url=https://raw.githubusercontent.com/josephspurrier/goreactapp/master/src/app/ui/static/swagger.json)](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/josephspurrier/goreactapp/master/src/app/ui/static/swagger.json)

This is a sample notepad application that uses React on the front-end (UI) and Go on the back-end (API). This project is designed to show good development and CI/CD practices as well as integrations between modern development tools.

This project uses a [Makefile](Makefile) to centralize frequently used commands. The code coverage badge above is only for the back-end API - not the front-end.

![Demo gif](https://user-images.githubusercontent.com/2394539/76177148-ac753e00-6189-11ea-963b-bff38b29e8ed.gif)

## Quick Start with Docker Compose

To test the application locally, you can follow these [instructions](https://josephspurrier.github.io/goreactapp/docs/tutorial/run-locally). You don't need any of the the dev tools (Go/npm) installed, you only need Docker (and Docker Compose). The Go application serves both the UI and the API depending on the request URL.

## Additional Documentation

Below are links to various section of the documentation.

- [Environment Preparation](https://josephspurrier.github.io/goreactapp/docs/tutorial/env-prep)
- [Database](https://josephspurrier.github.io/goreactapp/docs/database)
- [Front-End](https://josephspurrier.github.io/goreactapp/docs/front-end)
- [Back-End](https://josephspurrier.github.io/goreactapp/docs/back-end)
- [Swagger](https://josephspurrier.github.io/goreactapp/docs/swagger)
- [Docker Compose](https://josephspurrier.github.io/goreactapp/docs/docker-compose)
- [Documentation](https://josephspurrier.github.io/goreactapp/docs/documentation)