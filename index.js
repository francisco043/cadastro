document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpf = document.getElementById('cpf').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;

    // Validações simples
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!emailPattern.test(email)) {
        alert("Email inválido!");
        return;
    }

    if (!cpfPattern.test(cpf)) {
        alert("CPF inválido! Formato correto: 000.000.000-00");
        return;
    }

    // Aqui você pode enviar os dados para um servidor ou API
    document.getElementById('message').textContent = "Cadastro realizado com sucesso!";
});

function fetchAddress() {
    const cep = document.getElementById('cep').value;
    
    // Validação do CEP
    const cepPattern = /^\d{5}-\d{3}$/;
    if (!cepPattern.test(cep)) {
        alert("CEP inválido! Formato correto: 00000-000");
        return;
    }

    // Simulação de uma chamada à API para buscar o endereço
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('CEP não encontrado');
            }
            return response.json();
        })
        .then(data => {
            if (data && !data.erro) {
                document.getElementById('address').value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
            } else {
                alert("CEP não encontrado!");
            }
        })
        .catch(error => {
            console.error("Erro ao buscar o endereço:", error);
            alert("Não foi possível buscar o endereço.");
        });
}
