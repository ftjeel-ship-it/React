import React from 'react'
import Props2 from './Props2'

const Props1 = () => {
  const product = [
    {
      name: 'iPhone 17 Pro',
      price: '1,27,000',
      rating: '4.3⭐',
      image:
        'https://www.apple.com/v/iphone-17-pro/e/images/overview/welcome/hero__bsveixlwbms2_xlarge.jpg'
    },
    {
      name: 'Samsung S26 Ultra',
      price: '82,000',
      rating: '4.1⭐',
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s26-ultra-s938-sm-s938bzvcins-thumb-546000000'
    }
  ]

  return (
    <>
      <Props2 data={product} />
    </>
  )
}

export default Props1