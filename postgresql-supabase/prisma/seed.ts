import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

const userData = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    posts: {
      create: [
        {
          title: 'Join the Prisma Discord',
          content: 'https://pris.ly/discord',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    posts: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://www.twitter.com/prisma',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    posts: {
      create: [
        {
          title: 'Ask a question about Prisma on GitHub',
          content: 'https://www.github.com/prisma/prisma/discussions',
          published: true,
        },
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube',
        },
      ],
    },
  },
] satisfies Prisma.UserCreateInput[]

const propertyListingsData = [
  {
    addressLine1: '123 Fake Lane',
    addressLine2: 'Missoula, MS 76000',
    monthlyRent: 2750,
    available: false,
    overview: 'This is test property number 1.',
  },
  {
    addressLine1: '5555 Broomfield',
    addressLine2: 'Arkansas City, MS 76000',
    monthlyRent: 1750,
    available: true,
    overview: 'This is test property number 2.',
  },
  {
    addressLine1: '612 Trousdale',
    addressLine2: 'Beaver City, MI 48558',
    monthlyRent: 9750,
    available: true,
    overview: 'This is test property number 3.',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }

  // Seed some fake properites
  for (const p of propertyListingsData) {
    const property = await prisma.property.create({
      data: p,
    })
    console.log(`Created user with id: ${property.id}`)
  }


  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
