import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Input/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};