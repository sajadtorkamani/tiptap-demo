import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean
}

const ToolbarButton: React.FC<Props> = ({
  className,
  isActive = false,
  ...props
}) => {
  const defaultClasses = 'border px-2 py-1 border-black mr-3'

  return (
    <button
      {...props}
      className={classNames(
        { 'bg-black text-white': isActive },
        defaultClasses,
        className
      )}
    />
  )
}

export default ToolbarButton
