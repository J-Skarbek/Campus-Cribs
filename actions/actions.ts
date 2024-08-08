import prisma from "@/lib/db";

export default async function createNewUser(formData: FormData) {
  'use server';

  const userName = formData.get('username');
  const firstName = formData.get('first-name');
  const lastName = formData.get('last-name');
  const email = formData.get('email');
  const country = formData.get('country');
  const streetAddress = formData.get('street-address');
  const city = formData.get('city');
  const region = formData.get('region');
  const zipCode = formData.get('postal-code');

  console.log(firstName, lastName, userName);

  await prisma.user.create({
    data: {
      name: userName as string,
      email: email as string,
    }
  })
}