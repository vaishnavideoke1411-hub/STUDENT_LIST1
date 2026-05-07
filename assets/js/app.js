const cl = console.log

let stdArr = [
    {
        fname :'vaishnavi',
        lname : 'Deoke',
        email : 'vsd@gmail.com',
        contact : '1234567890',
        stuId : 'e2345tr-ytre3-mnb56ko976gh'
    },
    {
        fname : 'Jhone',
        lname : 'son',
        email : 'jhone@gmail.com',
        contact : 7894561232,
        std_id : 'h25632-785469552-8256225f52'
    },
    {
        fname : 'Mary',
        lname : 'Doe',
        email : 'mary@gmail.com',
        contact : 1234567890,
        std_id : 'h25632-785469552-8256225f60'
    
},
    
{
        fname : 'tej',
        lname : 'joy',
        email : 'tejj@gmail.com',
        contact : 77548102365,
        std_id : 'h25632-785469552-8256225f652'
    
}

]

const stdContainer = document.getElementById('stdContainer')

function createTrs(arr){
    let result =' '  //Undefined

    arr.forEach((std , i) => {
        result += `
                <tr>
                    <td>${i+1}</td>
                    <td>${std.fname} ${std.lname}</td>
                    <td>${std.email}</td>
                    <td>${std.contact}</td>
                    <td>
                        <i 
                            role="button" 
                            class="fa-solid fa-pen-to-square fa-2x text-success">
                        </i>
                    </td>
                    <td>
                        <i 
                            role="button" 
                            class="fa-solid fa-trash fa-2x text-danger">
                        </i>
                    </td>
                </tr>
                 `
    })
    stdContainer.innerHTML = result ;
}
createTrs(stdArr)