const $=s=>document.querySelector(s),app=$('#app');
const DAYS=['Monday, June 20','Tuesday, June 21','Wednesday, June 22','Thursday, June 23','Friday, June 24','Saturday, June 25','Sunday, June 26','Monday, June 27','Tuesday, June 28','Wednesday, June 29','Thursday, June 30','Friday, July 1','Saturday, July 2','Sunday, July 3'];
const GL={feijoada:'Feijoada: a stew of black beans and salted meat, one of Brazil’s best-known dishes.',lata:'Lata: tin can. Here, the tin where you keep the cart’s money.',vizinhos:'Vizinhos: your neighbors on the morro. They hold cash, and cash loses value every day.',fregueses:'Fregueses: your regular customers.',passantes:'Passantes: passersby, office workers, people with bank accounts.',turistas:'Turistas: tourists.',fiado:'Fiado: buying on trust, to pay later.',CEASA:'CEASA: the wholesale produce market company of the state of Rio de Janeiro, created in 1970. In this game, you buy your stock there before sunrise.',URV:'URV: Unidade Real de Valor, the daily reference rate the government published from March to June 1994. On July 1, one URV became one real.',boteco:'Boteco: the neighborhood bar.',armazém:'Armazém: the small grocery on the morro.',morro:'Morro: the hill. The favela.','Morador da Rua':'Morador da rua: a person who lives on the street.','cruzeiros reais':'Cruzeiro real (CR$): Brazil’s money until June 30, 1994.',reais:'Real (R$): Brazil’s new money from July 1, 1994. R$1 = CR$2,750.'};
const g=(k,label)=>`<button class="gl" data-k="${k}" title="${GL[k]}">${label||k}</button>`;
const NAMES={viz:g('vizinhos','Vizinhos')+' <span class="gtr">“neighbors”</span>',fre:g('fregueses','Fregueses')+' <span class="gtr">“regulars”</span>',pas:g('passantes','Passantes')+' <span class="gtr">“passersby”</span>',tur:g('turistas','Turistas')+' <span class="gtr">“tourists”</span>'};
const PLAIN={viz:'Neighbors',fre:'Regulars',pas:'Passersby',tur:'Tourists'};
const SHOW=['viz','fre','pas','tur'];
const WHO=[['you','You'],['wife','Adna'],['kids','The kids'],['mother','Your mother'],['sister','Your sister']];
const HUNGRY={kids:['The children clamor about how hungry they are.','The youngest asks if the new money comes with dinner.','The children chew on the heel of yesterday\u2019s bread.'],wife:['Adna cries silently as she sweeps.','Adna scrapes the pot twice and says nothing.','Adna counts the notes again at the table and does not look up.'],mother:['Your mother says she ate at the church. She did not.','Your mother says her stomach is small now.','Your mother turns her plate over and says she is not hungry.'],sister:['Your sister drinks water and goes to bed early.','Your sister unwraps a roll from her apron, saved from the refeitório, and splits it between the children. She does not take a bite.','Your sister says she ate at work. She hands the children the crust of her bread anyway.','Your sister sits with the children so they will not watch the pot.'],you:['You tell them you ate at the cart.','You say you are tired, not hungry.','You wash the cart\u2019s knife slowly so nobody asks.']};
const CUP={0:'On the way home a neighbor has dragged his television to the doorway. Brazil 2, Russia 0. Adna laughs at how loud you shout.',4:'Brazil 3, Cameroon 0. Firecrackers pop over the morro until midnight. You dance with Adna in the kitchen and the children bang spoons on the pot.',8:'Brazil 1, Sweden 1. Nobody minds the draw. The street bought nearly everything you carried, and the children fall asleep in their yellow shirts.'};
const TALK=[['Adna','“Eat slowly, Julio. Nobody is taking it.”'],['The youngest','“Papai, did the radio say the new money tastes different?”'],['Your mother','“In my day a banana cost a banana.”'],['Your sister','“Dona Cida downstairs says her rent doubled again.”'],['The eldest','“Can I push the cart on Saturday?”'],['Adna','“Tomorrow, buy the small bananas. They go faster.”'],['Your mother','“Sit. Your knee is talking to me from here.”'],['The youngest','“Can we hear the game at the boteco?”'],['Your sister','“At work they price everything in URV now. I still do not understand it.”'],['Adna','“Count it once more. Then we eat.”'],['The eldest','“Seu Zé says the new money will fix everything.”'],['Your mother','“Eat first. Talk about money after.”'],['The youngest','“Papai, you smell like oranges.”'],['Adna','“The pot is warm. Sit down.”']];
const FIRSTP={kids:'The children ask, “Papai, tem janta hoje?” <span class="gtr">“Papa, is there supper tonight?”</span> You look at them, walk over, and smile. “Hoje não, meus filhos.” <span class="gtr">“Not today, my children.”</span>',wife:'Adna looks at the pot, then at you. “We will manage,” she says, and does not say how.',mother:'Your mother folds her hands and says grace over a table where her own place stays empty.',sister:'Your sister sees the empty place at her seat and rests a hand on your arm. “I will try to eat more, or bring some food home from the refeitório at work,” she says. <span class="gtr">“cafeteria”</span>',you:'You lay out the plates and count them twice. Yours is not among them. “I ate at the cart,” you say.'};
const ADNA_SPECIAL='Adna clasps your cheek in one hand and presses the other to her empty belly. She says nothing beyond, “Tamos junto, meu amor.” <span class="gtr">“We are together, my love.”</span> She glances over at the children eating at the table and says it again, softly. “Tamos junto.” <span class="gtr">“We are together.”</span>';
const FIRST='You have counted money all your life. Tonight you count plates, and the number is smaller than the people at the table. It lands in your chest and stays there.';
const DAY3I='Three nights. You stop counting plates and start counting faces.';
const STREAK3={kids:['“Papai, my stomach talks to me all day now. Can it stop?”','The youngest stops asking for food. The eldest asks you, quietly, whether it will be like this tomorrow.'],wife:['Adna sets the empty pot on the table and says, “Julio, I do not know what to tell the children anymore.”','Adna’s hands shake when she lifts the lid. She puts it back and sits down.'],mother:['Your mother holds the edge of the table when she stands. “It is only my age,” she says. It is not.','Your mother tells the children a story about a feast, slowly, so they will not ask for supper.'],sister:['Your sister comes home from the federal building and sits on the step. “I got dizzy mopping the stairs today.”','Your sister falls asleep in her work shoes.'],you:['At the cart your hands feel far away. You give a customer the wrong change and do not notice until she laughs.','You lean on the cart so nobody sees your legs shake.']};
const NIGHT={7:'Your knee swells. Nobody mentions it.',9:'The armazém raised the rice again. You counted twice. It did not reach.',10:'The radio celebrates the new money. In your kitchen the pot holds water.',11:'You sold almost nothing all day. It does not buy one plate. The children clamor about how hungry they are until they tire. Adna cries silently as she sweeps. Your mother prays. Your sister looks at the wall. You sit outside so you do not have to watch.',12:'The children stopped asking. That is worse.',13:'The week ends. The fruit you did not sell rots in the cart.'};
const BRIEF=[
()=>`You loaded the cart at ${g('CEASA')} before dawn. The fruit has to sell by Sunday night; what you don’t sell rots. The salgadinhos and the doces keep. Brazil plays Russia today and the street fills early.`,
()=>`Brazil beat Russia 2–0. An ordinary Tuesday. People with bank accounts keep up with the rate. Your neighbors hold cash, and their cash does not.`,
()=>`An ordinary day. The radio says the new money comes July 1. Nobody on the ${g('morro')} knows what that does to the price of rice.`,
()=>`An ordinary day. The ${g('armazém')} re-marks its shelves every morning now.`,
()=>`Brazil plays Cameroon today. Crowds everywhere. A good day to push a full cart.`,
()=>`Brazil beat Cameroon 3–0. Last night the calculator’s display went grey and stayed grey. From now on you do the math yourself. The weekend brings people out.`,
()=>`Sunday. Whatever fruit you still hold tonight rots. The government publishes no rate on weekends.`,
()=>`On the way out of ${g('CEASA')} you trip on a loose crate and go down hard on your knee. You lose the morning. You have half a day to sell.`,
()=>`Brazil plays Sweden today. The whole city stands in the street. The knee holds.`,
()=>`Brazil drew 1–1 with Sweden. The ${g('armazém')} re-marked its shelves again. Your neighbors’ cash buys less every day, and they buy less from you.`,
()=>`The last day of the old money. Tomorrow the real arrives. The street talks about nothing else.`,
()=>`The real is here: R$1 = CR$2,750. Both monies circulate. From today you price in ${g('reais')}. Nobody on the ${g('morro')} holds any yet. The bank lines wrap around the block.`,
()=>`A few reais reach the street. People pay with whichever money they hold. They hand you ${g('cruzeiros reais')} for prices in reais, and you make the change in your head.`,
()=>`Sunday. Two monies in every pocket. Whatever fruit you still hold tonight rots.`];
const EVENTS={0:['haggle','pas'],1:['fiado'],2:['haggle','pas'],3:['fiado'],4:['haggle','tur'],5:['haggle','fre'],6:['haggle','pas'],8:['haggle','tur'],9:['haggle','fre','fiado'],10:['fiado'],11:['nochange'],12:['change'],13:['change']};
const PAPER=[
{date:'Sunday, June 19, 1994',lead:'Brazil opens against Russia tomorrow',items:['The Seleção plays its first match of the World Cup on Monday at Stanford Stadium, California.','The URV closed Friday at CR$ 2,318.55.','The government keeps July 1 as the day the real arrives.']},
{date:'Monday, June 20, 1994',lead:'Brazil 2, Russia 0',items:['Romário and Raí score at Stanford.','The Central Bank sets today’s URV at CR$ 2,361.49.','Cameroon comes next, on Friday.']},
{date:'Tuesday, June 21, 1994',lead:'URV passes CR$ 2,400',items:['The Central Bank sets today’s URV at CR$ 2,406.05.','Germany and Spain draw 1–1.','Nigeria beats Bulgaria 3–0.']},
{date:'Wednesday, June 22, 1994',lead:'United States beats Colombia 2–1',items:['An own goal by defender Andrés Escobar helps sink Colombia.','Today’s URV: CR$ 2,452.17.','Nine days until the real.']},
{date:'Thursday, June 23, 1994',lead:'Brazil faces Cameroon tomorrow',items:['Today’s URV: CR$ 2,499.18.','Italy beats Norway 1–0.','One week until the real.']},
{date:'Friday, June 24, 1994',lead:'Brazil 3, Cameroon 0',items:['Romário, Márcio Santos and Bebeto score. Brazil reaches the second round.','Today’s URV: CR$ 2,547.09.','Sweden comes next, on Tuesday.']},
{date:'Saturday, June 25, 1994',lead:'Argentina beats Nigeria 2–1',items:['Caniggia scores twice.','The Central Bank publishes no URV on weekends. Friday’s CR$ 2,547.09 stands.','Brazil plays Sweden on Tuesday.']},
{date:'Sunday, June 26, 1994',lead:'The last week of the cruzeiro real',items:['On Friday the real replaces the cruzeiro real.','Shoppers complain that merchants mark prices up ahead of the real.','Romania beats the United States 1–0.','Brazil plays Sweden on Tuesday.']},
{date:'Monday, June 27, 1994',lead:'Four days to the real',items:['Today’s URV: CR$ 2,596.58.','Brazil meets Sweden tomorrow.','Germany beats South Korea 3–2.']},
{date:'Tuesday, June 28, 1994',lead:'Brazil 1, Sweden 1',items:['Kennet Andersson scores first. Romário answers. Brazil wins its group.','Russia beats Cameroon 6–1. Salenko scores five.','Today’s URV: CR$ 2,647.03.']},
{date:'Wednesday, June 29, 1994',lead:'Tomorrow, the last URV',items:['Today’s URV: CR$ 2,698.46.','The Central Bank fixes the final URV tomorrow. That number turns every cruzeiro real into reais.','Saudi Arabia beats Belgium 1–0.']},
{date:'Thursday, June 30, 1994',lead:'The real arrives tomorrow at CR$ 2,750',items:['To convert a price, divide the amount in cruzeiros reais by 2,750.','The URV rose 46.60% in June.','Cruzeiro real notes stay legal tender for 30 days.']},
{date:'Friday, July 1, 1994',lead:'The real is in the street',items:['R$ 1 = CR$ 2,750. Banks exchange cruzeiros reais for reais until July 15.','The minimum wage stands at R$ 64.79 a month.','Brazil plays the United States on Monday, July 4.']},
{date:'Saturday, July 2, 1994',lead:'Brazil faces the United States on Monday',items:['The real completes its second day.','Germany beats Belgium 3–2. Spain beats Switzerland 3–0.']}];
function firstFor(k,d){const nm=WHO.find(x=>x[0]===k)[1];for(let i=0;i<d;i++)if(S.hungry[i]&&S.hungry[i].includes(nm))return false;return true}
function streak(k,d){const nm=WHO.find(x=>x[0]===k)[1];let n=0;for(let i=d;i>=0&&S.hungry[i]&&S.hungry[i].includes(nm);i--)n++;return n}
function navHtml(){const s=S.screen,back={intro:'title',price:'brief'}[s],quit=['stock','brief','price','event','sales','evening','jonatas','night','ledger','sister'].includes(s);if(!back&&!quit)return'';return`<div class="nav">${back?`<button class="quiet" data-go="${back}">← Back</button>`:'<span></span>'}${quit?'<button class="quiet" data-act="quit">Quit to title</button>':''}</div>`}
let S;
function fresh(){return{v:3,screen:'title',d:0,lata:81400,stock:{fruta:0,salg:0,doce:0},bought:0,hungry:[],jd:[],prices:{viz:670,fre:830,pas:900,tur:1760},prev:null,lost:0,debts:[],fed:[],jon:0,seed:19940701,take:0,evq:[],evlog:[],sold:null,plates:{}}}
function rnd(){S.seed=(S.seed+0x6D2B79F5)|0;let t=Math.imul(S.seed^S.seed>>>15,1|S.seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}
function fm(c,d){return E.isReal(d)?'R$ '+(c/E.CONV).toFixed(2):'CR$ '+Math.round(c).toLocaleString('en-US')}
const calc=()=>S.d<=4;
const known=d=>d===0?2318.55:E.rate(d-1);
function bar(){return`<div class="bar num"><span>${DAYS[S.d]}, 1994 · Day ${S.d+1} of 14</span><span>Cart <b>${S.stock.fruta}</b> fruit · <b>${S.stock.salg}</b> salgadinhos · <b>${S.stock.doce}</b> doces</span><span>${g('lata','Lata')} <b>${fm(S.lata,S.d)}</b></span></div>`}
function calcBox(){const d=S.d;if(calc()){const r=known(d);return`<div class="calc"><p class="eyebrow">Calculator</p><p class="small">The last rate you heard: <b class="num">1 URV = CR$ ${r.toLocaleString('en-US',{minimumFractionDigits:2})}</b></p><div class="row"><label for="c_cr">Cruzeiros reais (CR$)<input id="c_cr" inputmode="decimal" placeholder="0"></label><label for="c_urv">URV<input id="c_urv" inputmode="decimal" placeholder="0"></label></div></div>`}
 return`<div class="calc dead"><p class="eyebrow">Calculator</p><p class="hand num">- - - -</p><p class="small">The display went grey Friday night. You do the math yourself.</p></div>`}
const DAYPH=['morro1','lapa','alley','morro2','bunting','beachvendor','boats','alley','bunting','morro1','morro2','road','dog','morro1'];
function ph(k){const p=PHOTOS[k];return`<figure class="ph"><img src="${p.u}" alt="${p.a}"></figure>`}
function slot(t){return`<div class="slot">Art slot · ${t}</div>`}
function go(s){S.screen=s;S.q=false;render()}
function render(){const f=SCREENS[S.screen];app.innerHTML=f()+navHtml();window.scrollTo(0,0);const h=app.querySelector('h1,h2');if(h){h.tabIndex=-1}}
const INTRO1='The idea for this game came from a lecture Dr. Eric Hershberg gave at American University in fall 2019, four months before the COVID-19 pandemic. In his course on comparative governance in Asia and Latin America, we covered the end of the Washington Consensus era and the return to democracy, and that week we focused on Brazil. Dr. Hershberg sketched what economic instability looks like at the margins. Imagine trying to calculate a bank exchange rate that changes every day, he said. Now imagine you sell fruit from a cart, you live in a favela, you have the equivalent of an eighth-grade education, and you have to calculate those changes in real time.';
const INTRO2='That vivid image of economic life at the margins forms the intellectual foundation of this game. I designed it as a project for my PhD program in African and African Diaspora Studies at the University of Texas at Austin, out of my commitment to bringing digital humanities and video games into general education. Events that look abstract on paper land on marginalized people in a myriad of ways. I hope you enjoy this demo as much as I enjoyed creating it.';
const SCREENS={
title:()=>`${ph('title')}<h1>LATA</h1><p class="hand">Rio de Janeiro, June 20 – July 3, 1994.<br>A fruit cart, a family, and two kinds of money.</p><p>You are Julio, an ambitious young man who loves pagode, your wife Adna, and your children. You own a small business: a fruit cart. Adna, the children, your mother and your sister all rely on what you bring home each night.</p><p class="small soft">A game by Jonathan Blackmon</p><button class="go" data-go="intro">Begin</button>`,
intro:()=>`<div class="plain"><p>${INTRO1}</p><p>${INTRO2}</p></div><button class="go" data-go="epigraph">Continue</button>`,
epigraph:()=>`<button class="night fade" data-go="stock" aria-label="Continue"><q>Sixty Million and More.</q><span>— Toni Morrison</span></button>`,
stock:()=>{const d=S.d,carry=E.total(S.stock),def=E.defaultLoad(d,S.lata,S.stock);
 const info={fruta:['Fruta','fruit','Bananas-prata, pera oranges, tangerines, pineapple and papaya. Everyone buys fruit. It rots by Sunday night.'],salg:['Salgadinhos','salty snacks','Roasted peanuts in paper cones, bagged potato chips and biscoito de polvilho. They keep for weeks.'],doce:['Doces','sweets','Paçoca, cocada and pé-de-moleque. They keep for weeks. Passersby and tourists like them.']};
 let h=`${bar()}<div class="sheet"><p class="eyebrow">${g('CEASA')}, before dawn</p><h2>Load the cart</h2><p>CEASA is the wholesale produce market company of the state of Rio de Janeiro, created in 1970. In this game, you buy your stock there before sunrise. ${d===0?'The lata holds what last week left you. The cart carries '+E.CAP+' bags. Choose what to buy.':'The wholesaler raised every price ahead of the new money. '+(carry?'You still carry '+carry+' bags that keep. ':'')+'Choose what the lata can buy.'}</p>`;
 for(const k of E.GOODS){const i=info[k];h+=`<div class="grp"><header><span>${i[0]} <span class="gtr">“${i[1]}”</span></span><output id="lo_${k}" class="num"></output></header><input type="range" id="l_${k}" min="0" max="${E.CAP}" step="5" value="${def[k]}" aria-label="${i[1]} bags"><p class="small soft num">${i[2]} ${fm(E.unitCost(d,k),d)} a bag.${d===7?' Last Monday: '+fm(E.unitCost(0,k),0)+'.':''}${S.stock[k]?' On the cart already: '+S.stock[k]+'.':''}</p></div>`}
 h+=`<p class="num" id="loadsum"></p></div><button class="go" data-act="load">Load the cart</button>`;setTimeout(updLoad);return h},
brief:()=>{const d=S.d,P=PAPER[d],old=d===0?null:known(d-1),k=known(d),f2=x=>x.toLocaleString('en-US',{minimumFractionDigits:2});
 const rl=d>=11?`<s>CR$ ${f2(old)}</s> R$ 1 = CR$ 2,750`:`${old&&old!==k?`<s>CR$ ${f2(old)}</s> `:''}CR$ ${f2(k)}`;
 return`${bar()}<div class="paper"><div class="mast"><b>O Pregão</b><span>Rio de Janeiro</span><span>${P.date}</span></div><h2>${P.lead}</h2><div class="cols">${P.items.map(x=>`<p>${x}</p>`).join('')}</div><div class="ratebox"><span class="small">${d>=11?'The rate, in your hand':'The URV, in your hand'}</span><span class="hand num">${rl}</span><span class="small">${d===0?'The URV (Unidade Real de Valor, “real unit of value”) is the government’s daily reference number. Each day the Central Bank says how many cruzeiros reais one URV is worth. A price set in URV holds its value while the cruzeiro real loses its value. On July 1, one URV becomes one real.':d<11?'One URV is worth this many cruzeiros reais. The number rises every weekday. On July 1, one URV becomes one real.':'One real is worth what the last URV was worth.'}</span></div><p class="pfoot">O Pregão (“the street seller’s cry”) is a newspaper invented for this game. Its reports come from the 1994 record.</p></div>${ph(DAYPH[d])}<div class="sheet"><p class="eyebrow">Morning</p><h2>${DAYS[d]}</h2><p class="small soft">${d===0?'Yesterday’s paper lines a crate at CEASA. You read it while you load.':'Yesterday’s paper reaches you a day late, as always.'}</p><p>${BRIEF[d]()}</p></div><button class="go" data-go="price">Set today’s prices</button>`},
price:()=>{const d=S.d,real=E.isReal(d);let h=`${bar()}<div class="sheet"><p class="eyebrow">Your prices</p><h2>What do you ask for a bag?</h2><p class="small">${real?'You price in '+g('reais')+' now. Yesterday you thought in '+g('cruzeiros reais')+'.':'One price for each kind of customer.'} ${calc()?'The calculator shows how many will pay.':'The calculator is dead. You work it out in your head.'}</p>`;
 h+=calcBox();for(const k of SHOW){const v=d===11?50:real?Math.round(S.prices[k]/E.CONV*100):Math.round(S.prices[k]/10)*10;
  h+=`<div class="grp"><header><span>${NAMES[k]}</span><output id="o_${k}" class="num"></output></header><input type="range" id="p_${k}" data-k="${k}" min="${real?5:100}" max="${real?200:4400}" step="${real?1:10}" value="${v}" aria-label="${PLAIN[k]} price"><p class="small soft num" id="h_${k}"></p></div>`}
 h+=`</div><button class="go" data-act="open">Open the cart</button>`;setTimeout(()=>SHOW.forEach(upd));return h},
event:()=>{const ev=S.evq[0],d=S.d;let t='',b='';
 if(ev.t==='haggle'){t=`<p>A ${ev.g==='tur'?'tourist':ev.g==='fre'?'regular':'passerby'} picks up a bag and puts it down. “${fm(ev.offer,d)}. That’s all I pay.” You asked ${fm(S.prices[ev.g],d)}.</p>`;b=`<button class="alt" data-ev="yes">Take the ${fm(ev.offer,d)}</button><button class="alt" data-ev="no">Hold your price</button>`}
 if(ev.t==='fiado'){t=`<p>A neighbor from two doors up wants two bags ${g('fiado')}. “Julio, I pay you when the money comes.”</p>`;b=`<button class="alt" data-ev="yes">Hand her the two bags</button><button class="alt" data-ev="no">Say no</button>`}
 if(ev.t==='nochange'){t=`<p>A man in a pressed shirt holds out a new R$ 50 note for one bag. You have no reais to make change. He shrugs and walks on.</p>`;b=`<button class="alt" data-ev="ok">Watch him go</button>`}
 if(ev.t==='change'){t=`<p>A regular takes one bag at your price, ${fm(ev.price,d)}, and hands you a CR$ 2,000 note. “Change in cruzeiros.” R$ 1 = CR$ 2,750. How much do you hand back?</p>`;b=ev.opts.map((o,i)=>`<button class="alt num" data-ev="${i}">CR$ ${o.toLocaleString('en-US')}</button>`).join('')}
 return`${bar()}<div class="sheet"><p class="eyebrow">At the cart</p>${t}</div><div class="stack">${b}</div>`},
sales:()=>{const d=S.d,s=S.sold;let rows=SHOW.map(k=>`<tr><td>${PLAIN[k]}</td><td class="num">${s.sold[k]} bags</td></tr>`).join('');
 const ev=S.evlog.map(e=>`<p class="small">${e}</p>`).join('');
 return`${bar()}<div class="sheet"><p class="eyebrow">End of the selling day</p><h2>You sold ${s.units+S.evUnits} bags.</h2><table>${rows}</table><p class="small num">Fruit ${s.goods.fruta} · Salgadinhos ${s.goods.salg} · Doces ${s.goods.doce}</p>${s.missed?`<p class="small">${s.missed} buyers walked on because the cart had run out of what they wanted.</p>`:''}${ev}<p>Today’s take</p><p class="hand num">${fm(S.take,d)}</p></div><button class="go" data-go="evening">Go home</button>`},
evening:()=>{const d=S.d,pc=E.plateCost(d),max=Math.min(5,Math.floor(S.take/pc));let news;
 if(d>=11)news='The radio at the '+g('boteco')+' says it again: R$ 1 = CR$ 2,750. The rate stopped moving.';
 else if(d===5||d===6)news='No new rate on the weekend. Friday’s number stands: CR$ '+E.rate(d).toLocaleString('en-US',{minimumFractionDigits:2})+'.';
 else if(d===10)news='The radio at the '+g('boteco')+' gives the final rate: CR$ 2,750.00. Tomorrow that buys one real.';
 else news=(d%2?'A day-old paper wraps somebody’s fish. You read the rate off it':'The radio at the '+g('boteco')+' gives today’s rate')+`: CR$ ${E.rate(d).toLocaleString('en-US',{minimumFractionDigits:2})}. This morning you priced with <s>CR$ ${known(d).toLocaleString('en-US',{minimumFractionDigits:2})}</s>.`;
 const pl=WHO.map(([k,n])=>`<button class="plate" data-plate="${k}" aria-pressed="${!!S.plates[k]}"><i></i>${n}</button>`).join('');
 const c=E.unitCost(d<7?0:7)*(E.rate(d)/E.rate(d<7?0:7));
 return`${bar()}${ph('evening')}<div class="sheet"><p class="eyebrow">Evening</p><p>${news}</p><p>You carry home <b class="num">${fm(S.take,d)}</b>. At the ${g('armazém')} a plate of rice and beans costs <b class="num">${fm(pc,d)}</b> tonight.</p>${d===6?`<p>Sunday. Adna lifts the lid on the pot. “A month since we had ${g('feijoada')} on a Sunday,” she says, and sets the lid back down.</p>`:''}${max<1?'<p>It does not buy one plate.</p>':`<p>It buys ${max} of 5 plates. Choose who eats. What you keep goes into the ${g('lata')} for Monday’s fruit.</p>`}<div class="plates">${pl}</div><p class="small soft num" id="left"></p></div><button class="go" data-act="night">${max<1?'Put it in the lata':'Hand Adna the money'}</button>`},
sister:()=>{const d=S.d,pc=E.plateCost(d);return d===1?`${bar()}<div class="sheet"><p class="eyebrow">Tuesday night</p><p>Your sister comes in late from the federal building where she cleans the floors. She smells of floor wax and bus exhaust. She unfolds a note from her apron and holds it out.</p><p>“It is what is left of my pay. Take it for the pot.”</p><p>You push her hand back. “Pay your bus fare. It is the twenty-first. You have ten days to go.”</p><p>“Then I will ask again.” She puts the note back in her apron and goes to wash.</p></div><button class="go" data-act="sis">Go home</button>`:`${bar()}<div class="sheet"><p class="eyebrow">Saturday night</p><p>Your sister comes in with her pay envelope. Her pay arrives once a month, and Friday was the first. She sets the envelope on the table beside the empty pot.</p><p>“I ate at work. They feed the cleaners at the canteen. Do not tell me no this time, Julio.”</p><p>You count it: <b class="num">${fm(pc,d)}</b>. It buys one plate.</p><p>“I asked you on the twenty-first,” she says. “I said I would ask again.”</p></div><button class="go" data-act="sis">Take it</button>`},
jonatas:()=>`${bar()}<div class="sheet"><p class="eyebrow">Leftovers</p><h2>Jonatas (${g('Morador da Rua')})</h2><p>Everyone ate, and the pot still holds a little. Jonatas lives in the alley near your home. He sits where he always sits.</p></div><div class="row"><button class="alt" data-jon="1">Yes. Take him a plate.</button><button class="alt" data-jon="0">No. Keep it for morning.</button></div>`,
night:()=>{const d=S.d,h=WHO.filter(([k])=>!S.plates[k]);let t='';
 if(!h.length)t='<p>Everyone ate tonight.</p><p>'+TALK[d%TALK.length][0]+' says, '+TALK[d%TALK.length][1]+'</p>'+(CUP[d]?`<p>${CUP[d]}</p>`:'')+(S.fedJon?'<p>Jonatas ate too.</p>':'');
 if(h.length){const first=S.hungry.slice(0,d).every(x=>!x||!x.length),s3=h.filter(([k])=>streak(k,d)===3);
  if(d===11)t=`<p>${NIGHT[11]}</p>`+s3.map(([k])=>`<p>${STREAK3[k][d%STREAK3[k].length]}</p>`).join('');
  else t=h.map(([k],i)=>{if(firstFor(k,d))return`<p>${k==='wife'&&h.some(x=>x[0]==='you')&&!h.some(x=>x[0]==='kids')?ADNA_SPECIAL:FIRSTP[k]}</p>`;const v=streak(k,d)===3?STREAK3[k]:HUNGRY[k];return`<p>${v[(d+i)%v.length]}</p>`}).join('')+(NIGHT[d]?`<p>${NIGHT[d]}</p>`:'');
  if(first)t=`<p>${FIRST}</p>`+t;
  if(s3.length)t+=`<p>${DAY3I}</p>`}
 const rot=(d===6||d===13)&&S.rotted?`<p class="small soft">${S.rotted} unsold bags of fruit rot in the cart.</p>`:'';
 const dead=d===4?'<p class="small">Late that night you press the calculator’s keys. The display stays grey.</p>':'';
 const cost=E.unitCost(d<7?0:7)/E.rate(d<7?0:7),t0=Math.floor(S.lataBefore/(cost*E.rate(d))),t1=d<13?Math.floor(S.lata/(cost*E.rate(d+1))):null;
 const loss=d<10&&t1!==null?`<p class="small soft num">The ${g('lata')} holds ${fm(S.lata,d)}. By morning the wholesaler’s price climbs again.</p>`:'';
 return`${bar()}<div class="sheet"><p class="eyebrow">Night</p>${t}${rot}${dead}${loss}</div><button class="go" data-act="next">${d===13?'The week ends':'Sleep'}</button>`},
ledger:()=>{const full=S.fed.filter(f=>f===5).length,tot=S.fed.reduce((a,b)=>a+b,0),cart=E.CAP*E.unitCost(13),rec=S.fed.map((n,d)=>`<tr><td>${DAYS[d]}</td><td>${n===5?'Everyone ate'+(S.jd[d]?', and Jonatas too':''):n===0?'Nobody ate':S.hungry[d].map((x,i)=>i?x.replace(/^(The|Your)/,m=>m.toLowerCase()):x).join(', ')+' went hungry'}</td></tr>`).join('');
 return`<div class="sheet"><p class="eyebrow">Two weeks</p><h2>The ledger</h2><table><tr><td>Plates filled</td><td class="num">${tot} of 70</td></tr><tr><td>Nights everyone ate</td><td class="num">${full} of 14</td></tr><tr><td>Plates carried to Jonatas</td><td class="num">${S.jon}</td></tr><tr><td>In the lata on Sunday night</td><td class="num">R$ ${(S.lata/E.CONV).toFixed(2)}</td></tr><tr><td>A full cart of fruit at CEASA on Monday</td><td class="num">R$ ${(cart/E.CONV).toFixed(2)}</td></tr></table><h2>Night by night</h2><table class="rec">${rec}</table></div><button class="go" data-go="epilogue">Monday, July 4</button>`},
epilogue:()=>`${ph('end')}<div class="plain"><p class="eyebrow">Epilogue</p><p>On July 4, Brazil beats the United States 1–0.</p><p>The real holds. Twelve-month inflation stood at 4,922% in June 1994, on the eve of the new money. It ended 1994 at 916% and 1995 at 22%.</p><p>In metropolitan Rio de Janeiro, the share of people living in poverty fell from 45% in July 1994 to 32% by January 1996.</p></div><button class="go" data-go="notes">Notes</button>`,
notes:()=>`<div class="plain"><p class="eyebrow">Notes</p><h2>What comes from the record, and what I invented</h2>
<p><b>From the record.</b> The daily URV rates, the conversion of CR$ 2,750 to R$ 1 on July 1, the 30 days the old notes stayed legal tender, the minimum wage and every match result come from the sources in the works cited.</p>
<p><b>Invented.</b> I invented Julio, Adna and their family, the sister’s job as a cleaner at a federal building and her monthly pay, Jonatas, and the newspaper O Pregão. I invented every price in the game: the cost of a bag at CEASA, what each customer pays, and the cost of a plate of food. I invented the number of customers, the size of the wholesale price jump on June 27, and the empty street on July 1. The goods on the cart are plausible for a Rio street vendor; I did not source them.</p>
<p><b>The plate of food.</b> I set its cost against one real figure, the monthly minimum wage of 64.79 URV. The cost of the plate itself is invented.</p>
<p><b>Rising prices.</b> Before the real, shoppers recalled supermarket staff re-marking shelves more than once a day, and a member of a shoppers’ movement recalled merchants using the URV months to push prices up (Agência Brasil).</p>
<p><b>Cash.</b> Julio’s neighbors pay with cash that loses value daily, while people with bank accounts keep pace with the rate. Brazil’s poor largely had no bank accounts and no protection from inflation (Fundação Ulysses Guimarães).</p>
<p><b>Poverty after the real.</b> The epilogue figures come from Sonia Rocha’s study for Ipea, which measured six metropolitan regions with IBGE’s monthly employment survey.</p>
<p><b>Framing.</b> My reading of Acemoglu and Robinson’s <i>Why Nations Fail</i> shapes how I think about who pays when institutions falter. No number or event in the game comes from that book.</p>
<p><b>Origins.</b> A lecture by Dr. Eric Hershberg gave me the scenario. Haley Price’s <i>Death and Taxes</i> gave me the form. The epigraph comes from the dedication of Toni Morrison’s <i>Beloved</i>.</p>
</div><button class="go" data-go="cited">Works cited</button>`,
cited:()=>`<div class="plain cite"><h2>Works Cited</h2>
<p>Acemoglu, Daron, and James A. Robinson. <i>Why Nations Fail: The Origins of Power, Prosperity, and Poverty</i>. New York: Crown, 2012.</p>
<p>Agência Brasil. “‘Todo mundo corria quando ouvia o remarcador’, recorda dona de casa.” July 2014.</p>
<p>Banco Central do Brasil. “Monetary Updating Factors and Interest Reference Rates.” Chapter 7 of the Bank’s English-language public finance manual. States the conversion CR$ 2,750.00 = R$ 1.00.</p>
<p>Banco Central do Brasil. “Plano Real.” Controle da Inflação. https://www.bcb.gov.br/controleinflacao/planoreal. Accessed November 9, 2026. States the URV rate of CR$ 647.50 on March 1, 1994 and CR$ 2,750.00 on June 30, 1994; the conversion of one URV to R$ 1.00 on July 1; and twelve-month inflation of 4,922% in June 1994, 916% at the end of 1994 and 22% in 1995.</p>
<p>Banco Central do Brasil. Daily values of the Unidade Real de Valor (URV), June 17–30, 1994. The Bank’s own page confirms the endpoints. The daily values come through the table in “Unidade real de valor,” Wikipedia, which cites the Banco Central.</p>
<p>Brasil. Medida Provisória nº 542, de 30 de junho de 1994. Câmara dos Deputados, Legislação Informatizada.</p>
<p>Brasil. Portaria Interministerial nº 4, de 2 de março de 1994. Sets the monthly minimum wage at 64.79 URV.</p>
<p>Governo do Estado do Rio de Janeiro. CEASA-RJ. <i>Relatório de Gestão 2018</i>. States that CEASA-RJ was created by Decreto-Lei Estadual nº 228 of May 20, 1970.</p>
<p>DN Brasil. “Feijoada brasileira tem raízes portuguesas, aponta pesquisadora.” Quotes Roberta Malta Saldanha on the dish’s origin. Accessed November 9, 2026.</p>
<p>Fundação Ulysses Guimarães. <i>A incrível história de 30 anos que antecedeu o Pix</i>. 2026.</p>
<p>Hershberg, Eric. Lecture, Comparative Governance: Asia and Latin America, American University, fall 2019.</p>
<p>Morrison, Toni. <i>Beloved</i>. New York: Knopf, 1987.</p>
<p>O Povo. “30 anos do Real.” June 30, 2024. Reprints the paper’s coverage of June 30 and July 1, 1994.</p>
<p>Price, Haley. <i>Death and Taxes: Debt and the Tokugawa Samurai</i>. JapanLab, University of Texas at Austin, 2022.</p>
<p>Rec.Sport.Soccer Statistics Foundation (RSSSF). “World Cup 1994 Finals.” Match dates, scores and goalscorers.</p>
<p>Rocha, Sonia. <i>Renda e Pobreza: Os Impactos do Plano Real</i>. Texto para Discussão nº 439. Rio de Janeiro: Ipea, December 1996.</p>
<h2>Music Credits</h2>
<p>Novak, Maxim. “Love Samba.” Free Music Archive. Used with the artist’s permission.</p>
<h2>Image Credits</h2>
<p>Wilfredor. “Street vendors and pedestrians on the Rio de Janeiro waterfront at sunset, Brazil” and “Beach vendor speaking with beachgoers on Praia do Forte, Cabo Frio, Brazil.” Photographs, June 2023. Wikimedia Commons. Released under Creative Commons CC0 1.0 Universal (public domain dedication).</p>
<p>roney. “vidigal - rio de janeiro - rj” (Wikimedia Commons title: “Favela do Vidigal”). Photograph, January 2006. Posted to Flickr by roney; reviewed on Wikimedia Commons. Licensed under Creative Commons Attribution 2.0 Generic (CC BY 2.0), https://creativecommons.org/licenses/by/2.0/. Resized for this game; no other changes.</p>
<p>Blackmon, Jonathan. All other photographs. Brazil, 2023–24.</p>
<p>The photographs show these places as they look today, not as they looked in 1994.</p>
</div><button class="go" data-go="black">End</button>`,
black:()=>`<div class="night fade" style="cursor:default"><p style="color:var(--nightfg);opacity:.7;font-style:italic;margin:0 0 24px">Estamos junto, mano!</p><button class="alt" style="width:auto;border-color:var(--nightfg);color:var(--nightfg);opacity:.5" data-act="restart">Play again</button></div>`};
function upd(k){const el=$('#p_'+k);if(!el)return;const d=S.d,real=E.isReal(d),P=real?el.value/100*E.CONV:+el.value;
 $('#o_'+k).textContent=fm(P,d);let h=[];
 if(S.prev)h.push('Yesterday you asked '+fm(S.prev[k],d-1)+'.');
 if(calc()){h.push(`Calculator: about ${E.demand(k,d,P,S.lost)} of ${Math.round(E.crowd(k,d,S.lost))} will pay this.`);if(S.prev&&d>0)h.push('Same value at the rate you know: '+fm(S.prev[k]*known(d)/known(d-1),d)+'.')}
 $('#h_'+k).textContent=h.join(' ')}
function readLoad(){const l={};for(const k of E.GOODS)l[k]=+$('#l_'+k).value;return l}
function updLoad(){if(!$('#l_fruta'))return;const d=S.d,l=readLoad(),n=E.total(l),cost=E.loadCost(d,l),over=cost>S.lata,full=n+E.total(S.stock)>E.CAP;
 for(const k of E.GOODS)$('#lo_'+k).textContent=l[k]+' bags';
 $('#loadsum').textContent=over?`${n} bags cost ${fm(cost,d)}. The lata holds ${fm(S.lata,d)}. You cannot pay for this load.`:full?`The cart carries ${E.CAP} bags. This load does not fit.`:`${n} bags cost ${fm(cost,d)}. The lata keeps ${fm(S.lata-cost,d)}.`;
 const b=document.querySelector('[data-act=load]');if(b)b.disabled=over||full}
function doLoad(){const d=S.d,l=readLoad(),cost=E.loadCost(d,l);if(cost>S.lata||E.total(l)+E.total(S.stock)>E.CAP)return;S.lata-=cost;for(const k of E.GOODS)S.stock[k]+=l[k];S.bought=E.total(l);go('brief')}
function openCart(){const d=S.d,real=E.isReal(d);for(const k of SHOW){const v=+$('#p_'+k).value;S.prices[k]=real?v/100*E.CONV:v}
 S.sold=E.sell(d,S.prices,S.stock,S.lost);S.stock=S.sold.left;S.take=S.sold.rev;S.evlog=[];S.evUnits=0;
 const paid=S.debts.filter(x=>x.due===d);for(const x of paid){S.take+=x.amt;S.evlog.push('Your neighbor pays what she owed: '+fm(x.amt,d)+'. It buys less than it did the day she took the fruit.')}
 S.evq=(EVENTS[d]||[]).reduce((a,t,i,arr)=>{if(t==='haggle'){const k=arr[i+1],w=E.wtp(k,d);if(E.total(S.stock)>0)a.push({t,g:k,offer:Math.round(Math.min(.75*S.prices[k],.8*w.hi)/10)*10})}
  else if(t==='fiado'){if(E.total(S.stock)>=2)a.push({t})}else if(t==='nochange')a.push({t});
  else if(t==='change'){const P=Math.round(S.prices.fre);if(E.total(S.stock)>0&&P<=E.wtp('fre',d).hi&&P<2000){const c=Math.round(2000-P);let o=[c,c+150,Math.max(0,c-150)];if(d===13)o=[o[1],o[0],o[2]];else o.push(o.shift());a.push({t,price:P,right:c,opts:o})}}
  return a},[]);
 go(S.evq.length?'event':'sales')}
function takeBag(n){for(;n>0;n--){const k=E.GOODS.find(k=>S.stock[k]>0);if(k)S.stock[k]--}}
function resolve(v){const ev=S.evq.shift(),d=S.d;
 if(ev.t==='haggle'){if(v==='yes'){S.take+=ev.offer;takeBag(1);S.evUnits++;S.evlog.push('You took '+fm(ev.offer,d)+' from the haggler.')}else S.evlog.push('The haggler walked.')}
 if(ev.t==='fiado'){if(v==='yes'){takeBag(2);S.evUnits+=2;const amt=2*Math.min(S.prices.viz,E.wtp('viz',d).hi);if(d<=3)S.debts.push({due:d+3,amt});S.evlog.push('You gave two bags fiado.')}else{S.lost++;S.evlog.push('You said no. She buys from another cart now.')}}
 if(ev.t==='change'){const o=ev.opts[+v];if(o===ev.right){S.take+=ev.price;takeBag(1);S.evUnits++;S.evlog.push('You counted the change right.')}else if(o>ev.right){S.take+=ev.price-(o-ev.right);takeBag(1);S.evUnits++;S.evlog.push('You handed back CR$ '+(o-ev.right)+' too much. He kept it.')}else S.evlog.push('He counted it, took his note back, and left without the bag.')}
 go(S.evq.length?'event':'sales')}
function platesLeft(){const d=S.d,pc=E.plateCost(d),n=WHO.filter(([k])=>S.plates[k]).length,max=Math.min(5,Math.floor(S.take/pc));
 document.querySelectorAll('.plate').forEach(b=>{const k=b.dataset.plate;b.setAttribute('aria-pressed',!!S.plates[k]);b.disabled=!S.plates[k]&&n>=max});
 const el=$('#left');if(el)el.textContent=max<1?'':`${n} plates: ${fm(n*pc,d)}. Into the lata: ${fm(S.take-n*pc,d)}.`}
function toNight(){const d=S.d,pc=E.plateCost(d),n=WHO.filter(([k])=>S.plates[k]).length;S.lataBefore=S.lata;S.lata+=S.take-n*pc;S.fed[d]=n;S.hungry[d]=WHO.filter(([k])=>!S.plates[k]).map(x=>x[1]);S.fedJon=false;
 const p=d<7?.5:d===8?1/3:0;if(n===5&&p&&rnd()<p)return go('jonatas');go('night')}
function next(){const d=S.d;if(d===13)return go('ledger');S.prev={...S.prices};S.d++;S.plates={};S.take=0;S.rotted=0;
 go(S.d===7?'stock':'brief')}
function enterEvening(){const d=S.d;if(d===6||d===13){S.rotted=S.stock.fruta;S.stock.fruta=0}const pc=E.plateCost(d),max=Math.min(5,Math.floor(S.take/pc));S.plates={};WHO.slice(0,max).forEach(([k])=>S.plates[k]=true)}
document.addEventListener('click',e=>{const G=$('#gloss'),t=e.target.closest('button,[data-go]');
 if(e.target.closest('#gloss')){G.hidden=true;return}
 if(!t){G.hidden=true;return}
 if(t.dataset.k&&t.classList.contains('gl')){G.textContent=GL[t.dataset.k]+'  (tap to close)';G.hidden=false;return}
 G.hidden=true;
 if(t.dataset.go==='evening'&&(S.d===1||S.d===12)&&!S['sis'+S.d])return go('sister');
 if(t.dataset.go){if(t.dataset.go==='evening')enterEvening();go(t.dataset.go);if(t.dataset.go==='evening')platesLeft();return}
 if(t.dataset.act==='quit'){if(S.q){S=fresh();return render()}S.q=true;t.textContent='Click again to quit. You lose this run.';return}
 if(t.dataset.act==='sis'){const d=S.d;S['sis'+d]=true;if(d===12)S.take+=E.plateCost(12);enterEvening();go('evening');platesLeft();return}
 if(t.dataset.act==='load')return doLoad();
 if(t.dataset.act==='open')return openCart();
 if(t.dataset.ev)return resolve(t.dataset.ev);
 if(t.dataset.plate){const k=t.dataset.plate;S.plates[k]=!S.plates[k];return platesLeft()}
 if(t.dataset.act==='night')return toNight();
 if(t.dataset.jon){if(t.dataset.jon==='1'){S.jon++;S.fedJon=true;S.jd[S.d]=1}return go('night')}
 if(t.dataset.act==='next')return next();
 if(t.dataset.act==='restart'){S=fresh();return render()}});
document.addEventListener('input',e=>{const t=e.target;if(t.dataset&&t.dataset.k)upd(t.dataset.k);if(t.id&&t.id.indexOf('l_')===0)updLoad();if(t.id==='c_cr'||t.id==='c_urv'){const r=known(S.d),o=document.querySelector(t.id==='c_cr'?'#c_urv':'#c_cr'),v=parseFloat(String(t.value).replace(',','.'));o.value=isNaN(v)?'':(t.id==='c_cr'?(v/r).toFixed(2):(v*r).toFixed(0))}});
const AU=new Audio('audio/love-samba.mp3');AU.volume=.35;AU.preload='auto';let muted=false,started=false,gap=null;
try{muted=localStorage.getItem('lata_muted')==='1'}catch(e){}
const MB=document.createElement('button');MB.className='quiet';MB.style.cssText='position:fixed;right:max(12px,env(safe-area-inset-right,0px));bottom:max(12px,env(safe-area-inset-bottom,0px));z-index:30;padding:8px 12px;background:var(--card);border:1px solid var(--rule)';
function mbLabel(){MB.textContent=muted?'♪ Music off':'♪ Music on';MB.setAttribute('aria-pressed',String(!muted))}mbLabel();document.body.appendChild(MB);
function playMusic(){if(muted)return;const r=AU.play();if(r&&r.catch)r.catch(()=>{started=false})}
AU.addEventListener('ended',()=>{if(muted)return;clearTimeout(gap);gap=setTimeout(playMusic,3000)});
document.addEventListener('click',e=>{if(e.target===MB)return;if(!started){started=true;playMusic()}});
MB.addEventListener('click',()=>{muted=!muted;try{localStorage.setItem('lata_muted',muted?'1':'0')}catch(e){}mbLabel();clearTimeout(gap);if(muted)AU.pause();else{started=true;playMusic()}});
function start(data){S=data&&data.S&&data.S.v===3?data.S:fresh();render();if(S.screen==='evening')platesLeft()}
window.claude?.hot?.snapshot?.(()=>({S}));
window.claude?.hot?.ready?window.claude.hot.ready(start):start(window.claude?.hot?.data??{});
