const { execSync } = require('child_process');
const { Command } = require('commander');
const { existsSync, mkdirSync, renameSync } = require('fs');
const { copySync, emptyDirSync } = require('fs-extra');
const replace = require('replace-in-file');

module.exports.init = () => {
  const program = new Command();

  program
    .name('create-react-workspace')
    .description('cli tool to create an empty workspace with react and other tools')
    .version('0.1.0');

  program
    .command('init')
    .arguments('<domain>', 'domain to use for packages @mydomain/mypackage')
    .arguments('<appName>', 'app name will be the name of folder and the main react app')
    .option('--template <path-to-template>', 'specify a template for the created project')
    .action((domain, appName, { template }) => {
      const targetDir = `./${appName}`;
      const templateSource = `./templates/${template}`;
      if (!existsSync(targetDir)) {
        mkdirSync(targetDir);
      }
      emptyDirSync(targetDir);
      copySync(templateSource, targetDir, { filter: (src) => !src.includes('node_modules') });

      // update app name
      renameSync(`${targetDir}/apps/my-app`, `${targetDir}/apps/${appName}`);
      replace.sync({
        files: [`${targetDir}/**/*`],
        from: /@mydomain\/my-app/g,
        to: `@${domain}/${appName}`,
      });

      // update domain name everywhere else
      replace.sync({
        files: [`${targetDir}/**/*`],
        from: /@mydomain/g,
        to: `@${domain}`,
      });

      execSync(`cd ${targetDir}; yarn install`);
    });

  program.parse(process.argv);
};
