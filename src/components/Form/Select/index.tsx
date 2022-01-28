import React, { type HTMLProps } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import Label from '@components/Form/Label'
import View from '@components/Common/View'
import Paragraph from '@components/Common/Paragraph'

export type OptionProps = {
  name: string
  value: string | number
}

type SelectProps = HTMLProps<HTMLSelectElement> & {
  options: OptionProps[]
  label: string
  errors?: any
  name: string
  register: UseFormRegister<FieldValues>
  validation?: any
}

const Select = ({
  label,
  name,
  options = [],
  className,
  errors,
  register,
  validation,
  ...props
}: SelectProps) => {
  const hasError = errors && !!errors?.errors?.[name]
  console.log(errors)

  return (
    <View>
      {label && (
        <Label htmlFor={name} className="mb-2">
          {label}
        </Label>
      )}
      <select {...props} {...register(name, validation)}>
        {options.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
      {hasError && (
        <Paragraph className="pt-1 text-xs text-rose-400">
          {errors.errors[name].message}
        </Paragraph>
      )}
    </View>
  )
}

export default Select
