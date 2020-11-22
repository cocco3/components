import React from 'react'

import PageLayoutColumn from './PageLayoutColumn'

export default {
  title: 'Example/PageLayoutColumn',
  component: PageLayoutColumn
}

const Template = (args) => <PageLayoutColumn {...args} />

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World!'
}
