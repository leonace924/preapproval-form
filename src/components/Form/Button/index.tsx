import React, { type HTMLProps } from 'react'

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  children: React.ReactNode
  type?: 'submit' | 'button' | 'reset'
}

const Button = ({ type, children, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
