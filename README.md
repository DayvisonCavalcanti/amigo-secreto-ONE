# Amigo Secreto
<div align="center">
   <img src="https://github.com/user-attachments/assets/d1450c74-3e7b-43e2-9e35-14566026cd4c" width="400px">
</div>
O <strong>Amigo Secreto</strong> é uma aplicação simples em HTML, CSS e JavaScript para ajudar no sorteio de amigos secretos em um grupo. A aplicação permite que os usuários adicionem nomes de amigos, sorteiem um amigo secreto e visualizem o resultado de maneira interativa.

## Funcionalidades

- **Adicionar Amigos**: O usuário pode adicionar os nomes de seus amigos à lista.
- **Sortear Amigo Secreto**: A aplicação sorteará aleatoriamente um amigo da lista para ser o "amigo secreto" de outro.
- **Interface Simples**: A interface foi desenvolvida para ser intuitiva e fácil de usar.

## Como Usar

1. **Adicionar Amigos**:
   - Digite o nome de um amigo na caixa de texto e clique no botão "Adicionar" para adicionar o nome à lista de amigos.
     
   <div align="center">
      <img src="https://github.com/user-attachments/assets/ee4be92b-520f-4c54-b473-6290dc38eae0" width="400px">
   </div>

2. **Sortear Amigo Secreto**:
   - Após adicionar amigos à lista, clique no botão "Sortear amigo" para gerar aleatoriamente um amigo secreto.

   <div align="center">
      <img src="https://github.com/user-attachments/assets/9bc65291-0b37-4ee7-901a-398458f938d7" width="400px">
   </div>

## Como Executar

Para executar o projeto localmente, siga os passos abaixo:

1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` no seu navegador.

## Estrutura do Projeto

```bash
.
├── index.html         # Arquivo principal HTML
├── style.css          # Arquivo de estilização (CSS)
├── app.js             # Lógica do projeto em JavaScript
└── assets/            # Pasta de imagens (como o ícone e a imagem principal)
```

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilos da página, com foco na responsividade.
- **JavaScript**: Lógica de programação para adicionar amigos e realizar o sorteio.

## Detalhes do Código

### HTML

O arquivo `index.html` contém a estrutura básica da página, incluindo a caixa de entrada de nomes, a lista de amigos e o botão para sortear o amigo secreto.

### CSS

O arquivo `style.css` é responsável pela aparência do projeto, incluindo o layout e os estilos para os diferentes elementos da página.

### JavaScript

O arquivo `app.js` contém a lógica de programação:
- `adicionarAmigo()`: Adiciona um nome à lista de amigos.
- `atualizarListaAmigos()`: Atualiza a lista de amigos exibida na página.
- `sortearAmigo()`: Realiza o sorteio de um amigo secreto de maneira aleatória.

## Exemplo de Funcionamento

1. O usuário adiciona os amigos à lista:
   - João
   - Maria
   - Carlos

2. Ao clicar no botão "Sortear amigo", o sistema irá sortear aleatoriamente um nome da lista, por exemplo:
   - **Amigo sorteado**: João


