// Banco de Dados dos Projetos - Turma da Noite
const projetosNoite = [
    {
        id: 1,
        title: "RDI SENAI",
        shortDesc: `Plataforma inteligente para monitoramento, registro digital rastreável e análise de riscos de desvio de incidentes operacionais.`,
        fullDesc: `O RDI (Risco de Desvio de Incidentes) é uma plataforma de gestão preditiva desenvolvida para ambientes industriais e educacionais. A solução tecnológica identifica, registra, analisa e previne desvios operacionais antes que se tornem problemas graves. Através da leitura de um QR Code fixado na unidade, o usuário realiza um reporte rápido e digital. O sistema entrega padronização de respostas, rastreabilidade e dados concretos para a tomada de decisões da coordenação, partindo da premissa de que a prevenção custa menos que a correção.`,
        link: "https://0001113992-maker.github.io/",
        image: "img/RDI SENAI.png", 
        imageAlt: "QR Code do sistema RDI SENAI",
        autores: ["Alexandre", "Gizele", "Heitor", "Silas"],
        presentation: "presentation/RDI SENAI.pdf"
    },
    {
        id: 2,
        title: "SAB - Sist. Autoatendimento Bibliotecário",
        shortDesc: `Sistema digital autônomo de locação de livros via leitura de QR Code, garantindo acesso estendido ao acervo sem barreiras de horário.`,
        fullDesc: `O SAB revoluciona a experiência na biblioteca ao resolver o desafio de acesso em horários variados. Como destacado no protótipo ao lado, o QR Code será colado na parte interna dos próprios livros físicos. Ao abri-lo, o aluno escaneia o código pelo celular e realiza a locação de forma totalmente automatizada e independente. O sistema gerencia o catálogo, controla as datas de retirada e devolução, reduzindo as tarefas manuais da bibliotecária e mantendo a segurança do patrimônio com monitoramento 24h. Isso garante praticidade, autonomia e disponibilidade contínua dos materiais de estudo.`,
        link: "https://kaykyadriano.github.io/SAB/",
        image: "img/prototipo Sab.jpeg", 
        imageAlt: "QR Code inserido dentro do livro físico para leitura autônoma",
        autores: ["Kayky", "Jade", "Mateus"],
        presentation: "presentation/APRESENTAÇÃO SAB.pdf"
    },
    {
        id: 3,
        title: "Sistema de Reporte",
        shortDesc: `Interface ágil de abertura de chamados de TI, conectando alunos e instrutores diretamente ao suporte técnico através de QR Codes.`,
        fullDesc: `Criado para resolver os desafios de manutenção de hardwares e redes, o Sistema de Reporte otimiza o fluxo de comunicação de falhas. Em vez de abrir chamados verbais vagos, o aluno ou professor escaneia o QR Code fixado ao lado da máquina defeituosa. Ele então preenche um formulário digital rápido com a sua matrícula, o número exato do PC e a categorização do defeito (mouse, teclado, monitor ou software). Os dados chegam de forma categorizada ao técnico, garantindo manutenção assertiva, relatórios estatísticos de quebra e desenvolvendo o zelo pelo patrimônio da escola.`,
        link: "https://reporte-para-senai26.netlify.app/",
        image: "img/sdr.png",
        imageAlt: "Placa sinalizadora do Sistema de Reporte afixada no computador",
        autores: ["Luiz Fabiano", "Sabrina", "Ana Flavia"],
        presentation: "presentation/SISTEMA DE REPORTE APRESENTAÇÃO.pdf"
    },
    {
        id: 4,
        title: "Justify",
        shortDesc: `Aplicação Paperless para gestão digital, envio de atestados e centralização do fluxo de justificativas de faltas e saídas antecipadas.`,
        fullDesc: `O Justify moderniza o processo acadêmico no SENAI, substituindo os processos físicos lentos por um fluxo de trabalho (workflow) digitalizado e eficiente. O aluno, utilizando a matrícula (RA), acessa a plataforma para fazer o upload do documento comprobatório em PDF ou imagem (atestados) e acompanha a validação pedagógica. A automação cruza essas informações com a política institucional (frequência mínima de 75%), emitindo alertas e promovendo uma gestão transparente, sustentável (com redução drástica do uso de papel) e ágil para toda a comunidade escolar. Usuário: admin | Senha: 1234`,
        link: "https://0001150903.github.io/Sistema-de-Faltas/",
        image: "",
        imageAlt: "",
        autores: ["Maiderson Junio", "Paola Oliveira", "Raissa Ellen"],
        presentation: "presentation/Justify apresentação.pdf"
    },
    {
        id: 5,
        title: "SENAI WorkTime",
        shortDesc: `Portal digital acessado via QR Code para consulta dinâmica e em tempo real dos horários, turnos e setores de funcionários.`,
        fullDesc: `O projeto SENAI WorkTime soluciona as falhas de comunicação interna e a dificuldade de localizar colaboradores na unidade. Através da digitalização e do uso de QR Codes impressos em cartazes distribuídos pela infraestrutura física, alunos e professores são redirecionados a uma tabela inteligente e responsiva. A plataforma informa em qual turno e setor cada colaborador se encontra operando, além de disponibilizar contatos de e-mail institucionais. O resultado é a economia de tempo, melhoria no atendimento aos alunos e um ambiente corporativo muito mais integrado.`,
        link: "https://0001150971-beep.github.io/worktime/",
        image: "",
        imageAlt: "",
        autores: ["Erick Amaral", "Matheus Teixeira", "Raphaela Vieira"],
        presentation: "presentation/SENAI WorkTime (2).pdf"
    },
    {
        id: 6,
        title: "Cantina 2.0 (PDV v5)",
        shortDesc: `Reestruturação do layout de atendimento e implementação de um PDV inteligente para mitigar filas e otimizar o fluxo de vendas.`,
        fullDesc: `Baseado na análise de gargalos nos horários de intervalo (como espaço confinado e lentidão), a Cantina 2.0 propõe um redesenho logístico da operação alimentícia. A solução abrange a reordenação física através da demarcação de uma área de fila dupla dedicada (caixa rápido vs fluxo geral), o reposicionamento dos alimentos baseados na classe de saída, corredores de impulso para vendas extras e o espalhamento de chaves PIX QR Code pelas paredes e mesas. O escopo inclui a codificação de um Sistema de Caixa (PDV) para viabilizar auditorias, gerenciamento de cancelamentos com justificativa e totalização financeira em tempo real.`,
        link: "pages/protótipo cantina.html", 
        image: "",
        imageAlt: "",
        autores: ["Nicolas de Souza", "Yuri Samuel", "Matheus Oliveira", "João Gabriel"],
        presentation: "presentation/cantina 2.0.pdf" 
    }
];

