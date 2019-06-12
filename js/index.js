//make sure document is loaded before running scripts
document.addEventListener("DOMContentLoaded", function(){
    console.log("Document loaded");

    const infoDiv = document.getElementById('info-div');

    const svg = document.getElementById('svg-main');

    const arrow = document.getElementById('arrow');

     infoDiv.addEventListener('click', function (){
         this.style.display = 'none';
         arrow.style.display = 'none';
     });

    let bhic = document.getElementById('Layer_1');

    bhic.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> BHI Conservancy Campus </h2><p>Come see us! We'd love to show you around. The campus includes the Barrier Island Study Center, an education building, a dorm and the Turtle Central Gift Shop.</p>";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
       infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });

    let c10 = document.getElementById('Layer_13');

    c10.addEventListener('click', function(e){
        infoDiv.innerHTML = " <h2> Frying Pan Shoals </h2> <p> Another great fishing spot, the Point of Cape Fear is also popular for beachcombing and birding.</p> ";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });


    let c9 = document.getElementById('Layer_3');

    c9.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> Dune Ridge </h2> <p>The BHI dune ridge is 2000 years old and runs parallel to the South Beach shoreline extending across the island. See if you can spot some fox, coyote or deer. </p>";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });


    let c8 = document.getElementById('Layer_4');

    c8.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> Maritime Forest Trails </h2> <p>On this hike, you will see the evergreen forest, including live oaks, sabal palmettos and vines essential for barrier island stability. Keep a look out for deer, snakes and woodpeckers.</p> ";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });


    let c7 = document.getElementById('Layer_5');

    c7.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> South Beach </h2> <p>On South Beach, see if you can spot dolphins or nesting sea turtles.</p> ";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });


    let c6 = document.getElementById('Layer_6');

    c6.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> Kent Mitchell Trail </h2><p>This short hike will take you through the salt marsh hammocks where you can see herons, painted buntings, red-tailed hawks and more. </p>";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });


    let c5 = document.getElementById('Layer_7');

    c5.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> Ibis Sanctuary </h2> <p>Quiet and Remote the Ibis Lake sanctuary is only accessible with  BHI Conservancy Staff. It is popular with ibis, heron, bald eagles, fresh water turtles and alligators, so we hope you can join us during one of our programs. </p>";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });


    let c4 = document.getElementById('Layer_9');

    c4.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> Wildlife Overlook </h2> <p>From the Wildlife Overlook you can safely see alligators, fresh water turtles, warblers and herons. Please do not feed any wildlife. </p>";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });


    let c3 = document.getElementById('Layer_10');

    c3.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> Village Creek Access </h2> <p>Meet here for out Kayaking, Crabbing and Marsh Kid's Fishing programs or go on your own. The Village Creek Access has beautiful salt marsh views and great fishing.</p> ";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });


    let c2 = document.getElementById('Layer_8');

    c2.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> West Beach </h2> <p>When you look out over West Beach you will see the Jay Bird Shoals, the mouth of the Cape Fear River, and Oak Island, as well as the first Terminal Groin in NC. It also has some of the best fishing on Bald Head Island. </p>";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });



    let c1 = document.getElementById('Layer_11');
    c1.addEventListener('click', function(e){
        infoDiv.innerHTML = "<h2> Beach Access 1 </h2><p>At the mouth of the Bald Head Creek, Beach Access 1 boasts fantastic views of shorebirds, BHI's Bald Eagles and the Cape Fear River. </p>";
        infoDiv.style.display = 'flex';
        arrow.style.display = 'flex';
        infoDiv.style.left = e.clientX - 150 + "px";
        infoDiv.style.top = e.clientY + 10 +"px";
        arrow.style.left =  e.clientX  + "px";
        arrow.style.top = e.clientY +5 +"px";
    });





    //Close Ready function
});