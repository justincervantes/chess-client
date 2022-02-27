import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/Types';
import { GameContext } from '../context/game-context';
import { Pawn } from '../model/Pawn';

export default function BoardSquare(props: { x: number, y: number, children?: React.ReactNode }) {
    const context = useContext(GameContext);
    const move = (x: number, y: number, item: any) => {
        const tempGameState = [...context.gameState];
        console.log('old gamestate', tempGameState);
        const fromX = item.id.split('-')[0];
        const fromY = item.id.split('-')[1];
        tempGameState[fromY][fromX] = null;
        tempGameState[y][x] = new Pawn('w_pawn', 3, 3, 1);
        context.setGameState(tempGameState);
    };


    const [collectedProps, drop] = useDrop(() => ({
        accept: ItemTypes.PIECE,
        drop: (item, monitor) => move(props.x, props.y, item),
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
