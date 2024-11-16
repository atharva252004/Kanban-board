import React from 'react';

function Icon({ name }) {
  const iconMap = {
    'menu': '3 dot menu',
    'add': 'add',
    'backlog': 'Backlog',
    'cancelled': 'Cancelled',
    'display': 'Display',
    'done': 'Done',
    'down': 'down',
    'high-priority': 'Img - High Priority',
    'low-priority': 'Img - Low Priority',
    'medium-priority': 'Img - Medium Priority',
    'in-progress': 'in-progress',
    'no-priority': 'No-priority',
    'urgent-priority': 'SVG - Urgent Priority colour',
    'urgent-priority-grey': 'SVG - Urgent Priority grey',
    'todo': 'To-do'
  };

  const iconFileName = iconMap[name] || name;

  try {
    const iconSrc = require(`../assets/${iconFileName}.svg`);
    return <img src={iconSrc} alt={`${name} icon`} className="icon" />;
  } catch (error) {
    console.warn(`Icon not found: ${name}`);
    return null; // or return a default icon
  }
}

export default Icon;