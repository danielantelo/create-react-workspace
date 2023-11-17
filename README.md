# Create React Workspaces

Create a React application workspace with minimal effort.

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
npx create-react-workspaces @mydomain myapp --template=yarn-react-typescript  
```