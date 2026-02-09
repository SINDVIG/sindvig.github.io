const content = document.getElementById('content');
<h2>Últimas Notícias</h2>
<ul>
<li>Assembleia geral marcada para março.</li>
<li>Nova convenção coletiva publicada.</li>
<li>Sindicato firma parceria com instituição educacional.</li>
</ul>
</div>
`,
eventos: `
<div class='card'>
<h2>Próximos Eventos</h2>
<p>Nenhum evento cadastrado no momento.</p>
</div>
`,
contato: `
<div class='card'>
<h2>Contato</h2>
<p>Email: contato@sindicato.org</p>
<p>Telefone: (00) 00000-0000</p>
</div>
`
};


// Navegação


document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', () => {
const section = link.getAttribute('data-section');
content.innerHTML = sections[section] || '';
});
});


// Dark Mode


const toggleBtn = document.getElementById('darkModeToggle');


toggleBtn.addEventListener('click', () => {
document.body.classList.toggle('dark');


if (document.body.classList.contains('dark')) {
document.body.style.background = '#1a1a1a';
document.body.style.color = 'white';
} else {
document.body.style.background = '#f4f4f4';
document.body.style.color = 'black';
}
});


// Carregar página inicial
content.innerHTML = sections.home;
