import { Typography, Box as MuiBox } from '@material-ui/core'
import Head from 'next/head'
import { FC, useEffect, useState } from 'react'
import { Container } from '../../styles/global.styles'
import Box from '../../components/box/index'

interface ISelectedBoxs {
  boxId: number
  playerId: number
}

const CHARS_MAP: Record<number, string> = {
  1: 'X',
  2: 'O'
}

const Game: FC = () => {
  const [selectedBoxs, setSelectedBoxs] = useState<Array<ISelectedBoxs>>([])
  const [isPlayerOne, setIsPlayerOne] = useState<boolean>(true)
  const [winner, setWinner] = useState<number>()

  const renderChar = (boxId: number): string => {
    const isSelected = selectedBoxs.filter(box => box.boxId === boxId)[0]?.playerId
    return CHARS_MAP[isSelected]
  }

  const togglePlayer = () => setIsPlayerOne(prevState => !prevState)

  const markBox = (boxID: number) => {
    const isSelected = selectedBoxs.filter(box => box.boxId === boxID)

    if (isSelected.length === 0) {
      setSelectedBoxs(prevState => [...prevState, { boxId: boxID, playerId: isPlayerOne ? 1 : 2 }])
    }
  }

  const verifyBox = (one: number, two: number, three: number) => {
    if (one && two && three && one === two && one === three) return true
    return false
  }

  const verifyWinner = () => {
    const playerOneBoxs = selectedBoxs.filter(box => box.playerId === 1)
    const playerTwoBoxs = selectedBoxs.filter(box => box.playerId === 1)
    const boxOne = selectedBoxs.filter(box => box.boxId === 1)[0]
    const boxTwo = selectedBoxs.filter(box => box.boxId === 2)[0]
    const boxThree = selectedBoxs.filter(box => box.boxId === 3)[0]
    const boxFour = selectedBoxs.filter(box => box.boxId === 4)[0]
    const boxFive = selectedBoxs.filter(box => box.boxId === 5)[0]
    const boxSix = selectedBoxs.filter(box => box.boxId === 6)[0]
    const boxSeven = selectedBoxs.filter(box => box.boxId === 7)[0]
    const boxEight = selectedBoxs.filter(box => box.boxId === 8)[0]
    const boxNine = selectedBoxs.filter(box => box.boxId === 9)[0]

    if (playerOneBoxs.length > 1 || playerTwoBoxs.length > 1) {
      if (
        verifyBox(boxOne?.playerId, boxTwo?.playerId, boxThree?.playerId) ||
        verifyBox(boxOne?.playerId, boxFive?.playerId, boxNine?.playerId) ||
        verifyBox(boxOne?.playerId, boxFour?.playerId, boxSeven?.playerId) ||
        verifyBox(boxTwo?.playerId, boxFive?.playerId, boxEight?.playerId) ||
        verifyBox(boxThree?.playerId, boxSix?.playerId, boxNine?.playerId) ||
        verifyBox(boxThree?.playerId, boxFive?.playerId, boxSeven?.playerId) ||
        verifyBox(boxFour?.playerId, boxFive?.playerId, boxSix?.playerId) ||
        verifyBox(boxSeven?.playerId, boxEight?.playerId, boxNine?.playerId)
      )
        setWinner(isPlayerOne ? 2 : 1)
    }
  }

  const handleClick = (boxId: number) => {
    markBox(boxId)
    togglePlayer()
  }

  useEffect(() => {
    verifyWinner()
  }, [isPlayerOne])

  return (
    <Container>
      <Head>
        <title>GAME</title>
      </Head>

      <MuiBox height="100vh" width="100vw">
        <MuiBox
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          width="100vw"
        >
          {winner && (
            <MuiBox>
              <Typography aria-label="winner" variant="h1">
                The winner is player {winner || ''}
              </Typography>
            </MuiBox>
          )}
          <MuiBox display="flex">
            <MuiBox>
              <Box aria-label="box1" onClick={() => handleClick(1)} id="1">
                {renderChar(1)}
              </Box>
              <Box aria-label="box2" onClick={() => handleClick(2)} id="2">
                {renderChar(2)}
              </Box>
              <Box aria-label="box3" onClick={() => handleClick(3)} id="3">
                {renderChar(3)}
              </Box>
            </MuiBox>

            <MuiBox>
              <Box aria-label="box4" onClick={() => handleClick(4)} id="4">
                {renderChar(4)}
              </Box>
              <Box aria-label="box5" onClick={() => handleClick(5)} id="5">
                {renderChar(5)}
              </Box>
              <Box aria-label="box6" onClick={() => handleClick(6)} id="6">
                {renderChar(6)}
              </Box>
            </MuiBox>

            <MuiBox>
              <Box aria-label="box7" onClick={() => handleClick(7)} id="7">
                {renderChar(7)}
              </Box>
              <Box aria-label="box8" onClick={() => handleClick(8)} id="8">
                {renderChar(8)}
              </Box>
              <Box aria-label="box9" onClick={() => handleClick(9)} id="9">
                {renderChar(9)}
              </Box>
            </MuiBox>
          </MuiBox>
        </MuiBox>
      </MuiBox>
    </Container>
  )
}

export default Game
