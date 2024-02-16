interface PaymentProps {
  handleNextPage: (page: 'delivery' | 'payment' | 'confirmation') => void
}

export function Payment({ handleNextPage }: PaymentProps) {
  return <div></div>
}
