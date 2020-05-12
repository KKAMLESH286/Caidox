today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
<<<<<<< HEAD:static/script.js
document.write(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left");
=======
var line = document.write(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+ " days left");
>>>>>>> 766ec883fe2f8e61dfe11b7a8bbe475b61e60f76:template/script.js
