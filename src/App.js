import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styles from './App.module.css';

const divs = [{ id: "one" }, { id: "two" }, { id: "three" }, { id: "four" }, { id: "five" }];

function App() {
  const [order, updateOrder ] = useState(divs);

  useEffect(() => {
    console.log(order);
  }, [order])

  function handleOnDragEnd(result) {
    // check if the result destination is truthy and if it isnt, stop the function
    if(!result.destination) return;
    console.log(result)
    const items = Array.from(order);

    // take out the moved item and reinject it into the destination index in the array
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // update state to the new array order
    updateOrder(items);
  }

  return (
    <div className={styles.app}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {/* can add direction prop (vertical-default or horizontal) to droppable to say how items will flow */}
        <Droppable droppableId="first">
          {(provided, snapshot) => (
            <ul ref={provided.innerRef} {...provided.droppableProps} style={{ backgroundColor: snapshot.isDraggingOver ? 'lightblue' : '#333' }} className={styles.container}>
              {order.map((div, index) => {
                return (
                <Draggable key={div.id} draggableId={div.id} index={index}>
                  {(provided, snapshot) => (
                    <li className={styles.drag} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {"Item number " + div.id}
                    </li>
                  )}
                </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
