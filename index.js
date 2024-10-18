document.getElementById('cep').addEventListener('blur', function() {
    const cep = document.getElementById('cep').value;

    // Validação do CEP
    if (!/^\d{5}-\d{3}$/.test(cep)) {
        alert("CEP inválido! Formato: 00000-000");
        return;
    } ok

    // Função para buscar o endereço
    function fetchAddress(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                if (!response.ok) throw new Error('CEP não encontrado');
                return response.json();
            })
            .then(data => {
                // Verifica se o endereço foi encontrado e se está completo
                if (!data.erro && data.logradouro && data.bairro && data.localidade && data.uf) {
                    document.getElementById('address').value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
                } else {
                    alert("Endereço incompleto ou não encontrado!");
                    document.getElementById('address').value = ''; // Limpa o campo se o endereço não for encontrado
                }
            })
            .catch(error => {
                console.error("Erro ao buscar o endereço:", error);
                alert("Não foi possível buscar o endereço.");
            });
    }

    fetchAddress(cep);
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;

    // Validações
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Email inválido!");
        return;
    }
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        alert("CPF inválido! Formato: 000.000.000-00");
        return;
    }

    // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário.

    // Redireciona para a página de sucesso
    window.location.href = "success.html";
});
