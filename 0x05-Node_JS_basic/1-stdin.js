// Displaying the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listening for input from the user
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  // Displaying the closing message
  process.stdout.write('This important software is now closing\n');
});
