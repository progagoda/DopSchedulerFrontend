import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { Shell } from './Shell';

const meta: Meta<typeof Shell> = {
  component: Shell,
  title: 'Shell',
};
export default meta;
type Story = StoryObj<typeof Shell>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Shell!/gi)).toBeTruthy();
  },
};