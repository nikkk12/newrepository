// const div = document.getElementById("div");
// export function Card(width,height,backgroundColor,borderRadius) {
//     let container = document.createElement("div");
//     document.body.appendChild(container);
//     container.style.width = width;
//     container.style.height = height;
//     container.style.backgroundColor = backgroundColor;
//     container.style.borderRadius = borderRadius;
//     container.style.display = "flex";
//     }
   

export

function Button(width,height,backgroundColor,value,isContainered){
    if(isContainered)
    { const main = document.getElementById("main");
    const button = document.createElement("button");
    const div = document.createElement("div");
    div.appendChild(button);
    div.style.width = "500px";
    div.style.height = "300px";
    div.style.backgroundColor = "purple"
    button.style.width = width;
    button.style.height = height;
    button.style.backgroundColor = backgroundColor;
    button.textContent = value;
    main.appendChild(div);}
    
};