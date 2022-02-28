import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/Types';
import { GameContext } from '../context/game-context';

export default function BoardSquare(props: { x: number, y: number, children?: React.ReactNode }) {
    const context = useContext(GameContext);
    const move = (x: number, y: number, draggedPiece: any) => {
        const fromX = draggedPiece.id.split('-')[0];
        const fromY = draggedPiece.id.split('-')[1];
        if (x == fromX && y == fromY) return;
        const tempGameState = [...context.gameState];
        tempGameState[y][x] = tempGameState[fromY][fromX];
        tempGameState[y][x]!.x = x;
        tempGameState[y][x]!.y = y;
        tempGameState[fromY][fromX] = null;
        context.setGameState(tempGameState);
    };


    const [collectedProps, drop] = useDrop(() => ({
        accept: ItemTypes.PIECE,
        drop: (draggedPiece, monitor) => move(props.x, props.y, draggedPiece),
        collect: monitor => ({
            highlighted: monitor.canDrop(),
            hovered: monitor.isOver(),
            isOver: monitor.isOver()
        })
    }), [props.x, props.y]);

    const classes = 'box-border h-16 w-16 flex-none ';
    const color = (props.x + props.y) % 2 === 0 ? 'bg-gray-200' : 'bg-gray-600';
    const hoverClasses = 'h-full w-full z-10 opacity-50 bg-yellow-100';

    return (
      <div className={classes + color} ref={drop}>
          <div className={collectedProps.isOver ? hoverClasses : ''}>
              {props.children}
          </div>
      </div>
    );

}
