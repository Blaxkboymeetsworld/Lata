// LATA engine: pure game math, shared by the page and the balance simulation.
// Money is held internally in cruzeiros reais (CR$). From day 11 (July 1) R$1 = CR$2,750.
const SC=1.6; // money scale: a plate = 1.44 URV per person-day
const RATES=[2361.49,2406.05,2452.17,2499.18,2547.09,2547.09,2547.09,2596.58,2647.03,2698.46,2750,2750,2750,2750];
const ANCHOR=2361.49, CONV=2750, PLATE_URV=0.90*SC, CAP=270;
const GOODS=['fruta','salg','doce'];
// CEASA cost per bag in URV, week 1 / week 2 (design values, not sourced)
const COST_URV={fruta:[.07*SC,.095*SC],salg:[.09*SC,.122*SC],doce:[.08*SC,.1085*SC]};
const TARGET={fruta:160,salg:68,doce:42};
const GROUPS={
 viz:{n:14,lo:.10,hi:.26,indexed:false,pref:[.7,.2,.1]},
 fre:{n:12,lo:.16,hi:.36,indexed:false,pref:[.6,.25,.15]},
 pas:{n:10,lo:.14,hi:.44,indexed:true,pref:[.4,.35,.25]},
 tur:{n:4, lo:.30,hi:.90,indexed:true,pref:[.5,.2,.3]}};
for(const k in GROUPS){GROUPS[k].lo*=SC;GROUPS[k].hi*=SC}
const ORDER=['tur','pas','fre','viz'];
const MULT=[[1,1.3],[1,1],[1,1],[1,1],[1.2,1.6],[1,1.2],[1,1.2],
            [.4,.45],[1.1,1.8],[.5,.5],[.48,.5],[.1,0],[.42,.45],[.42,.45]];
function isReal(d){return d>=11}
function rate(d){return RATES[d]}
function plateCost(d){return isReal(d)?PLATE_URV*CONV:Math.round(PLATE_URV*RATES[d]/10)*10}
function unitCost(d,k){return COST_URV[k||'fruta'][d<7?0:1]*RATES[d]}
function total(st){return st.fruta+st.salg+st.doce}
function loadCost(d,load){return Math.round(GOODS.reduce((a,k)=>a+load[k]*unitCost(d,k),0))}
function defaultLoad(d,lata,carry){const need={};for(const k of GOODS)need[k]=Math.max(0,TARGET[k]-carry[k]);
 const f=Math.min(1,lata/Math.max(1,loadCost(d,need)));const load={};for(const k of GOODS)load[k]=Math.floor(need[k]*f/5)*5;return load}
function wtp(g,d){const G=GROUPS[g],r=G.indexed?RATES[d]:ANCHOR;return{lo:G.lo*r,hi:G.hi*r}}
function q(g,d,p){const w=wtp(g,d);return Math.max(0,Math.min(1,(w.hi-p)/(w.hi-w.lo)))}
function crowd(g,d,lost){const G=GROUPS[g],m=MULT[d][G.indexed?1:0];return Math.max(0,(G.n-(g==='viz'?lost||0:0))*m)}
function demand(g,d,p,lost){return Math.round(crowd(g,d,lost)*q(g,d,p))}
// one day of selling. Each buyer wants one kind of good; a buyer walks if the cart has none of it.
function sell(d,prices,stock,lost){
 const left={...stock},out={sold:{},goods:{fruta:0,salg:0,doce:0},missed:0,rev:0,units:0};
 for(const g of ORDER){const n=demand(g,d,prices[g],lost),p=GROUPS[g].pref,b=Math.round(n*p[1]),c=Math.round(n*p[2]),w={fruta:n-b-c,salg:b,doce:c};let s=0;
  for(const k of GOODS){const t=Math.min(w[k],left[k]);left[k]-=t;out.goods[k]+=t;s+=t;out.missed+=w[k]-t}
  out.sold[g]=s;out.units+=s;out.rev+=s*prices[g]}
 out.left=left;return out}
function bestPrice(g,d,lost){
 const w=wtp(g,d);let best={p:w.lo,rev:-1};const step=isReal(d)?27.5:10;
 for(let p=Math.floor(w.lo*.5/step)*step;p<=w.hi+step;p+=step){const r=p*demand(g,d,p,lost);if(r>best.rev)best={p,rev:r}}
 return best}
const E={SC,RATES,ANCHOR,CONV,CAP,GOODS,TARGET,GROUPS,ORDER,MULT,isReal,rate,plateCost,unitCost,total,loadCost,defaultLoad,wtp,q,crowd,demand,sell,bestPrice};
if(typeof module!=='undefined')module.exports=E;
