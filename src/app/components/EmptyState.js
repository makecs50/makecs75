import React from 'react'
import styled from 'styled-components';

import emptyState from '../assets/img/svg/empty-state.svg'

export default function EmptyState() {
  const Img = styled.img`
    grid-column: 1 / 3;
  `

  return (
    <Img src={emptyState} />
  )
}
