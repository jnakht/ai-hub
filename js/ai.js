


const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
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
    <h2 class="card-title">${data.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `;

        dataContainer.appendChild(newElement);
    })
}