import { type HTMLProps } from 'react'

type LabelProps = HTMLProps<HTMLLabelElement>

const Label = ({ htmlFor, children, ...props }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  )
}

export default Label
