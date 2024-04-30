
import { useEffect, useState } from "react";



function Home() {

    const [count , setCount] = useState(0);

    return<>
    
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button disabled = {count == 0} onClick={()=> setCount(count-1)}>Deecrement</button>

    </>
}

export default Home;