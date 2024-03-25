import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import {Flex} from 'antd'

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary = {
  args: {
    open: true,
    children: 'Primary',
  },
};

export const Default = {
  args: {
    open: true,
    type: "default",
    children: 'Default'
  },
};
export const WithTest: Story = {
  args: {
    open: true,
    children: 'Welcome to testing Button!'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to testing Modal!/gi)).toBeTruthy();
  },
};
