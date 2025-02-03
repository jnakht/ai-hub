


const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    console.log(data.data);
    const AIs = data.data.tools;
    showData(AIs);
}
loadData();

const showData = (allData) => {
    const dataContainer = document.getElementById('data-container');
    allData.forEach(data => {
        console.log(data);
        const newElement = document.createElement('div');
        newElement.innerHTML = `
            <div class="card bg-base-100 w-full h-full shadow-xl">
  <figure>
    <img
      src="${data.image}"
      alt="Shoes"  onerror="this.src='./images/No-Image-Found-400x264.png'" />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-[#111] text-2xl font-semibold">Features</h2>
    
    <p> ${data.description ? data.description : 'No Description'} </p>
    

    
    <div class="card-actions justify-between">
    <div> 
        <h2 class="card-title">${data.name}</h2>
        <p>${data.published_in}</p>
    </div>
      <button onclick="handleDetails('${data.id}')" class="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        
        `;

        dataContainer.appendChild(newElement);
    });
}

const handleDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const modalContentContainer = document.getElementById('modal-content-container');
    modalContentContainer.textContent = '';
    
    console.log('deatils button clicked', id);
    console.log(data);
    // creating new element 
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `


                <div class="w-[70vw] border-2 border-green-500 mx-auto rounded-2xl bg-white h-[500px] flex justify-between gap-8 items-center">
            <!-- left side container -->
            <div class="bg-[#EB575709] flex flex-col gap-6 flex-1 p-4">
                <h3 class="text-[#111] text-2xl font-semibold">${data.data?.description}</h3>
                <!-- three price card container -->
                <div class=" flex justify-around items-center ">
                    <div class="bg-white  p-5  w-[132px] h-[100px] rounded-2xl text-[#03A30A] text-base font-bold">${data?.data?.pricing?.[0]?.price || 'N/A'} <span>${data?.data?.pricing?.[0]?.plan || 'N/A'}</span> </div>
                    <div class="bg-white  p-5 w-[132px] h-[100px] rounded-2xl text-[#F28927] text-base font-bold">${data.data?.pricing?.[1]?.price || 'N/A'} <span>${data.data?.pricing?.[1]?.plan || 'N/A'}</span></div>
                    <div class="bg-white p-5   w-[132px] h-[100px] rounded-2xl text-[#EB5757] text-base font-bold">${data.data?.pricing?.[2]?.price || 'N/A'} <span>${data.data?.pricing?.[2]?.plan || 'N/A'}</span></div>
                </div>
                <!-- features and Integrations -->
                <div class="flex justify-around items-center">
                    <!-- feature -->
                <div>
                    <h2 class="text-[#111] text-2xl font-semibold">Features</h2>
                <ul class="text-[#585858] text-base font-normal list-disc">
                    <li>Customizable responses</li>
                    <li>Multilingual support</li>
                    <li>Seamless integration</li>
                </ul>
                </div>
                <!-- Integration div -->
                <div>
                    <h2 class="text-[#111] text-2xl font-semibold">Integrations</h2>
                    <ul class="text-[#585858] text-base font-normal list-disc">
                        <li>FB Messenger</li>
                        <li>Slack</li>
                        <li>Telegram</li>
                    </ul>
                </div>
                </div>
            </div>
            <!-- right side container -->
            <div class="flex-1 flex flex-col justify-between items-center">
                <img src="./images/No-Image-Found-400x264.png" alt="">
                <div class="text-center mt-6 flex flex-col gap-4">
                    <h2 class="text-[#111] text-2xl font-semibold">Hi, how are you doing today?</h2>
                <p class="text-[#585858] text-base font-light">I'm doing well, thank you for asking. How can I assist you today?</p>
                </div>
            </div>
        </div>
    
    
    
    
    `;


    modalContentContainer.appendChild(newDiv);
    my_modal.showModal();
}