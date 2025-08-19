
let Book = () => {
    let name = document.querySelector("#name").value;
    // let contact = document.querySelector("#contact").value;
    let contact=document.querySelector("#contactt").value
    let pickuplocation = document.querySelector("#pickuplocation").value;
    let dropofflocation = document.querySelector("#dropofflocation").value;
    let city = document.querySelector("#city").value;
   

    let url = 'http://localhost:3000/RentGo';

    fetch(url, {
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
           "contact":contact,
            "pickuplocation":pickuplocation,
            "dropofflocation":dropofflocation,
            "city": city

            
        })
    })

    location.href = 'index.html';
    return false;
}



// GET


 let fatchData = async () => {
 let url = 'http://localhost:3000/RentGo'
 
 let res = await fetch(url, {method:"GET"})

 let data = await res.json()

 let show = document.querySelector('.showTable1')

 data.map((e)=>{
    show.innerHTML += `
        <tr>
        <td>${e.name}</td>
        <td>${e.contact}</td>
        <td>${e.pickuplocation}</td>
        <td>${e.dropofflocation}</td>
        <td>${e.city}</td>
        <td onclick="del('${e.id}')">DELETE</td>
        </tr>
    `
 })

 console.log(data)
}

fatchData()

let del = (id) =>{

    let url =  `http://localhost:3000/RentGo/${id}`
    fetch(url, {method:"DELETE"})
}




