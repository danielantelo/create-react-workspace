import type { Meta, StoryObj } from '@storybook/react';
import { Sample } from './Sample';

export default {
  title: 'Components/Sample',
  component: Sample,
} as Meta<typeof Sample>;

export const Default: StoryObj<typeof Sample> = {
  args: {},
};
