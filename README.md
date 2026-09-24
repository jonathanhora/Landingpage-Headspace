# Headspace — Landing page
 
Landing page responsiva baseada no projeto **Intuitive Start – Curso**, com design desenvolvido no **Figma** e implementação feita com o **Claude** (Anthropic).
 
- **Design (Figma).**
- **Frame de referência da estrutura:** `headspace`
- **Frames do design system:** `tipografia`, `paleta`, `Assets` e `btns`
> Projeto com fins de estudo. A marca, os textos e as imagens pertencem à Headspace Inc.
 
## Tecnologias
 
- HTML5 semântico
- CSS3 (variáveis, grid, flexbox, container queries)
- JavaScript
- [GSAP 3.12.5](https://gsap.com/) + ScrollTrigger (via CDN)
- Fonte [Lato](https://fonts.google.com/specimen/Lato) (400, 600 e 700)
## Estrutura
 
```
headspace-site/
├── index.html       Estrutura da página
├── css/styles.css   Estilos e responsividade
├── js/main.js       Interações e animações (GSAP)
└── assets/          Imagens em WebP
```
 
## Como rodar
 
Não há build nem dependências para instalar. Extraia a pasta e abra o `index.html` no navegador (é necessária conexão com a internet para carregar a fonte Lato e o GSAP pelo CDN).
 
## Seções
 
Nav · Hero · Mais Headspace (telas do app) · Benefícios · Qualidade · Download · Precisa de ajuda? · Footer
 
## Design system (Figma)
 
**Cores**
 
| Token | Valor |
| --- | --- |
| Base / preto | `#190D03` |
| Base / branco | `#FBFBFB` |
| Base / fundo | `#F9F4F2` |
| Primária (laranja) | `#FE7300` (hover `#E76900`) |
| Secundária (azul) | `#0061EF` (hover `#0058D9`) |
| Terciária (amarelo) | `#FFCE00` |
| Cinza (texto) | `#525252` |
| Fundo do footer | `#FFD4B0` |
 
**Tipografia:** Lato — Heading 1 (56 px, Bold), Heading 2 (48 px), Heading 4 (32 px), texto grande (18 px), corpo (16 px) e pequeno (14 px). Nos breakpoints menores os títulos usam `clamp()` para escalar.
 
**Botões:** pílula (raio 100 px), padding `14px 32px`, Lato Bold 16 px, nas variações azul e laranja.

## Microinterações
 
- Entrada sequencial do hero e leve flutuação da imagem.
- Revelação suave das seções ao rolar (uma única vez).
- Botões com elevação no hover e efeito ao clicar; sublinhado animado nos links da navegação.
- Parallax sutil nas imagens do card "Precisa de ajuda?".
