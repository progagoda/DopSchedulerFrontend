import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
  component: LangSwitcher,
  title: 'LangSwitcher',
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Dark: Story = {
  args: {},
};
