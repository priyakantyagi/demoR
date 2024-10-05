const Page=({params})=>{
    return(
        <>
            <h2>Showing profile of {params.name} </h2>
            <p>
                All the data related to <strong>{params.name}</strong> coming from API or database 
            </p>
        </>
    );
}
export default Page;