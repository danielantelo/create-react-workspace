import addStoryBookCommands from 'cypress-storybook-commands';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  failureThreshold: 0.005,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.1 },
  customDiffDir: 'cypress/__visual_diff_errors__',
  allowSizeMismatch: true,
});

addStoryBookCommands({
  version: 7,
  viewportPresets: {
    // see https://docs.cypress.io/api/commands/viewport.html#Arguments
    mobile: 'iphone-x',
    laptop: 'macbook-13',
  },
  registerSnapshotCommands: false, // we already include cypress-image-snapshot/command above
  preSnapshotFunc: () => {
  },
  postSnapshotFunc: () => {
    cy.get('#storybook-root').invoke('attr', 'style', 'display: inline-block');
  },
});
