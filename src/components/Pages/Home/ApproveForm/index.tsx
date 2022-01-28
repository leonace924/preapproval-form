import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import View from '@components/Common/View'
import Select from '@components/Form/Select'
import TextInput from '@components/Form/TextInput'

import { suffixOptions, stateOptions } from '@data/constants'
import Button from '@components/Form/Button'
import Paragraph from '@components/Common/Paragraph'
import Checkbox from '@components/Form/Checkbox'

const ApproveForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(errors)
  }

  return (
    <View className="d-approve-form lg:w-1/2">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            name="middle"
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
            register={register}
            errors={{ errors }}
            validation={{
              required: 'This is required',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Email is not correct',
              },
            }}
            name="email"
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
            name="streetAddr"
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
            name="zipCode"
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
              id="agree"
              name="agree"
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
