* # Cadastro de Endereço


## 🚀 Começando

 O projeto se consiste em cadastrar um usuario.
 
 * ``As informações necessarias são:``

>* ``Nome: Campo para inserir o usuario``

>* ``Email: Campo de informações para receber alguma notificação.``

>* ``senha: Campo para a segurança da sua conta.``

>* ``cpf: Campo para os dados do usuario.``

>* ``Data de nascimento: Campo nascimento do usuario, e segurança..``

>* ``Cep: Campo para verificar o endereço.``

>* ``Endereço: Campo para autenticar o endereço.``

## 📋 Requisitos

Um dos requisitos e colocar todas as informações necessarias.

## 📋 Informações

caso falte alguma informação, ou conste algo de errado, sera notificado.

## 📋 Notificações

sera notificado caso os campo nao estejam completos

![](Captura%20de%20tela%202024-10-10%20113853.png)


## 📋 Auxilío

com a inserção do cep, sera preenchido automaticamente, facilitando o cadastro do usuario, ou feito manualmente.

## Funcionalidades do Java-Script 🔧


* 1- Busca de endereço via a API: Verifica s informações e valida 

* 2- Validação de CEP: Valida se esta tudo correto com as informações

* 3- Validar o cadastro: Verifica as informações se esta tudo correto com as informações

* 4- Consumo de API: Essa função utiliza a API ViaCEP para buscar o endereço associado ao CEP informado.

* 5- notificações alert: alerta o usuário caso o CEP não seja encontrado ou seja inválido.

# Exemplos 📋


* 1 - Verifica s informações e valida 

* 2 -  Valida se esta tudo correto com as informações

* 3 -  Validar o cadastro: Verifica as informações se esta tudo correto com as informações

* 4 -  Consumo de API: Essa função utiliza a API ViaCEP para buscar o endereço associado ao CEP informado.

* 5 -  alerta o usuário caso o CEP não seja encontrado ou seja inválido.

# 🖇️ Partes do Código

~~~ JavaScript

     })
            .then(data => {
                // Verifica se o endereço foi encontrado e se está completo
                if (!data.erro && data.logradouro && data.bairro && data.localidade && data.uf) {
                    document.getElementById('address').value = ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf};
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

~~~

## 📌 Explicação do Código

>* ``Bloco .then(data => { ... }): ``

📌 Este bloco é executado após a conclusão de uma promessa (promise), onde data representa a resposta recebida da chamada de API (presumivelmente uma busca de endereço).
Verificação do resultado: ``

>* `` if (!data.erro && data.logradouro && data.bairro && data.localidade && data.uf):``

📌 Aqui, o código verifica se não houve erro (!data.erro) e se todos os campos de endereço necessários (logradouro, bairro, localidade, uf) estão presentes na resposta.
Formatação do endereço:
document.getElementById('address').value = ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf};:
Se todas as informações estiverem corretas, o endereço é formatado e atribuído ao campo de entrada com o ID 'address'.
Tratamento de endereço incompleto ou não encontrado: ``

>* `` else { ... }: ``

📌 Se a verificação falhar, significa que o endereço está incompleto ou não foi encontrado.
Um alerta é exibido informando o usuário sobre o problema.
O campo de entrada é limpo (document.getElementById('address').value = '';).
Tratamento de erros: ``

>* ``catch(error => { ... }): ``

📌 Este bloco captura qualquer erro que ocorra durante a busca do endereço.
O erro é logado no console (console.error(...)).
Um alerta é mostrado ao usuário informando que não foi possível buscar o endereço.

##  Metodos e linguagens utilizados 📋

📌 return
 
📌 fuction

📌 Document.getElementById

📌 Alert
 
📌 java-script

📌 Html

📌 CSS

# Explicação 📋

📌 Return

* 🖇️ Usado dentro de uma função para retornar um valor. Quando return é executado, a função é encerrada e o valor especificado é enviado de volta para onde a função foi chamada.

 📌 Fuction
 
* 🖇️ Palavra-chave usada para declarar uma função em JavaScript. Uma função é um bloco de código que pode ser executado quando chamado.

📌 Document.getElementById

* 🖇️ Um método do objeto document que busca e retorna um elemento HTML pelo seu atributo id. É usado para acessar elementos do DOM (Document Object Model) para manipulação.

📌 Alert

* 🖇️ Um método que exibe uma caixa de diálogo com uma mensagem e um botão "OK". Usado para fornecer feedback ao usuário ou para alertá-lo sobre alguma situação.
.

📌 java-script

* 🖇️ Uma linguagem de programação que permite adicionar interatividade às páginas web. É executada no navegador do cliente e pode manipular o DOM, fazer requisições assíncronas (como com fetch), e muito mais.

📌 Html

* 🖇️ A linguagem de marcação padrão usada para criar e estruturar páginas web. HTML define a estrutura do conteúdo através de elementoS.

📌 CSS

* 🖇️ Uma linguagem de estilo utilizada para descrever a apresentação e o layout de documentos HTML. CSS permite estilizar elementos, como cores, fontes, espaçamento, e layout, separando a aparência do conteúdo

# ⚙️ Executando os códigos

Entre na tela de formulario, digite todos os campos e aperte em cadastrar.

## 📌 Foto da interface:



![](Captura%20de%20tela%202024-10-18%20075305.png)

## 📌 Passo a passo cadastro:

![](Gravando-2024-10-18-084152.gif)


## 🔩 Quais motivos do cadastro?

Encontrar o endereço, ter uma agilidade maior para as empresas que fazem entrega em questao de localizacao e facilitar a vida do usuario. 

# 🛠️ Conclusão

>* `` Este formulário de cadastro de endereço é simples porem cumpre com oque promete.

 >* ``Ele utiliza HTML e Bootstrap para proporcionar uma interface amigável e eficaz.

 >* ``Ele permite que os usuários coloquem os dados de endereço de forma clara e organizada.
 

#  📦 Tecnologias

- HTML5
- JAVA-SCRIPT
- CSS
- API - https://viacep.com.br/
- BOOTSTRAP
- HTML
- GIT HUB


## Fontes

- IA generativa
- GLOGLE 

# Autor

- [Fransisco Maimone](https://github.com/francisco043)




