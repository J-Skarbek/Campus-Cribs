// 'use client';

// import { PrismaClient } from 'postgresql-supabase/node_modules/prisma/client';
import { PrismaClient } from "@prisma/client";
// import { useState, useEffect } from "react";

// async function main() {
//   const allProperties = await prisma.property.findMany()
//   console.log(allProperties);
// }

export default function HomePageListings() {
  const prisma = new PrismaClient();

  async function main() {
    const allProperties = await prisma.property.findMany()
    console.log(allProperties);
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

  console.log(main())

  return (
    <div>Listings would go here</div>
  )
}


