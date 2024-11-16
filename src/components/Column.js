import React from 'react';
import Card from './Card';
import Icon from './Icon';

const getColumnIcon = (grouping, title) => {
  if (grouping === 'status') {
    switch (title.toLowerCase()) {
      case 'backlog': return 'backlog';
      case 'todo': return 'todo';
      case 'in progress': return 'in-progress';
      case 'done': return 'done';
      case 'canceled': return 'cancelled';
      default: return 'backlog';
    }
  } else if (grouping === 'priority') {
    switch (title.toLowerCase()) {
      case 'urgent': return 'urgent-priority';
      case 'high': return 'high-priority';
      case 'medium': return 'medium-priority';
      case 'low': return 'low-priority';
      case 'no priority': return 'no-priority';
      default: return 'no-priority';
    }
  } else {
    return 'user'; // Assuming there's a user icon
  }
};

function Column({ title, tickets, grouping }) {
  return (
    <div className="column">
      <h2 className="column-title">
        <Icon name={getColumnIcon(grouping, title)} />
        {title}
        <span className="ticket-count">{tickets.length}</span>
      </h2>
      {tickets.map(ticket => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;