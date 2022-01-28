import React, { type HTMLProps } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import View from '@components/Common/View'
import Label from '@components/Form/Label'

export type TextInputProps = HTMLProps<HTMLLabelElement> & {
  label?: string
  name: string
  validation?: any
  register: UseFormRegister<FieldValues>
  errors?: any
}

const TextInput = ({
  label,
  register,
  name,
  validation,
  errors,
  defaultValue,
  type,
}: TextInputProps) => {
  // const hasError = errors && !!errors.errors[name]

  return (
    <View>
      {label && (
        <Label htmlFor={name} className="mb-2">
          {label}
        </Label>
      )}
      <input
        type={type}
        defaultValue={defaultValue}
        {...register(name, validation)}
      />
    </View>
  )
}

export default TextInput
