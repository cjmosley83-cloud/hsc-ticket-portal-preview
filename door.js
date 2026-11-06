const selected = new Map();
const grid = document.getElementById('ticketGrid');
const summary = document.getElementById('summary');
function renderDoor(){
 grid.innerHTML='';
 HSC_DEMO.ticketNumbers.forEach(n=>{const b=document.createElement('button');b.className='ticket'+(selected.has(n)?' selected':'');b.innerHTML=`${n}<small>${selected.has(n)?'SELECTED':'AVAILABLE'}</small>`;b.onclick=()=>{if(selected.has(n))selected.delete(n);else selected.set(n,'BALCONY');renderDoor()};grid.appendChild(b)});
 document.getElementById('selectedCount').textContent=`${selected.size} selected`;
 const total=[...selected.values()].reduce((s,seat)=>s+HSC_DEMO.prices[seat],0);
 document.getElementById('total').textContent=HSC_DEMO.money(total);
 if(!selected.size){summary.className='summary-empty';summary.textContent='Select one or more ticket numbers to see the purchase summary.';return}
 summary.className='';
 summary.innerHTML=[...selected.entries()].map(([n,seat])=>`<div class="summary-row"><strong>#${n}</strong><select aria-label="Seating for ticket ${n}" data-ticket="${n}"><option value="BALCONY" ${seat==='BALCONY'?'selected':''}>Balcony · $48</option><option value="FLOOR" ${seat==='FLOOR'?'selected':''}>Floor · $55</option></select><strong>${HSC_DEMO.money(HSC_DEMO.prices[seat])}</strong></div>`).join('');
 summary.querySelectorAll('select').forEach(s=>s.onchange=()=>{selected.set(Number(s.dataset.ticket),s.value);renderDoor()});
}
document.getElementById('clearBtn').onclick=()=>{selected.clear();renderDoor()};
renderDoor();
