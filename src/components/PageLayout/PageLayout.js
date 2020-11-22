import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

import PageLayoutColumn from './PageLayoutColumn'
import PageLayoutRow from './PageLayoutRow'

import baseStyles from './styles'

const PageLayout = ({
  children,
  windowMaxHeight,
  windowMinHeight
}) => {
  const styles = baseStyles({ windowMaxHeight, windowMinHeight })

  return (
    <div css={css(styles.outer)}>
      <div css={css(styles.inner)}>
        {children}
      </div>
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  windowMaxHeight: PropTypes.bool,
  windowMinHeight: PropTypes.bool
}

PageLayout.defaultProps = {
  children: null,
  windowMaxHeight: false,
  windowMinHeight: false
}

PageLayout.displayName = 'PageLayout'

PageLayout.Column = PageLayoutColumn
PageLayout.Row = PageLayoutRow

export default PageLayout
