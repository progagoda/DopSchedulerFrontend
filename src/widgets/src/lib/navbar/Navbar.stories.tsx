import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Navbar',
};
export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Navbar!/gi)).toBeTruthy();
  },
};