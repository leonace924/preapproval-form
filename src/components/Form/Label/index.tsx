import { type HTMLProps } from 'react'
import cx from 'classnames'

type LabelProps = HTMLProps<HTMLLabelElement>

const Label = ({ className, htmlFor, children, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className={cx('block text-sm font-semibold text-light-slate', className)}
    >
      {children}
    </label>
  )
}

export default Label
