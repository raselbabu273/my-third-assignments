let currentTab = "all";
const tabActive = ['bg-blue-600', 'border-blue-600', 'text-white'];
const tabInactive = ['bg-transparent', 'text-slate-700', 'border-slate-600', 'text-black'];

const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');
const emptyState = document.getElementById('empty-state');
const availableState = document.getElementById('available');

function switchTab(tab){
    const tabs = ['all', 'interview', 'rejected'];
    currentTab = tab;
    for(const t of tabs){
        const tabName = document.getElementById('tab-' + t);
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
        updateState();
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];
    for(const section of pages){
        section.classList.add('hidden');
    }

    emptyState.classList.add('hidden');


    if(tab ==='all'){
        allContainer.classList.remove('hidden');
        if(allContainer.children.length < 1){
            emptyState.classList.remove('hidden');
        }
    }
    else if(tab === 'interview'){
        interviewContainer.classList.remove('hidden');
        if(interviewContainer.children.length < 1){
            emptyState.classList.remove('hidden');
        }
    }
    else{
        rejectedContainer.classList.remove('hidden');
        if(rejectedContainer.children.length < 1){
            emptyState.classList.remove('hidden');
        }
    }
}

// state update
const totalState = document.getElementById('state-total');
const interviewState = document.getElementById('state-interview');
const rejectedState = document.getElementById('state-reject');

switchTab(currentTab);

document.getElementById('jobs-container').addEventListener('click', function(event){
    const clickElement = event.target;
    const card = clickElement.closest('.card');
    const parent = card.parentNode;
    const status = card.querySelector('.change');

    if(clickElement.classList.contains('interview')){
        status.innerText = 'Interviewed';
        interviewContainer.appendChild(card);
    }
    if(clickElement.classList.contains('rejected')){
        status.innerText = 'Rejected';
        rejectedContainer.appendChild(card);
    }
    if(clickElement.classList.contains('delete')){
        parent.removeChild(card);
    }
    updateState();
})

function updateState(){
    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length

    };

    totalState.innerText = counts.all;
    interviewState.innerText = counts.interview;
    rejectedState.innerText = counts.rejected;
    availableState.innerText = counts[currentTab];

    if(counts[currentTab] < 1){
        emptyState.classList.remove('hidden');
    }
    else{
        emptyState.classList.add('hidden');
    }
}

updateState();