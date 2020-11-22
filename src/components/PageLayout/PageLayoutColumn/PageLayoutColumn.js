import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

import baseStyles from './styles'

const PageLayoutColumn = ({
  children,
  className,
  grow,
  style,
}) => {
  const styles = baseStyles({ grow })

  return (
    <div
      className={className}
      css={css(styles.column)}
      style={style}
    >
      {children}
    </div>
  )
}

PageLayoutColumn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  grow: PropTypes.bool,
  style: PropTypes.shape({})
}

PageLayoutColumn.defaultProps = {
  children: null,
  className: null,
  grow: false,
  style: null
}

export default PageLayoutColumn
