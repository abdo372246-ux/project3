onload = function(){
    let action=this.document.getElementById("AddOrRemove");
    let name=this.document.getElementById("PRname");
    let quantity=this.document.getElementById("qua");
    let type=this.document.getElementById("MorK");
    let addbutton=this.document.getElementById("AddButton")
    let tbody=this.document.querySelector("tbody")
    var massage=document.getElementById("massage");

    action.onchange=function(){
        switch(action.value){
            case"Add":
            addbutton.textContent="Add";
            break;
            case"Remove":
            addbutton.textContent="Remove";
            break;

        }
    }
    addbutton.onclick=function(){
        if(action.value=="Add"){
            let name2=document.createElement("td");
            let quant=document.createElement("td");
            let tr=document.createElement("tr");

            switch(name.value){
                case"":
                    massage.textContent="You didn't write any thing";
                break;
                default:
                    if(quantity.value==""){
                        quantity.value="0"
                    }
                    name2.textContent =
                    name.value.charAt(0).toUpperCase() +
                    name.value.slice(1).toLowerCase();
                    quant.textContent=quantity.value+"/"+type.value;
                    name2.id='PRname';
                    quant.id='qua';
                    tr.appendChild (name2);
                    tr.appendChild(quant);
                    tbody.appendChild(tr);
                    massage.textContent="";
                    name.value="";
                    quantity.value=""
                    

                    
            }

        
            


        }
    }

}