// Banco de Dados dos Projetos - Turma da Tarde
const projetosTarde = [
    {
        id: 7,
        title: "Solucione Aqui!",
        shortDesc: `Sistema de formulários interativos via QR Code para que alunos reportem erros e problemas físicos detectados na unidade.`,
        fullDesc: `O projeto "Solucione Aqui!" foi desenvolvido para sanar a falta de um canal simples e direto para relato de problemas de infraestrutura pelos alunos. A solução propõe a distribuição de QR Codes estratégicos pela unidade que direcionam os estudantes a um formulário mobile. Desta forma, qualquer pessoa que identificar um perigo potencial ou erro na unidade pode enviar as informações instantaneamente para a equipe responsável, acelerando o tempo de resposta e garantindo um ambiente educacional mais seguro.`,
        link: "https://0001151179-wq.github.io/projeto-inovacao/",
        image: "", 
        imageAlt: "",
        autores: ["Davi Augusto", "Matheus Felipe", "Erik Richard", "João Pedro"],
        presentation: "presentation/SOLUCIONE AQUI APRESENTAÇÃO.pdf"
    },
    {
        id: 8,
        title: "Checklist Computacional",
        shortDesc: `Formulário digital de avaliação rápida para registrar o estado de conservação dos mouses, teclados e computadores dos laboratórios.`,
        fullDesc: `Pensando no alto fluxo de utilização dos laboratórios de informática, o "Checklist Computacional" funciona como uma ferramenta de gestão preventiva. O projeto implementa um controle padronizado onde os alunos preenchem rapidamente o estado do equipamento no início das atividades (ou semanalmente, a critério do instrutor). Com o registro sistêmico das informações, o corpo técnico consegue antecipar as manutenções necessárias, evitar interrupções durante as aulas práticas e manter a organização geral do laboratório.`,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfsKaDeHY8NIpvfQ-DzYBjn3qxc05v43rk8MMBjzsUE5JicKA/viewform",
        image: "", 
        imageAlt: "",
        autores: ["Iasmym Santos", "Simara Silva"],
        presentation: "presentation/cheklist computacional.pdf"
    },
    {
        id: 9,
        title: "InfraTech",
        shortDesc: `Aplicativo de check-in mobile focado no registro, classificação de gravidade e acompanhamento de falhas de infraestrutura (manutenção).`,
        fullDesc: `O InfraTech é uma solução avançada de governança patrimonial. Ele funciona como um aplicativo mobile onde alunos e colaboradores podem reportar problemas estruturais (como goteiras ou vazamentos) enviando fotos e a localização exata da ocorrência. O grande diferencial do sistema é a matriz de classificação de gravidade da demanda: Leve (pequenos reparos), Grave (afeta funcionamento contínuo) e Urgente (riscos à segurança física). Com base nesses status, a notificação chega priorizada à equipe de manutenção, gerando rastreabilidade completa até a conclusão do chamado.`,
        link: "", 
        image: "", 
        imageAlt: "",
        autores: ["Maria Eduarda"],
        presentation: "presentation/infratech.pdf"
    },
    {
        id: 10,
        title: "SARP - Sistema de Alerta",
        shortDesc: `Sistema inteligente que consome dados meteorológicos em tempo real para prevenção de acidentes causados por umidade e chuva no SENAI.`,
        fullDesc: `O SARP (Sistema de Alerta de Risco por Precipitação) nasceu para lidar com problemas reais de segurança, como a formação de poças e o risco de escorregamento nas escadarias de metal da unidade. O sistema utiliza programação inteligente para monitorar o clima da cidade. Ao identificar alta probabilidade de chuva ou níveis críticos de umidade, ele emite alertas automatizados à coordenação, recomendando ações mitigatórias imediatas, como o bloqueio da área externa e a instalação de sinalizações de segurança.`,
        link: "pages/sarp.html",
        image: "", 
        imageAlt: "",
        autores: ["Geicielle Moura", "Lívia Rodrigues", "Yara Santana"],
        presentation: "presentation/SARP - Apresentação.pdf"
    },
    {
        id: 11,
        title: "InovaTech Catálogo Digital",
        shortDesc: `Plataforma de acervo online para a biblioteca, oferecendo consulta de disponibilidade, detalhes técnicos e filtros de pesquisa avançados.`,
        fullDesc: `O portal web do InovaTech transforma o acesso ao conhecimento ao transpor a disposição real das estantes físicas para uma interface digital imersiva. Construído para reduzir o tempo desperdiçado em buscas manuais na biblioteca, o catálogo permite consultar o status instantâneo do livro (indicando se está "Disponível", "Emprestado" ou "Reservado"). A solução conta com uma categorização super detalhada, organizando as obras por áreas de conhecimento, exibindo sinopses, sumários e tipo de literatura diretamente no smartphone do usuário.`,
        link: "https://l7dbr.github.io/livros2/",
        image: "", 
        imageAlt: "",
        autores: ["Ana Carolayne", "Andreza", "Gustavo", "Karla", "Luan"],
        presentation: "presentation/apresentaçãoInovaTech.pdf.pdf"
    },
    {
        id: 12,
        title: "SGE - Gestão de Eventos",
        shortDesc: `Plataforma inteligente para agendamento de salas e laboratórios, prevenindo conflitos de horário de forma automatizada na unidade.`,
        fullDesc: `O SGE (Sistema de Gerenciamento de Eventos) foi criado para eliminar o clássico problema de choque de horários na reserva de espaços educacionais. A plataforma permite que os instrutores visualizem a disponibilidade de salas e laboratórios em tempo real e solicitem o agendamento de forma transparente. A equipe pedagógica recebe a notificação e aprova o evento com um clique, prevenindo conflitos antes que eles aconteçam. O sistema promete evoluir para uma automação total de fluxos e integração com outros sistemas de gestão do SENAI.`,
        link: "https://victorgabrielpa.github.io/SGE/",
        image: "", 
        imageAlt: "",
        autores: ["Victor Gabriel", "Paulo", "João", "Caio", "Fellipe"],
        presentation: "presentation/Sistema de Gerenciamento de Eventos (SGE) Apresentação.pdf"
    },
    {
        id: 13,
        title: "WaitGo - Controle de Saída",
        shortDesc: `Sistema de controle de fluxo de liberação de turmas para evitar filas, travamentos e tumultos nas catracas de saída da unidade.`,
        fullDesc: `O WaitGo ataca um problema logístico diário: o tumulto e as filas geradas quando várias turmas são liberadas simultaneamente. A solução consiste em um sistema em rede de coordenação de saídas. O instrutor aciona a liberação da sua turma no painel, o que inicia um temporizador de "Turma Liberada" (em torno de 1 minuto e 30 segundos). Durante esse período, as telas dos demais instrutores exibem o status "Aguardando", criando um intervalo seguro entre as saídas. Isso garante um fluxo de dispersão rápido, organizado e seguro na portaria da instituição.`,
        link: "pages/waitgo.html",
        image: "", 
        imageAlt: "",
        autores: ["Gabrielly", "Rayssa", "Heber"],
        presentation: "presentation/wait go apresentação.pdf"
    }
];

