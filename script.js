const IMAGE_PATHS = {
  school: "images/school.svg",
  lab: "images/lab.svg",
  classroom: "images/classroom.svg",
  phone: "images/phone.svg",
  assembly: "images/assembly.svg",
  sunrise: "images/sunrise.svg"
};

// Para trocar as imagens, substitua os arquivos da pasta /images
// mantendo os mesmos nomes, ou altere os caminhos aqui.
const quotePool = {
  intro: "“O capitalismo de vigilância reivindica a experiência humana como matéria-prima gratuita.”\n— Shoshana Zuboff",
  lab: "“Não basta mais automatizar o fluxo de informação sobre nós; a meta agora é nos automatizar.”\n— Shoshana Zuboff",
  school: "“Nós não somos os clientes do capitalismo de vigilância. Nós somos as fontes do superávit.”\n— Shoshana Zuboff",
  power: "“Ele sabe tudo sobre nós, ao passo que suas operações são programadas para não serem conhecidas por nós.”\n— Shoshana Zuboff",
  rights: "“O direito ao futuro é uma dimensão central da liberdade.”\n— Shoshana Zuboff"
};

const nodes = {
  intro: {
    label: "Prólogo",
    title: "A mensagem no grupo da turma",
    subtitle: "Escola Estadual Horizonte Aberto",
    image: "school",
    quoteKey: "intro",
    ref: "Baseado no ECA Digital: proteção de crianças e adolescentes no mundo online, educação digital e dever compartilhado de escola, família, Estado e empresas.",
    text: `Você é estudante do ensino médio, seu nome é Lucas (ou Luana, se preferir imaginar assim). Na sua turma estão colegas como João, Ana, Pedro e Mariana. Na semana da Feira de Tecnologia da escola, vários colegas começam a receber anúncios estranhamente certeiros, convites para desafios humilhantes e vídeos que parecem conhecer seus medos.

Sua amiga Lia mostra o celular: “Eu só pesquisei uma vez sobre ansiedade... agora tudo o que aparece pra mim tenta me prender na tela.”

No mural digital do laboratório, alguém deixou uma frase atribuída a Shoshana Zuboff:
“Se transformam nossa experiência em dados, precisamos aprender a defender nossos direitos.”

A professora de projeto integrador propõe uma missão: investigar como a vigilância digital afeta adolescentes e como o ECA Digital pode orientar a proteção na escola.`,
    choices: [
      { text: "Ir ao laboratório de informática analisar os aplicativos", desc: "Começar pela investigação técnica.", next: "labInvestigation", effects: { knowledge: 1 }, journal: "Você iniciou a apuração pelos rastros digitais." },
      { text: "Conversar com a professora e o grêmio estudantil", desc: "Buscar ação coletiva e orientação escolar.", next: "assemblyTalk", effects: { empathy: 1 }, journal: "Você escolheu agir em conjunto com a escola." },
      { text: "Examinar seu próprio celular e o dos colegas", desc: "Partir da experiência cotidiana.", next: "phoneCheck", effects: { courage: 1 }, journal: "Você decidiu observar a vigilância no cotidiano." }
    ]
  },
  labInvestigation: {
    label: "Capítulo 1",
    title: "Laboratório de informática",
    subtitle: "Quem coleta o quê?",
    image: "lab",
    quoteKey: "lab",
    ref: "ECA Digital: empresas devem proteger dados de crianças e adolescentes, não manipular consumo e adotar plataformas mais seguras.",
    text: `No laboratório, a professora abre com a turma os termos de uso de três aplicativos populares. Vocês percebem pedidos excessivos de acesso: câmera, localização, microfone, contatos e tempo de uso.

Em um painel da aula, surge uma discussão: se adolescentes usam redes, jogos e aplicativos todos os dias, quem responde quando esses sistemas exageram na coleta ou estimulam dependência?

Você percebe que o problema não é apenas “usar tecnologia”, mas como a tecnologia foi desenhada para extrair atenção e dados — exatamente o que Shoshana Zuboff chama de capitalismo de vigilância: transformar tudo o que você faz em dados para prever e influenciar seu comportamento.`,
    choices: [
      { text: "Mapear permissões abusivas e registrar evidências", desc: "Ganhar material para a escola agir.", next: "afterEvidence", effects: { knowledge: 1 }, item: "Relatório de Permissões", journal: "Você registrou provas sobre coleta excessiva." },
      { text: "Pesquisar o que o ECA Digital diz sobre empresas e proteção", desc: "Ligar prática e direito.", next: "ecaStudy", effects: { knowledge: 1, empathy: 1 }, journal: "Você conectou tecnologia com proteção jurídica." },
      { text: "Ignorar os termos e focar só no que aparece na tela", desc: "Entender os sintomas antes das causas.", next: "attentionTrap", effects: { courage: 1 }, journal: "Você preferiu analisar o efeito visível sobre os colegas." }
    ]
  },
  assemblyTalk: {
    label: "Capítulo 1",
    title: "Reunião com a professora e o grêmio",
    subtitle: "A escola como espaço de proteção",
    image: "assembly",
    quoteKey: "school",
    ref: "ECA Digital: a escola deve ensinar educação digital, orientar sobre riscos, combater cyberbullying e dialogar com as famílias.",
    text: `Na sala multiuso, a professora lembra que a escola não pode se omitir diante dos riscos digitais. O grêmio conta casos de exposição indevida de fotos, perfis falsos e campanhas de humilhação em grupos fechados.

Vocês concluem que a escola precisa mais do que regras punitivas: precisa de educação digital crítica, apoio às vítimas e debate sobre direitos.

Lia diz: “Se os aplicativos ganham com nossa distração, a escola tem que ajudar a gente a recuperar atenção e autonomia.”`,
    choices: [
      { text: "Organizar uma escuta com estudantes afetados", desc: "Entender os impactos humanos.", next: "listeningCircle", effects: { empathy: 1 }, item: "Mapa de Relatos", journal: "Você abriu espaço para ouvir quem sofre os impactos." },
      { text: "Propor uma campanha de conscientização imediata", desc: "Agir rápido com informação.", next: "campaignBuild", effects: { courage: 1, empathy: 1 }, journal: "Você sugeriu resposta educativa urgente." },
      { text: "Voltar ao laboratório para reunir provas técnicas", desc: "Combinar fala com evidência.", next: "labInvestigation", effects: { knowledge: 1 }, journal: "Você percebeu que denúncia precisa de base." }
    ]
  },
  phoneCheck: {
    label: "Capítulo 1",
    title: "Tela, notificações e rastros",
    subtitle: "O cotidiano como campo de investigação",
    image: "phone",
    quoteKey: "power",
    ref: "ECA Digital: riscos incluem cyberbullying, conteúdo impróprio, ansiedade, vício em telas e manipulação comportamental.",
    text: `Você e seus colegas comparam as notificações recebidas em apenas uma manhã. Quase tudo parece desenhado para provocar reação rápida: medo de perder algo, urgência, curiosidade, comparação social.

Lia percebe que após assistir a vídeos sobre aparência, surgem anúncios de produtos e conteúdos que pioram sua autoestima. Outro colega relata pressão em jogos parecidos com apostas.

Fica claro que não se trata apenas de conteúdo: trata-se de arquitetura de influência.

Pedro comenta: “Então a gente não é usuário... a gente é tipo o produto?”

Você lembra de um conceito importante: no capitalismo de vigilância, os usuários não são clientes — são fontes de dados e lucro.`,
    choices: [
      { text: "Registrar padrões de manipulação emocional", desc: "Entender como a atenção é capturada.", next: "attentionTrap", effects: { knowledge: 1 }, item: "Diário de Notificações", journal: "Você anotou os gatilhos que puxam comportamento." },
      { text: "Levar os casos para a professora e o grêmio", desc: "Transformar experiência em ação escolar.", next: "assemblyTalk", effects: { empathy: 1 }, journal: "Você decidiu não enfrentar isso sozinho." },
      { text: "Pesquisar canais de ajuda e denúncia", desc: "Aprender o que fazer em situações graves.", next: "helpChannels", effects: { courage: 1, empathy: 1 }, journal: "Você buscou caminhos concretos de proteção." }
    ]
  },
  ecaStudy: {
    label: "Capítulo 2",
    title: "Estudo do ECA Digital",
    subtitle: "Direitos não são detalhes",
    image: "classroom",
    quoteKey: "rights",
    ref: "ECA Digital: proteção integral, dever do poder público, responsabilidade das empresas, educação digital nas escolas e internet mais segura.",
    text: `Durante a pesquisa, você encontra pontos decisivos: as empresas têm dever de cuidado; não devem usar dados para manipular consumo; devem proteger crianças e adolescentes por padrão; e a escola tem papel fundamental na educação digital.

A turma percebe que o ECA Digital não trata apenas de proibir. Ele organiza responsabilidades e fortalece direitos.

A professora resume: “Direito digital é também direito à dignidade, à segurança e ao desenvolvimento saudável.”`,
    choices: [
      { text: "Preparar um guia escolar de direitos digitais", desc: "Transformar estudo em material educativo.", next: "campaignBuild", effects: { knowledge: 1, empathy: 1 }, item: "Guia de Direitos", journal: "Você converteu a lei em linguagem acessível." },
      { text: "Cruzar o ECA Digital com os casos da escola", desc: "Aplicar a lei a situações reais.", next: "caseCrossing", effects: { knowledge: 1 }, journal: "Você aproximou norma e realidade escolar." }
    ]
  },
  attentionTrap: {
    label: "Capítulo 2",
    title: "A armadilha da atenção",
    subtitle: "Quando o design quer decidir por você",
    image: "phone",
    quoteKey: "lab",
    ref: "Inspirado em Zuboff: produtos de predição e modificação comportamental; relacionado ao ECA Digital quanto à proteção contra manipulação e riscos à saúde mental.",
    text: `Ao analisar a interface dos apps, você percebe uma sequência recorrente: notificação, curiosidade, clique, retenção, comparação, repetição.

Não é coincidência. Os sistemas parecem aprender quando você está mais vulnerável e intensificam o estímulo exatamente ali.

Você anota no caderno: “Se a plataforma mede nossa fragilidade para aumentar engajamento, isso fere a ideia de proteção integral.”

Ana completa: “Então eles não querem só saber o que a gente faz... querem influenciar o que a gente vai fazer.”

Isso é exatamente a lógica do capitalismo de vigilância: prever e modificar comportamento.`,
    choices: [
      { text: "Transformar a análise em oficina para a turma", desc: "Espalhar consciência digital.", next: "campaignBuild", effects: { knowledge: 1, empathy: 1 }, journal: "Você decidiu ensinar o que descobriu." },
      { text: "Levar o problema à direção e pedir protocolo escolar", desc: "Buscar resposta institucional.", next: "schoolCouncil", effects: { courage: 1 }, journal: "Você cobrou responsabilidade da escola." },
      { text: "Cruzar os dados com relatos de cyberbullying", desc: "Entender como influência e violência se conectam.", next: "listeningCircle", effects: { empathy: 1 }, journal: "Você percebeu que algoritmo e sofrimento social se cruzam." }
    ]
  },
  helpChannels: {
    label: "Capítulo 2",
    title: "Canais de ajuda e denúncia",
    subtitle: "Proteger também é saber onde recorrer",
    image: "classroom",
    quoteKey: "rights",
    ref: "ECA Digital: diante de humilhação, chantagem, ameaça, assédio ou exposição, é preciso buscar ajuda; também existem canais como Conselho Tutelar, Defensoria, Delegacia, Disque 100 e SaferNet.",
    text: `Você descobre que situações de exposição, assédio, chantagem e ameaça no ambiente digital não devem ser tratadas como “brincadeira”.

A professora orienta a turma a registrar evidências, não compartilhar conteúdos abusivos e procurar apoio adulto, institucional e, quando necessário, canais oficiais de denúncia.

Esse conhecimento muda o clima da investigação: agora a escola não está apenas estudando um problema, está se preparando para proteger pessoas reais.`,
    choices: [
      { text: "Criar um mural de ajuda segura para a escola", desc: "Transformar informação em acolhimento.", next: "campaignBuild", effects: { empathy: 1, courage: 1 }, item: "Mural de Apoio", journal: "Você ajudou a tornar a proteção visível." },
      { text: "Levar os materiais para a reunião escolar", desc: "Integrar prevenção e ação institucional.", next: "schoolCouncil", effects: { knowledge: 1 }, journal: "Você organizou respostas concretas para a escola." }
    ]
  },
  listeningCircle: {
    label: "Capítulo 2",
    title: "Roda de escuta",
    subtitle: "O dano digital tem rosto e nome",
    image: "assembly",
    quoteKey: "school",
    ref: "ECA Digital: cyberbullying é crime; escola e família devem dialogar e educar para o uso consciente da tecnologia.",
    text: `Na roda de conversa, colegas relatam ansiedade, exposição de imagens, exclusão em grupos, medo de perder status social e sensação de que o celular nunca descansa.

Você nota que o problema não é só técnico. É emocional, social e pedagógico.

Lia diz algo que silencia a sala: “Quando o aplicativo parece me conhecer melhor que eu mesma, começo a duvidar do que realmente escolhi.”`,
    choices: [
      { text: "Levar os relatos ao conselho escolar", desc: "Fortalecer a resposta institucional.", next: "schoolCouncil", effects: { empathy: 1 }, item: "Dossiê de Relatos", journal: "Você levou o sofrimento real para o centro da decisão." },
      { text: "Transformar os relatos em campanha educativa", desc: "Conscientizar sem expor ninguém.", next: "campaignBuild", effects: { empathy: 1, knowledge: 1 }, journal: "Você transformou escuta em ação educativa." }
    ]
  },
  afterEvidence: {
    label: "Capítulo 3",
    title: "As provas se acumulam",
    subtitle: "Dados, hábitos e previsões",
    image: "lab",
    quoteKey: "school",
    ref: "Inspirado em Zuboff: adolescentes não são clientes, mas fontes de dados; relacionado ao ECA Digital quanto ao dever das empresas e da escola em proteger.",
    text: `Com relatórios, capturas de tela e anotações de uso, você percebe um padrão: coleta excessiva, sugestões direcionadas, retenção prolongada e vulnerabilidade juvenil explorada como recurso.

A professora pede que a turma decida o próximo passo: produzir apenas um trabalho escolar, ou transformar a investigação em intervenção na comunidade escolar.

Ela reforça: “Se vocês entenderam o capitalismo de vigilância, agora precisam decidir: vão só estudar ou vão agir sobre isso?”`,
    choices: [
      { text: "Produzir uma apresentação crítica com base em Zuboff e ECA Digital", desc: "Trabalhar argumento, teoria e direitos.", next: "schoolCouncil", effects: { knowledge: 1 }, item: "Apresentação Crítica", journal: "Você consolidou teoria e prática em um material forte." },
      { text: "Criar campanha educativa com linguagem juvenil", desc: "Levar o debate a mais estudantes.", next: "campaignBuild", effects: { empathy: 1, courage: 1 }, journal: "Você transformou a pesquisa em mobilização." }
    ]
  },
  caseCrossing: {
    label: "Capítulo 3",
    title: "Cruzar lei e realidade",
    subtitle: "Quando a teoria encontra a escola",
    image: "classroom",
    quoteKey: "power",
    ref: "ECA Digital: publicidade direcionada, manipulação de consumo, proteção de dados, papel da escola e dever de plataformas mais seguras.",
    text: `Vocês cruzam o texto do ECA Digital com situações vividas na escola: vídeos que incentivam comparação cruel, convites persistentes para compras, pressão em jogos e coleta invisível de dados.

Mariana observa: “Tudo isso parece planejado pra prender a gente.”

Você percebe que isso se conecta diretamente com o capitalismo de vigilância: dados são usados para prever e induzir decisões.

A turma conclui que a educação digital precisa ser crítica: não basta ensinar a clicar, é preciso ensinar a perguntar quem lucra, como influencia e quais direitos estão em jogo.`,
    choices: [
      { text: "Levar a análise ao conselho escolar", desc: "Buscar políticas internas.", next: "schoolCouncil", effects: { knowledge: 1, courage: 1 }, journal: "Você levou diagnóstico e proposta para decisão coletiva." },
      { text: "Transformar a análise em oficina aberta", desc: "Fazer da escola um espaço de formação.", next: "campaignBuild", effects: { empathy: 1 }, journal: "Você escolheu formar em vez de apenas alertar." }
    ]
  },
  campaignBuild: {
    label: "Capítulo 4",
    title: "Campanha “Sua atenção tem valor”",
    subtitle: "A escola começa a reagir",
    image: "classroom",
    quoteKey: "intro",
    ref: "ECA Digital: educação digital nas escolas, orientação sobre riscos, proteção da imagem, combate ao cyberbullying e responsabilidade compartilhada.",
    text: `Vocês criam cartazes, cards, podcasts curtos e rodas de conversa. O lema da campanha é simples: “Nem tudo que prende sua atenção merece sua confiança.”

A ação cresce. Famílias começam a participar. Professores pedem materiais. Estudantes querem saber como revisar permissões, evitar exposição e reconhecer manipulação.

Agora é hora de decidir o alcance da intervenção.`,
    choices: [
      { text: "Levar a campanha ao conselho escolar para virar política permanente", desc: "Mudança institucional.", next: "schoolCouncil", effects: { courage: 1, empathy: 1 }, journal: "Você buscou transformar campanha em compromisso da escola." },
      { text: "Expandir a campanha para toda a comunidade", desc: "Mais alcance, mais responsabilidade.", next: "communityAction", effects: { empathy: 1 }, item: "Kit Educativo", journal: "Você ampliou a ação para além da sala de aula." }
    ]
  },
  schoolCouncil: {
    label: "Capítulo 5",
    title: "Conselho escolar extraordinário",
    subtitle: "Decidir como a escola vai proteger",
    image: "assembly",
    quoteKey: "rights",
    ref: "ECA Digital: a escola deve educar, orientar, dialogar com famílias e criar regras claras; empresas e poder público também têm deveres.",
    text: `No conselho escolar, direção, professores, estudantes e famílias analisam suas descobertas. Há debate intenso.

Alguns querem apenas proibir celulares. Outros defendem que proibir sem educar não resolve. Você precisa ajudar a construir a decisão final.

A professora sussurra: “Escolha um caminho que proteja sem silenciar, que eduque sem simplificar.”`,
    dynamicChoices: (state) => {
      const choices = [];
      choices.push({
        text: "Propor política escolar de educação digital crítica",
        desc: "Exige consciência digital e cuidado coletivo.",
        next: "finalAwakening",
        check: (s) => s.knowledge >= 4 && s.empathy >= 4,
        failNext: "finalPartial",
        journal: "Você propôs uma proteção baseada em direitos e formação."
      });
      choices.push({
        text: "Defender só uma proibição rígida do uso",
        desc: "Resposta rápida, porém limitada.",
        next: "finalRestriction",
        effects: { courage: 1 },
        journal: "Você apoiou uma solução imediata e restritiva."
      });
      if (state.items.includes("Mural de Apoio") || state.items.includes("Guia de Direitos") || state.items.includes("Kit Educativo")) {
        choices.push({
          text: "Apresentar materiais e plano de ação com acolhimento",
          desc: "Transformar a escola em rede de proteção.",
          next: "finalProtection",
          effects: { empathy: 1 },
          journal: "Você apresentou soluções concretas e pedagógicas."
        });
      }
      return choices;
    }
  },
  communityAction: {
    label: "Capítulo 5",
    title: "A comunidade entra no debate",
    subtitle: "Família, escola e direitos digitais",
    image: "school",
    quoteKey: "school",
    ref: "ECA Digital: família, escola, sociedade, Estado e empresas compartilham o dever de proteção.",
    text: `Na reunião ampliada, responsáveis admitem dúvidas: quando dar celular? como orientar sem vigiar excessivamente? como proteger a imagem dos filhos? como reagir a chantagem, cyberbullying e exposição?

Você percebe que a melhor resposta não é o pânico, mas uma cultura de proteção, diálogo e uso consciente.`,
    choices: [
      { text: "Levar a proposta comunitária ao conselho escolar", desc: "Consolidar a mudança.", next: "schoolCouncil", effects: { empathy: 1, knowledge: 1 }, journal: "Você levou a voz da comunidade para a decisão final." },
      { text: "Criar um pacto digital da escola", desc: "Compromisso coletivo e permanente.", next: "finalProtection", check: (s) => s.empathy >= 4, failNext: "finalPartial", journal: "Você ajudou a formular um pacto de convivência digital." }
    ]
  },
  finalAwakening: {
    label: "Final",
    title: "Escola que ensina a escolher",
    subtitle: "Final verdadeiro",
    image: "sunrise",
    ending: `O conselho aprova uma política escolar de educação digital crítica. A escola passa a trabalhar proteção de dados, cyberbullying, saúde mental, exposição de imagem, publicidade direcionada e responsabilidade das plataformas.

Celulares deixam de ser tratados apenas como problema disciplinar e passam a ser tema de formação ética, cidadã e tecnológica.

A comunidade aprende que proteger adolescentes no digital não significa isolá-los do mundo, mas equipá-los para reconhecer manipulação, defender direitos e agir em coletivo.

Sua investigação vira referência na escola. Vocês não venceram a internet. Fizeram algo mais importante: ensinaram a turma a não ser conduzida em silêncio.`,
    score: "Final verdadeiro: você articulou teoria, direitos e ação pedagógica duradoura."
  },
  finalProtection: {
    label: "Final",
    title: "Rede de proteção em movimento",
    subtitle: "Final de cuidado coletivo",
    image: "assembly",
    ending: `A escola cria um pacto digital com estudantes, famílias e professores. Há mural de apoio, oficinas, protocolos de acolhimento e atividades permanentes sobre direitos digitais.

Casos de humilhação e exposição passam a ser tratados com seriedade, escuta e encaminhamento adequado.

Talvez nem tudo mude de uma vez, mas agora ninguém está sozinho. A proteção deixa de ser discurso e vira prática cotidiana.`,
    score: "Final de cuidado coletivo: você fortaleceu a escola como comunidade protetora."
  },
  finalRestriction: {
    label: "Final",
    title: "Silêncio nas mochilas, problema nas telas",
    subtitle: "Final de solução incompleta",
    image: "classroom",
    ending: `O conselho decide por uma proibição rígida. Nos primeiros dias, parece funcionar: há menos distração em sala. Mas logo fica evidente que os problemas continuam fora dos muros e sem mediação crítica.

Sem educação digital consistente, muitos estudantes seguem vulneráveis à manipulação, ao cyberbullying e à coleta abusiva de dados.

Você percebe que restringir pode até conter sintomas, mas não ensina autonomia.`,
    score: "Final de solução incompleta: houve resposta, mas faltou formação crítica."
  },
  finalPartial: {
    label: "Final",
    title: "Uma fissura importante",
    subtitle: "Final intermediário",
    image: "sunrise",
    ending: `A escola reconhece o problema, mas adota apenas medidas pontuais. Sua apresentação provoca debate, porém ainda falta continuidade.

Mesmo assim, algo mudou: estudantes começaram a fazer perguntas melhores, professores passaram a observar novos sinais e famílias entenderam que a proteção digital precisa ser compartilhada.

Nem toda transformação nasce pronta. Às vezes, ela começa como pergunta incômoda.`,
    score: "Final intermediário: você abriu o debate, mas a mudança ainda precisa amadurecer."
  }
};

