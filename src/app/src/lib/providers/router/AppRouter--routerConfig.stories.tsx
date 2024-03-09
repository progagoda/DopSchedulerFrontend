import type { Meta, StoryObj } from '@storybook/react';
import { routerConfig } from './AppRouter';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof routerConfig> = {
  component: routerConfig,
  title: 'routerConfig',
};
export default meta;
type Story = StoryObj<typeof routerConfig>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to routerConfig!/gi)).toBeTruthy();
  },
};
