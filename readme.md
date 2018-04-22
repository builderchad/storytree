# Storytree

An editor for 'choose your adventure' style games.  This relies on several Firebase features.

***Note: This project is a prototype and uses a pre-release of Ionic 4.***

## Features to be included in first working version

- Simple text editor with multiple versioning of each page in the story
- List based editor for choices
- Mini-map for navigating quickly around the story
- Testing tool to check the integrity of the story
- Publish tool that outputs the story in JSON
- Import command line script allowing for JSON backups to be restored.

## Future plans include

- Plugin system allowing the addition of new game mechanics and editor components in support of those
- Map integration allowing for drawing and updating artifacts on an in-game map


## Getting Started

- Create an account on Firebase and follow the hosting documentation on how to publish your own instance which should create a .firebaserc file for you
- Deploy the app with the firebase command
- Set up firebase authentication
- Set up a firestore db

## Publishing

There is no game client available yet.  Publishing 

## Continuing development

This source was started from the Ionic Core (v4) PWA Starter Kit: https://github.com/ionic-team/ionic-pwa-toolkit

## Unit Tests

To run the unit tests once, run:

```bash
npm test
```

To run the unit tests and watch for file changes during development, run:

```bash
npm run test.watch
```
