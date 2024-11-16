import React, { useMemo } from 'react';
import Column from './Column';
import { groupTickets, sortTickets } from '../utils/helper.js';

function KanbanBoard({ tickets, users, grouping, sorting }) {
  const groupedAndSortedTickets = useMemo(() => {
    const grouped = groupTickets(tickets, grouping, users);
    return sortTickets(grouped, sorting);
  }, [tickets, users, grouping, sorting]);

  return (
    <div className="kanban-board">
      {Object.entries(groupedAndSortedTickets).map(([groupName, groupTickets]) => (
        <Column key={groupName} title={groupName} tickets={groupTickets} grouping={grouping} />
      ))}
    </div>
  );
}

export default KanbanBoard;