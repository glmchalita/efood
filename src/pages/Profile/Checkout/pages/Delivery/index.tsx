interface DeliveryProps {
  handleNextPage: (page: 'delivery' | 'payment' | 'confirmation') => void
}

export function Delivery({ handleNextPage }: DeliveryProps) {
  return (
    <div>
      <button onClick={() => handleNextPage('payment')}>Payment</button>
    </div>
  )
}