const introView = document.getElementById('intro-view');
const hubView = document.getElementById('hub-view');
const projectView = document.getElementById('project-view');
const projectContainer = document.getElementById('project-container');
const gridContainer = document.getElementById('grid-container');
const hubTitleText = document.getElementById('hub-title-text');

let currentClassData = [];

// Seleção de turma e transição para o Hub
function selectClass(turno) {
    if (turno === 'noite') {
        currentClassData = projetosNoite;
        hubTitleText.innerText = "Projetos - Turma da Noite";
        introView.classList.add('hidden');
        renderHub(currentClassData);
        hubView.classList.remove('hidden');
    } else if (turno === 'tarde') {
        currentClassData = projetosTarde;
        hubTitleText.innerText = "Projetos - Turma da Tarde";
        introView.classList.add('hidden');
        renderHub(currentClassData);
        hubView.classList.remove('hidden');
    }
}

// Renderização dos cards baseada nos dados da turma
function renderHub(projetos) {
    gridContainer.innerHTML = '';
    projetos.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => showProject(proj.id, projetos);
        card.innerHTML = `
            <h2>${proj.title}</h2>
            <p>${proj.shortDesc}</p>
            <span class="btn-ler-mais">iniciar_execucao() &gt;</span>
        `;
        gridContainer.appendChild(card);
    });
}

