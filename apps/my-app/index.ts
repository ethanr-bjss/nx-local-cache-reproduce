interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}

const user = getUserById(1);
if (user) {
  console.log(`User found: ${user.name}`);
} else {
  console.log('User not found');
}