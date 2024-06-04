// Displaying the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listening for input from the user
process.stdin.on('data', (chunk) => {
  const name = chunk.toString().trim();

  // Displaying the user's name
  process.stdout.write(`Your name is: ${name}\n`);
});

process.stdin.on('end', () => {
  // Displaying the closing message
  process.stdout.write('This important software is now closing\n');
});
