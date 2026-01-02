document.getElementById('history').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('pending-section').classList.add('hidden');
    document.getElementById('statement-section').classList.add('hidden');
    document.getElementById('history').classList.add('bg-text');
    document.getElementById('pending').classList.remove('bg-text');
    document.getElementById('statement').classList.remove('bg-text');

})
document.getElementById('pending').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('pending-section').classList.remove('hidden');
    document.getElementById('statement-section').classList.add('hidden');
    document.getElementById('history').classList.remove('bg-text');
    document.getElementById('pending').classList.add('bg-text');
    document.getElementById('statement').classList.remove('bg-text');    
})
document.getElementById('statement').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('pending-section').classList.add('hidden');
    document.getElementById('statement-section').classList.remove('hidden');
    document.getElementById('history').classList.remove('bg-text');
    document.getElementById('pending').classList.remove('bg-text');
    document.getElementById('statement').classList.add('bg-text');
})





function updateSection(text, showTitle = false, showImg = false) {
  document.getElementById('section-text').innerText = text;

  const title = document.getElementById('section-title');
  const img = document.getElementById('section-img');

  if (showTitle) title.classList.remove('hidden');
  else title.classList.add('hidden');

  if (showImg) img.classList.remove('hidden');
  else img.classList.add('hidden');
}

function setupClick(id, text, showTitle = false, showImg = false) {
  document.getElementById(id).addEventListener('click', function (event) {
    event.preventDefault();
    updateSection(text, showTitle, showImg);
  });
}

setupClick('overview', 'Welcome to Swift Express Cargo, ABC-123', true, true);
setupClick('packages', 'My Packages');
setupClick('create', 'Create Prealert');
setupClick('payment', 'Payment');
setupClick('cost', 'Cost Calculator');
setupClick('location', 'Your Address');
setupClick('notification', 'Notification !');
setupClick('account', 'Account Setting');

