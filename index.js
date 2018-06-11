//document.body.innerHTML = "Hello world!";
var colorSelector ="";

        for(var x = 0; x < 50; x++){
            var row = document.createElement('div');
            row.className='row';
            for(var y=0;y<50;y++) {
                const col = document.createElement('div');
                col.className = 'column';
                col.addEventListener('click',()=>{
                    col.style.backgroundColor='red';
                });
                row.appendChild(col);
             }
            document.body.appendChild(row);
        }



    const colors = document.createElement('div');
    colors.className = 'column';
    colors.style.backgroundColor='green';
    colors.addEventListener('click',()=>{
        colorSelector=colors.style.backgroundColor;
    });
     alert(colorSelector);
    const colors1 = document.createElement('div');
    colors1.className = 'column';
    colors1.style.backgroundColor='yellow';

    row.appendChild(colors);
    row.appendChild(colors1);


