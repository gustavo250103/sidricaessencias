# Estrutura final do projeto (com README)

## 📂 Arquivos
```
sidricaessencias/
├─ index.html        ← site principal
├─ style.css         ← estilos (tema azul bebê)
├─ app.js            ← lógica (WhatsApp + Instagram)
├─ README.md         ← documentação do repositório (não aparece no site)
└─ assets/           ← imagens do site
   ├─ capa.jpg
   ├─ lavanda.jpg
   ├─ alecrim.jpg
   ├─ mel.jpg
   ├─ argila.jpg
   ├─ capim-limao.jpg
   └─ rosa-mosqueta.jpg
```

---

## index.html (já pronto)
O arquivo principal HTML foi mantido no canvas, com links para `style.css` e `app.js`. Ele contém:
- Layout em azul bebê
- Cards de produtos
- Botões de WhatsApp e Instagram
- Responsivo para mobile

---

## style.css (tema azul bebê)
```css
/* estilos resumidos (tema pastel azul bebê) */
:root{
  --bg:#f5f9ff;
  --ink:#0d2136;
  --muted:#4b6a88;
  --card:#ffffff;
  --line:#dde7f7;
  --primary:#a7d0ff;
  --primary-600:#8ec5ff;
  --accent:#68b5ff;
}
/* ... restante igual ao passo anterior ... */
```

---

## app.js (WhatsApp + Instagram)
```js
// Configurações
const WHATS_NUMERO = "55XXXXXXXXXXX"; // troque para seu número
const MENSAGEM_PADRAO = "Olá! Vim do site sidricaessencias e quero fazer um pedido 😊";
const INSTAGRAM_URL = "https://instagram.com/sidricaessencias";

function linkZap(msg){
  return `https://wa.me/${WHATS_NUMERO}?text=${encodeURIComponent(msg)}`;
}

function setWhatsLinks(){
  ["zap-top","zap-hero","zap-main","zap-float"].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.href=linkZap(MENSAGEM_PADRAO);
  });
}

function setBuyButtons(){
  document.querySelectorAll("[data-prod]").forEach(a=>{
    const nome=a.getAttribute("data-prod");
    a.addEventListener("click",(e)=>{
      e.preventDefault();
      window.location.href=linkZap(`Olá! Tenho interesse no sabonete \"${nome}\".`);
    });
  });
}

function setInstagramLinks(){
  ["instagram-link","instagram-link-footer"].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.href=INSTAGRAM_URL;
  });
}

function setYear(){
  const el=document.getElementById("ano");
  if(el) el.textContent=new Date().getFullYear();
}

setWhatsLinks();
setBuyButtons();
setInstagramLinks();
setYear();
```

---

## README.md (novo arquivo)
```markdown
# 🌸 Sidrica Essências

Website simples para apresentação e pedidos de **sabonetes artesanais**, hospedado gratuitamente com **GitHub Pages**.

## 🚀 Tecnologias
- **HTML5** (estrutura)
- **CSS3** (tema pastel azul bebê, responsivo)
- **JavaScript (vanilla)** (integração WhatsApp e links do Instagram)
- **GitHub Pages** (deploy sem custo)

## 📂 Estrutura
```
index.html    → página principal
style.css     → estilos visuais\ app.js        → lógica WhatsApp + Instagram
assets/       → imagens dos produtos
README.md     → este documento
```

## 📱 Funcionalidades
- Catálogo de produtos com imagem, descrição e preço
- Botões de compra que abrem o WhatsApp com mensagem preenchida
- Link para Instagram (header e footer)
- Layout responsivo (desktop e mobile)
- Botão flutuante de contato rápido (WhatsApp)

## 🔧 Configuração
1. Edite `app.js` e substitua:
   ```js
   const WHATS_NUMERO = "55XXXXXXXXXXX"; // seu número
   const INSTAGRAM_URL = "https://instagram.com/seu_usuario";
   ```
2. Suba suas imagens na pasta `assets/` e ajuste os nomes no `index.html`.
3. Commit & push → o site é publicado automaticamente no link do GitHub Pages.

## 🌐 Deploy
URL: `https://SEU-USUARIO.github.io/sidricaessencias/`

---

© 2025 Sidrica Essências — projeto acadêmico/demonstrativo.
```

