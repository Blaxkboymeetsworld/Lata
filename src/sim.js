const E=require('./engine.js');
const names=['Mon Jun 20','Tue Jun 21','Wed Jun 22','Thu Jun 23','Fri Jun 24','Sat Jun 25','Sun Jun 26','Mon Jun 27','Tue Jun 28','Wed Jun 29','Thu Jun 30','Fri Jul 1','Sat Jul 2','Sun Jul 3'];
const EVENT_MAX={0:.44*.8,1:.36*.8,2:.44*.8,3:0,4:.90*.8,5:.36*.8,6:.44*.8,7:0,8:.90*.8,9:.36*.8,10:0,11:0,12:.36*.859,13:.36*.859};
for(const k in EVENT_MAX)EVENT_MAX[k]*=E.SC;
const LOADS={default:null,allfruit:{fruta:250,salg:0,doce:0},keepers:{fruta:60,salg:90,doce:70}};
function run(strat,loadName){
 let lata=81400,stock={fruta:0,salg:0,doce:0},rows=[],base=null;
 for(let d=0;d<14;d++){
  if(d===0||d===7){let load=LOADS[loadName]&&d===0?LOADS[loadName]:E.defaultLoad(d,lata,stock);
   if(LOADS[loadName]&&d===7){const want=LOADS[loadName],need={};for(const k of E.GOODS)need[k]=Math.max(0,want[k]-stock[k]);const f=Math.min(1,lata/Math.max(1,E.loadCost(d,need)));load={};for(const k of E.GOODS)load[k]=Math.floor(need[k]*f/5)*5}
   while(E.loadCost(d,load)>lata){const k=E.GOODS.find(k=>load[k]>0);load[k]-=5}
   lata-=E.loadCost(d,load);for(const k of E.GOODS)stock[k]+=load[k]}
  const pr={};
  for(const g of E.ORDER){const b=E.bestPrice(g,d,0).p;
   if(strat==='optimal')pr[g]=b; else if(strat==='cautious')pr[g]=b*.8; else if(strat==='greedy')pr[g]=b*1.3;
   else {if(d===0){base=base||{};base[g]=b} pr[g]=base[g]} }
  const s=E.sell(d,pr,stock,0);stock=s.left;
  const pc=E.plateCost(d),plates=Math.min(5,Math.floor(s.rev/pc));
  lata+=s.rev-plates*pc;rows.push({plates,missed:s.missed,stock:E.total(stock),lata:Math.round(lata)});
  if(d===6||d===13)stock.fruta=0;}
 return rows}
let ok=true;const ceil=[];
for(let d=0;d<14;d++){let rev=0;for(const g of E.ORDER)rev+=E.bestPrice(g,d,0).rev;rev+=(EVENT_MAX[d]||0)*E.rate(d);
 const pl=rev/E.plateCost(d);const pass=d<7?pl>=5:d===8?pl>=5:d===11?pl<1:(pl<5&&pl>=1);if(!pass)ok=false;ceil.push(pl.toFixed(1))}
console.log('CEILING plates/day (any play, unlimited stock):',ceil.join(' '));
for(const ld of Object.keys(LOADS))for(const st of ['optimal','cautious','greedy','flat']){
 const r=run(st,ld);console.log((ld+'/'+st).padEnd(18),'plates',r.map(x=>x.plates).join(' '),'| missed',r.map(x=>x.missed).join(' '),'| lata end',r[13].lata)}
console.log('ALL HARD CEILING CONSTRAINTS:',ok?'HOLD':'BROKEN');
