// Função para obter a data atual
function obterDataAtual() {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

// Função para obter a hora atual
function obterHoraAtual() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  return `${horas}:${minutos}:${segundos}`;
}

// Recuperar as cartelas do localStorage
const cartelas = JSON.parse(localStorage.getItem('generatedCartelas')) || [];

// Exibir as cartelas na página
const container = document.getElementById('ticket-container');
cartelas.forEach(({ cartela, number }) => {
  const ticket = document.createElement('div');
  ticket.className = 'ticket';
  ticket.innerHTML = `
    <div id="webcrumbs">
    <!-- Contêiner principal -->
    <div class="w-[900px] bg-white shadow rounded-lg p-1 flex gap-1 text-neutral-950">
      
      <!-- Seção esquerda -->
      <div class="flex flex-col w-1/2 gap-2">
        <div class="flex flex-col">
          <label class="text-sm font-bold">Nome</label>
          <hr class="border-neutral-300" />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-bold">Telefone</label>
          <hr class="border-neutral-300" />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-bold">Endereço</label>
          <hr class="border-neutral-300" />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-bold">Vendedor</label>
          <hr class="border-neutral-300" />
        </div>
        <div class="flex justify-between">
        <img src="../assets/1732918690381.png" alt="logo" class=" w-10">
          <div>
            <label class="text-sm font-bold">${cartela}</label>
            <hr class="border-neutral-300" />
          </div>
          <div>
            <label class="text-sm font-bold">${number}</label>
            <hr class="border-neutral-300" />
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
            <img src="../assets/images.jpg" alt="moto vermelha" class="w-40">
            <div class=" flex flex-col gap-2 items-center">
                <img src="../assets/1732918690381.png" alt="logo" class=" w-20">
              <span class="font-bold text-sm text-center">PRÊMIO</span>
              <span class="text-red-600 text-sm">honda titan 160</span>
            </div>
          </div>
          <div class="flex justify-evenly gap-1">
            <div class="border border-neutral-300 rounded-md p-1 text-center">
              <span class="text-sm font-bold">R$</span>
              <span class="text-red-600 font-bold">_____,_____</span>
            </div>
            <span class="text-sm">${number}</span>
            <span class="text-sm">${cartela}</span>
            
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
