import Game from '../game'
import { render, screen, fireEvent } from '@testing-library/react'

const makeSut = () => render(<Game />)

describe(Game.name, () => {
  it('should render as expected', () => {
    makeSut()

    const box1 = screen.getByLabelText('box1')
    const box2 = screen.getByLabelText('box2')
    const box3 = screen.getByLabelText('box3')
    const box4 = screen.getByLabelText('box4')
    const box5 = screen.getByLabelText('box5')
    const box6 = screen.getByLabelText('box6')
    const box7 = screen.getByLabelText('box7')
    const box8 = screen.getByLabelText('box8')
    const box9 = screen.getByLabelText('box9')

    expect(box1).toBeInTheDocument()
    expect(box2).toBeInTheDocument()
    expect(box3).toBeInTheDocument()
    expect(box4).toBeInTheDocument()
    expect(box5).toBeInTheDocument()
    expect(box6).toBeInTheDocument()
    expect(box7).toBeInTheDocument()
    expect(box8).toBeInTheDocument()
    expect(box9).toBeInTheDocument()

    expect(screen.queryByLabelText('winner')).not.toBeInTheDocument()
  })

  it('should render text if there is a winner that is player 1', () => {
    makeSut()
    const box1 = screen.getByLabelText('box1')
    const box2 = screen.getByLabelText('box2')
    const box3 = screen.getByLabelText('box3')
    const box4 = screen.getByLabelText('box4')
    const box5 = screen.getByLabelText('box5')

    fireEvent.click(box1)
    fireEvent.click(box4)
    fireEvent.click(box2)
    fireEvent.click(box5)
    fireEvent.click(box3)

    expect(screen.getByText('The winner is player 1')).toBeInTheDocument()
  })

  it('should render text if there is a winner that is player 2', () => {
    makeSut()
    const box1 = screen.getByLabelText('box1')
    const box2 = screen.getByLabelText('box2')
    const box3 = screen.getByLabelText('box3')
    const box4 = screen.getByLabelText('box4')
    const box5 = screen.getByLabelText('box5')
    const box7 = screen.getByLabelText('box7')

    fireEvent.click(box4)
    fireEvent.click(box1)
    fireEvent.click(box5)
    fireEvent.click(box2)
    fireEvent.click(box7)
    fireEvent.click(box3)

    expect(screen.getByText('The winner is player 2')).toBeInTheDocument()
  })
})
