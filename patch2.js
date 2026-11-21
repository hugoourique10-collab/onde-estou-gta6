(function(){
"use strict";
function h(s){return String(s).replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})}
function $(s){return document.querySelector(s)}
var TG={ok:["Confirmado por várias fontes","ok"],rel:["Relatado · fonte única","rel"],conf:["Fontes divergem","conf"],un:["Ainda não descoberto","rel"]};
function tag(k){var t=TG[k];return '<span class="tag '+(k==="ok"?"ok":"")+'">'+t[0]+'</span>'}

/* ---------- CÓDIGOS: sequências ---------- */
var C=[
["Jogador",[
["US$ 250.000","↑ → ↓ ← ↑ ← ↓ →","Termine a história principal","Dá US$ 250.000 (único cheat de dinheiro).","ok"],
["Foco ilimitado","↓ ↑ ↑ ↓ ↑ ↓ ↑ ↓ ↑ →","Termine a história principal","O medidor de Foco nunca acaba.","ok"],
["Colete (Body Armor)","↓ ↑ ← ↑ ↑ ↑ ↑ ↑ ↓ ↓","Complete 100 treinos","Adiciona colete completo.","ok"],
["Aumentar Heat","← ↓ → ↓ ↑ ↓ ↑","Perca 3 estrelas de procurado 25 vezes","Aumenta o heat no mapa todo.","ok"],
["Aumentar nível de procurado","← ↓ → ↓ ↑ → ↑","Perca 3 estrelas 50 vezes","Aumenta o nível de procurado. Uma fonte lista a sequência como não confirmada.","conf"],
["Bêbado (Drunk)",null,"Gaste US$ 2.500 em bebida","Deixa você e o parceiro bêbados.","un"],
["Sem dano de queda",null,"Sobreviva 20 quedas livres de 40 pés","—","un"],
["Paraquedas",null,"50 saltos de paraquedas/BASE de 300+ pés","—","un"],
["Reparar veículo",null,"Vença 10 corridas nas pistas do jogo","—","un"],
["Nitro ilimitado",null,"50 saltos de acrobacia","—","un"]
]],
["Combate",[
["Munição máxima","↓ ↑ → ↓ ← ← ↑ ↑ ↓ ←","25 medalhas de bronze ou melhor em estandes de tiro","Enche toda a munição.","ok"],
["Munição infinita","↓ ↑ → ↓ ← ← ↑ ↓ ↓ ↓","25 medalhas de prata ou melhor em estandes de tiro","A munição nunca acaba.","ok"]
]],
["Clima e mundo",[
["Alternar clima","↓ → ↑ ↓ → ↑ →","Termine a história principal","Troca o clima.","ok"]
]],
["Veículos",[
["Maibatsu Boomazoom","← ↑ → ↓ ← ← ↑ ←","Complete 5 desafios de compras","Cria o veículo.","rel"],
["MTL Pumper","← ↑ → ↓ ← → → ↑","Descubra o MTL Pumper no menu Progresso","Cria o veículo.","rel"]
]]
];
function cheats(){
 var v=$("#v-codigos");if(!v||v.querySelector("#cheats"))return;
 var d=document.createElement("div");d.id="cheats";
 d.innerHTML='<div class="blk"><h3>Sequências conhecidas</h3><p class="lead" style="margin:0">Como usar: abra o celular com ↑, segure L1 e aperte R1 (PS5) ou segure LB e aperte RB (Xbox), e digite a sequência no D-pad. Vale para os dois consoles.</p></div>'+
 C.map(function(g){return '<div class="blk"><h3>'+g[0]+'</h3>'+g[1].map(function(c){
  return '<div class="sf"><div>'+h(c[0])+tag(c[4])+'</div><b class="code">'+(c[1]?h(c[1]):"Código ainda não descoberto")+'</b><span>Efeito: '+h(c[3])+'</span><span>Requisito: '+h(c[2])+'</span></div>';
 }).join("")+'</div>';}).join("")+
 '<p class="note">O jogo tem 61 trapaças e só parte das sequências foi publicada. Os demais itens (armas, filtros, outros veículos) seguem sem código confirmado e não foram inventados. Fontes consultadas em 21/11/2026: VICE, GamesRadar, Gamer Tweak, games.gg, GTAside, GizDev, DigitalOft, GMTreks.</p>';
 var n=v.querySelector(".note");v.insertBefore(d,n);
}
cheats();