const createInitialState = () => ({
  life: 8,
  maxLife: 8,
  knowledge: 1,
  courage: 1,
  empathy: 1,
  maxStat: 6,
  items: [],
  journal: ["Você iniciou a investigação sobre direitos digitais na escola."],
  current: "intro"
});

let state = createInitialState();

const refs = {
  chapterLabel: document.getElementById("chapterLabel"),
  chapterTitle: document.getElementById("chapterTitle"),
  chapterSubtitle: document.getElementById("chapterSubtitle"),
  chapterText: document.getElementById("chapterText"),
  chapterRef: document.getElementById("chapterRef"),
  choices: document.getElementById("choices"),
  sceneImage: document.getElementById("sceneImage"),
  inventory: document.getElementById("inventory"),
  journal: document.getElementById("journal"),
  quoteBox: document.getElementById("quoteBox"),
  endingBox: document.getElementById("endingBox"),
  lifeValue: document.getElementById("lifeValue"),
  knowledgeValue: document.getElementById("knowledgeValue"),
  courageValue: document.getElementById("courageValue"),
  empathyValue: document.getElementById("empathyValue"),
  lifeBar: document.getElementById("lifeBar"),
  knowledgeBar: document.getElementById("knowledgeBar"),
  courageBar: document.getElementById("courageBar"),
  empathyBar: document.getElementById("empathyBar")
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function addItem(item) {
  if (item && !state.items.includes(item)) {
    state.items.push(item);
  }
}

function applyEffects(effects = {}) {
  state.life = clamp(state.life + (effects.life || 0), 0, state.maxLife);
  state.knowledge = clamp(state.knowledge + (effects.knowledge || 0), 0, state.maxStat);
  state.courage = clamp(state.courage + (effects.courage || 0), 0, state.maxStat);
  state.empathy = clamp(state.empathy + (effects.empathy || 0), 0, state.maxStat);
}

function updateStats() {
  refs.lifeValue.textContent = `${state.life}/${state.maxLife}`;
  refs.knowledgeValue.textContent = `${state.knowledge}/${state.maxStat}`;
  refs.courageValue.textContent = `${state.courage}/${state.maxStat}`;
  refs.empathyValue.textContent = `${state.empathy}/${state.maxStat}`;

  refs.lifeBar.style.width = `${(state.life / state.maxLife) * 100}%`;
  refs.knowledgeBar.style.width = `${(state.knowledge / state.maxStat) * 100}%`;
  refs.courageBar.style.width = `${(state.courage / state.maxStat) * 100}%`;
  refs.empathyBar.style.width = `${(state.empathy / state.maxStat) * 100}%`;
}

function updateInventory() {
  refs.inventory.innerHTML = "";

  if (!state.items.length) {
    refs.inventory.innerHTML = '<span class="chip">Sem materiais ainda</span>';
    return;
  }

  state.items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    refs.inventory.appendChild(chip);
  });
}

