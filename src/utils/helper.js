export const groupTickets = (tickets, grouping, users) => {
    switch (grouping) {
      case 'status':
        return groupByStatus(tickets);
      case 'user':
        return groupByUser(tickets, users);
      case 'priority':
        return groupByPriority(tickets);
      default:
        return tickets;
    }
  };
  
  export const sortTickets = (groupedTickets, sorting) => {
    const sortedGroups = {};
    for (const [groupName, tickets] of Object.entries(groupedTickets)) {
      sortedGroups[groupName] = tickets.sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    }
    return sortedGroups;
  };
  
  const groupByStatus = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      acc[ticket.status] = [...(acc[ticket.status] || []), ticket];
      return acc;
    }, {});
  };
  
  const groupByUser = (tickets, users) => {
    const userMap = users.reduce((acc, user) => {
      acc[user.id] = user.name;
      return acc;
    }, {});
  
    return tickets.reduce((acc, ticket) => {
      const userName = userMap[ticket.userId] || 'Unassigned';
      acc[userName] = [...(acc[userName] || []), ticket];
      return acc;
    }, {});
  };
  
  const groupByPriority = (tickets) => {
    const priorityMap = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No priority'
    };
  
    return tickets.reduce((acc, ticket) => {
      const priority = priorityMap[ticket.priority];
      acc[priority] = [...(acc[priority] || []), ticket];
      return acc;
    }, {});
  };