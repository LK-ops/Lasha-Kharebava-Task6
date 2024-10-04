async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
            console.log("user's name is -> " + data[i].name);
            console.log("user's email is -> " + data[i].email);
    }


}


fetchUsers();