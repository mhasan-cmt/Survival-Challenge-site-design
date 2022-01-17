let anchorTag=document.getElementById('searchbtn');
let searchInput=document.getElementById('search');
anchorTag.addEventListener('click',function(){
   if(searchInput.classList.contains('hidden')) {
      searchInput.classList.remove('hidden'); 
   }else{
       searchInput.classList.add('hidden')
   }
    
});