//document.body.innerHTML = "Hello world!";
var colorSelector = 0;

        for(var x = 0; x < 40; x++){
            var row = document.createElement('div');
            row.className='row';
            for(var y=0;y<60;y++) {
                const col = document.createElement('div');
                col.className = 'column';
                col.addEventListener('click',()=>{
                    col.style.backgroundColor=colorSelector;
                });
                row.appendChild(col);
             }
            document.body.appendChild(row);
        }

    var breakVal = document.createElement('br')
    row.appendChild(breakVal);

    const colorsValue = ['red','blue','green','Chocolate ','DarkGray ','DarkKhaki' ,'yellow','pink','black','purple','white','CornflowerBlue','BlanchedAlmond','BlueViolet']


    for(let i =0;i<=colorsValue.length;i++){
        const colors = document.createElement('div');
        colors.className = 'column';
        colors.style.backgroundColor=colorsValue[i];
        colors.addEventListener('click',()=>{
            colorSelector = colorsValue[i];
        });
        row.appendChild(colors);
    }





