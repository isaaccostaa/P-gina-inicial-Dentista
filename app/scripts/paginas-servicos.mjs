// Gera as páginas estáticas de cada serviço em public/servicos/<slug>/index.html.
// São HTML puro (sem React) para o Google ler tudo de primeira.
// Para mudar textos: edite a lista "servicos" abaixo e rode  `npm run paginas`.
// Campos opcionais: "chamada" (texto do bloco final) e "alt" (descrição da foto),
// usados quando a página não deve citar a doutora pelo nome.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://drakamillevieira.onrender.com';
const WHATSAPP = '5516996257573';
const raiz = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'servicos');

const clinica = {
  nome: 'Dra. Kamille Gallego Vieira',
  cro: 'CRO-SP 170569',
  telefone: '(16) 99625-7573',
  enderecoLinha1: 'Medical Center - R. Maestro João Seppe, 900',
  enderecoLinha2: 'Jardim Paraíso, São Carlos - SP, 13561-180',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Medical%20Center%2C%20R.%20Maestro%20Jo%C3%A3o%20Seppe%2C%20900%20-%20Jardim%20Para%C3%ADso%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013561-180',
  instagram: 'https://www.instagram.com/dra.kamillevieira/',
};

const servicos = [
  {
    slug: 'urgencia-odontologica',
    nome: 'Urgência odontológica',
    titulo: 'Urgência odontológica em São Carlos',
    descricao: 'Dor de dente, dente quebrado ou inchaço? Atendimento de urgência odontológica em São Carlos com a Dra. Kamille Gallego Vieira, no Medical Center. Fale pelo WhatsApp.',
    imagem: 'urgencia.webp',
    lead: 'Dor de dente, dente quebrado, restauração que caiu ou inchaço no rosto não podem esperar. Fale com a gente pelo WhatsApp para verificar o horário disponível mais próximo.',
    quando: [
      'Dor de dente forte ou que não passa com o tempo',
      'Dente quebrado, trincado ou lascado após uma batida',
      'Inchaço na gengiva ou no rosto',
      'Restauração ou provisório que caiu',
      'Sensibilidade intensa ao frio, ao calor ou ao mastigar',
      'Sangramento na gengiva depois de um procedimento',
    ],
    como: 'No atendimento de urgência, o primeiro objetivo é aliviar a dor e controlar o problema. A Dra. Kamille examina o dente, identifica a causa e faz o tratamento imediato necessário. Depois, se for preciso, ela explica o tratamento definitivo e planeja os próximos passos com você.',
    faq: [
      ['O que fazer com dor de dente enquanto não chego ao consultório?', 'Evite mastigar do lado dolorido e alimentos muito quentes, frios ou doces, e mantenha a região limpa com escovação suave. Não coloque remédios sobre o dente ou a gengiva. Entre em contato pelo WhatsApp para ser atendido o quanto antes.'],
      ['Dente quebrado tem conserto?', 'Na maioria dos casos, sim. Dependendo do tamanho da fratura, o dente pode ser reconstruído com resina ou precisar de outro tratamento. Guarde o fragmento, se encontrar, e procure atendimento rápido.'],
      ['Como agendar um atendimento de urgência?', 'Envie uma mensagem pelo WhatsApp contando o que está sentindo. A equipe verifica a agenda e informa o primeiro horário disponível.'],
    ],
    mensagem: 'Olá! Estou com uma urgência odontológica e gostaria de saber o horário disponível mais próximo.',
  },
  {
    slug: 'lentes-em-resina',
    nome: 'Lentes em resina',
    titulo: 'Lentes em resina em São Carlos',
    descricao: 'Lentes em resina em São Carlos com a Dra. Kamille Gallego Vieira: sorriso mais harmônico, natural e planejado para o seu rosto. Veja como funciona e agende sua avaliação.',
    imagem: 'lentes.webp',
    lead: 'As lentes em resina corrigem cor, formato e pequenos espaços entre os dentes, deixando o sorriso mais harmônico e natural. Cada sorriso é planejado de acordo com o seu rosto.',
    quando: [
      'Dentes com manchas ou cor irregular',
      'Pequenos espaços entre os dentes (diastemas)',
      'Dentes desgastados, curtos ou com formato irregular',
      'Pequenas fraturas nas bordas dos dentes',
      'Quem deseja um sorriso mais harmônico sem grandes desgastes',
    ],
    como: 'Tudo começa com uma avaliação: a Dra. Kamille analisa seus dentes, gengiva e rosto e planeja o formato e a cor ideais. Em seguida, a resina é aplicada em camadas diretamente sobre o dente, esculpida e polida no próprio consultório. O procedimento é conservador e preserva ao máximo a estrutura natural do dente.',
    faq: [
      ['Lente em resina estraga o dente?', 'Não. Na maioria dos casos, a técnica é conservadora e exige pouco ou nenhum desgaste do dente. A indicação depende da avaliação clínica.'],
      ['Quanto tempo duram as lentes em resina?', 'A durabilidade depende dos cuidados diários, dos hábitos (como ranger os dentes) e das consultas de manutenção. Com acompanhamento, elas mantêm o brilho e a cor por bastante tempo.'],
      ['Como cuidar das lentes em resina?', 'Escovação e fio dental todos os dias, evitar morder objetos duros e fazer as manutenções e polimentos indicados pela dentista.'],
    ],
    mensagem: 'Olá! Gostaria de saber como funcionam as lentes em resina e agendar uma avaliação.',
  },
  {
    slug: 'clareamento-dental',
    nome: 'Clareamento dental',
    titulo: 'Clareamento dental em São Carlos',
    descricao: 'Clareamento dental em São Carlos com protocolos de consultório e caseiro, acompanhados pela Dra. Kamille Gallego Vieira. Dentes mais claros com segurança. Agende pelo WhatsApp.',
    imagem: 'clareamento.webp',
    lead: 'O clareamento deixa os dentes mais claros e luminosos de forma segura, com protocolos personalizados de consultório e caseiro, sempre com acompanhamento profissional.',
    quando: [
      'Dentes amarelados com o passar do tempo',
      'Manchas causadas por café, chá, vinho ou cigarro',
      'Quem quer um sorriso mais claro antes de um evento',
      'Antes de fazer lentes em resina, para definir a cor ideal',
    ],
    como: 'Na avaliação, a Dra. Kamille verifica a saúde dos dentes e da gengiva e indica o melhor protocolo para você: no consultório, caseiro com moldeira personalizada ou a combinação dos dois. O tratamento é acompanhado de perto para garantir resultado e conforto.',
    faq: [
      ['Clareamento dental enfraquece os dentes?', 'Não, quando feito com acompanhamento profissional e produtos adequados. A dentista avalia antes se seus dentes e gengiva estão prontos para o clareamento.'],
      ['Clareamento causa sensibilidade?', 'Algumas pessoas sentem sensibilidade temporária durante o tratamento. Ela costuma ser leve e passageira, e a dentista orienta como controlá-la.'],
      ['Quanto tempo dura o resultado?', 'Depende dos hábitos alimentares e da higiene. Evitar o excesso de alimentos que mancham e fazer manutenções ajuda a manter o resultado por mais tempo.'],
    ],
    mensagem: 'Olá! Gostaria de saber como funciona o clareamento dental e agendar uma avaliação.',
  },
  {
    slug: 'limpeza-dental',
    nome: 'Limpeza dental',
    titulo: 'Limpeza dental profissional em São Carlos',
    descricao: 'Limpeza dental profissional em São Carlos: remoção de placa e tártaro, polimento e prevenção com a Dra. Kamille Gallego Vieira. Agende sua consulta pelo WhatsApp.',
    imagem: 'limpeza.webp',
    lead: 'A limpeza profissional remove placa bacteriana e tártaro que a escovação não alcança, previne cáries e problemas na gengiva e deixa a boca com sensação de saúde e frescor.',
    quando: [
      'A cada 6 meses, como prevenção',
      'Gengiva que sangra ao escovar ou passar o fio dental',
      'Tártaro visível perto da gengiva',
      'Mau hálito frequente',
      'Antes de tratamentos estéticos, como clareamento e lentes',
    ],
    como: 'A consulta começa com um exame da boca. Depois, a placa e o tártaro são removidos com instrumentos próprios, os dentes são polidos e você recebe orientações de escovação e uso do fio dental para manter o resultado em casa.',
    faq: [
      ['Limpeza dental dói?', 'Normalmente não. Pode haver um leve incômodo em áreas com mais tártaro ou com gengiva sensível, mas o procedimento é tranquilo.'],
      ['Com que frequência devo fazer limpeza?', 'O mais comum é a cada 6 meses, mas o intervalo pode ser menor conforme a orientação da dentista.'],
      ['A limpeza deixa os dentes mais brancos?', 'Ela remove manchas superficiais e tártaro, deixando os dentes mais limpos e com brilho natural. Para clarear a cor do dente, o indicado é o clareamento.'],
    ],
    mensagem: 'Olá! Gostaria de agendar uma limpeza dental profissional.',
  },
  {
    slug: 'tratamento-de-canal',
    nome: 'Tratamento de canal',
    titulo: 'Tratamento de canal em São Carlos',
    descricao: 'Entenda como é feito o tratamento de canal (endodontia): quando é indicado, como funciona cada etapa e como fica o dente depois. Agende sua avaliação em São Carlos.',
    imagem: 'canal.webp',
    lead: 'O tratamento de canal trata a parte interna do dente quando ela está inflamada ou infeccionada. Ele alivia a dor e permite manter o dente natural na boca.',
    quando: [
      'Dor de dente intensa, que piora à noite ou ao deitar',
      'Sensibilidade ao calor que demora a passar',
      'Dente escurecido',
      'Inchaço ou bolinha na gengiva perto do dente',
      'Cárie profunda que chegou perto do nervo',
    ],
    como: 'O tratamento começa com um exame clínico e uma radiografia para ver a extensão do problema. Com o dente anestesiado, é feita uma pequena abertura para acessar a parte interna, onde o tecido inflamado ou infeccionado (a polpa) é removido. Os canais são limpos, modelados e desinfetados e, em seguida, preenchidos e vedados com um material próprio. Ao final, o dente recebe uma restauração para voltar a mastigar normalmente.',
    chamada: 'Agende sua avaliação no Medical Center, em São Carlos.',
    alt: 'Tratamento de canal (endodontia)',
    faq: [
      ['Tratamento de canal dói?', 'O procedimento é feito com anestesia, então a sensação é parecida com a de uma restauração. Pode haver um leve incômodo nos dias seguintes, que costuma passar rapidamente.'],
      ['Quantas sessões são necessárias?', 'Depende do dente e do caso. Alguns tratamentos são concluídos em uma sessão; outros precisam de mais de uma.'],
      ['Não é melhor extrair o dente?', 'Sempre que possível, manter o dente natural é a melhor opção para a mastigação e para os dentes vizinhos. O canal existe justamente para salvar o dente.'],
    ],
    mensagem: 'Olá! Gostaria de saber mais sobre tratamento de canal e agendar uma avaliação.',
  },
  {
    slug: 'restauracao-dental',
    nome: 'Restauração dental',
    titulo: 'Restauração dental em São Carlos',
    descricao: 'Restauração dental em resina em São Carlos: tratamento de cáries e dentes quebrados com acabamento natural. Dra. Kamille Gallego Vieira. Agende pelo WhatsApp.',
    imagem: 'restauracao.webp',
    lead: 'A restauração recupera a forma e a função do dente afetado por cárie ou fratura, usando resina na cor do dente para um resultado natural e resistente.',
    quando: [
      'Cárie identificada em consulta ou exame',
      'Dente lascado ou quebrado',
      'Restauração antiga desgastada, manchada ou com infiltração',
      'Troca de restaurações escuras por resina na cor do dente',
    ],
    como: 'A parte comprometida do dente é removida com cuidado, preservando o máximo de estrutura saudável. Em seguida, a resina é aplicada em camadas, esculpida no formato do dente e polida, devolvendo a função e a estética.',
    faq: [
      ['A restauração fica com a cor do dente?', 'Sim. A resina é escolhida na cor dos seus dentes, então a restauração fica praticamente imperceptível.'],
      ['Restauração dói?', 'Quando necessário, o procedimento é feito com anestesia, para que seja confortável.'],
      ['Posso comer logo depois?', 'Com resina, em geral sim, depois que passar o efeito da anestesia. A dentista passa as orientações no dia.'],
    ],
    mensagem: 'Olá! Gostaria de agendar uma avaliação para restauração dental.',
  },
  {
    slug: 'cirurgia-oral',
    nome: 'Cirurgia oral',
    titulo: 'Cirurgia oral em São Carlos',
    descricao: 'Procedimentos cirúrgicos odontológicos em São Carlos, como extrações, com técnica e segurança. Dra. Kamille Gallego Vieira, Medical Center. Agende sua avaliação pelo WhatsApp.',
    imagem: 'cirurgia.webp',
    lead: 'Procedimentos cirúrgicos odontológicos realizados com planejamento, técnica e segurança, sempre após avaliação clínica e com orientações claras para o pós-operatório.',
    quando: [
      'Dentes que não podem mais ser tratados e precisam ser removidos',
      'Dentes do siso que causam dor ou incômodo, conforme avaliação',
      'Indicação cirúrgica feita por outro profissional',
    ],
    como: 'Na avaliação, a Dra. Kamille examina o caso, solicita exames quando necessário e explica o procedimento. A cirurgia é feita com anestesia e, ao final, você recebe todas as orientações de cuidado e de alimentação para uma recuperação tranquila.',
    faq: [
      ['Preciso de exame antes da cirurgia?', 'Em muitos casos, sim. A dentista pode pedir uma radiografia ou outro exame para planejar o procedimento com segurança.'],
      ['Como é o pós-operatório?', 'Você recebe orientações por escrito sobre alimentação, higiene e repouso. Seguir essas orientações faz toda a diferença na recuperação.'],
      ['Todo siso precisa ser extraído?', 'Não. A necessidade depende da posição do dente e dos sintomas, e é definida na avaliação.'],
    ],
    mensagem: 'Olá! Gostaria de agendar uma avaliação para cirurgia odontológica.',
  },
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const iconeWhats = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.49-8.4Z"/></svg>';

function pagina(s) {
  const url = `${SITE}/servicos/${s.slug}/`;
  const outros = servicos.filter((o) => o.slug !== s.slug);
  const dados = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${url}#pagina`,
        url,
        name: `${s.titulo} | ${clinica.nome}`,
        description: s.descricao,
        inLanguage: 'pt-BR',
        about: { '@type': 'MedicalProcedure', name: s.nome },
        provider: { '@id': `${SITE}/#consultorio` },
        breadcrumb: { '@id': `${url}#trilha` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#trilha`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: s.nome, item: url },
        ],
      },
      {
        '@type': 'Dentist',
        '@id': `${SITE}/#consultorio`,
        name: `${clinica.nome} - Dentista em São Carlos`,
        url: `${SITE}/`,
        telephone: '+55-16-99625-7573',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'R. Maestro João Seppe, 900 - Medical Center',
          addressLocality: 'São Carlos',
          addressRegion: 'SP',
          postalCode: '13561-180',
          addressCountry: 'BR',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: s.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#1D0509" />
  <title>${esc(s.titulo)} | ${esc(clinica.nome)}</title>
  <meta name="description" content="${esc(s.descricao)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <meta name="geo.region" content="BR-SP" />
  <meta name="geo.placename" content="São Carlos" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:site_name" content="${esc(clinica.nome)}" />
  <meta property="og:title" content="${esc(s.titulo)}" />
  <meta property="og:description" content="${esc(s.descricao)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${SITE}/servicos/img/${s.imagem}" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Inter:wght@400;500;600&display=swap" />
  <link rel="stylesheet" href="/servicos/estilo.css" />
  <script type="application/ld+json">${JSON.stringify(dados)}</script>
</head>
<body>
  <header class="topo">
    <div class="caixa topo-linha">
      <a href="/" class="marca" aria-label="${esc(clinica.nome)} - página inicial"><img src="/servicos/img/logo.webp" alt="${esc(clinica.nome)}" width="180" height="63" /></a>
      <a class="botao botao-pequeno" href="${wa(s.mensagem)}" target="_blank" rel="noopener noreferrer">${iconeWhats}<span>Agendar</span></a>
    </div>
  </header>

  <main>
    <section class="capa">
      <div class="caixa capa-grade">
        <div>
          <nav class="trilha" aria-label="Você está em"><a href="/">Início</a><span aria-hidden="true">/</span><span>${esc(s.nome)}</span></nav>
          <p class="rotulo">Dentista em São Carlos</p>
          <h1>${esc(s.titulo.replace(' em São Carlos', ''))} <em>em São Carlos</em></h1>
          <p class="lead">${esc(s.lead)}</p>
          <div class="acoes">
            <a class="botao" href="${wa(s.mensagem)}" target="_blank" rel="noopener noreferrer">${iconeWhats}<span>Agendar pelo WhatsApp</span></a>
            <a class="botao-contorno" href="/#secao-agendamento">Agendar pelo site</a>
          </div>
        </div>
        <img class="capa-foto" src="/servicos/img/${s.imagem}" alt="${esc(s.alt || `${s.nome} - ${clinica.nome}`)}" width="900" height="675" fetchpriority="high" />
      </div>
    </section>

    <section class="bloco">
      <div class="caixa duas-colunas">
        <div class="cartao">
          <h2>Quando <em>procurar</em></h2>
          <ul class="lista">
            ${s.quando.map((q) => `<li>${esc(q)}</li>`).join('\n            ')}
          </ul>
        </div>
        <div class="cartao">
          <h2>Como <em>funciona</em></h2>
          <p>${esc(s.como)}</p>
          <p class="nota">A indicação de cada tratamento é feita após avaliação clínica.</p>
        </div>
      </div>
    </section>

    <section class="bloco bloco-claro">
      <div class="caixa estreita">
        <h2 class="centro">Perguntas <em>frequentes</em></h2>
        ${s.faq.map(([q, a]) => `<details class="pergunta"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n        ')}
      </div>
    </section>

    <section class="bloco chamada">
      <div class="caixa estreita centro">
        <h2>Agende sua <em>avaliação</em></h2>
        <p>${esc(s.chamada || `Atendimento com a ${clinica.nome} (${clinica.cro}) no Medical Center, em São Carlos.`)}</p>
        <a class="botao" href="${wa(s.mensagem)}" target="_blank" rel="noopener noreferrer">${iconeWhats}<span>Conversar no WhatsApp</span></a>
        <address>
          <a href="${clinica.mapa}" target="_blank" rel="noopener noreferrer">${esc(clinica.enderecoLinha1)}<br />${esc(clinica.enderecoLinha2)}</a><br />
          WhatsApp: <a href="https://wa.me/${WHATSAPP}">${esc(clinica.telefone)}</a>
        </address>
      </div>
    </section>

    <section class="bloco">
      <div class="caixa">
        <h2 class="centro">Outros <em>tratamentos</em></h2>
        <ul class="outros">
          ${outros.map((o) => `<li><a href="/servicos/${o.slug}/">${esc(o.nome)}<span aria-hidden="true">→</span></a></li>`).join('\n          ')}
        </ul>
      </div>
    </section>
  </main>

  <footer class="rodape">
    <div class="caixa">
      <a href="/">Voltar para a página inicial</a>
      <p>© ${new Date().getFullYear()} ${esc(clinica.nome)} · ${esc(clinica.cro)} · <a href="${clinica.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a></p>
    </div>
  </footer>
</body>
</html>
`;
}

for (const s of servicos) {
  const destino = join(raiz, s.slug, 'index.html');
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, pagina(s));
  console.log('ok', `/servicos/${s.slug}/`);
}

// Sitemap com a página principal + as páginas de serviço
const hoje = new Date().toISOString().slice(0, 10);
const urls = ['/', ...servicos.map((s) => `/servicos/${s.slug}/`)];
writeFileSync(join(raiz, '..', 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${SITE}${u}</loc>
    <lastmod>${hoje}</lastmod>
  </url>`).join('\n')}
</urlset>
`);
console.log('ok', '/sitemap.xml');
