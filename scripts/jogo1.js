// Função para exibir produtos
function displayProducts(products, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = ''; // Limpa o conteúdo atual

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item', 'p-4', 'bg-white', 'mb-4');
        productDiv.innerHTML = `
            <div class="h-[65%]">
                <img src="${product.image}" alt="${product.name}" class="w-[222px] h-[222px] mb-2">    
            </div>
            
            <div class="h-[9%] py-4 px-2">
                <h5 class="p-0 m-0 text-[12px]">${product.name}</h5>
            </div>
            
            <div class="h-[9%] py-2 px-2">
                <p class="text-red-600 font-bold text-[18px] font-700">R$ ${product.price.toFixed(2)}</p>
            </div>
            <div class="w-full h-[11%]">
                <button class="w-100 bg-red-600 text-white text-[18px] py-2 px-4 flex items-center justify-center hover:bg-black ">
                    <p class="p-0 m-0 mr-2">COMPRAR</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 7 8" fill="none"><path d="M4.35256 3.032H6.52856C6.66723 3.032 6.76323 3.064 6.81656 3.128C6.8699 3.18133 6.89656 3.27733 6.89656 3.416V4.312C6.89656 4.55733 6.7739 4.68 6.52856 4.68H4.35256V6.888C4.35256 7.144 4.22456 7.272 3.96856 7.272H3.02456C2.76856 7.272 2.64056 7.144 2.64056 6.888V4.68H0.464563C0.219229 4.68 0.0965625 4.55733 0.0965625 4.312V3.416C0.0965625 3.27733 0.123229 3.18133 0.176563 3.128C0.229896 3.064 0.325896 3.032 0.464563 3.032H2.64056V0.839999C2.64056 0.583999 2.76856 0.455999 3.02456 0.455999H3.96856C4.22456 0.455999 4.35256 0.583999 4.35256 0.839999V3.032Z" fill="white"></path></svg>
                </button>
            </div>
            
        `;
        container.appendChild(productDiv);
    });
}

// Fetch e exibição dos produtos
axios.get('../scripts/api/apiFla.json')
    .then(response => {
        const jogo1 = response.data.filter(item => item.category === 'jogo 1');
        displayProducts(jogo1, 'product-jogo1');
    })
    .catch(error => {
        console.error('Erro ao buscar os itens:', error);
    });