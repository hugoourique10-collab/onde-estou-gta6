(function(){
"use strict";
/* st: ok = confirmado por várias fontes; rel = relatado por uma fonte só; conf = fontes divergem */
var T={ok:["Fixo · confirmado por várias fontes","ok"],rel:["Relatado · fonte única","rel"],conf:["Fontes divergem","conf"]};
var G=[
["Capítulo 2 · Port Gellhorn",[
["Brooks Boatworks (operação ilegal)","6823","ok","Nordeste de Port Gellhorn.","Mapa na parede do andar de cima: segure L2/LT para estudar e os códigos dos três cofres Kolt entram no celular.","Dinheiro (valor não informado)."],
["La Cascara Motel (operação ilegal)","6969","ok","Port Gellhorn, sala dos fundos com grafites.","Mesmo mapa de Brooks Boatworks.","Dinheiro (valor não informado)."],
["Kingpin Bowling (operação ilegal)","0300","ok","Port Gellhorn, escritório no nordeste ao lado dos pinos de boliche.","Mesmo mapa de Brooks Boatworks.","Guarda um dos Key Valuables do capítulo."],
["Delights Cabaret (missão Afternoon Delight)","2008","conf","Port Gellhorn, escritório dos fundos: cozinha, depois backstage.","Pista não localizada nas fontes.","Notas marcadas. Abrir alerta toda a segurança."],
["Sunrise RV Park (Cottonmouth Bay)","6769","rel","Cottonmouth Bay.","Pista não localizada nas fontes.","Não informada."],
["Trailer queimado (Cottonmouth Lake)","44017","ok","Banco de areia ao sul do lago; cofre sob o micro-ondas.","Fotos e cartões-postais na parede, lidos da esquerda para a direita; o primeiro 4 está parcialmente coberto.","Dinheiro + carta colecionável Los Santos Pounders."],
["Garagem na Rockledge Rd (Grayson)","2727","rel","Grayson, Lummox County. Teclado de garagem, não cofre.","Pista não localizada nas fontes.","Vamos para roubar na missão."]
]],
["Capítulo 3 · Vice City (Yasmani's Jewelry Jobs)",[
["Casa de Empeño","1680","ok","Vice City; cofre no escritório pequeno dos fundos.","O código aparece no cartão do trabalho no mapa.","Corrente de crânio de búfalo (item pedido por Yasmani)."],
["Richardson Jewelry & Diamonds","6815","ok","Centro de Vice City; canto nordeste da sala central.","Cartão do trabalho no mapa.","Anel de diamante (item pedido)."],
["Donovan Banks & Co.","0104","ok","Vice City; metade do corredor longo dos fundos. Digite o zero inicial.","Cartão do trabalho no mapa.","Colar de ametista (item pedido)."]
]]
];
var X=["Outros códigos citados nos guias (ainda não pedidos por você): 7700 (porta do Brian's Lockup, Cap. 1, fixo), 0420 (sala dos fundos da Moonstone Boutique, Cap. 1), 7777 (Nova Auto, Hamlet), 0072 (cofre do posto de pesquisa de Pelican Valley, derivado de uma pista de quebra-cabeça), 62412 (lavanderia abandonada, Belville), 8140 (Fleeca Bank, Thompson, citado por uma fonte), 4444 (Janjak's Garage, La Perle).",
"Cofres de assalto aleatório (stick-ups) usam códigos de 4 dígitos que mudam; não existe lista fixa para eles.",
"Não encontrei valor em dinheiro confirmado para nenhum cofre, nem rota passo a passo além do que está acima. Fontes consultadas em 21/11/2026: VICE, bo3.gg, Sportskeeda, nisu.io, gta6everything.com, outputlag, thetechbasket, retrobroker. Os cofres de Yasmani e os três do mapa de Brooks Boatworks coincidem em todas as fontes; os demais variam."];
function h(s){return String(s).replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})}
function build(){
 var d=document.createElement("div");d.id="cofres";
 d.innerHTML=G.map(function(g){
  return '<div class="blk"><h3>Cofres: '+h(g[0])+'</h3>'+g[1].map(function(s){
   var t=T[s[2]]||["Divergente","conf"];
   return '<div class="sf"><div>'+h(s[0])+'<span class="tag '+(s[2]==="ok"?"ok":"")+'">'+t[0]+'</span></div><b class="code">'+h(s[1])+'</b>'+
   '<span>Local: '+h(s[3])+'</span><span>Onde achar a pista: '+h(s[4])+'</span><span>Recompensa: '+h(s[5])+'</span></div>';
  }).join("")+'</div>';
 }).join("")+'<div class="blk"><h3>Observações</h3><ul>'+X.map(function(x){return "<li>"+h(x)+"</li>"}).join("")+'</ul></div>';
 return d;
}
function mount(){
 var v=document.getElementById("v-dinheiro");
 if(!v||v.querySelector("#cofres"))return;
 var n=v.querySelector(".note");
 v.insertBefore(build(),n||null);
}
var v=document.getElementById("v-dinheiro");
if(v){new MutationObserver(mount).observe(v,{childList:true});mount();}
})();
