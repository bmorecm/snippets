const table = document.createElement('table');
const text = document.getElementsByTagName('pre')[0].innerHTML;
var new_str = text.replace(/\n/g,',');
new_str = new_str.replace(/\s\s+/g,'        ');
new_str = new_str.replace(/(\d)\s+/g,'$1     ')
new_str = new_str.replace(/\s+(\d)/g,'     $1');
const lines = new_str.split(',');

function addToTable(str,single_space){
   let new_str = !single_space ? str.replace(/\s\s+/g,',') : str.replace(/\s+/g,','),
       arr = new_str.split(','),
       tr = document.createElement('tr');
   for(let i=0;i<arr.length;i++){
      let td = document.createElement('td');
      td.innerHTML = arr[i];
      tr.appendChild(td);
   }
  table.appendChild(tr);
}
for(var i=0;i<lines.length;i++){
    var single_space = i === 0 ? true : false;
    addToTable(lines[i],single_space);
}
var style = document.createElement('style');
style.innerHTML = 'table td {border:1px solid #000;padding:5px 10px;}table{max-width:100%;}';
document.body.appendChild(style);
document.body.appendChild(table);