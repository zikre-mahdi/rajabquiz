export default function Users({data}){
    console.log(data);
    return (
    <>
    <h1>Users</h1>
    <ul>
        {data && data.map(item => <li>Name: {item.name} ({item.type})</li>)}
    </ul>
    </>
    )
}

export async function getServerSideProps(context){
    const result = await fetch("http://localhost:3000/api/users");
    const data = await result.json();
    console.log(data);


    return {
        props:{
            ...data
        }
    };
}