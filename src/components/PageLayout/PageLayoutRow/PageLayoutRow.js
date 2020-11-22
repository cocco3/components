import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

import baseStyles from './styles'

const PageLayoutRow = ({
  children,
  className,
  grow,
  style,
}) => {
  const styles = baseStyles({ grow })

  return (
    <div
      className={className}
      css={css(styles.row)}
      style={style}
    >
      {children}
    </div>
  )
}

PageLayoutRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  grow: PropTypes.bool,
  style: PropTypes.shape({})
}

PageLayoutRow.defaultProps = {
  children: null,
  className: null,
  grow: false,
  style: null
}

export default PageLayoutRow
