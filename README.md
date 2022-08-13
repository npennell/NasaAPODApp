# NASA APOD App

### Author: Nichol Pennell

&nbsp;

## How to run

This project uses Expo and Expo Go to run the app.

You will need to download Expo Go on a device (the project was built and tested on an iPhone 11)

1. Pull the project.
2. In the project folder, run `npm start`.
3. The expo server will start and provide a QR code that is used to run the app in Expo Go. Use your camera (iPhone) or the Expo Go app to scan the QR code.
4. The app will be running in Expo Go to use.

Note:

- You may need to download the Expo CLI to run the project
  - It can be downloaded by using `npm install --global expo-cli`
  - If any other issues with Expo [this post from Medium](https://medium.com/@webcore1/how-run-expo-for-react-native-on-your-ios-device-and-first-impressions-49882c38763d) should help
- You may also need to update npm to use the expo CLI
  - It can be updated using `npm install -g npm`

&nbsp;

## Assumptions/Design

- The dates entered will be in the right format to form a date (YYYY-MM-DD)
- There may be more space at the top of the app for some devices as this was designed on an iPhone with a nop notch
