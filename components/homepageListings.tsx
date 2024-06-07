import { PrismaClient } from "@prisma/client";

export default async function HomePageListings() {
  const prisma = new PrismaClient();
  const properties = await prisma.property.findMany();

  const displayPropertyListings = properties.map(property => {
    return <li key={property.id}>{property.addressLine1} | {property.addressLine2} </li>
  });

  return (
    <>
     <h2>Here are the listings</h2>
      <div className="listings-container">
        <ul>
          {displayPropertyListings}
        </ul>
      </div>
    </>
  )
}


