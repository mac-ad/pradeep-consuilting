import { PrismaClient,Role } from './generated/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123',
      role: Role.admin,
    },
    {
      name: 'Staff User',
      email: 'staff@example.com',
      password: 'staff123',
      role: Role.staff,
    },
    {
      name: 'Normal User',
      email: 'user@example.com',
      password: 'user123',
      role: Role.staff,
    },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
