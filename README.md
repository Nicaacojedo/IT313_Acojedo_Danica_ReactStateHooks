# Lab 5 – Lab Timer & Practice Tracker

## Problem

This application is a simple Lab Timer & Practice Tracker for React Native practice. It allows the user to track how many practice problems have been solved while also monitoring the amount of time spent practicing.

## Approach

The application uses React Native with Expo and TypeScript.

The `LabScreen` component manages the main state of the application. The `PracticeTracker` component displays the solved count and provides the Solve +1 and Reset buttons.

A custom `useStopwatch` hook manages the stopwatch using `useEffect` and `setInterval`. The timer increases every second while it is running and stops when the user presses Stop.

The Reset button resets the solved-problem counter without stopping the stopwatch.

A **“Great job!”** message appears when the solved count reaches 5.

## How to Run

1. Open the project folder in Visual Studio Code.
2. Open the terminal in the project folder.
3. Install the project dependencies:

```bash
npm install
```

4. Start the Expo development server:

```bash
npx expo start
```

5. Open Expo Go on your mobile device.
6. Scan the QR code displayed by Expo.
7. Make sure your phone and computer are connected to the same network.

The application should then open in Expo Go.

## Main Features

- Solve +1 button
- Reset solved count
- Start stopwatch
- Stop stopwatch
- Resume stopwatch
- “Great job!” message when 5 problems are solved
- Reset counter without stopping the stopwatch
