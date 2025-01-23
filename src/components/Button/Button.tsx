import { ReactElement } from 'react'
import './Button.css'


interface ButtonProps {
    children: ReactElement | string
}

export const Button = (props: ButtonProps) => {
    return (
        <button className='btn'>{props.children}</button>
    )
}
