import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
const CARDS = [
  {
    id: '2',
    name: '🂢',

  },
  {
    id: '3',
    name: '🂣',

  },
  {
    id: '4',
    name: '🂤',

  },
  {
    id: '5',
    name: '🂥',

  },
  {
    id: '6',
    name: '🂦',

  },
  {
    id: '7',
    name: '🂧',

  },
  {
    id: '8',
    name: '🂨',

  },
  {
    id: '9',
    name: '🂩',

  },
  {
    id: '10',
    name: '🂪',

  },
  {
    id: 'J',
    name: '🂫',

  },
  {
    id: 'Q',
    name: '🂭',

  },
  {
    id: 'K',
    name: '🂮',

  },
  {
    id: 'A',
    name: '🂡',

  }
]

// filter((val,i)=>i<8 )

const shuffeled = CARDS.sort(() => {
  const randomTrueOrFalse = Math.random() > 0.5;
  return randomTrueOrFalse ? 1 : -1
});
function App() {
const [characters, updateCharacters] = useState(CARDS);

function handleOnDragEnd(result) {
  if (!result.destination) return; 
  const items = Array.from(characters);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);
  updateCharacters(items)
  }
return (
<div className="App pt-12">
    <div> 
    <h3 className='text text-center text-4xl font-bold pb-5'>Spider Solitaire </h3>     
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (  
                    
              <div className="characters  flex justify-center items-center gap-4 border-2 p-10 mt-4 bg-gray-200" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.filter((val,i)=>i<10 ).map(({id, name}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (                                          
                        <div className='div text-[140px] text-red-600 flex' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {name}
                        </div>                     
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}               
                </div>
            )}
          </Droppable>
        </DragDropContext>   
    </div>
    </div>

  );
}
export default App;
