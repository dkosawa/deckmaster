const videos=[...new Map(window.DECK_VIDEOS.map(video=>[video.id,video])).values()].sort((a,b)=>(Date.parse(b.publishedAt)||0)-(Date.parse(a.publishedAt)||0));
const grid=document.getElementById('projects');
const more=document.getElementById('show-more');
const status=document.getElementById('collection-status');
const dialog=document.getElementById('video-dialog');
const player=document.getElementById('player');
let shown=0;
const dateFormat=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'numeric',timeZone:'America/Los_Angeles'});
function openVideo(video){
 document.getElementById('video-title').textContent=video.title;
 document.getElementById('youtube-link').href='https://www.youtube.com/watch?v='+video.id;
 const frame=document.createElement('iframe');
 frame.src='https://www.youtube-nocookie.com/embed/'+video.id+'?autoplay=1&rel=0';
 frame.title=video.title;
 frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
 frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';
 player.replaceChildren(frame);dialog.showModal();
}
function showBatch(){
 const end=Math.min(shown+9,videos.length);
 for(let i=shown;i<end;i++){
  const v=videos[i];
  const card=document.createElement('article');
  const button=document.createElement('button');button.className='project-media';button.setAttribute('aria-label','Play '+v.title);
  const backdrop=document.createElement('span');backdrop.className='film-backdrop';backdrop.setAttribute('aria-hidden','true');backdrop.innerHTML='<span>THE DECK MASTER</span><strong></strong><small>PROJECT FILM</small>';backdrop.querySelector('strong').textContent=v.title;
  const image=document.createElement('img');image.src=v.thumbnail;image.alt='';image.loading='lazy';image.addEventListener('error',()=>{image.hidden=true});
  const play=document.createElement('span');play.className='project-play';play.setAttribute('aria-hidden','true');play.innerHTML='<span>▶</span>';
  const screen=document.createElement('span');screen.className='project-screen';screen.append(backdrop,image,play);
  button.append(screen);button.addEventListener('click',()=>openVideo(v));
  const caption=document.createElement('div');caption.className='project-caption';
  const info=document.createElement('div');const date=document.createElement('small');
  date.textContent=v.publishedAt?dateFormat.format(new Date(v.publishedAt)):'Publication date unavailable';
  const title=document.createElement('h3');title.textContent=v.title;
  info.append(date,title);
  const link=document.createElement('a');link.href='https://www.youtube.com/watch?v='+v.id;link.target='_blank';link.rel='noopener noreferrer';link.textContent='YouTube ↗';link.setAttribute('aria-label','Watch '+v.title+' on YouTube');
  caption.append(info,link);card.append(button,caption);grid.append(card);
 }
 shown=end;more.hidden=shown===videos.length;more.textContent='Show more videos ('+(videos.length-shown)+' remaining)';
 status.textContent=shown+' of '+videos.length+' videos · '+(videos.every(v=>v.publishedAt)?'Newest to oldest':'Dated videos first; undated videos follow');
}
document.querySelectorAll('[data-video-id]').forEach(button=>{
 const video=videos.find(video=>video.id===button.dataset.videoId);
 if(video)button.addEventListener('click',()=>openVideo(video));
});
showBatch();more.addEventListener('click',()=>{const firstNew=shown;showBatch();grid.children[firstNew]?.querySelector('button').focus({preventScroll:true})});
document.getElementById('close-video').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>player.replaceChildren());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
