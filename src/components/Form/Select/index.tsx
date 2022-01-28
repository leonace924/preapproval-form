import React, { type HTMLProps } from 'react'
import Label from '@components/Form/Label'
import View from '@components/Common/View'

export type OptionProps = {
  name: string
  value: string | number
}

type SelectProps = HTMLProps<HTMLSelectElement> & {
  options: OptionProps[]
  label: string
}

const Select = ({
  label,
  name,
  options = [],
  className,
  ...props
}: SelectProps) => {
  return (
    <View>
      {label && (
        <Label htmlFor={name} className="mb-2">
          {label}
        </Label>
      )}
      <select {...props}>
        {options.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </View>
  )
}

export default Select
