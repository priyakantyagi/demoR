'use client';
import { useRouter } from "next/navigation";
const Page=()=>{
    const r=useRouter();
    return(
        <>
           <h2>Home</h2> 
           <p>
                Some text for Home goes here...
           </p>
           <p>
                <input type="button" value="Go to feeback" onClick={()=>r.push("/feedback")} />
           </p>
        </>
    );
}
export default Page;