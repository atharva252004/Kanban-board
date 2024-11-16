import React from 'react';
import Icon from './Icon';

function Card({ ticket }) {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return 'urgent-priority';
      case 3: return 'high-priority';
      case 2: return 'medium-priority';
      case 1: return 'low-priority';
      default: return 'no-priority';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <Icon name={getPriorityIcon(ticket.priority)} />
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-tags">
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;