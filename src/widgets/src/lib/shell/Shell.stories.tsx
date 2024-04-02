import type { Meta, StoryObj } from '@storybook/react';

import { Shell } from './Shell';

const meta: Meta<typeof Shell> = {
  component: Shell,
  title: 'Shell',
};
export default meta;
type Story = StoryObj<typeof Shell>;

export const Dark: Story = {
  args: {},
};
