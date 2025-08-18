import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { 
  AddCircle, 
  Delete,
  Email,
  Discount,
  ShoppingCart
} from '@mui/icons-material';
import './WorkflowBuilder.css';

const triggerOptions = [
  { id: 'new_order', label: 'New Order', icon: <ShoppingCart /> },
  { id: 'abandoned_cart', label: 'Abandoned Cart', icon: <Delete /> }
];

const actionOptions = [
  { id: 'send_email', label: 'Send Email', icon: <Email /> },
  { id: 'give_discount', label: 'Give Discount', icon: <Discount /> }
];

export default function WorkflowBuilder() {
  const [workflow, setWorkflow] = useState({
    name: '',
    trigger: null,
    actions: []
  });

  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    const { source, destination } = result;
    
    if (source.droppableId === 'triggers' && destination.droppableId === 'workflow-trigger') {
      setWorkflow({...workflow, trigger: triggerOptions[source.index]});
    }
    
    if (source.droppableId === 'actions' && destination.droppableId === 'workflow-actions') {
      const newActions = [...workflow.actions];
      newActions.splice(destination.index, 0, actionOptions[source.index]);
      setWorkflow({...workflow, actions: newActions});
    }
  };

  return (
    <div className="WorkflowBuilder">
      <div className="WorkflowHeader">
        <h3 className="WorkflowTitle">Workflow Builder</h3>
        <span className="WorkflowSubtitle">Drag and drop to create automations</span>
      </div>

      <div className="WorkflowName">
        <input
          type="text"
          placeholder="Workflow name (e.g., Abandoned Cart Recovery)"
          value={workflow.name}
          onChange={(e) => setWorkflow({...workflow, name: e.target.value})}
          className="WorkflowInput"
        />
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="BuilderContainer">
          {/* Triggers Panel */}
          <div className="BuilderPanel">
            <h4 className="PanelTitle">Triggers</h4>
            <Droppable droppableId="triggers" isDropDisabled={true}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {triggerOptions.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="DraggableItem"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* Main Workflow Area */}
          <div className="WorkflowArea">
            <Droppable droppableId="workflow-trigger">
              {(provided) => (
                <div 
                  ref={provided.innerRef} 
                  {...provided.droppableProps}
                  className={`DropZone ${workflow.trigger ? 'active' : ''}`}
                >
                  {workflow.trigger ? (
                    <div className="SelectedItem">
                      {workflow.trigger.icon}
                      <span>{workflow.trigger.label}</span>
                      <button 
                        onClick={() => setWorkflow({...workflow, trigger: null})}
                        className="RemoveButton"
                      >
                        <Delete fontSize="small" />
                      </button>
                    </div>
                  ) : (
                    <div className="EmptyState">
                      <AddCircle />
                      <p>Drop trigger here</p>
                    </div>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <div className="ActionsSequence">
              {workflow.actions.map((action, index) => (
                <div key={index} className="ActionStep">
                  <div className="StepNumber">{index + 1}</div>
                  <div className="ActionContent">
                    {action.icon}
                    <span>{action.label}</span>
                  </div>
                  <button 
                    onClick={() => {
                      const newActions = [...workflow.actions];
                      newActions.splice(index, 1);
                      setWorkflow({...workflow, actions: newActions});
                    }}
                    className="RemoveButton"
                  >
                    <Delete fontSize="small" />
                  </button>
                </div>
              ))}

              <Droppable droppableId="workflow-actions">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`DropZone ${workflow.actions.length > 0 ? 'active' : ''}`}
                  >
                    {workflow.actions.length === 0 && (
                      <div className="EmptyState">
                        <AddCircle />
                        <p>Drop actions here</p>
                      </div>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>

            <button 
              className="SaveButton"
              disabled={!workflow.trigger || workflow.actions.length === 0}
            >
              Save Workflow
            </button>
          </div>

          {/* Actions Panel */}
          <div className="BuilderPanel">
            <h4 className="PanelTitle">Actions</h4>
            <Droppable droppableId="actions" isDropDisabled={true}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {actionOptions.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="DraggableItem"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}