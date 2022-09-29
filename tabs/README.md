## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- An M365 account. If you do not have M365 account, apply one from [M365 developer program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)
- [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) version after 4.0.0 or [TeamsFx CLI](https://aka.ms/teamsfx-cli)

## Required Installations
- First of all, run the command `npm i` or `npm install` in order to install all the required dependencies (all specified in package.json file)

## Component creation
All the components are allocated under `tabs\src\components`.
To create any component, follow these steps:
- Create the folder with the name of the component in `tabs\src\components`.
- Add the files `ComponentName.tsx` and `index.tsx` following the same structure the current components have.

If you are creating a gropu of components of the same type (such as `tabs\src\components\Dialogs`), create the container folder with the components inside that parent folder.

## Debug

- From Visual Studio Code: Start debugging the project by hitting the `F5` key in Visual Studio Code.
- Alternatively use the `Run and Debug Activity Panel` in Visual Studio Code and click the `Run and Debug` green arrow button.
- From TeamsFx CLI: Start debugging the project by executing the command `teamsfx preview --local` in your project directory.
