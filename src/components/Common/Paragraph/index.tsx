import React, { type HTMLProps } from 'react'

export type ParagraphProps = HTMLProps<HTMLParagraphElement>

const Paragraph = (props: ParagraphProps) => {
  return <p {...props} />
}

export default Paragraph
