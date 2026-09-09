const photoDialog=document.getElementById('photo-dialog');
const photoButtons=[...document.querySelectorAll('.photo-frame')];
const enlargedPhoto=document.getElementById('enlarged-photo');
let activePhoto=0;
function showPhoto(index){
 activePhoto=(index+photoButtons.length)%photoButtons.length;
 const button=photoButtons[activePhoto];
 const thumbnail=button.querySelector('img');
 enlargedPhoto.src=button.dataset.full;
 enlargedPhoto.alt=thumbnail.alt;
 document.getElementById('photo-title').textContent=button.dataset.title;
 document.getElementById('photo-count').textContent=(activePhoto+1)+' of '+photoButtons.length;
}
photoButtons.forEach((button,index)=>button.addEventListener('click',()=>{showPhoto(index);photoDialog.showModal()}));
document.getElementById('close-photo').addEventListener('click',()=>photoDialog.close());
document.getElementById('previous-photo').addEventListener('click',()=>showPhoto(activePhoto-1));
document.getElementById('next-photo').addEventListener('click',()=>showPhoto(activePhoto+1));
photoDialog.addEventListener('keydown',event=>{
 if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(activePhoto-1)}
 if(event.key==='ArrowRight'){event.preventDefault();showPhoto(activePhoto+1)}
});
photoDialog.addEventListener('click',event=>{
 if(event.target===photoDialog){const r=photoDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)photoDialog.close()}
});
photoDialog.addEventListener('close',()=>{enlargedPhoto.removeAttribute('src')});

const photoCards=[...document.querySelectorAll('.photo-card')];
const morePhotos=document.getElementById('show-more-photos');
let visiblePhotos=Math.min(5,photoCards.length);
morePhotos.addEventListener('click',()=>{
 const firstNew=visiblePhotos;
 visiblePhotos=Math.min(visiblePhotos+5,photoCards.length);
 for(let i=firstNew;i<visiblePhotos;i++)photoCards[i].hidden=false;
 const remaining=photoCards.length-visiblePhotos;
 morePhotos.hidden=remaining===0;
 morePhotos.textContent='Show more photos ('+remaining+' remaining)';
 document.getElementById('photo-collection-status').textContent=visiblePhotos+' of '+photoCards.length+' photos';
 photoButtons[firstNew]?.focus({preventScroll:true});
});

document.querySelectorAll('[data-photo-src]').forEach(button=>{
 const index=photoButtons.findIndex(photo=>photo.dataset.full===button.dataset.photoSrc);
 if(index>=0)button.addEventListener('click',()=>{showPhoto(index);photoDialog.showModal()});
});
