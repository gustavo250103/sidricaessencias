// ===== CONFIGURAÇÕES =====
const WHATS_NUMERO    = "5511945414667";                         // 55 + DDD + número
const MENSAGEM_PADRAO = "Olá! Vim do site Sidrica Essências e quero fazer um pedido.";
const INSTAGRAM_URL   = "https://instagram.com/gustavo_.diaz";

// Monta link do WhatsApp (wa.me)
const linkZap = (msg = MENSAGEM_PADRAO) =>
  `https://wa.me/${WHATS_NUMERO}?text=${encodeURIComponent(msg)}`;

// WhatsApp nos ícones e botões
function wireWhats() {
  [document.getElementById('zap-float'), document.getElementById('foot-wa')]
    .forEach(el => { if (el) el.href = linkZap(); });

  document.querySelectorAll('.buy[data-prod]').forEach(a => {
    const nome = a.getAttribute('data-prod');
    a.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = linkZap(`Olá! Tenho interesse em "${nome}".`);
    });
  });
}

// Instagram (botão e handle)
function wireInstagram() {
  const profileBtn = document.getElementById('btn-insta');
  const footIg = document.getElementById('foot-ig');
  const handle = document.getElementById('insta-handle');
  if (profileBtn) profileBtn.href = INSTAGRAM_URL;
  if (footIg) footIg.href = INSTAGRAM_URL;
  if (handle) handle.textContent = '@' + INSTAGRAM_URL.split('/').pop();
}

// Ano no rodapé
document.getElementById('ano')?.textContent = new Date().getFullYear();

wireWhats();
wireInstagram();
