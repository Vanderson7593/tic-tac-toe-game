import { FC } from 'react'
import { Box as MuiBox, BoxProps } from '@material-ui/core'

const Box: FC<BoxProps> = props => (
  <MuiBox
    style={{ borderWidth: 1, borderColor: '#000', borderStyle: 'solid' }}
    height={100}
    width={100}
    display="flex"
    justifyContent="center"
    alignItems="center"
    aria-label="box"
    fontSize={60}
    {...props}
  >
    {props.children}
  </MuiBox>
)

export default Box
