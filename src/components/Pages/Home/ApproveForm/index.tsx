import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { FieldValues, useForm } from 'react-hook-form'

import View from '@components/Common/View'
import Select from '@components/Form/Select'
import TextInput from '@components/Form/TextInput'
import Button from '@components/Form/Button'
import Paragraph from '@components/Common/Paragraph'
import Checkbox from '@components/Form/Checkbox'

import { suffixOptions, stateOptions } from '@data/constants'
import { PRE_APPROVAL } from '@lib/queries'

type ApproveDataProps = {
  firstName: String
  middleInitial: String
  lastName: String
  suffix: String
  email: String
  phone: String
  address: String
  city: String
  state: String
  zip: String
  authorized: Boolean
}

const ApproveForm = () => {
  const [prevApproval, { data, loading, error }] = useMutation(PRE_APPROVAL)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: FieldValues) => {
    prevApproval({ variables: { input: data } })
  }

  useEffect(() => {
    if (data?.addPreApproval?.numUids > 0) {
      alert('success')
    }
  }, [data])

  return (
    <View className="d-approve-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="hidden font-bold text-white lg:block lg:text-2xl">
          Get Pre-approved
        </h2>
        <View className="d-approve-form__name">
          <TextInput
            label="First name*"
            register={register}
            errors={{ errors }}
            validation={{ required: 'This is required' }}
            name="firstName"
          />
          <TextInput
            label="MI"
            register={register}
            errors={{ errors }}
            name="middleInitial"
          />
          <TextInput
            label="Last name*"
            register={register}
            errors={{ errors }}
            validation={{ required: 'This is required' }}
            name="lastName"
          />
          <Select
            register={register}
            label="Suffix"
            options={suffixOptions}
            name="suffix"
          />
        </View>

        <View className="d-approve-form__basic">
          <TextInput
            label="Email*"
            type="email"
            name="email"
            register={register}
            errors={{ errors }}
            validation={{
              required: 'This is required',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Email is not correct',
              },
            }}
          />
          <TextInput
            label="Phone Number*"
            register={register}
            errors={{ errors }}
            validation={{ required: 'This is required' }}
            name="phone"
          />
        </View>

        <View className="d-approve-form__street">
          <TextInput
            label="Street address*"
            register={register}
            errors={{ errors }}
            validation={{ required: 'This is required' }}
            name="address"
          />
        </View>

        <View className="d-approve-form__address">
          <TextInput
            label="City*"
            register={register}
            errors={{ errors }}
            validation={{ required: 'This is required' }}
            name="city"
          />
          <Select
            name="state"
            errors={errors}
            register={register}
            validation={{ required: 'This is required' }}
            label="State*"
            options={stateOptions}
          />
          <TextInput
            label="Zip / Postal*"
            register={register}
            errors={{ errors }}
            validation={{ required: 'This is required' }}
            name="zip"
          />
        </View>

        <View className="d-approve-form__confirm">
          <Paragraph className="my-10 text-sm text-light-slate lg:my-12">
            By clicking the I Agree checkbox and Submit, I consent to have my
            credit file accessed for purposes of prequalifying for a vehicle
            loan. This is a soft inquiry and will not impact my credit score. I
            agree to the Privacy Notice, Terms and Conditions and I acknowledge
            I may be contacted by Everyday Motors. I understand that I might not
            prequalify depending on the prequalification criteria.
          </Paragraph>

          <View className="d-approve-form__confirm-action">
            <Checkbox
              id="authorized"
              name="authorized"
              label="I Agree*"
              register={register}
              errors={{ errors }}
              validation={{ required: true }}
            />
            <Button>Submit</Button>
          </View>
        </View>
      </form>
    </View>
  )
}

export default ApproveForm
