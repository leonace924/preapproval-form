import React, { type HTMLProps } from 'react'
import cx from 'classnames'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import View from '@components/Common/View'
import Label from '@components/Form/Label'

type CheckboxProps = HTMLProps<HTMLInputElement> & {
  label?: string
  name: string
  errors?: any
  register: UseFormRegister<FieldValues>
  validation?: any
}

const Checkbox = ({
  id,
  name,
  register,
  validation,
  errors,
  label,
  ...props
}: CheckboxProps) => {
  const hasError = errors && !!errors?.errors?.[name]

  return (
    <View className="flex items-center">
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby={id}
          type="checkbox"
          className={cx(
            'h-5 w-5 rounded border-0 text-light-violet focus:ring-light-violet',
            { 'border-2 border-solid border-rose-400': hasError }
          )}
          {...register(name, validation)}
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
