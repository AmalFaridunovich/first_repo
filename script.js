let form = document.forms.link_in
let wrapper = document.querySelector(".wrapper")


form.onsubmit = () =>{
    event.preventDefault()
    let obj = {}
    let fm = new FormData(event.target)

    fm.forEach((value, key) =>{
        obj[key] = value
    })

    create(obj)
}

let create = (obj) =>{

    const div1 = document.createElement("div")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")    
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const p3 = document.createElement("p")
    //
    div1.classList.add("posts")
    div2.classList.add("circle")   
    p1.innerText =  obj.name + ' '+ obj.surname 
    p2.innerText =  obj.date
    div2.style.backgroundColor= obj.color
    p3.innerHTML = obj.textarea
    
    
    
    p1.innerText =  obj.name + ' '+ obj.surname 
    p2.innerText =  obj.date
    div2.style.backgroundColor = obj.color
    wrapper.append(div1,div3)
    // document.body.append(div1)
    div1.append(p1, p2 , div2 )
    div3.append(p3)












    
}