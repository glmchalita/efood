interface PaymentProps {
  handleNextPage: (page: 'delivery' | 'payment' | 'confirmation') => void
}

export function Payment({ handleNextPage }: PaymentProps) {
  return (
    <div>
      <button onClick={() => handleNextPage('confirmation')}>
        Confirmation
      </button>
    </div>
  )
}
