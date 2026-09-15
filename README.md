# Página Pessoal — Portfólio Web (Bootstrap 5 vs Tailwind CSS)

Projeto desenvolvido como requisito avaliativo da **Atividade Prática 2** da disciplina de **GAC116 — Programação Web** na **Universidade Federal de Lavras (UFLA)**.

O objetivo do projeto é construir uma página pessoal (portfólio) mantendo conteúdo e seções estritamente equivalentes entre duas versões, permitindo analisar comparativamente dois paradigmas distintos de desenvolvimento front-end: a abordagem orientada a componentes (**Bootstrap 5**) e a abordagem utilitária (**Tailwind CSS**).

---

## 🔗 Demonstração e Acesso Online

O projeto está publicado e funcional via **GitHub Pages**:

* **Portal de Entrada (Raiz):** [https://diovanimangiajr.github.io/pagina-pessoal/](https://diovanimangiajr.github.io/pagina-pessoal/)  
* **Versão Bootstrap 5:** [https://diovanimangiajr.github.io/pagina-pessoal/bootstrap/](https://diovanimangiajr.github.io/pagina-pessoal/bootstrap/)  
* **Versão Tailwind CSS:** [https://diovanimangiajr.github.io/pagina-pessoal/tailwind/](https://diovanimangiajr.github.io/pagina-pessoal/tailwind/)

---

## 📂 Estrutura do Repositório

Organização dos diretórios em conformidade com a estrutura sugerida na especificação:

```text  
pagina-pessoal/  
├── index.html               # Portal de entrada para seleção de versão
├── README.md                # Documentação técnica do projeto  
├── LICENSE                  # Licença de uso do código  
├── bootstrap/               # Versão 1: Implementação com Bootstrap 5  
│   ├── index.html
│   └── assets/  
│       ├── css/styles.css  
│       ├── js/script.js  
│       └── img/foto_perfil.jpeg  
└── tailwind/                # Versão 2: Implementação com Tailwind CSS  
|   ├── index.html
|   └── assets/  
|       ├── css/styles.css  
|       ├── js/script.js  
|       └── img/foto_perfil.jpeg
```

## **⚖️ Comparativo Técnico: Bootstrap 5 vs Tailwind CSS**

| Aspecto | Implementação em Bootstrap 5 | Implementação em Tailwind CSS |
| :---- | :---- | :---- |
| **Filosofia de Design** | Orientada a componentes pré-definidos (.card, .btn, .navbar, .badge). | *Utility-first*: estilização atômica aplicada diretamente via classes utilitárias no markup. |
| **Sistema de Layout** | Sistema rígido de 12 colunas (.container, .row, .col-12, .col-lg-\=*). | Layouts fluidos e adaptáveis construídos com CSS Grid (grid-cols-\=*) e Flexbox (flex). |
| **Responsividade** | Mobile-first com infixos de breakpoint (col-md-6, d-lg-none). | Mobile-first com prefixos condicionais (md:grid-cols-2, lg:flex-row). |
| **Gerenciamento de Tema** | Atributo data-bs-theme="dark" gerenciado por variáveis CSS do framework. | Estratégia de classe (darkMode: 'class'), aplicando o prefixo dark: nos utilitários. |
| **Camada de Script (JS)** | Bundle do Bootstrap (bootstrap.bundle.min.js) para elementos como o menu colapsável. | JavaScript puro (Vanilla JS) para manipular o menu mobile e controlar o tema. |

## **🚀 Funcionalidades Implementadas**

* **Conteúdo Real e Unificado:** Apresentação acadêmica, formação, tecnologias, competências em IA/Visão Computacional, projetos e links de contato profissionais.  
* **Layout 100% Responsivo:** Adaptável para dispositivos móveis, tablets e telas desktop.  
* **Alternador de Tema (Claro / Escuro):**  
  * Persistência da preferência do usuário via localStorage.  
  * Script de prevenção contra *Flash of Unstyled Content* (FOUC) na renderização inicial do Tailwind.  
* **Menu de Navegação:** Fixo no topo (sticky), com comportamento colapsável (hambúrguer) em resoluções mobile.  
* **Ícones Vetoriais:** Integração com **Font Awesome 6.5.0** em ambas as versões.

## **🛠️ Tecnologias Utilizadas**

* **Linguagens:** HTML5, CSS3 e JavaScript (ES6+).  
* **Frameworks e Bibliotecas:**  
  * [Bootstrap 5.3.3](https://getbootstrap.com/) (CSS e JS Bundle)  
  * [Tailwind CSS](https://tailwindcss.com/) (Play CDN com motor JIT)  
  * [Font Awesome 6.5.0](https://fontawesome.com/)

* **Versionamento e Hospedagem:** Git, GitHub e GitHub Pages.

## **💻 Como Executar Localmente**

Como o projeto é estático e não exige compilação via Node.js:

1. Clone o repositório:  
    ```
    git clone [https://github.com/diovaniMangiajr/pagina-pessoal.git](https://github.com/diovaniMangiajr/pagina-pessoal.git)
    ```
2. Acesse a pasta do projeto:  
    ```
    cd pagina-pessoal
    ```
3. Abra o arquivo index.html da raiz diretamente no navegador ou utilize a extensão **Live Server** no VS Code.

## **👤 Autor**

**Diovani da Cruz Mangia Maciel Junior**

Estudante de Bacharelado em Sistemas de Informação — UFLA

 * **GitHub:** [@diovaniMangiajr](https://www.google.com/search?q=https://github.com/diovaniMangiajr/)

 * **LinkedIn:** [Diovani da Cruz Mangia Maciel Junior](https://www.google.com/search?q=https://www.linkedin.com/in/diovani-da-cruz-mangia-maciel-junior-695a54384)

## **📄 Licença**

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.