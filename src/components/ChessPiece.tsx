import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../constants/Types'

export default function ChessPiece() {

    const [{isDragging}, drag] =
        useDrag(
            () => (
                {
                    type: ItemTypes.PIECE,
                    collect: monitor => ({
                        isDragging: monitor.isDragging(),
                    }),
                }
            )
        )

    return (
        <div>
            <img
                ref={drag}
                style={{
                     opacity: isDragging ? .5 : 1,
                     cursor: 'move',
                     transform: `translate(0,0)`
                }}
                src={'pieces/b_bishop.png'}
            />
        </div>
    )

}
