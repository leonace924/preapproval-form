import React, { useCallback, useEffect, useState } from 'react'
import cx from 'classnames'
import { ArrowLeftIcon } from '@heroicons/react/solid'

import View from '@components/Common/View'
import Paragraph from '@components/Common/Paragraph'

const StickyBar = () => {
  const [isSticky, setSticky] = useState(false)

  const handleScroll = useCallback(() => {
    const offset = window.scrollY
    if (offset > 85) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <View
      className={cx(
        'sticky top-0 left-0 z-[1000] h-[105px] w-full bg-white pt-14 lg:relative lg:hidden',
        { 'shadow-md': isSticky }
      )}
    >
      <View className="relative">
        <View className="absolute -translate-y-1/2 left-6 top-1/2">
          <ArrowLeftIcon className="w-5 h-5 text-light-slate" />
        </View>
        <Paragraph className="text-xl text-center">
          <b>Get Pre-approved</b>
        </Paragraph>
      </View>
    </View>
  )
}

export default StickyBar
