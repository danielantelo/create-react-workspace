# Create React Workspaces

Create a React application within a mono repository using workspaces with mininal effort.

The workspace allows you to compose your application(s) from independently versionable packages (components, utils, apis, etc). It also includes some great development tools pre-configured such as elint, jest with react testing library, storybook and cypress.

The structure looks something like:

```
|- apps/
|   |- myapp/ -> main react app
|- devtools/
|   |- storybook/
|   |- cypress/
|- packages/
|   |- apis/
|   |- components/
|   |- utils/
```

## Installation

```
npx create-react-yarn-workspace @mydomain myapp
```

Default template will be `react-typescript`, which is basic clientside only react app.

Other templates available are:

- `react`: same as above but without typescript
- `nextjs-typescript`: similar to the defaul but with the main app being nextjs based

To use a template simply run the script with the template arg:

```
npx create-react-yarn-workspace @mydomain myapp --template=react
```


Then within your newly created directory, you can start the app with `yarn start` and storybook with `yarn storybook`.

## Scripts

- `yarn lint`: lints your entire codespace
- `yarn typecheck`: runs type checks
- `yarn test`: runs jest+react-testing-library unit tests
- `yarn storybook`: opens storybook