import Link from "next/link";
const Page = async () => {
  let data = await fetch('https://jsonplaceholder.typicode.com/users')
  let users = await data.json();
  console.log(users);
  return (
    <>
      <h2>Showing all Users from API</h2>
      {
        users.map(user => {return(
          <h4><Link href={"/userdetail/"+user.id}>{user.name}</Link></h4>
        )})
      }
    </>
  );
}

export default Page;