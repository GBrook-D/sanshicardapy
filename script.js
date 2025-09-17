/* Sanshi Gávea — arquivos separados
   - WhatsApp number updated
   - Images removed (placeholders kept)
   - Search box functionality added
*/

const WHATSAPP_NUMBER = "552121355650"; // atualizado com: 55 21 2135-5650

const MENU = [
  {
    "id": "entradas",
    "nome": "Entradas",
    "itens": [
      {
        "id": "missoshiro",
        "nome": "Missoshiro",
        "desc": "Caldo de miso tradicional",
        "preco": 11.9,
        "img": ""
      },
      {
        "id": "nira",
        "nome": "Nirá",
        "desc": "Cebolinha japonesa salteada",
        "preco": 29.9,
        "img": ""
      },
      {
        "id": "sunomono",
        "nome": "Sunomôno",
        "desc": "Pepino agridoce com gergelim",
        "preco": 19.9,
        "img": ""
      },
      {
        "id": "harumaki_legumes",
        "nome": "Harumaki Legumes",
        "desc": "Rolinho crocante de legumes",
        "preco": 19.9,
        "img": ""
      },
      {
        "id": "harumaki_camarao_catupiry",
        "nome": "Harumaki Camarão com Catupiry",
        "desc": "Rolinho de camarão com catupiry",
        "preco": 24.9,
        "img": ""
      },
      {
        "id": "salada_atum",
        "nome": "Salada de Atum",
        "desc": "Mix de folhas com atum",
        "preco": 22.9,
        "img": ""
      },
      {
        "id": "shimeji",
        "nome": "Shimeji",
        "desc": "Na manteiga com shoyu e gergelim",
        "preco": 34.9,
        "img": ""
      },
      {
        "id": "shitake",
        "nome": "Shitake",
        "desc": "Salteado ao molho da casa",
        "preco": 34.9,
        "img": ""
      },
      {
        "id": "guioza_frango_5",
        "nome": "Guioza de Frango (5unid)",
        "desc": "Grelhado com molho especial",
        "preco": 28.9,
        "img": ""
      },
      {
        "id": "guioza_porco_5",
        "nome": "Guioza de Porco (5unid)",
        "desc": "Grelhado com molho especial",
        "preco": 28.9,
        "img": ""
      }
    ]
  },
  {
    "id": "duplas",
    "nome": "Duplas de Sushi",
    "itens": [
      {
        "id": "d_salmao",
        "nome": "D Salmão",
        "desc": "2 unidades",
        "preco": 12.9,
        "img": ""
      },
      {
        "id": "d_atum",
        "nome": "D Atum",
        "desc": "2 unidades",
        "preco": 12.9,
        "img": ""
      },
      {
        "id": "d_peixe_branco",
        "nome": "D Peixe Branco",
        "desc": "2 unidades",
        "preco": 12.9,
        "img": ""
      },
      {
        "id": "d_salmao_teriyaki",
        "nome": "D Salmão no Teriyaki",
        "desc": "2 unidades",
        "preco": 11.0,
        "img": ""
      },
      {
        "id": "d_salmao_skin",
        "nome": "D Salmão Skin",
        "desc": "2 unidades",
        "preco": 11.0,
        "img": ""
      },
      {
        "id": "d_massago",
        "nome": "D Massago (ovas de siri)",
        "desc": "2 unidades",
        "preco": 19.9,
        "img": ""
      },
      {
        "id": "d_camarao",
        "nome": "D Camarão",
        "desc": "2 unidades",
        "preco": 13.9,
        "img": ""
      },
      {
        "id": "d_polvo",
        "nome": "D Polvo",
        "desc": "2 unidades",
        "preco": 19.9,
        "img": ""
      },
      {
        "id": "d_barriga_salmao_macaricado",
        "nome": "D Barriga de Salmão Maçaricado",
        "desc": "2 unidades",
        "preco": 19.9,
        "img": ""
      }
    ]
  },
  {
    "id": "temakis",
    "nome": "Temakis",
    "itens": [
      {
        "id": "temaki_salmao",
        "nome": "Temaki Salmão",
        "desc": "Alga, arroz e salmão",
        "preco": 25.9,
        "img": ""
      },
      {
        "id": "temaki_spacy_salmao",
        "nome": "Temaki Spacy Salmão",
        "desc": "Salmão apimentado",
        "preco": 26.0,
        "img": ""
      },
      {
        "id": "temaki_spacy_tuna",
        "nome": "Temaki Spacy Tuna",
        "desc": "Atum apimentado",
        "preco": 26.0,
        "img": ""
      },
      {
        "id": "temaki_california",
        "nome": "Temaki Califórnia",
        "desc": "Kani, pepino e manga",
        "preco": 16.5,
        "img": ""
      },
      {
        "id": "temaki_camarao_empanado",
        "nome": "Temaki Camarão Empanado",
        "desc": "Camarão crocante",
        "preco": 26.5,
        "img": ""
      },
      {
        "id": "temaki_skin",
        "nome": "Temaki Skin",
        "desc": "Pele de salmão crocante",
        "preco": 22.0,
        "img": ""
      }
    ]
  },
  {
    "id": "makimonos",
    "nome": "Makimonos",
    "itens": [
      {
        "id": "hot_tartar_10",
        "nome": "Hot Tartar (10unid)",
        "desc": "Empanado recheado com tartar",
        "preco": 32.0,
        "img": ""
      },
      {
        "id": "hot_filadelfia_8",
        "nome": "Hot Filadélfia (8unid)",
        "desc": "Clássico com cream cheese",
        "preco": 26.0,
        "img": ""
      },
      {
        "id": "haru_hot_8",
        "nome": "Haru Hot (8unid)",
        "desc": "Crosta crocante",
        "preco": 27.0,
        "img": ""
      },
      {
        "id": "uramaki_filadelfia_8",
        "nome": "Uramaki Filadélfia (8unid)",
        "desc": "Salmão e cream cheese",
        "preco": 26.0,
        "img": ""
      },
      {
        "id": "salmao_skin_8",
        "nome": "Salmão Skin (8unid)",
        "desc": "Pele crocante de salmão",
        "preco": 17.5,
        "img": ""
      },
      {
        "id": "tekka_salmao_maki_8",
        "nome": "Tekka / Salmão Maki (8unid)",
        "desc": "Atum ou salmão",
        "preco": 15.0,
        "img": ""
      },
      {
        "id": "spicy_tuna_salmao_8",
        "nome": "Spyce Tuna / Salmão (8unid)",
        "desc": "Apimentado",
        "preco": 22.5,
        "img": ""
      },
      {
        "id": "creme_roll_salmao_8",
        "nome": "Creme Roll de Salmão (8unid)",
        "desc": "Cremoso por dentro",
        "preco": 22.0,
        "img": ""
      },
      {
        "id": "kappa_maki_8",
        "nome": "Kappa Maki (8unid)",
        "desc": "Pepino fresco",
        "preco": 13.0,
        "img": ""
      },
      {
        "id": "salmao_light_8",
        "nome": "Salmão Light (8unid)",
        "desc": "Mais leve",
        "preco": 27.0,
        "img": ""
      },
      {
        "id": "ebiten_uramaki_8",
        "nome": "Ebiten Uramaki (8unid)",
        "desc": "Camarão empanado",
        "preco": 32.0,
        "img": ""
      },
      {
        "id": "ebiten_especial_8",
        "nome": "Ebiten Especial (8unid)",
        "desc": "Especial da casa",
        "preco": 42.0,
        "img": ""
      },
      {
        "id": "joy_salmao_6",
        "nome": "Joy Salmão (6unid)",
        "desc": "Tartar no joy",
        "preco": 34.0,
        "img": ""
      },
      {
        "id": "barriga_salmao_roll_8",
        "nome": "Barriga de Salmão Roll (8unid)",
        "desc": "Barriga maçaricada",
        "preco": 42.0,
        "img": ""
      },
      {
        "id": "california_8",
        "nome": "Califórnia (8unid)",
        "desc": "Kani, pepino e manga",
        "preco": 22.0,
        "img": ""
      }
    ]
  },
  {
    "id": "sashimis",
    "nome": "Sashimis",
    "itens": [
      {
        "id": "sashimi_salmao_10",
        "nome": "Sashimi Salmão 10 peças",
        "desc": "Cortes frescos",
        "preco": 42.0,
        "img": ""
      },
      {
        "id": "sashimi_salmao_20",
        "nome": "Sashimi Salmão 20 peças",
        "desc": "Porção generosa",
        "preco": 74.9,
        "img": ""
      },
      {
        "id": "sashimi_atum_10",
        "nome": "Sashimi Atum 10 peças",
        "desc": "Lombo selecionado",
        "preco": 42.0,
        "img": ""
      },
      {
        "id": "sashimi_atum_20",
        "nome": "Sashimi Atum 20 peças",
        "desc": "Porção generosa",
        "preco": 74.9,
        "img": ""
      },
      {
        "id": "sashimi_peixe_branco_10",
        "nome": "Sashimi Peixe Branco 10 peças",
        "desc": "Cortes frescos",
        "preco": 42.0,
        "img": ""
      },
      {
        "id": "sashimi_peixe_branco_20",
        "nome": "Sashimi Peixe Branco 20 peças",
        "desc": "Porção generosa",
        "preco": 74.9,
        "img": ""
      },
      {
        "id": "sashimi_polvo_10",
        "nome": "Sashimi Polvo 10 peças",
        "desc": "Polvo selecionado",
        "preco": 55.9,
        "img": ""
      },
      {
        "id": "sashimi_polvo_20",
        "nome": "Sashimi Polvo 20 peças",
        "desc": "Porção generosa",
        "preco": 82.9,
        "img": ""
      },
      {
        "id": "sashimi_variados_10",
        "nome": "Sashimi Variados 10 peças",
        "desc": "Seleção do sushiman",
        "preco": 55.9,
        "img": ""
      },
      {
        "id": "sashimi_variados_20",
        "nome": "Sashimi Variados 20 peças",
        "desc": "Seleção do sushiman",
        "preco": 82.9,
        "img": ""
      },
      {
        "id": "carpaccio_barriga_salmao_trufado",
        "nome": "Carpaccio Barriga de Salmão c/ azeite trufado",
        "desc": "Finalizado com azeite trufado",
        "preco": 74.9,
        "img": ""
      }
    ]
  },
  {
    "id": "yakisobas",
    "nome": "Yakisobas",
    "itens": [
      {
        "id": "yakisoba_carne",
        "nome": "Yakisoba Carne",
        "desc": "Clássico oriental",
        "preco": 37.0,
        "img": ""
      },
      {
        "id": "yakisoba_frango",
        "nome": "Yakisoba Frango",
        "desc": "Clássico oriental",
        "preco": 32.0,
        "img": ""
      },
      {
        "id": "yakisoba_legumes",
        "nome": "Yakisoba Legumes",
        "desc": "Vegetariano",
        "preco": 27.0,
        "img": ""
      },
      {
        "id": "yakisoba_camarao",
        "nome": "Yakisoba Camarão",
        "desc": "Com camarões",
        "preco": 42.0,
        "img": ""
      }
    ]
  },
  {
    "id": "combinados",
    "nome": "Combinados",
    "itens": [
      {
        "id": "combinado_variado_55",
        "nome": "Combinado Variado 55 peças",
        "desc": "Seleção variada",
        "preco": 232.0,
        "img": ""
      },
      {
        "id": "combinado_variado_31",
        "nome": "Combinado Variado 31 peças",
        "desc": "Seleção variada",
        "preco": 124.0,
        "img": ""
      },
      {
        "id": "combinado_salmao_35",
        "nome": "Combinado Salmão 35 peças",
        "desc": "Só salmão",
        "preco": 140.0,
        "img": ""
      },
      {
        "id": "combinado_salmao_atum_35",
        "nome": "Combinado Salmão e Atum 35 peças",
        "desc": "Duas estrelas",
        "preco": 140.0,
        "img": ""
      }
    ]
  },
  {
    "id": "bebidas",
    "nome": "Bebidas",
    "itens": [
      {
        "id": "agua_sem_gas",
        "nome": "Água sem gás",
        "desc": "500 ml",
        "preco": 6.0,
        "img": ""
      },
      {
        "id": "agua_com_gas",
        "nome": "Água com gás",
        "desc": "500 ml",
        "preco": 6.0,
        "img": ""
      },
      {
        "id": "mate",
        "nome": "Mate",
        "desc": "Lata 350 ml",
        "preco": 7.0,
        "img": ""
      },
      {
        "id": "coca_cola",
        "nome": "Coca-Cola",
        "desc": "Lata 350 ml",
        "preco": 7.0,
        "img": ""
      },
      {
        "id": "coca_zero",
        "nome": "Coca Zero",
        "desc": "Lata 350 ml",
        "preco": 7.0,
        "img": ""
      },
      {
        "id": "guarana_antarctica",
        "nome": "Guaraná Antártica",
        "desc": "Lata 350 ml",
        "preco": 7.0,
        "img": ""
      },
      {
        "id": "guarana_zero",
        "nome": "Guaraná Zero",
        "desc": "Lata 350 ml",
        "preco": 7.0,
        "img": ""
      },
      {
        "id": "heineken",
        "nome": "Heineken",
        "desc": "Long neck",
        "preco": 12.0,
        "img": ""
      },
      {
        "id": "saque_nacional",
        "nome": "Garrafa Saquê Nacional",
        "desc": "Garrafa",
        "preco": 69.9,
        "img": ""
      }
    ]
  }
];

