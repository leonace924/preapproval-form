import React, { type HTMLProps } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import View from '@components/Common/View'
import Label from '@components/Form/Label'
import Paragraph from '@components/Common/Paragraph'

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
  type = 'text',
}: TextInputProps) => {
  const hasError = errors && !!errors.errors[name]

  return (
    <View>
      {label && (
        <Label htmlFor={name} className="mb-2">
          {label}
        </Label>
      )}
      <input
        type={type}
        aria-describedby={name}
        defaultValue={defaultValue}
        {...register(name, validation)}
      />
      {hasError && (
        <Paragraph className="pt-1 text-sm text-rose-400">
          {errors.errors[name].message}
        </Paragraph>
      )}
    </View>
  )
}

export default TextInput
