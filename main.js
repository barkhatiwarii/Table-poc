
var cities={1:["Indore","Sagar","Bhopal","Guna","Bina"],2:["Patna","Lucknow","Prayagraj"],3:["GandhiNagar","Bhuj","Ahmedabad"]}
var states=["Madhya Pradesh","Uttar Pradesh","Gujarat"]

function displayCityName(id, city){
    document.getElementById(id).value=city
}

function cityPopulater(state,id,nid1,nid2)
{
currentCities=cities[state]
let t=""
currentCities.map(city=>
{
s="displayCityName(\'"+nid2+"\',\'"+city+"\')"
ttags="<a class='dropdown-item' onClick="+s+">"+city+"</a>"
t=t+ttags;
});

document.getElementById(id).innerHTML=t;

document.getElementById(nid1).value=states[state-1] ;

}

function dropDownPopulater(id,cId,newId1,newId2)
{
let t=""
let e=1;
states.map(state=>
{
s="cityPopulater("+e+",\'"+cId+"\',\'"+newId1+"\',\'"+newId2+"\')"
ttags="<a class='dropdown-item' href='#' onClick="+s+">"+state+"</a>"
t=t+ttags;
e=e+1
});
document.getElementById(id).innerHTML=t;


}


function addRow(id)
{
let element=document.getElementById(id);
let cloneNode=element.cloneNode(true);
let genId=create_UUID()
cloneNode.id=genId
let nodes=cloneNode.querySelectorAll(".gr");
let len=nodes.length;
let e=0
while(e<len)
{
nodes[0].onclick = function(){addRow(genId)};  
nodes[1].onclick = function(){deleteRow(genId)};  
e=e+1
}
nodes=cloneNode.querySelectorAll(".sd");
nodes[0].id=genId+"1"
nodes=cloneNode.querySelectorAll(".cd");
nodes[0].id=genId+"2"
nodes=cloneNode.querySelectorAll(".ourdatabutton");
nodes[0].onclick=function(){dropDownPopulater(genId+"1",genId+"2",genId+"3",genId+"4")};
nodes=cloneNode.querySelectorAll(".desc");
nodes[0].id=genId+"3";
nodes[0].value="";
nodes[1].id=genId+"4";
nodes[1].value="";
nodes[2].id=genId+"5";
nodes[2].value="";

document.getElementById('data').appendChild(cloneNode);
}

function deleteRow(id)
{
document.getElementById(id).remove()
}



function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

