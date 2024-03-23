import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Header!/gi)).toBeTruthy();
  },
};