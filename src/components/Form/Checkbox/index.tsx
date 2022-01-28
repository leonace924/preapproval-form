import React, { type HTMLProps } from 'react'
import View from '@components/Common/View'
import Label from '@components/Form/Label'

type CheckboxProps = HTMLProps<HTMLInputElement> & {
  label?: string
}

const Checkbox = ({ id, name, label, ...props }: CheckboxProps) => {
  return (
    <View className="flex items-center">
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby={id}
          name={name}
          type="checkbox"
          className="w-5 h-5 border-0 rounded text-light-violet focus:ring-light-violet"
          {...props}
        />
      </div>
      <View className="ml-3">
        <Label htmlFor={id} className="text-xl">
          {label}
        </Label>
      </View>
    </View>
  )
}

export default Checkbox
