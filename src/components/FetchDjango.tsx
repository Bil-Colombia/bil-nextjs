async function getUsers() {
    const response = await fetch("http://127.0.0.1:8000/users/getUser/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    const data = await response.json()
    console.log(data)
}

async function FetchDjango() {

    getUsers()

    return (
        <div>FetchDjango</div>
    )
}

export default FetchDjango