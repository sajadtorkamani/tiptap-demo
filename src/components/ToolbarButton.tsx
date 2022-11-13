import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import classNames from 'classnames'

const ToolbarButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => <button {...props} className={classNames(className)} />

export default ToolbarButton
