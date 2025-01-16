import { ReactElement } from 'react'
import './Button.css'

import React from 'react'

interface ButtonProps {
    children: ReactElement
}

export const Button = (props: ButtonProps) => {
    return (
        <button className='btn'>{props.children}</button>
    )
}
