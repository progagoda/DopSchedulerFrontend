import type { Meta, StoryObj } from '@storybook/react';
import { AppRouter } from './AppRouter';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AppRouter> = {
  component: AppRouter,
  title: 'AppRouter',
};
export default meta;
type Story = StoryObj<typeof AppRouter>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AppRouter!/gi)).toBeTruthy();
  },
};
