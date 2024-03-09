import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import {Flex} from 'antd'
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    type: "primary",
    children: 'Primary',
  },
};

export const Default = {
  args: {
    type: "default",
    children: 'Default'
  },
};
export const WithTest: Story = {
  args: {
    children: 'Welcome to testing Button!'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to testing Button!/gi)).toBeTruthy();
  },
};
