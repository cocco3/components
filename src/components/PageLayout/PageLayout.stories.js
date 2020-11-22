import React from 'react';

import PageLayout from './PageLayout'

export default {
  title: 'Example/PageLayout',
  component: PageLayout,
  argTypes: {
    children: { control: 'text' },
  },
}

const Template = (args) => <PageLayout {...args} />

export const Default = Template.bind({})
