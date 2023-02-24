window.addEventListener("load",init)

function init(){

    const tartalomelem=document.getElementById("tartalom")
    console.log(tartalomelem)
    const tartalomez=document.querySelectorAll(".tart")
    const eleresiut=["kaja.jpg" ,"kaja.jpg" ,"kaja.jpg" ,"kaja.jpg"]
    let kajak =["rántotthús" , "spagetti" , "lasange" ,"dolgok" ,"vmi"]
   
    kajakM(kajak, tartalomez)
    kajakKM(eleresiut, tartalomez)

}
function kajakM(kajak, tartalomez){
    let szoveg = "<h1> kedvenc kajátk </h1>"
    szoveg +="<ul>"
    for (let index = 0; index < kajak.length; index++) {
        
        szoveg+="<li>"+kajak[index]+"</li>";
    }
    szoveg +="</ul>"
    tartalomez[0].innerHTML=szoveg
}
function kajakKM(eleresiut, tartalomez){
    let szoveg = "<h1> kedvenc kajátk </h1>"
    
   
    for (let index = 0; index < eleresiut.length; index++) {
        
        szoveg+=`<div>"<img src="kepek/${eleresiut[index]}" alt="asd">";
        </div>`
    }
    tartalomez[1].innerHTML=szoveg
    
}
  