function updateJournal() {
  refs.journal.innerHTML = "";

  [...state.journal].slice(-6).reverse().forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    refs.journal.appendChild(item);
  });
}

function updateQuote(node) {
  const quote = quotePool[node.quoteKey] || quotePool.intro;
  const [text, author] = quote.split("\n— ");
  refs.quoteBox.innerHTML = `${text}<strong>${author || "Shoshana Zuboff"}</strong>`;
}

function updateSceneImage(node) {
  const imagePath = IMAGE_PATHS[node.image] || IMAGE_PATHS.school;
  refs.sceneImage.src = imagePath;
  refs.sceneImage.alt = `${node.title} — ilustração da cena`;
}

function choose(option) {
  if (option.requireItem && !state.items.includes(option.requireItem)) {
    alert(`Você precisa do item: ${option.requireItem}`);
    return;
  }

  if (option.check && !option.check(state)) {
    state.journal.push("A proposta ainda precisava de mais preparo coletivo ou repertório crítico.");
    state.current = option.failNext || "finalPartial";
    render();
    return;
  }

  applyEffects(option.effects);
  addItem(option.item);

  if (option.journal) {
    state.journal.push(option.journal);
  }

  state.current = state.life <= 0 ? "finalPartial" : option.next;
  render();
}

function renderChoices(node) {
  refs.choices.innerHTML = "";
  const choices = node.dynamicChoices ? node.dynamicChoices(state) : (node.choices || []);

  choices.forEach((option) => {
    if (option.visible && !option.visible(state)) {
      return;
    }

    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `
      <span class="choice__title">${option.text}</span>
      <span class="choice__desc">${option.desc || ""}</span>
    `;
    button.addEventListener("click", () => choose(option));
    refs.choices.appendChild(button);
  });
}

