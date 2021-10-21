import Box from './index'
import { render, screen, fireEvent } from '@testing-library/react'

const makeSut = () => render(<Box />)

describe(Box.name, () => {
  it('should render as expectd', () => {
    makeSut()
    expect(screen.getByLabelText('box')).toBeInTheDocument()
  })
})
