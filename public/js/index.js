let form = document.getElementById("useform")
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let useform = new FormData(form)

    let data = {
        name: useform.get("userName"),
        role: useform.get("role"),
        salary: useform.get("salary")
    }
    fetch("/student", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    }).then( async (res) => {
        
            let alert = document.createElement("div");
            alert.classList.app(res.status === 200 ? "success" : "failure")
            let p = document.createElement("p");
            let {msg} = await res.json()
            p.innerText = msg; 
            p.classList.add("alert-text");
            alert.append(p);
            document.getElementById("alert-box").append(alert);
            setTimeout(() => {
                document.getElementById("alert-box").remove(alert);
            },4000)
    }).catch( err => {
        console.log(err);
    })
}) 
console.log("Page loaded")