const fmtBRL = n => n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const el = sel => document.querySelector(sel);
const elNew = (tag, cls) => { const e = document.createElement(tag); if(cls) e.className = cls; return e; };
const save = (k,v) => localStorage.setItem(k, JSON.stringify(v));
const load = (k,d) => { try{ return JSON.parse(localStorage.getItem(k)) ?? d } catch{ return d } };
const KEY_CART = "sanshi_cart_v1";

let CART = load(KEY_CART, {});

// Renders categories based on MENU (filtered)
function renderCategories(filteredMenu){
  const nav = el('#categories'); nav.innerHTML = '';
  (filteredMenu || MENU).forEach(cat=>{
    const a = document.createElement('a');
    a.href = `#${cat.id}`; a.textContent = cat.nome; a.dataset.cat = cat.id;
    nav.appendChild(a);
  });
}

// Render menu; accepts optional filter string
function renderMenu(filter){
  const root = el('#content'); root.innerHTML = '';
  const q = (filter||'').trim().toLowerCase();

  const menuToRender = MENU.map(cat=>{
    // if there's a query, filter items
    const items = cat.itens.filter(it=>{
      if(!q) return true;
      return (it.nome + ' ' + (it.desc||'')).toLowerCase().includes(q);
    });
    return {...cat, itens: items};
  }).filter(cat => cat.itens.length>0);

  menuToRender.forEach(cat=>{
    const section = elNew('section','section'); section.id = cat.id;
    const h2 = elNew('h2'); h2.textContent = cat.nome; section.appendChild(h2);

    const grid = elNew('div','grid');
    cat.itens.forEach(item=>{
      const card = elNew('article','card'); card.setAttribute('data-id', item.id);

      // thumb / placeholder
      let finalThumb;
      if(item.img){
        const thumb = elNew('div','thumb');
        const img = new Image(); img.loading = "lazy"; img.src = item.img; img.alt = item.nome;
        thumb.appendChild(img);
        finalThumb = thumb;
      } else {
        finalThumb = elNew('div','thumb placeholder'); finalThumb.textContent = "Imagem";
      }

      const info = elNew('div','info');
      const title = elNew('div','title'); title.textContent = item.nome;
      const desc = elNew('div','desc'); desc.textContent = item.desc || '';
      const price = elNew('div','price'); price.textContent = fmtBRL(item.preco);

      const qty = elNew('div','qty'); qty.setAttribute('role','group'); qty.setAttribute('aria-label',`Quantidade de ${item.nome}`);
      const btnMinus = elNew('button'); btnMinus.innerHTML = "–"; btnMinus.title = "Remover 1";
      const count = elNew('span','count'); count.textContent = getQty(item.id);
      const btnPlus = elNew('button'); btnPlus.innerHTML = "+"; btnPlus.title = "Adicionar 1";

      btnMinus.addEventListener('click', ()=> addToCart(item, -1));
      btnPlus.addEventListener('click', ()=> addToCart(item, +1));

      qty.append(btnMinus, count, btnPlus);
      info.append(title, desc, price, qty);

      card.append(finalThumb, info);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    root.appendChild(section);
  });
}

// Cart functions
function getQty(id){ return CART[id]?.qty ?? 0 }
function cartCount(){ return Object.values(CART).reduce((a,b)=>a+b.qty,0) }
function cartSubtotal(){ return Object.values(CART).reduce((a,b)=>a+(b.qty*b.preco),0) }

function addToCart(item, delta=1){
  const cur = CART[item.id] ?? { ...item, qty:0 };
  cur.qty = Math.max(0, cur.qty + delta);
  if(cur.qty === 0) delete CART[item.id]; else CART[item.id] = cur;
  save(KEY_CART, CART);
  syncUI();
}

function clearCart(){
  CART = {}; save(KEY_CART, CART); syncUI();
}

// UI sync
function syncHeader(){ el('#headerCount').textContent = cartCount(); }
function syncFab(){
  const btn = el('#fabCart'); const sub = cartSubtotal();
  el('#fabSubtotal').textContent = fmtBRL(sub);
  btn.classList.toggle('enabled', sub>0);
  el('#fabText').textContent = sub>0 ? 'Ver carrinho' : 'Carrinho vazio';
}
function syncCounts(){
  document.querySelectorAll('.card').forEach(card=>{
    const id = card.dataset.id;
    const count = card.querySelector('.count');
    if(count) count.textContent = getQty(id);
  });
}
function syncCartList(){
  const list = el('#cartList'); list.innerHTML = '';
  const items = Object.values(CART);
  if(items.length===0){
    const empty = elNew('div','center small');
    empty.textContent = "Seu carrinho está vazio.";
    list.appendChild(empty);
    el('#subtotal').textContent = fmtBRL(0);
    el('#total').textContent = fmtBRL(0);
    return;
  }
  items.forEach(it=>{
    const row = elNew('div','cart-item');

    const th = elNew('div','thumb'); const im = new Image(); im.src = it.img || ''; im.alt = it.nome; th.appendChild(im);

    const mid = elNew('div');
    const ttl = elNew('div','title'); ttl.textContent = it.nome;
    const pr  = elNew('div','price'); pr.textContent = fmtBRL(it.preco);
    const qs  = elNew('div','qty-sm');
    const mi  = elNew('button'); mi.textContent = "–"; mi.addEventListener('click',()=> addToCart(it,-1));
    const ct  = elNew('span'); ct.textContent = it.qty; ct.style.minWidth = '18px'; ct.style.textAlign='center'; ct.style.fontWeight='800';
    const pl  = elNew('button'); pl.textContent = "+"; pl.addEventListener('click',()=> addToCart(it,+1));
    qs.append(mi,ct,pl);
    mid.append(ttl, pr, qs);

    const right = elNew('div','price'); right.textContent = fmtBRL(it.preco*it.qty);

    row.append(th, mid, right);
    list.appendChild(row);
  });
  const sub = cartSubtotal();
  el('#subtotal').textContent = fmtBRL(sub);
  el('#total').textContent = fmtBRL(sub);
}

function syncUI(){ syncHeader(); syncFab(); syncCounts(); syncCartList(); }

// Drawer
function openDrawer(){ el('#drawer').classList.add('open'); el('#drawer').setAttribute('aria-hidden','false') }
function closeDrawer(){ el('#drawer').classList.remove('open'); el('#drawer').setAttribute('aria-hidden','true') }

// ScrollSpy
function setupScrollSpy(){
  const nav = el('#categories');
  const anchors = [...nav.querySelectorAll('a')];

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id;
        anchors.forEach(a=> a.classList.toggle('active', a.dataset.cat===id));
      }
    });
  },{ rootMargin:"-55% 0px -40% 0px", threshold:0.01 });

  MENU.forEach(c=>{
    const sec = document.getElementById(c.id);
    if(sec) io.observe(sec);
  });

  nav.addEventListener('click', (e)=>{
    if(e.target.tagName === 'A'){
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#','');
      document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'});
      history.replaceState(null,'','#'+id);
    }
  });
}

