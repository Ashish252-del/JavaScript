const  Queue  = require('bull');
const tableQueues = {};
// Utility to get the priority of an event
function getEventPriority(eventName) {
  const priorityMap = {
    'join': 1,    // High priority
    'fold': 2,    // Medium priority
    'leave': 3,   // Lower priority
    'bet': 4      // Lowest priority
  };
  return priorityMap[eventName] || 5; // Default to lowest priority if not specified
}

// Function to get or create a queue for a specific table
function getTableQueue(gameId) {
  if (!tableQueues[gameId]) {
    // Create a queue for the specific table if it doesn't exist
    tableQueues[gameId] = new Queue(`tableQueue-${gameId}`);
    
    // Set up the worker for this table-specific queue
    tableQueues[gameId].process(async (job) => {
      const { eventName, playerId } = job.data;
      // Handle the specific event for this table
      await handleEventForTable(gameId, eventName, playerId);
    });
  }
  return tableQueues[gameId];
}

// Function to handle adding events to the queue with appropriate priority
async function processTableEvent(gameId, eventName, playerId) {
  const tableQueue = getTableQueue(gameId);
  
  // Add job to the table-specific queue with priority
  await tableQueue.add(
    { eventName, playerId },
    {
      priority: getEventPriority(eventName)
    }
  );
}

// Example handler for table events
async function handleEventForTable(gameId, eventName, playerId) {
    let num = 500;
    if(gameId)
  setTimeout(()=>{
    console.log(`========>Handling ${eventName} event for game ${gameId}, player ${playerId}<=============`);
  },500)
  // Your event handling logic goes here
}

// Example usage
async function example() {
 // Add events to the queue for a specific table
processTableEvent(1, 'join', 'player1');
processTableEvent(2, 'bet', 'player2');
processTableEvent(3, 'fold', 'player3');
processTableEvent(4, 'leave', 'player4');
processTableEvent(5, 'join', 'player1');
processTableEvent(6, 'bet', 'player2');
processTableEvent(7, 'fold', 'player3');
processTableEvent(8, 'leave', 'player4');
processTableEvent(9, 'join', 'player1');
processTableEvent(10, 'bet', 'player2');
processTableEvent(11, 'fold', 'player3');
processTableEvent(12, 'leave', 'player4');
processTableEvent(13, 'join', 'player1');
processTableEvent(14, 'bet', 'player2');
processTableEvent(15, 'fold', 'player3');
processTableEvent(16, 'leave', 'player4');
processTableEvent(17, 'join', 'player1');
processTableEvent(18, 'bet', 'player2');
processTableEvent(19, 'fold', 'player3');
processTableEvent(20, 'leave', 'player4');
processTableEvent(21, 'join', 'player1');
processTableEvent(22, 'bet', 'player2');
processTableEvent(23, 'fold', 'player3');
processTableEvent(24, 'leave', 'player4');
processTableEvent(25, 'join', 'player1');
processTableEvent(26, 'bet', 'player2');
processTableEvent(27, 'fold', 'player3');
processTableEvent(28, 'leave', 'player4');
processTableEvent(29, 'join', 'player1');
processTableEvent(30, 'bet', 'player2');
processTableEvent(31, 'fold', 'player3');
processTableEvent(32, 'leave', 'player4');
processTableEvent(33, 'join', 'player1');
processTableEvent(34, 'bet', 'player2');
processTableEvent(35, 'fold', 'player3');
processTableEvent(36, 'leave', 'player4');
processTableEvent(37, 'join', 'player1');
processTableEvent(38, 'bet', 'player2');
processTableEvent(39, 'fold', 'player3');
processTableEvent(40, 'leave', 'player4');
processTableEvent(41, 'join', 'player1');
processTableEvent(42, 'bet', 'player2');
processTableEvent(43, 'fold', 'player3');
processTableEvent(44, 'leave', 'player4');
processTableEvent(45, 'join', 'player1');
processTableEvent(46, 'bet', 'player2');
processTableEvent(47, 'fold', 'player3');
processTableEvent(48, 'leave', 'player4');
processTableEvent(49, 'join', 'player1');
processTableEvent(50, 'bet', 'player2');


}

example();