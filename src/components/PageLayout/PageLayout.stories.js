import React from 'react';

import PageLayout from './PageLayout'

import { Default as PageLayoutRow } from './PageLayoutRow/PageLayoutRow.stories'

export default {
  title: 'Example/PageLayout',
  component: PageLayout,
  subcomponents: {
    'PageLayout.Row': PageLayout.Row,
    'PageLayout.Column': PageLayout.Column
  }
}

const Template = (args) => <PageLayout {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <PageLayoutRow {...PageLayoutRow.args} />,
}
