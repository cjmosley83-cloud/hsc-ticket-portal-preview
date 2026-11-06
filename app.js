// Shared demonstration-only helpers. No network calls or live database connection.
window.HSC_DEMO = { ticketNumbers: Array.from({length:23},(_,i)=>78+i), prices:{BALCONY:48,FLOOR:55}, money:n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n) };
