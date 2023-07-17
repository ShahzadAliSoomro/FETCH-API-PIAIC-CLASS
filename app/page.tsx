import Image from 'next/image';
import { getAllusers } from '../lib/getAllUser';

export default async function Home() {
    const data: User[]= await getAllusers();
    console.log(data);
    return (
        <div>
        <h1>User</h1>
        {data?.map((item) => (
            <div className="bg-red-300 m-5" key={item.id}>
            <h3>{item.name}</h3>
            <h3>{item.email}</h3>
            <h3>{item.address.city}</h3>
            
            </div>
        ))}
        </div>
        
    )
}