import { useState } from "react";

function Home() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function postData(e) {
        e.preventDefault();
        console.log(name, email, password)
    }

    return <>

        <h1>home</h1>

        <form onSubmit={postData} >

            <input value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder="user name" /><br /><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)}  type="text" placeholder="email" /><br /><br />
            <input value={password} onChange={(e) => setPassword(e.target.value)}  type="text" placeholder="password" /><br /><br />
            <button type="submit">Submit</button>

        </form>

    </>
}

export default Home;