import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
