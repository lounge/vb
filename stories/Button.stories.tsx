import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: 'secondary',
  label: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  style: 'ghost',
  label: 'Button',
};

export const Bare = Template.bind({});
Bare.args = {
  style: 'bare',
  label: 'Button',
};
 