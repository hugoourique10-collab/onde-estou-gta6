(function(){"use strict";
var W=window.G6={};
W.h=function(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
W.get=function(k,d){try{var v=localStorage.getItem("gta6x:"+k);return v?JSON.parse(v):d}catch(e){return d}};
W.set=function(k,v){try{localStorage.setItem("gta6x:"+k,JSON.stringify(v))}catch(e){}};
W.$=function(s,r){return(r||document).querySelector(s)};
W.$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var T={g:["Segundo guia","ok"],t:["Testado pela VICE","ok"],d:["Divergência entre fontes",""],i:["Relato isolado",""],n:["Ainda não descoberto",""],a:["Pesquisa anterior",""]};
W.tag=function(k){var t=T[k]||T.i;return '<span class="tag'+(t[1]?" ok":"")+'">'+t[0]+'</span>'};
var S={pyxMoney:["PowerPyx: dinheiro","https://www.powerpyx.com/gta-6-money-guide-how-to-get-money-fast/"],pyxStats:["PowerPyx: atributos","https://www.powerpyx.com/gta-6-how-to-increase-character-stats-health-cardio-focus/"],pyxMis:["PowerPyx: missões","https://www.powerpyx.com/gta-6-full-walkthrough-all-missions"],pyxYas:["PowerPyx: Yasmani","https://www.powerpyx.com/gta-6-yasmanis-jewelry-jobs-walkthrough/"],pcg:["PC Gamer: relacionamento","https://www.pcgamer.com/games/grand-theft-auto/gta-6-romance-jason-lucia/"],vice:["VICE: códigos de operações ilegais","https://www.vice.com/en/article/all-gta-6-safe-codes-illegal-operations/"],grSafe:["GamesRadar: códigos de cofres","https://www.gamesradar.com/games/grand-theft-auto/gta-6-safe-codes/"],keen:["KeenGamer: cheats","https://www.keengamer.com/articles/guides/gta-6-all-cheat-codes-for-ps5-and-xbox-and-how-to-unlock-them/"],gtac:["GTA Corner: cheats","https://www.gtacorner.com/cheats"],grAni:["GamesRadar: animais","https://www.gamesradar.com/games/grand-theft-auto/gta-6-animals/"],heist:["HeistAtlas: animais","https://heistatlas.com/en/guide/animals/"]};
W.src=function(keys){return '<p class="note">Fontes: '+keys.map(function(k){return '<a href="'+S[k][1]+'" target="_blank" rel="noopener" style="text-decoration:underline">'+W.h(S[k][0])+'</a>'}).join(" · ")+'</p>'};
W.BACK='<a class="back" href="#inicio">← Voltar ao Início</a>';
W.fresh=function(id){var v=document.getElementById("v-"+id);if(!v)return null;var n=v.cloneNode(false);v.parentNode.replaceChild(n,v);return n};
W.view=function(id,nav,title,desc,icon){
 if(!W.$("#v-"+id)){var s=document.createElement("section");s.className="view";s.id="v-"+id;W.$("main").appendChild(s);
  W.$("#drawer").insertAdjacentHTML("beforeend",'<a href="#'+id+'">'+nav+'</a>');
  W.$("#hub").insertAdjacentHTML("beforeend",'<a class="card" href="#'+id+'"><svg viewBox="0 0 24 24" aria-hidden="true">'+icon+'</svg><div><b>'+title+'</b><span>'+desc+'</span></div></a>');}
 return W.$("#v-"+id)};
var CK=W.get("ck",{});
W.ck=function(key,label){return '<label class="ckl"><input type="checkbox" data-ck="'+W.h(key)+'"><span>'+W.h(label)+'</span></label>'};
W.sync=function(root){W.$$("input[data-ck]",root).forEach(function(i){i.checked=!!CK[i.dataset.ck]})};
W.done=function(k){return !!CK[k]};
document.addEventListener("change",function(e){var i=e.target;if(!i.dataset||!i.dataset.ck)return;if(i.checked)CK[i.dataset.ck]=1;else delete CK[i.dataset.ck];W.set("ck",CK);document.dispatchEvent(new CustomEvent("g6ck"))});
var uid=0;
W.btn=function(id,on,off){return '<button type="button" class="btn" data-tg="'+id+'" data-on="'+on+'" data-off="'+off+'">'+on+'</button>'};
W.id=function(p){return p+(++uid)};
document.addEventListener("click",function(e){var b=e.target.closest("[data-tg]");if(!b)return;var t=document.getElementById(b.dataset.tg);if(!t)return;var hid=t.hasAttribute("hidden");if(hid)t.removeAttribute("hidden");else t.setAttribute("hidden","");b.textContent=hid?b.dataset.off:b.dataset.on});
W.card=function(name,tg,lines){return '<div class="sf"><div>'+W.h(name)+(tg?W.tag(tg):"")+'</div>'+lines.filter(function(l){return l&&l[1]}).map(function(l){return '<span>'+W.h(l[0])+': '+W.h(l[1])+'</span>'}).join("")+'</div>'};
W.pbar=function(label,d,t){var p=t?Math.round(d/t*100):0;return '<div class="pr"><div class="ov-head" style="margin:0"><span>'+W.h(label)+'</span><strong style="font-size:1rem">'+d+'/'+t+'</strong></div><div class="bar"><i style="width:'+p+'%"></i></div></div>'};
})();
(function(){try{"use strict";
var G=G6,h=G.h,v=G.fresh("dinheiro");if(!v)return;
var L={d:"Desbloqueio",p:"Personagem",l:"Local",r:"Requisitos",i:"Investimento inicial",v:"Valores relatados",m:"Tempo",t:"Repetibilidade",k:"Riscos e consequências",e:"Melhor estratégia"};
var NI="não informado";
var CAP=[
{n:"Capítulo 1",aviso:"Segundo o guia consultado, acumular dinheiro aqui compensa pouco: boa parte do dinheiro é perdida na transição para o Capítulo 2. Gaste só no necessário. Métodos de capítulos seguintes ainda não estão liberados.",m:[
["Assaltos a lojas (stick-ups)","a",{v:"Poucas centenas",k:"Esquentam a polícia"}],
["Operações de gangues","a",{l:"Ícones amarelos no mapa",e:"Roube a operação e venda os narcóticos a Brian ou Donnie"}],
["Corridas","a",{v:"Extra rápido; valor "+NI}],
["Missões e atividades que geram dinheiro","g",{v:"Valores "+NI}]
]},
{n:"Capítulo 2",cont:"Continuam valendo os métodos do Capítulo 1.",m:[
["Venda de veículos ao Moses","g",{d:"Missão Moses (Take A Vehicle to Moses)",l:"Garagem do Moses, Port Gellhorn",r:"Somente veículos sem rastreador",i:"Nenhum informado",v:"Aproximadamente US$ 1.000 ou mais por veículo",m:"1 a 2 minutos por veículo; intervalo relatado entre vendas de cerca de 2 minutos",t:"Repetível",k:"Veículos roubados perto da garagem podem ser recusados",e:"Procure veículos na avenida principal de Port Gellhorn"}],
["Operações ilegais da Kolt (ex.: La Cascara Motel) e narcóticos ao Dunk","a",{d:"Chegada a Port Gellhorn",v:"Valor "+NI,e:"Os códigos dos cofres estão na aba Cofres"}]
]},
{n:"Capítulo 3",cont:"Continuam valendo os métodos dos capítulos anteriores.",m:[
["Assaltos a joalherias","g",{d:"Yasmani’s Jewelry Jobs (depois de Boobie Time)",l:"Vice City",v:"Aproximadamente US$ 10 mil a US$ 25 mil por assalto",t:"Repetível",e:"Explore cofres e vitrines para aumentar o saque. Compare abaixo a abordagem silenciosa com a de maior saque.",x:"jw"}],
["Venda de carros no Pay ’n’ Spray","g",{d:"Desbloqueio correspondente no Capítulo 3",r:"Veículos com rastreador padrão passam a ser aceitos",v:"Aproximadamente US$ 4 mil ou mais por veículo bom",k:"Um guia anterior citava o Pay ’n’ Spray já no Capítulo 2: divergência não resolvida"}],
["Randy’s Wish List","g",{d:"Missão Clonin’ Keys, Makin’ GS",r:"Key Cloner (recompensa do desbloqueio) e carro pedido em boas condições",l:"Mapa ou localizações indicadas por Randy",v:"Normalmente US$ 30 mil ou mais por veículo em boas condições",t:"Repetível",e:"Lista de 18 carros esportivos especiais. Marque abaixo.",x:"rn"}],
["Bônus de capítulo","g",{v:"US$ 120 mil recebidos automaticamente ao final do Capítulo 3"}]
]},
{n:"Capítulo 4",cont:"Continuam valendo os métodos dos capítulos anteriores.",m:[
["Assaltos a cofres de grandes bancos","g",{d:"Missão opcional That’s Where The Money Is… (Wait at the Cafe), no final do capítulo",i:"Yasmani vende informações das vans por US$ 10 mil, após completar os requisitos anteriores",v:"Até aproximadamente US$ 205 mil por assalto",m:"Cerca de 5 minutos",t:"Repetível",k:"Gera quatro estrelas de procurado",e:"Siga as vans de segurança, espere a abertura do cofre e entre durante a movimentação do dinheiro. Use uma moto rápida para escapar e troque de veículo depois de despistar a polícia."}]
]},
{n:"Capítulo 5",aviso:"Nenhum método exclusivo deste capítulo foi informado no material.",cont:"Continuam valendo os métodos dos capítulos anteriores.",m:[]},
{n:"Pós-jogo",cont:"Continuam valendo os métodos anteriores.",m:[
["Assaltos a cofres de grandes bancos (repetidos)","g",{v:"O guia relata cerca de US$ 100 mil a US$ 200 mil a cada 5 minutos",t:"Repetível"}]
]},
{n:"Comparativo"}
];
var TB=[
["Moses (veículos)","Cap. 2","Nenhum","~US$ 1.000 / máx. "+NI,"1 a 2 min por veículo","Estimativa a partir dos dados: ~US$ 500 a 1.000/min, com intervalo de ~2 min entre vendas","Sim","Carro perto da garagem pode ser recusado",NI,"Segundo guia"],
["Joalherias","Cap. 3","Yasmani’s Jewelry Jobs concluído","US$ 10 mil / US$ 25 mil",NI,"Dados insuficientes","Sim",NI,NI,"Segundo guia"],
["Pay ’n’ Spray","Cap. 3","Nenhum informado","~US$ 4 mil / "+NI,NI,"Dados insuficientes","Sim (guia)",NI,NI,"Segundo guia"],
["Randy’s Wish List","Cap. 3","Key Cloner (vem do desbloqueio)","~US$ 30 mil / "+NI,NI,"Dados insuficientes","Sim","Carro precisa estar em boas condições",NI,"Segundo guia"],
["Bancos grandes","Cap. 4 (fim)","US$ 10 mil (informações das vans)","— / ~US$ 205 mil","~5 min","Até ~US$ 41 mil/min (US$ 205 mil em 5 min), no melhor caso","Sim","Quatro estrelas de procurado",NI,"Segundo guia"],
["Bancos grandes (pós-jogo)","Pós-jogo","Igual ao Cap. 4","US$ 100 mil / US$ 200 mil","~5 min","~US$ 20 a 40 mil/min, derivado do intervalo relatado","Sim","Quatro estrelas de procurado",NI,"Segundo guia"]
];
var cur=Math.min(6,Math.max(0,parseInt(G.get("dincap",0),10)||0));
var rn=G.get("randy",[]);while(rn.length<18)rn.push("");
var jw=G.get("joia",{s:"",m:""});
function money(x){var n=parseFloat(x);return isFinite(n)?"US$ "+n.toLocaleString("pt-BR"):"—"}
function jwOut(){var s=parseFloat(jw.s),m=parseFloat(jw.m);return (isFinite(s)&&isFinite(m))?"Diferença (maior saque − silenciosa): "+money(m-s):"Preencha os dois valores para comparar."}
function randy(){var f=0,d=0,i;for(i=0;i<18;i++){if(G.done("rf"+i))f++;if(G.done("rd"+i))d++}
 var o='<div class="blk"><h3>Randy’s Wish List: 18 carros</h3><p class="lead">Os nomes dos 18 carros não vieram no material. Digite o nome ao encontrar cada um.</p>'+G.pbar("Encontrados",f,18)+G.pbar("Entregues",d,18);
 for(i=0;i<18;i++)o+='<div class="sf"><input class="mini" type="text" maxlength="40" data-rn="'+i+'" placeholder="Carro #'+(i+1)+'" value="'+h(rn[i])+'" aria-label="Nome do carro '+(i+1)+'">'+G.ck("rf"+i,"Encontrado")+G.ck("rd"+i,"Entregue")+'</div>';
 return o+'</div>'}
function jwBox(){return '<div class="blk"><h3>Silencioso × maior saque: seus resultados</h3><p class="lead">O material não traz valores separados por abordagem. Registre os seus.</p><div class="ctl"><input class="mini" type="number" inputmode="numeric" data-jw="s" placeholder="Total na abordagem silenciosa (US$)" value="'+h(jw.s)+'"><input class="mini" type="number" inputmode="numeric" data-jw="m" placeholder="Total na abordagem de maior saque (US$)" value="'+h(jw.m)+'"></div><p id="jwo" class="note" style="margin:0">'+h(jwOut())+'</p></div>'}
function render(){
 var c=CAP[cur],o=G.BACK+'<h2>Como Ganhar Dinheiro</h2><p class="lead">Escolha o capítulo. Cada aba mostra só os métodos desbloqueados nele.</p><div class="ctabs">'+CAP.map(function(x,i){return '<button type="button" class="ctab'+(i===cur?" on":"")+'" data-c="'+i+'" aria-pressed="'+(i===cur)+'">'+x.n+'</button>'}).join("")+'</div>';
 if(cur===6){
  o+='<div class="blk"><h3>Comparativo de métodos</h3><p class="lead">Valores são retornos informados pelos guias, não garantias.</p><div class="tbl"><table><thead><tr><th>Método</th><th>Desbloqueio</th><th>Investimento</th><th>Retorno mín. / máx. conhecido</th><th>Tempo</th><th>Lucro por minuto</th><th>Repetível</th><th>Riscos</th><th>Personagem</th><th>Confirmação</th></tr></thead><tbody>'+TB.map(function(r){return '<tr>'+r.map(function(x){return '<td>'+h(x)+'</td>'}).join("")+'</tr>'}).join("")+'</tbody></table></div></div>'+
  '<div class="blk"><h3>Meta de poupança</h3>'+G.card("Save for the Future","g",[["Máximo da missão","Exige US$ 2 milhões (segundo o guia consultado)"]])+'</div>';
 }else{
  o+='<div class="blk"><h3>Métodos: '+c.n+'</h3>'+(c.aviso?'<div class="warn">'+h(c.aviso)+'</div>':"")+(c.m.length?c.m.map(function(m){return G.card(m[0],m[1],Object.keys(L).filter(function(k){return m[2][k]}).map(function(k){return [L[k],m[2][k]]}))}).join(""):"")+(c.cont?'<p class="note" style="margin:8px 0 0">'+h(c.cont)+'</p>':"")+'</div>';
  if(cur===2)o+=jwBox()+randy();
 }
 o+='<p class="note">Os cofres com código estão na aba <a href="#cofres" style="text-decoration:underline">Cofres</a>. Divergências entre fontes foram mantidas, e nenhuma estimativa deve ser lida como garantia.</p>'+G.src(["pyxMoney","pyxYas"]);
 v.innerHTML=o;G.sync(v)}
v.addEventListener("click",function(e){var b=e.target.closest(".ctab");if(!b)return;cur=parseInt(b.dataset.c,10);G.set("dincap",cur);render();var n=v.querySelector('.ctab[data-c="'+cur+'"]');if(n)n.focus()});
v.addEventListener("input",function(e){var t=e.target;if(t.dataset.rn!==undefined){rn[+t.dataset.rn]=t.value;G.set("randy",rn)}else if(t.dataset.jw){jw[t.dataset.jw]=t.value;G.set("joia",jw);var p=document.getElementById("jwo");if(p)p.textContent=jwOut()}});
document.addEventListener("g6ck",function(){if(cur===2&&v.classList.contains("on")){var y=window.scrollY;render();window.scrollTo(0,y)}});
render();
}catch(e){console.error("dinheiro",e)}})();
(function(){try{"use strict";
var G=G6,h=G.h;
var v=G.view("cofres","Cofres","Cofres","Códigos de cofres, portas e teclados, por capítulo",'<path d="M4 5h16v14H4zM9 12h.01M13 9v6"/>');
var NI="Não informado";
var Y="Yasmani’s Jewelry Jobs (Capítulo 3, depois de Boobie Time)";
var YR="Recompensa informada: US$ 20 mil pelos itens pedidos, mais o valor de outros objetos roubados. Entregar o primeiro item pode liberar a Snap Gun.";
/* [nome, cap(0=não informado), tipo, local, missão, requisito, recompensa, código, status, pista, solução] */
var E=[
["Casa de Empeño",3,"Cofre","Vice City; escritório dos fundos",Y,"Capítulo 3","Corrente de caveira de búfalo. "+YR,"1680","g","Escritório dos fundos. O código aparece no cartão do trabalho no mapa (pesquisa anterior).","Digite 1680. Destrua as gravações na caixa de segurança próxima, quando possível."],
["Richardson Jewelry",3,"Cofre","Vice City; região nordeste da sala central",Y,"Capítulo 3","Item pedido por Yasmani. "+YR,"6815","g","Nordeste da sala central.","Digite 6815. Use a Snap Gun na porta traseira, desative o sistema de segurança e destrua as gravações."],
["Donovan Banks & Co.",3,"Cofre","Vice City; corredor traseiro",Y,"Capítulo 3","Item pedido por Yasmani. "+YR,"0104","g","Corredor traseiro. Digite o zero inicial.","Digite 0104. A Snap Gun permite entrar pela porta dos fundos; desative a segurança e destrua as gravações."],
["Brooks Boatworks (Kolt & Associates)",2,"Cofre (operação ilegal)","Nordeste de Port Gellhorn","Operação ilegal",NI,"Dinheiro (valor "+NI+")","6823","g","Mapa na parede do andar de cima: segure L2/LT para estudar (pesquisa anterior).","Digite 6823."],
["La Cascara Motel (Kolt & Associates)",2,"Cofre (operação ilegal)","Port Gellhorn; sala dos fundos","Operação ilegal",NI,"Dinheiro (valor "+NI+")","6969","g","Mesmo mapa de Brooks Boatworks (pesquisa anterior).","Digite 6969."],
["Kingpin Bowling (Kolt & Associates)",2,"Cofre (operação ilegal)","Port Gellhorn; escritório no nordeste","Operação ilegal",NI,"Um dos Key Valuables (pesquisa anterior)","0300","d","Mesmo mapa de Brooks Boatworks (pesquisa anterior).","Código reportado pela VICE: 0300 (a VICE diz ter testado os dez códigos no jogo). Código reportado por GamesRadar: 0330. Divergência entre fontes: use o campo abaixo para registrar qual funcionou na sua partida.","k"],
["Sunrise RV Park (Kingfishers)",2,"Cofre (operação ilegal)","Cottonmouth Bay","Operação ilegal",NI,"Valor "+NI,"6769","g",NI+".","Digite 6769."],
["Nova Auto Junkyard (M7)",0,"Cofre (operação ilegal)","Hamlet","Operação ilegal",NI,"Dinheiro (valor "+NI+")","7777","g","Escrito na parede de frente para o cofre (pesquisa anterior).","Digite 7777."],
["Farm Fix Meth Lab (Final Chapter)",0,"Cofre (operação ilegal)",NI,"Operação ilegal",NI,"Valor "+NI,"2121","g",NI+".","Digite 2121."],
["Illegal Sneaker Trade (San4San)",0,"Cofre (operação ilegal)",NI,"Operação ilegal",NI,"Valor "+NI,"4124","g",NI+".","Digite 4124."],
["Casa Guardia (Guardia Brothers)",0,"Cofre (operação ilegal)",NI,"Operação ilegal",NI,"Valor "+NI,"1965","g",NI+".","Digite 1965."],
["Saber Shipping Facility (Guardia Brothers)",0,"Cofre (operação ilegal)",NI,"Operação ilegal",NI,"Valor "+NI,"1122","g",NI+".","Digite 1122."],
["Saber Shipping Yard (Guardia Brothers)",0,"Cofre (operação ilegal)",NI,"Operação ilegal",NI,"Valor "+NI,"8046","g",NI+".","Digite 8046."],
["Moonstone Boutique",1,"Porta (sala dos fundos)","Key Lento","Lab Fees","Capítulo 1","Acesso à sala dos fundos","0420","a","O funcionário ou uma nota na mesa dá os dígitos (pesquisa anterior).","Digite 0420."],
["Brian’s Lockup",1,"Porta (teclado externo)","Marcado com ícone verde no mapa","Lab Fees","Capítulo 1","Acesso ao depósito","7700","a","Brian informa o código ao deixar a carga (pesquisa anterior).","Digite 7700 no teclado da porta externa."],
["Delights, escritório de Frankie",2,"Cofre","Port Gellhorn; escritório dos fundos, passando pela cozinha e backstage","Afternoon Delight","Capítulo 2","Notas marcadas (pesquisa anterior)","2008","g","Escritório dos fundos.","Digite 2008. Abrir o cofre alerta a segurança (pesquisa anterior)."],
["Trailer ao sul de Grassrivers",2,"Cofre","Trailer queimado; cofre sob o micro-ondas (pesquisa anterior)","Atividade de mundo aberto",NI,"Dinheiro e carta Los Santos Pounders (pesquisa anterior)","44017","g","Fotos e cartões-postais na parede, lidos da esquerda para a direita (pesquisa anterior).","Digite 44017."],
["Garagem na Rockledge Rd, Grayson",2,"Teclado de garagem","Grayson, Lummox County","Missão para roubar um Vamos",NI,"Veículo","2727","i","Pista "+NI.toLowerCase()+".","Digite 2727."],
["Fleeca Bank, Thompson",3,"Cofre","Thompson","Credit Check",NI,"Valor "+NI,"8140","i","Pista "+NI.toLowerCase()+".","Digite 8140."],
["Kitty Litter Lab, Balsero",3,"Teclado de garagem","Balsero","Depois de Here, Kitty Kitty",NI,"Valor "+NI,"1999","i","Pista "+NI.toLowerCase()+".","Digite 1999."],
["Sundown Private Airfield",4,"Cofre","Aeródromo Sundown","The Last Mile: Passing the Torch (depois de Pool Day)",NI,"Valor "+NI,"3718","i","Pista "+NI.toLowerCase()+".","Digite 3718."]
];
var fil=G.get("cofcap","t");
function render(){
 var list=E.filter(function(e){return fil==="t"||String(e[1])===fil});
 var d=E.filter(function(e,i){return G.done("cf"+i)}).length;
 var o=G.BACK+'<h2>Cofres</h2><p class="lead">Códigos de cofres, portas e teclados, separados por capítulo. Use Revelar, Pista ou Solução só quando precisar.</p>'+G.pbar("Cofres descobertos",d,E.length)+
 '<div class="ctl"><select id="cfsel" aria-label="Filtrar por capítulo"><option value="t">Todos os capítulos</option>'+[1,2,3,4].map(function(n){return '<option value="'+n+'">Capítulo '+n+'</option>'}).join("")+'<option value="0">Capítulo não informado</option></select></div>'+
 '<div class="warn">Por segurança contra spoilers, nenhum código aparece até você tocar em Revelar. Códigos de capítulos adiante só existem a partir do capítulo indicado.</div><div class="blk">';
 list.forEach(function(e){var i=E.indexOf(e),a="c"+i+"a",b="c"+i+"b",c="c"+i+"c";
  var extra=e[11]==="k"?'<div class="ctl"><input class="mini" data-kp type="text" maxlength="30" placeholder="Qual código funcionou na sua partida?" value="'+h(G.get("kp",""))+'"></div>':"";
  o+='<div class="sf"><div>'+h(e[0])+G.tag(e[8])+'</div><span>Tipo: '+h(e[2])+'</span><span>Capítulo: '+(e[1]?e[1]:"não informado")+'</span><span>Localização: '+h(e[3])+'</span><span>Missão ou atividade: '+h(e[4])+'</span><span>Requisito: '+h(e[5])+'</span><span>Recompensa: '+h(e[6])+'</span>'+
  '<div class="acts">'+G.btn(a,"Revelar código","Ocultar código")+G.btn(b,"Mostrar pista","Ocultar pista")+G.btn(c,"Mostrar solução completa","Ocultar solução")+'</div>'+
  '<div id="'+a+'" hidden><b class="code">'+h(e[7])+'</b></div><div id="'+b+'" hidden>Pista: '+h(e[9])+'</div><div id="'+c+'" hidden>Solução: '+h(e[10])+extra+'</div>'+
  G.ck("cf"+i,"Já descobri")+'</div>'});
 o+='</div><p class="note">“Segundo guia” vem do material de pesquisa; “Pesquisa anterior” são dados já presentes nos arquivos; “Relato isolado” tem uma só fonte. Códigos de portas, cofres e teclados estão rotulados em Tipo. Cofres de assalto comum usam códigos aleatórios.</p>'+G.src(["pyxYas","vice","grSafe"]);
 v.innerHTML=o;G.sync(v);var s=document.getElementById("cfsel");if(s)s.value=fil}
v.addEventListener("change",function(e){if(e.target.id==="cfsel"){fil=e.target.value;G.set("cofcap",fil);render()}});
v.addEventListener("input",function(e){if(e.target.dataset.kp!==undefined)G.set("kp",e.target.value)});
document.addEventListener("g6ck",function(){var p=v.querySelector(".pr");if(p){var d=E.filter(function(e,i){return G.done("cf"+i)}).length;p.outerHTML=G.pbar("Cofres descobertos",d,E.length)}});
render();
}catch(e){console.error("cofres",e)}})();
(function(){try{"use strict";
var G=G6,h=G.h,v=G.fresh("academia");if(!v)return;
var TABS=["Atributos","Evolução normal","Mais rápida legítima","Repetíveis relatados","Recuperação"];
var cur=Math.min(4,Math.max(0,G.get("trcap",0)||0));
var NOTE='<div class="warn">Quantidade de XP, limite diário e cooldown não foram confirmados. Nada disso foi estimado aqui.</div>';
var T0=[
["Força / Saúde","g",[["Efeito","Exercícios com pesos aumentam a saúde máxima"],["Onde","Equipamentos de musculação na casa de Jason, no Capítulo 1 (grátis). Academias permitem treinar mediante adesão"]]],
["Cardio / Resistência","g",[["Efeito","Influencia a resistência máxima"],["Como","Esteira e bicicleta são indicadas. Correr, pedalar e nadar também aumentam o atributo"]]],
["Foco","g",[["Efeito","Influencia o tempo disponível no efeito de foco de combate"],["Como","Desafios de tiro, golfe, sinuca, pesca e tiros na cabeça durante o perfil criminal correspondente"]]]
];
var CHK=[["Força: usar pesos","fo"],["Cardio: esteira ou bicicleta","ca"],["Cardio: correr, pedalar ou nadar","ca2"],["Foco: desafios de tiro","fc"],["Foco: golfe, sinuca ou pesca","fc2"],["Finalizar o treino para salvar o ganho","fin"],["Conferir resultados no app Fitness","app"]];
function page(){
 if(cur===0)return '<div class="blk"><h3>Os três atributos</h3>'+T0.map(function(a){return G.card(a[0],a[1],a[2])}).join("")+'</div><p class="note" style="margin:0 2px 12px">As abas a seguir organizam o treino em três guias. Jason e Lucia têm atributos próprios; o material não detalha diferenças entre os dois.</p>';
 if(cur===1)return NOTE+'<div class="blk"><h3>Evolução normal</h3><ul>'+["Comece com os pesos da casa de Jason (Capítulo 1) para Força / Saúde.","Use esteira ou bicicleta, ou corra, pedale e nade, para Cardio / Resistência.","Treine Foco com desafios de tiro, golfe, sinuca e pesca.","Finalize o treino: o guia diz que isso é importante para salvar os ganhos.","Acompanhe os resultados no aplicativo Fitness do celular."].map(function(x){return '<li>'+h(x)+'</li>'}).join("")+'</ul></div><div class="blk"><h3>Checklist</h3>'+CHK.map(function(c){return G.ck("tr"+c[1],c[0])}).join("")+'</div>';
 if(cur===2)return NOTE+'<div class="blk"><h3>Mais rápida, sem bugs</h3><ul>'+["Treino conjunto: quando estiver disponível, um personagem completa o treino enquanto o outro é usado.","Proteína após o treino acelera a recuperação, segundo o guia.","Comer e beber antes do treino dá um bônus temporário (pesquisa anterior).","Use primeiro o equipamento grátis da casa de Jason, antes de pagar academia (pesquisa anterior)."].map(function(x){return '<li>'+h(x)+'</li>'}).join("")+'</ul></div>';
 if(cur===3)return NOTE+'<div class="blk"><h3>Métodos repetíveis relatados</h3>'+G.card("Foco rápido no estande de tiro","g",[["Local","Rodgers Ranch & Shooting Range, Kelly County, nordeste de Port Gellhorn"],["Custo","Passe de autorização por US$ 5"],["Passo a passo","Selecione Market Range Beginner. O desafio leva cerca de cinco segundos. Saia pelo botão Quit e inicie de novo."],["Resultado","Relatado como repetível para aumentar o Foco"],["Confirmação","Relatado por um guia; não testado aqui. Não há dado sobre limite ou ganho por repetição."]])+'</div>';
 return '<div class="blk"><h3>Recuperação e registro</h3><ul>'+["Finalizar o treino é importante para salvar os ganhos.","O aplicativo Fitness permite acompanhar os resultados.","Proteína após o treino é indicada para acelerar a recuperação.","Dormir recupera vida e estamina (pesquisa anterior)."].map(function(x){return '<li>'+h(x)+'</li>'}).join("")+'</ul></div>'}
function render(){v.innerHTML=G.BACK+'<h2>Academia</h2><p class="lead">Força / Saúde, Cardio / Resistência e Foco.</p><div class="ctabs">'+TABS.map(function(t,i){return '<button type="button" class="ctab'+(i===cur?" on":"")+'" data-c="'+i+'">'+t+'</button>'}).join("")+'</div>'+page()+G.src(["pyxStats"]);G.sync(v)}
v.addEventListener("click",function(e){var b=e.target.closest(".ctab");if(!b)return;cur=+b.dataset.c;G.set("trcap",cur);render()});
render();
}catch(e){console.error("treino",e)}})();
(function(){try{"use strict";
var G=G6,h=G.h,v=G.fresh("relacionamento");if(!v)return;
var LV=["Running on Empty","Partners in Crime","Crazy in Love","Hot Together"];
var POS=["Segurar as mãos","Dormir juntos","Ficar no sofá conversando","Iniciar conversas","Cumprimentar o parceiro","Beijos e abraços (quando houver interação)","Comprar e entregar comida ou bebidas","Sair juntos","Fazer cabelo juntos","Participar de atividades conjuntas","Dançar juntos","Comprar roupas e acessórios um para o outro","Elogiar roupas e penteados","Concluir crimes e missões em dupla","Depositar dinheiro na poupança BuckMe","Responder mensagens","Enviar mensagens de contato","Enviar selfies","Abrir a porta do carro para o parceiro","Desejar boa noite por mensagem quando separados","Saltar de paraquedas juntos","Interações íntimas, quando disponibilizadas pelo jogo"];
var NEG=["Falhar em uma missão conjunta","Ignorar o parceiro por um período","Escolhas de missão das quais o parceiro discorda","Atropelar o parceiro"];
var ESP=["Saltar de paraquedas juntos","Dançar juntos","Fazer cabelo juntos","Comprar roupas e acessórios um para o outro","Depositar na poupança BuckMe","Enviar selfies","Abrir a porta do carro para o parceiro","Boa noite por mensagem quando separados","Interações íntimas, quando disponibilizadas"];
var TABS=["Funcionamento","Ações","Sequência","Interações especiais","Consequências","Observações"];
var cur=Math.min(5,Math.max(0,G.get("rlcap",0)||0)),lv=Math.min(3,Math.max(0,G.get("rllv",0)||0));
function li(a){return '<ul>'+a.map(function(x){return '<li>'+h(x)+'</li>'}).join("")+'</ul>'}
function page(){
 if(cur===0)return '<div class="blk"><h3>Níveis</h3><p class="lead">Toque no nível em que o casal está. A marcação é sua; não existe fórmula confirmada.</p><div class="lvls">'+LV.map(function(n,i){return '<button type="button" class="lv'+(i<=lv?" on":"")+'" data-lv="'+i+'">'+(i+1)+'. '+h(n)+'</button>'}).join("")+'</div><div class="warn">A relação precisa ser cuidada pelos dois personagens. Não basta jogar como Jason e fazer ações positivas com Lucia: alterne para Lucia e cuide de Jason também.</div></div>';
 if(cur===1)return '<div class="blk"><h3>Ações positivas (checklist)</h3>'+POS.map(function(x,i){return G.ck("rp"+i,x)}).join("")+'</div><div class="blk"><h3>Ações negativas (evite)</h3>'+li(NEG)+'</div>';
 if(cur===2)return '<div class="warn">Roteiro montado a partir das ações relatadas. A ordem não foi testada e não há quantidades confirmadas.</div><div class="blk"><h3>Sequência sugerida</h3><ol style="margin:0;padding-left:20px;display:grid;gap:8px">'+["Faça missões e crimes em dupla e evite falhar.","Entre as missões, passe tempo juntos: sair, dançar, conversar no sofá, comer e beber.","Cuide da rotina: cumprimentar, dormir juntos, responder mensagens e mandar boa noite.","Troque para o outro personagem e repita, para o parceiro também ser cuidado.","Reforce com presentes e atividades especiais: roupas, cabelo, BuckMe, paraquedas.","Marque o nível atual na aba Funcionamento."].map(function(x){return '<li>'+h(x)+'</li>'}).join("")+'</ol></div>';
 if(cur===3)return '<div class="blk"><h3>Interações especiais</h3>'+ESP.map(function(x,i){return G.ck("re"+i,x)}).join("")+'</div>';
 if(cur===4)return '<div class="blk"><h3>Consequências conhecidas</h3>'+li(["Ignorar o parceiro, falhar em missão conjunta, escolhas de missão com as quais ele discorda e atropelá-lo prejudicam a relação (relatado).","Se o casal for negligenciado, eles se afastam. Mesmo no pior nível, a parceria criminal continua e a história segue (pesquisa anterior).","Efeitos nas cenas e nos finais não foram demonstrados e não estão afirmados aqui."])+'</div>';
 return '<div class="blk"><h3>Observações e descobertas não confirmadas</h3><textarea class="obs" id="rlobs" placeholder="Anote aqui o que você descobrir">'+h(G.get("rlobs",""))+'</textarea></div>'}
function render(){v.innerHTML=G.BACK+'<h2>Relacionamento</h2><p class="lead">Jason e Lucia: quatro níveis. Atual: <b>'+h(LV[lv])+'</b>.</p><div class="ctabs">'+TABS.map(function(t,i){return '<button type="button" class="ctab'+(i===cur?" on":"")+'" data-c="'+i+'">'+t+'</button>'}).join("")+'</div>'+page()+G.src(["pcg"]);G.sync(v)}
v.addEventListener("click",function(e){var b=e.target.closest(".ctab");if(b){cur=+b.dataset.c;G.set("rlcap",cur);render();return}var l=e.target.closest(".lv");if(l){lv=+l.dataset.lv;G.set("rllv",lv);render()}});
v.addEventListener("input",function(e){if(e.target.id==="rlobs")G.set("rlobs",e.target.value)});
render();
}catch(e){console.error("relacao",e)}})();
(function(){try{"use strict";
var G=G6,h=G.h,v=G.fresh("codigos");if(!v)return;
var CQ="Desativa troféus e conquistas e bloqueia o salvamento enquanto ativo";
var K1="KeenGamer e GTA Corner";var K2="Pesquisa anterior (VICE, GamesRadar, GMTreks, GizDev)";
/* [nome, sequência, efeito, requisito, status, fonte] */
var A=[
["Dinheiro: US$ 250.000","↑ → ↓ ← ↑ ← ↓ →","Adiciona US$ 250.000","Terminar a história","g",K1],
["Aumentar Heat Level","← ↓ → ↓ ↑ ↓ ↑","Aumenta o heat","Escapar de 3 estrelas de procurado 25 vezes","g",K1],
["Unlimited Focus","↓ ↑ ↑ ↓ ↑ ↓ ↑ ↓ ↑ →","O Foco não acaba","Terminar a história","g",K1],
["Body Armor","↓ ↑ ← ↑ ↑ ↑ ↑ ↑ ↓ ↓","Adiciona colete","Completar 100 treinos","g",K1],
["Dollhouse","↓ ↓ ↑ → → ↑ ← ← ↓ →","Efeito não informado","Passar oito horas com o parceiro","g",K1],
["Faded Glory","↓ ↓ ↑ → → ↑ ← ← ← →","Efeito não informado","Assaltar 50 lojas com o parceiro","g",K1],
["Aumentar nível de procurado","← ↓ → ↓ ↑ → ↑","Aumenta o nível de procurado","Escapar de 3 estrelas 50 vezes","d",K2+". Uma fonte lista a sequência como não confirmada."],
["Munição máxima","↓ ↑ → ↓ ← ← ↑ ↑ ↓ ←","Enche a munição","25 medalhas de bronze ou melhor em estandes de tiro","a",K2],
["Munição infinita","↓ ↑ → ↓ ← ← ↑ ↓ ↓ ↓","A munição não acaba","25 medalhas de prata ou melhor em estandes de tiro","a",K2],
["Alternar clima","↓ → ↑ ↓ → ↑ →","Troca o clima","Terminar a história","a",K2],
["Maibatsu Boomazoom","← ↑ → ↓ ← ← ↑ ←","Cria o veículo","5 desafios de compras","i",K2],
["MTL Pumper","← ↑ → ↓ ← → → ↑","Cria o veículo","Descobrir o MTL Pumper no menu Progresso","i",K2]
];
var B=[
["Bêbado (Drunk)","Gastar US$ 2.500 em bebida"],["Sem dano de queda","Sobreviver a 20 quedas livres de 40 pés"],["Paraquedas","50 saltos de paraquedas ou BASE de 300+ pés"],["Reparar veículo","Vencer 10 corridas nas pistas do jogo"],["Nitro ilimitado","Completar 50 saltos de acrobacia"],
["Interstate Ambulance","Descobrir o veículo no menu Progresso"],["Airboat 09","Concluir 5 desafios de sobrevivência"],["Western Zombie Bobber","Concluir todos os desafios criminais"],["Avançar o tempo","Encontrar 10 relógios colecionáveis"],["Filtro Pixel Art","Ganhar US$ 250.000 vendendo colecionáveis"],["Filtro Hellscape","Roubar 100 veículos da polícia"]
];
var o=G.BACK+'<h2>Códigos e trapaças</h2><p class="lead">Trapaças do modo história para PS5 e Xbox Series X|S.</p>'+
'<div class="blk"><h3>Como inserir</h3><ul><li>Abra o telefone com ↑ no D-pad.</li><li>PS5: segure L1 e aperte R1. Xbox: segure LB e aperte RB.</li><li>Digite a sequência direcional. É a mesma nos dois consoles.</li><li>Os cheats só liberam depois de terminar a história e cumprir o requisito de cada um.</li></ul></div>'+
'<div class="warn">Ativar cheats desativa troféus e conquistas e bloqueia o salvamento enquanto estiverem ativos. O dinheiro do cheat não pode ser preservado no save normal nessa condição.</div>'+
'<div class="blk"><h3>1. Sequência conhecida ('+A.length+')</h3>'+A.map(function(a){return G.card(a[0],a[4],[["Sequência",a[1]],["Efeito",a[2]],["Requisito",a[3]],["Plataforma","PS5 (L1 + R1) e Xbox (LB + RB), mesma sequência"],["Consequência",CQ],["Fonte",a[5]]])}).join("")+'</div>'+
'<div class="blk"><h3>2. Desbloqueável, sequência ainda não descoberta ('+B.length+')</h3>'+B.map(function(b){return G.card(b[0],"n",[["Sequência","Sequência ainda não descoberta — aguardando confirmação."],["Requisito",b[1]],["Plataforma","PS5 e Xbox"],["Consequência",CQ]])}).join("")+'</div>'+
'<div class="blk"><h3>3. Existência ou condição a confirmar</h3><p class="lead" style="margin:0">A pesquisa identificou 61 cheats reportados. As fontes divergem sobre quantas sequências estão publicadas: uma lista 17 e outra, 18. Os cheats que não aparecem acima ainda não têm nome, requisito ou sequência confirmados, e não foram inventados.</p></div>'+
G.src(["keen","gtac"]);
v.innerHTML=o;
}catch(e){console.error("cheats",e)}})();
(function(){try{"use strict";
var G=G6,h=G.h,v=G.fresh("animais");if(!v)return;
var CATS=[["Caça","Hunting",61],["Pesca","Fishing",35],["Mamíferos","Mammals",18],["Gatos e cachorros","Cats & Dogs",34],["Répteis e anfíbios","Reptiles & Amphibians",6],["Aves","Birds",60],["Aquáticos","Aquatic",18],["Outros","Other",23]];
var TOTAL=255;
var LEG=["Cervo","Javali","Urso","Pantera-da-Flórida","Guaxinim","Macaco-rhesus","Flamingo","Pelicano","Garça","Pombo","Jacaré","Iguana","Sapo-cururu","Tartaruga-marinha","Golfinho","Tubarão","Peixe-boi","Enguia","Peixes"];
var ST=G.get("ani",null);
if(!ST){ST={f:{},r:{},c:[]};try{var old=JSON.parse(localStorage.getItem("onde-estou-gta6:v2")||"null");if(old){Object.keys(old.ani||{}).forEach(function(n){ST.f[n]=1});(old.cus||[]).forEach(function(n){ST.c.push({n:n,k:-1,hab:""})})}}catch(e){}G.set("ani",ST)}
function all(){return LEG.map(function(n){return{n:n,k:-1,hab:""}}).concat(ST.c)}
var F={q:"",k:"t",hab:"t",s:"t"};
function render(){
 var e=all(),tf=0,tr=0;e.forEach(function(x){if(ST.f[x.n])tf++;if(ST.r[x.n])tr++});
 var habs=[];e.forEach(function(x){var hb=x.hab||"Não informado";if(habs.indexOf(hb)<0)habs.push(hb)});
 var o=G.BACK+'<h2>Animais</h2><p class="lead">O banco de progresso reporta 255 entradas em oito grupos. Só entram aqui os animais com nome identificado; o índice resumido não é o catálogo completo.</p>'+G.pbar("Registrados (de 255 reportados)",tr,TOTAL)+'<p class="note" style="margin:0 0 10px">Encontrados: '+tf+'. Entradas ainda sem identificação: '+(TOTAL-e.filter(function(x){return x.k>=0}).length)+'.</p>';
 o+='<div class="blk"><h3>Progresso por categoria</h3>'+CATS.map(function(c,i){var n=e.filter(function(x){return x.k===i});var r=n.filter(function(x){return ST.r[x.n]}).length;return G.pbar(c[0]+" ("+c[1]+"): "+n.length+" identificados",r,c[2])}).join("")+'</div>';
 o+='<div class="ctl"><input type="search" id="anq" placeholder="Buscar por nome" value="'+h(F.q)+'" aria-label="Buscar animal"><select id="ank" aria-label="Categoria"><option value="t">Todas as categorias</option>'+CATS.map(function(c,i){return '<option value="'+i+'">'+c[0]+'</option>'}).join("")+'<option value="-1">Sem categoria confirmada</option></select><select id="anh" aria-label="Habitat"><option value="t">Todos os habitats</option>'+habs.map(function(x){return '<option>'+h(x)+'</option>'}).join("")+'</select><select id="ans" aria-label="Situação"><option value="t">Todos</option><option value="f">Encontrados</option><option value="m">Faltando</option></select></div>';
 var l=e.filter(function(x){return(!F.q||x.n.toLowerCase().indexOf(F.q.toLowerCase())>=0)&&(F.k==="t"||String(x.k)===F.k)&&(F.hab==="t"||(x.hab||"Não informado")===F.hab)&&(F.s==="t"||(F.s==="f"?ST.f[x.n]:!ST.f[x.n]))});
 o+='<div class="blk">'+(l.length?l.map(function(x){var i=e.indexOf(x);return '<div class="sf"><div>'+h(x.n)+'</div><span>Categoria: '+(x.k>=0?CATS[x.k][0]:"sem categoria oficial confirmada")+'</span><span>Habitat: '+h(x.hab||"não informado")+'</span><span>Localização e horário: não informados</span><label class="ckl"><input type="checkbox" data-an="f" data-n="'+h(x.n)+'"'+(ST.f[x.n]?" checked":"")+'><span>Encontrado</span></label><label class="ckl"><input type="checkbox" data-an="r" data-n="'+h(x.n)+'"'+(ST.r[x.n]?" checked":"")+'><span>Registrado no catálogo</span></label></div>'}).join(""):'<p class="lead" style="margin:0">Nenhum animal com esse filtro.</p>')+'</div>';
 o+='<div class="blk"><h3>Adicionar animal</h3><div class="ctl"><input id="annew" type="text" maxlength="40" placeholder="Nome" aria-label="Nome do animal"><input id="anhab" type="text" maxlength="30" placeholder="Habitat (opcional)"><select id="ankn"><option value="-1">Sem categoria confirmada</option>'+CATS.map(function(c,i){return '<option value="'+i+'">'+c[0]+'</option>'}).join("")+'</select><button type="button" class="btn" id="anadd">Adicionar</button></div></div>';
 o+='<p class="note">Os 19 animais da lista inicial anterior continuam aqui, com o progresso que você já tinha. Categoria, habitat, localização e forma de registro só serão preenchidos quando houver dado confirmado.</p>'+G.src(["grAni","heist"]);
 v.innerHTML=o;
 ["ank:k","anh:hab","ans:s"].forEach(function(p){var a=p.split(":");var el=document.getElementById(a[0]);if(el)el.value=F[a[1]]});}
v.addEventListener("change",function(e){var t=e.target;if(t.dataset&&t.dataset.an){var m=t.dataset.an==="f"?ST.f:ST.r;if(t.checked)m[t.dataset.n]=1;else delete m[t.dataset.n];G.set("ani",ST);var y=window.scrollY;render();window.scrollTo(0,y);return}
 if(t.id==="ank")F.k=t.value;else if(t.id==="anh")F.hab=t.value;else if(t.id==="ans")F.s=t.value;else return;render()});
v.addEventListener("input",function(e){if(e.target.id==="anq"){F.q=e.target.value;var p=e.target.selectionStart;render();var q=document.getElementById("anq");q.focus();q.setSelectionRange(p,p)}});
v.addEventListener("click",function(e){if(!e.target.closest("#anadd"))return;var n=document.getElementById("annew").value.trim();if(!n)return;if(all().some(function(x){return x.n.toLowerCase()===n.toLowerCase()}))return;ST.c.push({n:n,k:parseInt(document.getElementById("ankn").value,10),hab:document.getElementById("anhab").value.trim()});G.set("ani",ST);render()});
render();
}catch(e){console.error("animais",e)}})();
(function(){try{"use strict";
var G=G6,h=G.h;
/* regras na página das missões principais */
var m=document.getElementById("v-missoes"),tabs=document.getElementById("tabs");
if(m&&tabs&&!document.getElementById("regras")){var d=document.createElement("div");d.id="regras";d.className="blk";
 d.innerHTML='<h3>Regras de progresso</h3><ul><li>Não há replay de missões, segundo os guias consultados. Faça saves manuais no início e no fim de cada capítulo.</li><li>Missões opcionais com ícone de ampulheta podem desaparecer se forem adiadas.</li><li>Algumas tarefas secundárias continuam disponíveis depois da história.</li><li>A ordem das missões dentro de um capítulo pode variar.</li><li>As contagens divergem entre guias e não foram misturadas: PC Gamer fala em 91 missões principais (prólogo e cinco capítulos); PowerPyx traz uma lista mais ampla com opcionais e atividades; outros índices chegam a 148 entradas ou mais. Este contador usa 91.</li></ul>'+G.src(["pyxMis"]);
 m.insertBefore(d,tabs)}
/* missões secundárias */
var v=G.view("secundarias","Missões Secundárias","Missões Secundárias","Strangers & Freaks e outros favores, por capítulo",'<path d="M5 4h14v16H5zM9 9h6M9 13h6M9 17h3"/>');
var NI="não informado";
/* [nome, cap, quem dá, joga com, local, requisito, recompensa, pode perder, status] */
var M=[
["Get Shirley’s Rum",1,"Shirley","Jason","Loja Three Sheets Liquor, ao sul de Key Lento","Aceitar ajudar Shirley","Aumento permanente de Foco e do rating criminal (fonte única)","Sim: some ao iniciar a missão principal Tourist Trap","a"],
["Steal the Scooter",1,"Shirley","Jason","Casa do outro lado da água; chama cerca de 1 dia de jogo depois da anterior","Ter feito o pedido anterior",NI,"Sim: some ao iniciar Tourist Trap","a"],
["Catch A Bigger Fish",1,"Cal","—",NI,NI,NI,NI,"i"],
["Skunk Apeology 101 e outras (Kirk)",1,"Kirk","Qualquer","Cartazes do Skunk Ape em Key Lento; algumas à noite",NI,NI,"Não",  "i"],
["Mergulhos de tesouro",1,"Kenton","Qualquer","Liberada depois de Island Dreams","Missão Island Dreams",NI,NI,"i"],
["Check Out McKittrick Farm",2,"Kyle","Qualquer","McKittrick Farm","Capítulo 2","Conta para o troféu Strangers & Freaks",NI,"a"],
["Thrillbillies (Mud Club)",2,"Billy","Qualquer","Thrillbilly Mud Club, Kelly County; marcada após Coffee Break","Missão Coffee Break",NI,NI,"i"],
["Twist Wrist, Smash, Grab",2,"Billy","Qualquer",NI,"Thrillbillies",NI,NI,"i"],
["The Impaler",2,"Billy","Qualquer",NI,"Thrillbillies",NI,NI,"i"],
["Hometown Heroes",2,"Billy","Qualquer",NI,"Thrillbillies","Troféu The Lone Rider",NI,"i"],
["Mall Rats",2,"Billy","Qualquer","Atrás do Malibu Club, Ocean Beach (Vice City)","Missões anteriores de Billy","US$ 12.000 (fontes divergem entre Capítulo 2 e 3)",NI,"d"],
["Yasmani’s Jewelry Jobs",3,"Yasmani","Qualquer","Vice City (veja Cofres)","Depois de Boobie Time","US$ 20 mil pelos itens pedidos, mais outros objetos roubados","Não","g"],
["Yasmani’s ATM Jobs e Payday Loans Jobs",3,"Yasmani","Qualquer","Vice City","Capítulo 3",NI,NI,"a"],
["Tail the Security Van",3,"Yasmani","Qualquer","Vice City","Capítulo 3","Informações das vans por US$ 10 mil (ligadas aos bancos grandes)",NI,"g"],
["Join a Street Race / Bumper to Bumper / Brother to Brother",3,"Yago","Jason","Corridas de rua em Vice City","Entrar na primeira corrida de rua","Pagamentos de corrida; conta para o troféu","Não","a"],
["Race Against Yago",3,"Yago","Qualquer","Vice City","Série de Yago","Pagamento de corrida; conta para o troféu","Sim: sensível ao tempo (ampulheta)","a"],
["Randy’s Wish List",3,"Randy","Qualquer","Garagem de Randy, oeste de Vice City","Missão Clonin’ Keys, Makin’ GS","Key Cloner; cerca de US$ 30 mil ou mais por carro bom; troféu Supply & Demand após 16 carros","Não","g"],
["Cellerica: Climbing the Cellerichain, Pay the Cellerica Fee, Peach!, Read the Label",3,"Andy","Lucia",NI,NI,NI,NI,"i"],
["That’s Where The Money Is… (Wait at the Cafe)",4,"—","Qualquer","Final do capítulo","Opcional; depois dos requisitos anteriores","Libera os assaltos a bancos grandes (até ~US$ 205 mil)",NI,"g"],
["This is a Free Call From… (Pick up Shayna)",4,"—","Lucia",NI,NI,NI,"Sim: sensível ao tempo (ampulheta)","a"]
];
var fil=G.get("sccap","t");
function render(){
 var d=M.filter(function(x,i){return G.done("sm"+i)}).length;
 var l=M.filter(function(x){return fil==="t"||String(x[1])===fil});
 var o=G.BACK+'<h2>Missões Secundárias</h2><p class="lead">Separadas das missões principais. A lista é parcial: só entram missões citadas no material e nos arquivos.</p>'+G.pbar("Concluídas",d,M.length)+
 '<div class="ctl"><select id="scsel" aria-label="Capítulo"><option value="t">Todos os capítulos</option>'+[1,2,3,4].map(function(n){return '<option value="'+n+'">Capítulo '+n+'</option>'}).join("")+'</select></div><div class="blk">';
 l.forEach(function(x){var i=M.indexOf(x),id="s"+i;
  o+='<div class="sf"><div>'+h(x[0])+G.tag(x[8])+'</div><span>Capítulo: '+x[1]+' · Quem dá: '+h(x[2])+'</span>'+(x[7].indexOf("Sim")===0?'<span><b>Pode ser perdida:</b> '+h(x[7])+'</span>':"")+'<div class="acts">'+G.btn(id,"Mostrar detalhes","Ocultar detalhes")+'</div><div id="'+id+'" hidden><span>Joga com: '+h(x[3])+'</span><br><span>Local: '+h(x[4])+'</span><br><span>Requisito: '+h(x[5])+'</span><br><span>Recompensa: '+h(x[6])+'</span><br><span>Consequências e possibilidade de perder: '+h(x[7])+'</span><br><span>Nome em português: não confirmado</span></div>'+G.ck("sm"+i,"Concluída")+'</div>'});
 o+='</div><p class="note">Faltam Bret, Tyrone, Pilot Pete e outras linhas, além de locais e recompensas de várias missões. Missões com ampulheta podem desaparecer se adiadas.</p>'+G.src(["pyxMis"]);
 v.innerHTML=o;G.sync(v);var s=document.getElementById("scsel");if(s)s.value=fil}
v.addEventListener("change",function(e){if(e.target.id==="scsel"){fil=e.target.value;G.set("sccap",fil);render()}});
document.addEventListener("g6ck",function(){var p=v.querySelector(".pr");if(p){var d=M.filter(function(x,i){return G.done("sm"+i)}).length;p.outerHTML=G.pbar("Concluídas",d,M.length)}});
render();
}catch(e){console.error("missoes",e)}})();
(function(){try{"use strict";
var G=G6,h=G.h,inicio=document.getElementById("v-inicio"),hub=document.getElementById("hub");if(!inicio||!hub||document.getElementById("busca"))return;
inicio.insertAdjacentHTML("afterbegin",'<div class="ctl"><input type="search" id="busca" placeholder="Pesquisar em todo o site" aria-label="Pesquisar no site"></div><div id="bres" class="sres"></div>');
var inp=document.getElementById("busca"),res=document.getElementById("bres");
function text(el){var c=el.cloneNode(true);G.$$("[hidden],script,style,input,textarea",c).forEach(function(x){x.remove()});return c.textContent.replace(/\s+/g," ")}
inp.addEventListener("input",function(){var q=inp.value.trim().toLowerCase();if(q.length<2){res.innerHTML="";return}
 var out=[];G.$$(".view").forEach(function(s){if(s.id==="v-inicio"||s.id==="v-missoes")return;var t=text(s),i=t.toLowerCase().indexOf(q);if(i<0)return;var a=s.querySelector("h2");out.push('<a href="#'+s.id.slice(2)+'"><b>'+h(a?a.textContent:s.id)+'</b><small>…'+h(t.slice(Math.max(0,i-50),i+90))+'…</small></a>')});
 res.innerHTML=out.length?out.join(""):'<p class="note">Nada encontrado. Os códigos só aparecem depois de revelados e a lista de missões principais fica fora da busca por causa de spoilers.</p>'});
window.dispatchEvent(new Event("hashchange"));
}catch(e){console.error("busca",e)}})();
