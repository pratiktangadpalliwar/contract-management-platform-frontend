# Contract Management Platform

## Setup
npm install
npm start

## Docker
docker build -t contract-platform .
docker run -p 3000:80 contract-platform

## Architecture
React + Context API, LocalStorage persistence, Component based UI.

## Assumptions & Limitations
Frontend only, no backend, data stored in browser, simple positioning, no drag & drop.
