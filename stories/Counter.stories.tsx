import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter } from '../components/Counter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Counter',
  component: Counter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Counter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};