// Search
function setupSearch(){
  const input = el('#searchInput');
  input.addEventListener('input', (e)=>{
    renderCategories();
    renderMenu(e.target.value);
    setupScrollSpy();
    syncCounts();
  });
}

// WhatsApp checkout
function buildWhatsappMessage(){
  const items = Object.values(CART);
  if(items.length===0) return "";
  const linhas = [];
  linhas.push(`*Pedido Sanshi Gávea*`);
  linhas.push(`--------------------------------`);
  items.forEach(it=>{
    linhas.push(`• ${it.nome}  x${it.qty}  —  ${fmtBRL(it.preco*it.qty)}`);
  });
  linhas.push(`--------------------------------`);
  linhas.push(`Subtotal: ${fmtBRL(cartSubtotal())}`);
  linhas.push(`Observações: `);
  return encodeURIComponent(linhas.join('\n'));
}
function goWhatsapp(){
  const msg = buildWhatsappMessage();
  if(!msg){ alert("Seu carrinho está vazio."); return; }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  window.open(url, '_blank');
}

// Events
function setupEvents(){
  el('#fabCart').addEventListener('click', ()=>{
    if(cartSubtotal()<=0){
      const fab = el('#fabCart');
      fab.classList.remove('enabled');
      fab.animate([{transform:'translateX(-50%) scale(1)'},{transform:'translateX(-50%) scale(1.03)'},{transform:'translateX(-50%) scale(1)'}],{duration:180});
      return;
    }
    openDrawer();
  });
  el('#backdrop').addEventListener('click', closeDrawer);
  el('#closeDrawer').addEventListener('click', closeDrawer);
  el('#btnCheckout').addEventListener('click', goWhatsapp);
  el('#btnClear').addEventListener('click', ()=>{
    if(confirm("Limpar todo o carrinho?")) clearCart();
  });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeDrawer(); });
}

// Boot
function boot(){
  renderCategories();
  renderMenu();
  setupScrollSpy();
  setupEvents();
  setupSearch();
  syncUI();
}
document.addEventListener('DOMContentLoaded', boot);
