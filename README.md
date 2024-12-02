# Links-App

## 📝 Descrição

O Links-App é uma aplicação desenvolvida em React Native, utilizando Expo, para criar, organizar e armazenar links. Cada link pertence a uma categoria específica, como Curso, Projeto, ou Vídeo, oferecendo organização e praticidade ao usuário.

Este aplicativo foi desenvolvido como parte do curso de **Introdução ao React Native** da [Rocketseat](https://app.rocketseat.com.br).

---

## 🚀 Funcionalidades Principais

1. **➕ Adicionar Links**

   - Crie novos links preenchendo informações como nome, URL e categoria.

2. **📂 Organizar por Categorias**

   - Filtre e visualize os links organizados em categorias como **Curso**, **Projeto**, e mais.

3. **📋 Listar Links**

   - Exiba todos os links cadastrados com seus detalhes.

4. **✏️ Editar Links**

   - Atualize as informações de links existentes.

5. **🗑️ Remover Links**
   - Exclua links da lista com um toque.

---

## 🛠️ Modelo de Dados

Cada link possui os seguintes atributos:

| Atributo      | Tipo     | Descrição                             |
| ------------- | -------- | ------------------------------------- |
| **id**        | `string` | Identificador único do link.          |
| **nome**      | `string` | Nome ou título do link.               |
| **url**       | `string` | Endereço do link (ex.: https://...).  |
| **categoria** | `string` | Categoria do link (ex.: Curso, Site). |

📌 **Exemplo de Objeto**:

```json
{
  "id": "1",
  "nome": "Rocketseat",
  "url": "https://app.rocketseat.com.br",
  "categoria": "Curso"
}
```

---

## 📂 Estrutura do Projeto

```
src/
├── app/
├── assets/
├── components/
├── storage/
├── styles/
└── utils/
```

---

## 🔗 Fluxo da Aplicação

1. **🏠 Tela Inicial (Home)**

   - Lista de links cadastrados.
   - Botão de ação para adicionar novos links.

2. **🖊️ Adicionar/Edição de Link**

   - Formulário para inserir ou atualizar nome, URL e categoria de um link.

---

## 🎨 **Design**

O App utiliza uma paleta de cores personalizada para manter uma identidade visual consistente e agradável.

### 🎨 **Paleta de Cores**

```json
{
  "gray": {
    "100": "#F4F4F5",
    "200": "#E4E4E7",
    "300": "#D4D4D8",
    "400": "#A1A1AA",
    "500": "#71717A",
    "600": "#52525B",
    "800": "#27272A",
    "900": "#18181B",
    "950": "#09090B"
  },
  "green": {
    "300": "#2DD4BF",
    "900": "#042F2E"
  }
}
```

### 🎨 **Visualização das Cores**

| Cor           | Exemplo                                                  | Hex Code  |
| ------------- | -------------------------------------------------------- | --------- |
| **Gray 100**  | ![#F4F4F5](https://via.placeholder.com/20/F4F4F5?text=+) | `#F4F4F5` |
| **Gray 200**  | ![#E4E4E7](https://via.placeholder.com/20/E4E4E7?text=+) | `#E4E4E7` |
| **Gray 300**  | ![#D4D4D8](https://via.placeholder.com/20/D4D4D8?text=+) | `#D4D4D8` |
| **Gray 400**  | ![#A1A1AA](https://via.placeholder.com/20/A1A1AA?text=+) | `#A1A1AA` |
| **Gray 500**  | ![#71717A](https://via.placeholder.com/20/71717A?text=+) | `#71717A` |
| **Gray 600**  | ![#52525B](https://via.placeholder.com/20/52525B?text=+) | `#52525B` |
| **Gray 800**  | ![#27272A](https://via.placeholder.com/20/27272A?text=+) | `#27272A` |
| **Gray 900**  | ![#18181B](https://via.placeholder.com/20/18181B?text=+) | `#18181B` |
| **Gray 950**  | ![#09090B](https://via.placeholder.com/20/09090B?text=+) | `#09090B` |
| **Green 300** | ![#2DD4BF](https://via.placeholder.com/20/2DD4BF?text=+) | `#2DD4BF` |
| **Green 900** | ![#042F2E](https://via.placeholder.com/20/042F2E?text=+) | `#042F2E` |
