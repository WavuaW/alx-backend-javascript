process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const mentry = process.stdin.read();

  if (mentry) {
    process.stdout.write(`Your name is: ${mentry}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
