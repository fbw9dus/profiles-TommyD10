// Your JS here!
const imagesFolder = "images\\"

const createCV = (event) =>{
        var bigDiv = document.querySelector(".bigDiv")
        var div = document.createElement("div")
        div.classList.add("container")
        bigDiv.append(div)


        var nameInput = document.querySelector(".nameInput")
        
        var nameTotal = document.createElement("h1")
        nameTotal.textContent = nameInput.value
        div.append(nameTotal)
        

        var jahre = document.querySelector("[type = date]")
        var d = new Date()
        var getYear = d.getFullYear() - jahre.value.slice(0,4)
        var yearCV = document.createElement("h2")
        yearCV.textContent = `${nameTotal.textContent} is ${getYear} Years old`
        div.append(yearCV)

        var img = document.createElement("img")
        img.classList.add("img-size")
        var imgPath = document.querySelector("[name = photoField]").value
        imgPath = imgPath.replace("C:\\fakepath\\", imagesFolder)
        img.src = imgPath
        div.append(img)

        var primaryColor = document.querySelector("#primaryColor")
        var secondaryColor = document.querySelector("#secondaryColor")

        document.getElementById("CVDiv").style.background = primaryColor.value
        document.getElementById("CVDiv").style.color = secondaryColor.value


        var aboutMe = document.querySelector(".aboutMe")
        var textMe = document.createElement("h2")
        textMe.textContent = aboutMe.value
        var breakTag = document.createElement("br")
        div.append(breakTag)
        div.append(textMe)

        
       var checkyLi = document.querySelectorAll(".checky") 
       var checky = document.querySelectorAll("[type=checkbox]")
       var skills = document.createElement("h2")
       skills.classList.add("skills")
       console.log(checky)
       var secondBreak = document.createElement("br")
       div.append(secondBreak)
       skills.textContent = `${nameTotal.textContent}'s skills are: `
       div.append(skills)

       for (i=0; i<checky.length; i++){
           if(checky[i].checked){
             var skillList = document.createElement("li")
             skillList.innerText = checkyLi[i].innerText
             div.append(skillList)
             
             
             console.log(checkyLi[i].innerText)  
           }
       }


}

const reset = () => {
  var div = document.querySelector(".container")
  div.remove()
}

document.querySelector(".create").addEventListener("click",createCV)
document.querySelector(".reset").addEventListener("click",reset)
