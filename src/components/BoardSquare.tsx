import React from 'react'
import {useDrop} from 'react-dnd'
import { ItemTypes } from '../constants/Types'

export default function BoardSquare(props: {x: number, y: number, children?: React.ReactNode}) {

    const move = (x :number,y : number, item: any, monitor: any) => {
        console.log(props.children)
        console.log(`Dropped at x: ${x}, y: ${y}`)
        console.log(item)
        console.log(monitor)
   }
    const [collectedProps, drop] = useDrop(() => ({
        accept: ItemTypes.PIECE,
        drop: (item, monitor) => console.log(item),
        collect: monitor => ({
            highlighted: monitor.canDrop(),
            hovered: monitor.isOver(),
            isOver: monitor.isOver(),
        }),
    }), [props.x, props.y])

    const classes = "box-border h-16 w-16 flex-none ";
    const color = (props.x + props.y) % 2 === 0 ? 'bg-gray-200' : 'bg-gray-600';
    const hoverClasses = 'h-full w-full z-10 opacity-50 bg-yellow-100'

    return (
        <div className={classes + color} ref={drop}>
            <div className={collectedProps.isOver ? hoverClasses : '' }>
                {props.children}
            </div>
        </div>
    )

}
