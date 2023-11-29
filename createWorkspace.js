const { execSync } = require('child_process');
const { Command } = require('commander');
const { existsSync, mkdirSync, renameSync } = require('fs');
const { resolve } = require('path');
const replace = require('replace-in-file');

module.exports.init = () => {
  const program = new Command();

  program
    .name('create-react-yarn-workspace')
    .description('cli tool to create an empty workspace with react and other tools')
    .version('0.1.0');

  program
    .arguments('<domain>', 'domain to use for packages @mydomain/mypackage')
    .arguments('<appName>', 'app name will be the name of folder and the main react app')
    .option('--template <path-to-template>', 'specify a template for the created project')
    .action((domain, appName, { template = 'react-typescript' }) => {
      const cleanDomain = domain.replace('@', '');
      const targetDir = `./${appName}`;
      const templateSource = resolve(__dirname, `./templates/${template}`);

      if (!existsSync(targetDir)) {
        mkdirSync(targetDir);
      }

      execSync(`cp -r ${templateSource}/ ${targetDir}`);

      // update app name
      renameSync(`${targetDir}/apps/my-app`, `${targetDir}/apps/${appName}`);
      replace.sync({
        files: [`${targetDir}/**/*`],
        from: /@mydomain\/my-app/g,
        to: `@${cleanDomain}/${appName}`,
      });

      // update domain name everywhere else
      replace.sync({
        files: [`${targetDir}/**/*`],
        from: /@mydomain/g,
        to: `@${cleanDomain}`,
      });

      execSync(`cd ${targetDir}; yarn install`, { stdio: 'inherit' });
    });

  program.parse(process.argv);
};
