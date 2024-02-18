import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
} from 'react'
import { FieldError, FieldErrorsImpl } from 'react-hook-form'

import { ErrorMessage, TextInputContainer } from './styles'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError | FieldErrorsImpl
  label: string
}

export const TextInput = forwardRef(function TextInput(
  { containerProps, error, label, ...props }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <TextInputContainer {...containerProps}>
      <label>{label}</label>
      <input {...props} ref={ref} />

      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </TextInputContainer>
  )
})
