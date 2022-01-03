import React, {ReactChild} from 'react'
import {DropTargetMonitor, useDrop} from 'react-dnd'
import { ItemTypes } from '../constants/Types'


/**
 * Your Component
 */
export default function BoardSquare(props: {x: number, y: number, children?: React.ReactNode}) {

    const move = (x :number,y : number) => {
        console.log(`Dropped at x: ${x}, y: ${y}`)
   }

    const [{ isOver, highlighted, hovered }, drop] = useDrop(() => ({
        accept: ItemTypes.PIECE,
        drop: () => move(props.x, props.y),
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
            <div className={isOver ? hoverClasses : '' }>
                {props.children}
            </div>
        </div>
    )

}
