import React, { useState } from 'react';
import Icon from './Icon';

function Header({ grouping, setGrouping, sorting, setSorting }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <Icon name="display" />
        Display
        <Icon name={isOpen ? 'up' : 'down'} />
      </div>
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;