function renderEnding(node) {
  if (!node.ending) {
    refs.endingBox.hidden = true;
    refs.endingBox.innerHTML = "";
    return;
  }

  refs.endingBox.hidden = false;
  refs.endingBox.innerHTML = `
    <div>${node.ending.replaceAll("\n", "<br>")}</div>
    <div style="margin-top:10px; color:#2563eb; font-weight:700;">${node.score || ""}</div>
  `;

  const restartButton = document.createElement("button");
  restartButton.className = "choice";
  restartButton.type = "button";
  restartButton.innerHTML = `
    <span class="choice__title">Jogar novamente</span>
    <span class="choice__desc">Explorar outro caminho na escola e descobrir outro final.</span>
  `;
  restartButton.addEventListener("click", resetGame);
  refs.choices.appendChild(restartButton);
}

function render() {
  const node = nodes[state.current];
  refs.chapterLabel.textContent = node.label;
  refs.chapterTitle.textContent = node.title;
  refs.chapterSubtitle.textContent = node.subtitle || "";
  refs.chapterText.textContent = node.text || "";
  refs.chapterRef.textContent = node.ref || "";

  updateSceneImage(node);
  updateQuote(node);
  updateStats();
  updateInventory();
  updateJournal();

  renderChoices(node);
  renderEnding(node);
}

function resetGame() {
  state = createInitialState();
  render();
}

document.getElementById("restartBtn").addEventListener("click", resetGame);
document.getElementById("helpBtn").addEventListener("click", () => {
  alert(
    "Como jogar:\n\n" +
    "1. Leia a situação escolar apresentada.\n" +
    "2. Faça escolhas.\n" +
    "3. Suas decisões alteram Consciência Digital, Coragem e Cuidado Coletivo.\n" +
    "4. Alguns finais exigem mais preparo teórico, empatia e materiais produzidos na jornada.\n" +
    "5. O jogo foi inspirado no ECA Digital e em ideias de Shoshana Zuboff sobre capitalismo de vigilância."
  );
});

render();
