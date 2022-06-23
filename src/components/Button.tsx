import React from 'react'
import Button from 'react-bootstrap/Button';

type Props = { name: string, type: any, onClick?: any }

function Buttons({ name, type, onClick }: Props) {
    return (
        <>
            <div className='pt-2 text-center'>
                <Button className='px-4' type={type} onClick={onClick} variant="primary">{name}</Button>{' '}
            </div>
        </>
    )
}

export default Buttons