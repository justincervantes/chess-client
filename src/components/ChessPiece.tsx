import React, {useState} from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../constants/Types'

export default function ChessPiece(props: {piece: string, id: string}) {
    const { piece, id } = props
    // const [type, setType] = useState<string>();
    // const [color, setColor] = useState<string>();
    // const checkValidMoves = () => {
    //     // Do something based on type
    // }

    const [{isDragging}, drag] =
        useDrag(
            () => (
                {
                    type: ItemTypes.PIECE,
                    id,
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
