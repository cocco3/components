import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

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

export default PageLayout
