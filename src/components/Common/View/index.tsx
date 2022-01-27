import React, { forwardRef, type HTMLProps } from 'react'

export type ViewProps = HTMLProps<HTMLDivElement>

const View = forwardRef<HTMLDivElement, ViewProps>((props, ref) => {
  return <div ref={ref} {...props} />
})

export default View
