import React from 'react'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/solid'

import View from '@components/Common/View'

const Product = () => {
  return (
    <View className="px-6 pb-8 lg:grid lg:items-center lg:px-12 lg:py-16">
      <View className="lg:mx-auto lg:flex lg:w-full lg:max-w-[600px] lg:flex-col-reverse">
        <View className="hidden lg:flex lg:items-center lg:pt-20">
          <View className="flex items-center pr-8">
            <span className="text-sm text-light-slate">Power by</span>
            <Image
              src={'/assets/images/logo.svg'}
              alt="logo"
              width={52}
              height={26}
            />
          </View>

          <View className="flex items-center border-l border-solid border-light-slate">
            <p className="ml-8 text-light-slate">Terms</p>
            <p className="ml-8 text-light-slate">Privacy</p>
          </View>
        </View>

        <View className="w-full md:mx-auto md:max-w-xl">
          <Image
            src="/assets/images/img-product-thumbnail.png"
            alt="product"
            width={630}
            height={446}
            layout="responsive"
          />
        </View>

        <View className="">
          <h3 className="text-2xl font-semibold text-primary lg:hidden">
            $45,459.00
          </h3>
          <h4 className="text-xl font-semibold lg:text-2xl">
            2019 Porsche Cayenne
          </h4>
          <p className="text-base font-semibold text-light-slate">
            2,345 miles | Est. $540/mo
          </p>
          <h3 className="hidden font-semibold text-primary lg:mt-5 lg:block lg:text-5xl">
            $45,459.00
          </h3>
        </View>
      </View>
    </View>
  )
}

export default Product