/* ---------- MISSÕES SECUNDÁRIAS ---------- */
var P="Pode ser feita por Jason ou Lucia.";
var M=[
["Capítulo 1",[
["Get Shirley’s Rum","Shirley","Jason","Loja Three Sheets Liquor, ao sul de Key Lento","Aceitar ajudar Shirley","Aumento permanente de Foco e do rating criminal (fonte única)","Sim: some ao iniciar a missão principal Tourist Trap","ok"],
["Steal the Scooter","Shirley","Jason","Casa do outro lado da água; chama cerca de 1 dia de jogo depois da anterior","Ter feito o pedido anterior","Não informada","Sim: some ao iniciar Tourist Trap","ok"],
["Catch A Bigger Fish","Cal","—","Não informado","Não informado","Não informada","Não informado","rel"],
["Skunk Apeology 101 e outras (Kirk)","Kirk","Qualquer","Cartazes do Skunk Ape em Key Lento; algumas à noite","Nenhum informado","Não informada","Não","rel"],
["Mergulhos de tesouro","Kenton","Qualquer","Liberada depois de Island Dreams","Missão Island Dreams","Não informada","Não informado","rel"]
]],
["Capítulo 2",[
["Check Out McKittrick Farm","Kyle","Qualquer","McKittrick Farm","Capítulo 2","Conta para o troféu Strangers & Freaks","Não informado","ok"],
["Thrillbillies (Mud Club)","Billy","Qualquer","Thrillbilly Mud Club, Kelly County; marcada após Coffee Break","Missão Coffee Break","Não informada","Não informado","rel"],
["Twist Wrist, Smash, Grab","Billy","Qualquer","Não informado","Thrillbillies","Não informada","Não informado","rel"],
["The Impaler","Billy","Qualquer","Não informado","Thrillbillies","Não informada","Não informado","rel"],
["Hometown Heroes","Billy","Qualquer","Não informado","Thrillbillies","Troféu The Lone Rider","Não informado","rel"],
["Mall Rats","Billy","Qualquer","Atrás do Malibu Club, Ocean Beach (Vice City)","Missões anteriores de Billy","US$ 12.000","Não informado","conf"]
]],
["Capítulo 3",[
["Yasmani’s Jewelry Jobs","Yasmani","Qualquer","Vice City (veja os cofres em Como Ganhar Dinheiro)","Capítulo 3","Itens pedidos por Yasmani","Não","ok"],
["Yasmani’s ATM Jobs e Payday Loans Jobs","Yasmani","Qualquer","Vice City","Capítulo 3","Não informada","Não informado","ok"],
["Tail the Security Van","Yasmani","Qualquer","Vice City","Capítulo 3","Não informada","Não informado","ok"],
["Join a Street Race / Bumper to Bumper / Brother to Brother","Yago","Jason","Corridas de rua em Vice City","Entrar na primeira corrida de rua","Pagamentos de corrida; conta para o troféu","Não","ok"],
["Race Against Yago","Yago","Qualquer","Vice City","Série de Yago","Pagamento de corrida; conta para o troféu","Sim: sensível ao tempo","ok"],
["Randy’s Wish List","Randy","Qualquer","Garagem de Randy, oeste de Vice City","Depois de Clonin’ Keys, Makin’ GS","Key Cloner; muitos milhares por carro; troféu Supply & Demand após 16 carros","Não","ok"],
["Cellerica: Climbing the Cellerichain, Pay the Cellerica Fee, Peach!, Read the Label","Andy","Lucia","Não informado","Não informado","Não informada","Não informado","rel"]
]],
["Capítulo 4",[
["This is a Free Call From… (Pick up Shayna)","—","Lucia","Não informado","Não informado","Não informada","Sim: sensível ao tempo","ok"]
]]
];
var d=$("#drawer");
if(d&&!d.querySelector('[href="#secundarias"]'))d.insertAdjacentHTML("beforeend",'<a href="#secundarias">Missões Secundárias</a>');
var hub=$("#hub");
if(hub)hub.insertAdjacentHTML("beforeend",'<a class="card" href="#secundarias"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5zM9 9h6M9 13h6M9 17h3"/></svg><div><b>Missões Secundárias</b><span>Strangers &amp; Freaks e outros favores, por capítulo</span></div></a>');
var s=document.createElement("section");s.className="view";s.id="v-secundarias";
s.innerHTML='<a class="back" href="#inicio">← Voltar ao Início</a><h2>Missões Secundárias</h2><p class="lead">Separadas das missões principais. A lista é parcial: só entram missões citadas pelos guias.</p>'+
M.map(function(c){return '<div class="blk"><h3>'+c[0]+'</h3>'+c[1].map(function(m){
 return '<div class="sf"><div>'+h(m[0])+tag(m[7])+'</div><span>Personagem que dá: '+h(m[1])+' · Joga com: '+h(m[2])+'</span><span>Local: '+h(m[3])+'</span><span>Requisito: '+h(m[4])+'</span><span>Recompensa: '+h(m[5])+'</span><span>Pode perder: '+h(m[6])+'</span></div>';
}).join("")+'</div>';}).join("")+
'<p class="note">Não confirmei todas as quests. Faltam Bret, Tyrone, Pilot Pete e outras linhas citadas, além de recompensas e locais de várias missões. As missões marcadas como “sensível ao tempo” podem sumir se você avançar a história. Fontes consultadas em 21/11/2026: PowerPyx, TechWiser, GMTreks, Tech2Geek, outputlag, pro-gamer.gg.</p>';
document.querySelector("main").appendChild(s);
if(location.hash==="#secundarias"){document.querySelectorAll(".view").forEach(function(v){v.classList.toggle("on",v.id==="v-secundarias")});}
})();
