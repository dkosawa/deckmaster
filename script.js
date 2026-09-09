const more=document.getElementById('moreVideos');
more?.addEventListener('click',()=>{
  const note=document.createElement('p');
  note.className='video-note';
  note.textContent='The complete 43-video archive will be restored here as we recover the original video URLs from the hosted version.';
  note.style.textAlign='center';note.style.marginTop='22px';note.style.opacity='.65';
  more.replaceWith(note);
});