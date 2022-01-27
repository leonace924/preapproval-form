import React, { type HTMLProps } from 'react'
import View from '@components/Common/View'
import { FieldValues, UseFormRegister } from 'react-hook-form'

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
    <View className="">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-semibold text-light-slate"
        >
          {label}
        </label>
      )}
      <input
        className="rounded-md border border-solid border-light-gray bg-transparent px-[18px] py-2 text-xl leading-8 text-secondary focus:border-light-blue focus:outline-none"
        type={type}
        defaultValue={defaultValue}
        {...register(name, validation)}
      />
    </View>
  )
}

export default TextInput
