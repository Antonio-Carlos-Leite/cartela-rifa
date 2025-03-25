let remainingNumbers = []; // Lista de números restantes

// Inicializar números sequenciais
function initializeNumbers() {
	if (remainingNumbers.length === 0) {
		remainingNumbers = Array.from({ length: 10000 }, (_, i) => i + 1);
		shuffleArray(remainingNumbers); // Embaralhar os números uma única vez
	}
}

// Função para embaralhar um array
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// Gerar cartelas dentro de um intervalo
function generateCartelasInRange(startSequence, endSequence,ticketValue) {
	initializeNumbers(); // Garantir que os números estejam inicializados
	const cartelas = [];

	if (startSequence < 1 || endSequence > 9999 || startSequence > endSequence) {
		throw new Error(
			'Os números do intervalo devem estar entre 1 e 9999 e o inicial deve ser menor ou igual ao final.'
		);
	}

	const rangeCount = endSequence - startSequence + 1;

	for (let i = 0; i < rangeCount && remainingNumbers.length >= 4; i++) {
		// Seleciona 5 números únicos da lista embaralhada
		const selectedNumbers = remainingNumbers.splice(0, 4).map(num => num.toString().padStart(4, '0'));
		
		const cartelaNumber = (startSequence + i).toString().padStart(4, '0');
		cartelas.push({ cartela: cartelaNumber, numbers: selectedNumbers, value: ticketValue });
	}
	return cartelas;
}

// Evento de clique no botão
document.getElementById('generate-btn').addEventListener('click', () => {
	const errorMessage = document.getElementById('error-message');
	const startSequenceInput = document.getElementById('start-sequence');
	const endSequenceInput = document.getElementById('end-sequence');
	const ticketValueInput = document.getElementById('ticket-value'); // Obtendo o valor digitado
	const startSequence = parseInt(startSequenceInput.value, 10);
	const endSequence = parseInt(endSequenceInput.value, 10);
	const ticketValue = ticketValueInput.value.trim(); // Pegando o valor inserido

	errorMessage.textContent = ''; // Limpar mensagens de erro
	try {
		const cartelas = generateCartelasInRange(startSequence, endSequence, ticketValue);

		// Salvar as cartelas no localStorage
		localStorage.setItem('generatedCartelas', JSON.stringify(cartelas));

		// Abrir a página de impressão
		window.open('../cards/index.html', '_blank');
	} catch (error) {
		errorMessage.textContent = error.message;
	}
});

// Inicializar números na primeira carga
initializeNumbers();
