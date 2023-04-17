const refreshBtn = document.querySelector(".refresh-btn")
const container = document.querySelector(".container")

const maxPaletteBoxes = 32;



const generatePalette =()=>{
    container.innerHTML = ""; // clearning the container
    for(let i=0; i<maxPaletteBoxes ; i++){
    
    // generating a random hexa color code
    let randomHexa = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHexa= `#${randomHexa.padStart(6, "0")}`;
    //  console.log(randomHexa);

    // creating new li element and inserting it to the container
    const color=document.createElement('li')
    color.classList.add("color");
    color.innerHTML = `<div class="react-box" style="background: ${randomHexa}"></div>
    <span class="hexa-value">${randomHexa}</span>`

    // adding click event to current li element to copy the color 
    color.addEventListener("click" , () => copyColor(color , randomHexa))
    container.appendChild(color)

    }


}
generatePalette()

const copyColor = (elem , hexVal) => {
     const colorElement =elem.querySelector(".hexa-value");
    //  copying the hexa value , updating the text to copied
    // and changing the text back to original hexa value after 1 second 
     navigator.clipboard.writeText(hexVal).then(()=> {
        colorElement.innerText ='copied';
        setTimeout(()=> colorElement.innerText = hexVal, 1000)
     }).catch(()=> alert("Falied to copy the color code!!"))
     

// console.log(elem, hexVal);
}


refreshBtn.addEventListener("click" , generatePalette)