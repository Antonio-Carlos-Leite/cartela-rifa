// Recuperar as cartelas do localStorage
const cartelas = JSON.parse(localStorage.getItem('generatedCartelas')) || [];

// Exibir as cartelas na página
const container = document.getElementById('ticket-container');
cartelas.forEach(({ cartela, number }) => {
  const ticket = document.createElement('div');
  ticket.className = 'ticket';
  ticket.innerHTML = `
    <div class="cartela-number">Cartela #${cartela}</div>
    <div class="random-number">${number}</div>
  `;
  container.appendChild(ticket);
});

// Iniciar impressão automaticamente ao carregar a página
window.onload = () => window.print();
localStorage.removeItem('generatedCartelas');
