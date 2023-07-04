import clientPromise from "@/lib/mongodb";

async function getData() {
  const client = await clientPromise;
  const db = client.db('auth-users');

  const user = await db.collection('users').findOne({
    email: 'hola@mundo.com'
  });

  // const result = await db.collection('users').insertOne({
  //   email: 'hola@mundo.com',
  //   address: {},
  //   age: 25,
  //   name: 'Juan Perez',
  // });

  console.log('user', user)
}

export default async function Page() {
  // const data = await getData()

  return <main></main>
}