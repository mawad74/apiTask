

function loadDoc(){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 ){
            document.getElementById("demo").innerHTML = this.responseText;          
        }
    }
    xhttp.open("GET",'https://jsonplaceholder.typicode.com/photos',true);
    xhttp.send()
} 

//======================================================
//======================================================

// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(function(item){
//     return item.json();
// })
// .then(function(result){
//     document.querySelector('.test img').src = result[0].url;
//     document.querySelector('.test h2').innerHTML = result[0].id;
//     document.querySelector('.test h4').innerHTML = result[0].title;   
// })

//======================================================
//=========================API2=============================

(async function getApi(){
    var item = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    var result = await item.json();
    var data = result.recipes;
    var text = "";

    for(var i=0; i< data.length; i++){
        var cartoona = `  
                          <div class="col-md-4 text-center mb-4">
                          <img style="height:350px " src="${data[i].image_url}" class="img-fluid">
                          <h2>${data[i].title}</h2>
                          <h5>${data[i].recipe_id}</h5>
                          </div>
                          `;
                          
        text = text + cartoona;                  
    }
    document.querySelector('.test').innerHTML = text;
    
})();

//======================================================
//=========================API3=============================

(async function getApi2(){
    var item2 = await fetch('https://jsonplaceholder.typicode.com/photos');
    var result2 = await item2.json();
    var text2 = "";

    for(var i=0; i< result2.length; i++){
        var cartoona2 = `  
                          <div class="col-md-4 text-center mb-4">
                          <img style="height:350px " src="${result2[i].url}" class="img-fluid">
                          <h2>${result2[i].id}</h2>
                          <h5>${result2[i].title}</h5>
                          </div>
                          `;
                          
        text2 = text2 + cartoona2;                  
    }
    document.querySelector('.test2').innerHTML = text2;
    
})();




