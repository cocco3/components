import React from 'react'

import PageLayoutRow from './PageLayoutRow'

import { Default as PageLayoutColumn } from '../PageLayoutColumn/PageLayoutColumn.stories'

export default {
  title: 'Example/PageLayoutRow',
  component: PageLayoutRow,
  argTypes: {
    grow: { control: 'boolean' }
  }
}

const Template = (args) => <PageLayoutRow {...args} />

export const Default = Template.bind({});
Default.args = {
  children: <PageLayoutColumn {...PageLayoutColumn.args} />,
  grow: false
}