// Abertura da tela de detalhes de um projeto
function showProject(id, projetosArray) {
    const proj = projetosArray.find(p => p.id === id);
    
    let imageHTML = '';
    if (proj.image) {
        imageHTML = `
            <div class="project-media">
                <img src="${proj.image}" alt="${proj.imageAlt}">
            </div>
        `;
    }

    let autoresHTML = '';
    if (proj.autores && proj.autores.length > 0) {
        autoresHTML = `
            <div class="project-authors">
                <strong><span style="color: var(--accent-red);">&gt;</span> DEV_TEAM:</strong> ${proj.autores.join(' | ')}
            </div>
        `;
    }

    let presentationHTML = '';
    if (proj.presentation) {
        presentationHTML = `
            <div class="project-presentation">
                <h3 class="presentation-title">> SLIDES_DE_APRESENTACAO.pdf</h3>
                <iframe src="${proj.presentation}" class="presentation-frame" title="Apresentação do Projeto"></iframe>
            </div>
        `;
    }
    
    // Tratamento para esconder o botão caso o link esteja em branco
    let linkHTML = '';
    if (proj.link && proj.link !== "") {
        linkHTML = `<a href="${proj.link}" target="_blank" class="btn-acessar">Acessar Protótipo</a>`;
    } else {
        linkHTML = `<span style="display:inline-block; margin-top:1rem; color:var(--text-muted); font-family:var(--font-mono); font-size: 0.9rem;">&gt; O protótipo online não foi anexado pela equipe.</span>`;
    }

    projectContainer.innerHTML = `
        <h2>${proj.title}</h2>
        ${autoresHTML}
        <div class="project-content">
            <div class="project-text">
                <p>${proj.fullDesc}</p>
                ${linkHTML}
            </div>
            ${imageHTML}
        </div>
        ${presentationHTML}
    `;

    hubView.classList.add('hidden');
    projectView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Voltar da tela de detalhes de um projeto para a grade da turma
function showHub() {
    projectView.classList.add('hidden');
    hubView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Voltar da grade da turma para a tela inicial (seleção de turno)
function showIntro() {
    hubView.classList.add('hidden');
    projectView.classList.add('hidden');
    introView.classList.remove('hidden');
    window.scrollTo(0, 0);
}






