import { useState } from 'react'

import { Cart } from './pages/Cart'
import { Confirmation } from './pages/Confirmation'
import { Delivery } from './pages/Delivery'
import { Payment } from './pages/Payment'

export function Checkout() {
  const [checkoutPage, setCheckoutPage] = useState<
    'delivery' | 'payment' | 'confirmation' | ''
  >('')

  function handleNextPage(page: 'delivery' | 'payment' | 'confirmation' | '') {
    setCheckoutPage(page)
  }

  switch (checkoutPage) {
    case 'delivery':
      return <Delivery handleNextPage={handleNextPage} />

    case 'payment':
      return <Payment handleNextPage={handleNextPage} />

    case 'confirmation':
      return <Confirmation />
    default:
      return <Cart handleNextPage={handleNextPage} />
  }
}
