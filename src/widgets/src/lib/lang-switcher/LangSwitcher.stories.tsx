import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
  component: LangSwitcher,
  title: 'LangSwitcher',
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to LangSwitcher!/gi)).toBeTruthy();
  },
};
