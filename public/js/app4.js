$(`#app4`).html(`<div class="cssload-wrap">
  <div class="cssload-circle"></div>
  <div class="cssload-circle"></div>
  <div class="cssload-circle"></div>
  <div class="cssload-circle"></div>
  <div class="cssload-circle"></div>
</div> `);

setTimeout(function(){
  x();
},3000);

function x(){
$.ajax({
  url: "https://www.omdbapi.com/?i=tt0330373"
}).done(function(res){
  console.log(res);
  let html = `
  <center>
  <font color="FF2B2B">
    <h1>${res.Title}</h1>
    <h3>${res.Plot}</h1>
    <img src="${res.Poster}"/>
    </center>
    <h4> "Official Trailer" </h4>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3EGojp4Hh6I?ecver=1" frameborder="0" allowfullscreen></iframe>
    <main>
     <section>
     <h4> "Images"</h4>
         <figure>
<a target="_blank" href="img/4.1.jpg" alt="img/4.1" title="img/4.1"><img src="img/4.1.jpg" width="900" height="400"></a>
           </figure>
             <figure>
<a target="_blank" href="img/4.2.jpg" alt="img/4.2" title="img/4.2"><img src="img/4.2.jpg" width="900" height="400"></a>
           </figure>
             <figure>
<a target="_blank" href="img/4.3.jpg" alt="img/4.3" title="img/4.3"><img src="img/4.3.jpg" width="900" height="400"></a>
           </figure>
             <figure>
<a target="_blank" href="img/4.4.jpg" alt="img/4.4" title="img/4.1"><img src="img/4.4.jpg" width="900" height="400"></a>
           </figure>
         
     </section>
    </main>
        <center><div style="overflow:auto;width: 100px;height:60px;background:#ccc;float:0;top:0;padding:3px;">
<p > <a href="/"><b>Back To Main</b></a></p>
  `;
  $('#app4').html(html);


});
}



