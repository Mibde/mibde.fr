function myFunction() {
  var x = document.getElementById("header");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

async function get_recent_activities() {
  var myHeaders = new Headers();
  myHeaders.set('Access-Control-Allow-Origin', '*');
  var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'no-cors',
    site: 'none',
    cache: 'default'
  };
  //effectue une requette http vers get_recent.php
  var myRequest = new Request('https://mibde.fr/get_recent.php', myInit);
  let response = await fetch(myRequest, myInit);
  let responseText = await response.text();
  var data = JSON.parse(responseText);
  var a = document.getElementById("recent_content");
  data.forEach((item, i) => {
    //Ajoute à la div "recent_content" les activités récent avec la date
    var ele = document.createElement("div");
    var date = item[1].split(" ")[0].split("-"); //Recupère uniquement la date sans l'heure
    ele.innerHTML = "[" + date[2] + "." + date[1] + "." + date[0] + "] : " + item[2] + " ";
    a.appendChild(ele);
  });
}
async function get_today() {
  var myHeaders = new Headers();
  var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'no-cors',
    site: 'none',
    cache: 'default'
  };

  var myRequest = new Request('https://mibde.fr/get_week.php', myInit);
  let response = await fetch(myRequest, myInit);
  let responseText = await response.text();
  var data = JSON.parse(responseText);
  /*console.log(data);
  data.forEach((item, i) => {
      console.log(item);
  });*/
  //Cette fonction retourne les activitées prévue pour les 7jours à venir
  return data;
}
var savoir_plus = document.createElement("div");
savoir_plus.classList.add("savoir_plus");
savoir_plus.innerHTML = "+";
function generate_today() {
  var i = 1;
  get_today().then(data => {
    //parcours le tableau des activitées
    data.forEach((item, i) => {
      //Génère des div pour y insérer des informations relative aux évenement
      /*Les div sont générer selon le model ce dessus
      <div class="act_content">
          <div class="act_content_title">
              <div class="act_content_title_text">Soirée d'intégration</div>
              <div class="savoir_plus" onclick="savoirplus()">+</div>
          </div>
          <div class="act_content_info">Le bde vous propose une soirée d'intégration le 14 octobre.</div>
      </div>
      */
      console.log(item);
      //cree les div
      var act_content = document.createElement("div");
      var act_content_title = document.createElement("div");
      var act_content_title_text = document.createElement("div");
      var act_content_info = document.createElement("div");
      var savoir = savoir_plus.cloneNode(1);

      //ajoute la class au div correspondante
      act_content.classList.add("act_content");
      act_content_title.classList.add("act_content_title");
      act_content_title_text.classList.add("act_content_title_text");
      act_content_info.classList.add("act_content_info");
      act_content_info.classList.add("hide");
      act_content_title_text.innerHTML = item[1];
      // Ajoute à la div "savoir plus" son id et sa class correspondante
      // Attache un "eventlistenner" pour detecter les clicks
      savoir.id = i;
      if (item[3] == "event") savoir.classList.add("event");
      else if (item[3] == "pedagogie") savoir.classList.add("pedagogie");
      else if (item[3] == "autre") savoir.classList.add("diver");
      savoir.addEventListener('click', show_activitie);
      //Ajoute à "act_content_info son id et son contenue"
      act_content_info.id = "act_content_info_" + i;
      act_content_info.innerHTML = item[4];
      //Ajoute à "act_content" les elements qu'il contient selon le model
      act_content_title.appendChild(act_content_title_text);
      act_content_title.appendChild(savoir);

      act_content.appendChild(act_content_title);
      act_content.appendChild(act_content_info);
      //Ajoute le tout à la page web, dans la div "activities"
      document.getElementById("activites").appendChild(act_content);
    });
  });

}
function show_activitie(event) {
  //console.log(event);
  document.getElementById("act_content_info_" + event.srcElement.id).classList.toggle("hide");
}
get_recent_activities();
generate_today();
