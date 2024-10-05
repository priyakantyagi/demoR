const Page = async({params})=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/users/'+params.uid)
    let user = await data.json();
    console.log(user);
    return(
        <>
            <h2>Showing details of user having id={params.uid}</h2>
            <p>
                {user.name} <br />
                {user.username} <br />
                {user.email} <br />
                {user.phone} <br />
                {user.website}
            </p>
        </>
    );
}

export default Page;