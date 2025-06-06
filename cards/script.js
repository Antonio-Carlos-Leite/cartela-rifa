// Recuperar as cartelas do localStorage
const cartelas = JSON.parse(localStorage.getItem('generatedCartelas')) || [];

// Exibir as cartelas na página
const container = document.getElementById('ticket-container');
cartelas.forEach(({ cartela, numbers, value, premio }) => {
  const ticket = document.createElement('div');
  ticket.className = 'ticket';
  const formattedNumbers = numbers.join(' - '); // Exibir os números separados por "-"
  ticket.innerHTML = `
    <div id="webcrumbs">
    <!-- Contêiner principal -->
    <div class="w-[900px] bg-white shadow rounded-lg p-1 flex gap-1 text-neutral-950 border border-neutral-600">
      
      <!-- Seção esquerda -->
      <div class="flex flex-col w-1/2 gap-3">
        <div class="flex flex-col">
          <label class="text-sm font-bold">Nome:</label>
          <hr class="border-neutral-300" />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-bold">Telefone:</label>
          <hr class="border-neutral-300" />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-bold">Endereço:</label>
          <hr class="border-neutral-300" />
        </div>
        <div class="flex justify-between">
            <label class="text-sm font-bold">Vendedor:</label>

            <label class="text-sm font-bold">Data: _____/______/_______</label>
        </div>
        <div class="flex justify-between">
        <img src="../assets/logo.png" alt="logo" class=" w-10">
          <div>
            <label class="text-sm font-bold border border-neutral-300 rounded-md p-1 text-center">${cartela}</label>

          </div>
          <div>
            <label class="text-sm font-bold border border-neutral-300 rounded-md p-1 text-center">${formattedNumbers}</label>

          </div>
        </div>
      </div>
  
      <!-- Divisória -->
      <div class="w-[2px] bg-neutral-300"></div>
  
      <!-- Seção direita -->
      <div class="flex flex-col w-1/2 gap-1">
  
        <!-- Bloco de informações -->
        <div class="border border-neutral-300 p-0 rounded-md flex flex-col gap-1">
          <div class="flex flex items-center justify-evenly">
            <img src="../assets/image_resized.png" alt="imagem de prêmios" class="w-40">
                <div class=" flex flex-col gap-1 items-center">
                  <img src="../assets/logo.png" alt="logo" class=" w-20">
                  <div class=" flex flex-col border border-neutral-300 rounded-md p-1 text-center">
                  <span class="font-bold text-sm text-center">PRÊMIO</span>
                  <span id="textoPremio" class="font-bold text-red-600 text-sm">${premio}</span>
                </div>
                </div>
          </div>
          <div class="flex justify-evenly gap-1">
            <div class="border border-neutral-300 rounded-md p-1 text-center">
              <span class="text-sm font-bold">R$</span>
              <span class="text-red-600 font-bold">${value}</span>
            </div>
            <span class="text-sm font-bold border border-neutral-300 rounded-md p-1 text-center">${formattedNumbers}</span>
            
            <span class="text-sm font-bold border border-neutral-300 rounded-md p-1 text-center">${cartela}</span>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  container.appendChild(ticket);
});

// Iniciar impressão automaticamente ao carregar a página
window.onload = () => {
  if (cartelas.length > 0) {
    window.print();
    localStorage.removeItem('generatedCartelas');
  }
};
