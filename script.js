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


// Banco de Dados dos Projetos - TCC - Turma da Tarde
const projetosTccTarde = [
    {
        id: 101,
        title: "WorkPilot",
        unidade: "TCC",
        shortDesc: `Sistema de gestão de produção para controle de ordens de serviço, etapas produtivas e rastreabilidade visual em tempo real.`,
        fullDesc: `O WorkPilot é um sistema de gestão de produção voltado ao acompanhamento de Ordens de Serviço em empresas gráficas e indústrias de produção personalizada. A proposta resolve a dificuldade de identificar em qual etapa cada pedido se encontra, reduzindo gargalos, melhorando a rastreabilidade e apoiando decisões mais rápidas. O painel organiza o fluxo em etapas como pré-impressão, impressão, corte, acabamento e expedição, com controle visual por cores, atualização de status e visão em tempo real.`,
        link: "https://iasmym705.github.io/prototipo-oficial/",
        image: "img/workpilot.png",
        imageAlt: "Tela inicial do sistema WorkPilot",
        autores: ["Fernanda", "Gabrielly", "Geiciele", "Gustavo", "Iasmym", "Simara"],
        presentation: "presentation/WorkPilot.pdf",
        credentials: `Login: qualquer usuário preenchido | Senha: qualquer senha preenchida`,
        videoPitch: "https://www.youtube.com/watch?v=oFiQ_sREOi8",
        videoPrototipo: "https://www.youtube.com/watch?v=gi21K1QcXTo&authuser=0"
    },
    {
        id: 102,
        title: "OperSys / TSEA",
        unidade: "TCC",
        shortDesc: `Sistema web para digitalização, armazenamento, distribuição e gestão de desenhos técnicos e instruções de trabalho.`,
        fullDesc: `O OperSys/TSEA propõe uma plataforma web funcional para digitalizar o fluxo de desenhos técnicos, reduzindo o uso excessivo de papel e evitando problemas de desatualização. O sistema permite o envio rápido e seguro de documentos, armazenamento das versões mais recentes, distribuição de instruções e comunicação interna entre engenharia e técnicos. A solução foi pensada para tornar o acesso aos documentos técnicos mais organizado, rastreável e seguro dentro da empresa.`,
        link: "https://0001052565-dev.github.io/TCC-TSEA/",
        image: "img/tsea.png",
        imageAlt: "Tela de login do sistema TSEA",
        autores: ["Ana Carolayne", "Andreza", "Karla", "Luan", "Rayssa"],
        presentation: "presentation/OperSys.pdf",
        credentials: `Usuário: admin | Código de acesso da área do administrador: 123456`,
        videoPitch: "https://www.youtube.com/watch?v=0cekiPjWBq0",
        videoPrototipo: "https://youtu.be/NoJ4uALNIno"
    },
    {
        id: 103,
        title: "Inventário Ágil",
        unidade: "TCC",
        shortDesc: `Sistema de gerenciamento de estoque para pequenos e médios negócios de alimentação com foco em controle, previsibilidade e redução de desperdícios.`,
        fullDesc: `O Inventário Ágil é uma solução para negócios de alimentação que ainda dependem de controles manuais, sofrem com fragilidade no estoque, deslocamento excessivo de colaboradores e baixa previsibilidade de compras e produção. A proposta organiza o controle visual do estoque, vencimentos, fichas técnicas e planejamento, ajudando a reduzir desperdícios, padronizar operações e melhorar a tomada de decisão com uma gestão Lean de baixo custo.`,
        link: "https://0001151168-lgtb.github.io/prototipo/",
        image: "img/inventario-agil.png",
        imageAlt: "Dashboard inicial do sistema Inventário Ágil",
        autores: ["Davi Augusto", "Erik Richard", "João Pedro", "Maria Eduarda", "Matheus Felipe"],
        presentation: "presentation/Inventário Ágil.pdf",
        credentials: ``,
        videoPitch: "https://www.youtube.com/watch?v=vZYPKbFptKU",
        videoPrototipo: "https://www.youtube.com/watch?authuser=0&v=0PAn8P7H1ks&feature=youtu.be"
    },
    {
        id: 104,
        title: "Fale Fácil Digital",
        unidade: "TCC",
        shortDesc: `Sistema digital para registro, acompanhamento e gestão automatizada de ocorrências antes feitas em formulários físicos.`,
        fullDesc: `O Fale Fácil Digital foi criado para substituir o registro manual de ocorrências em formulários físicos deixados na portaria. A solução oferece um sistema automatizado para relatar problemas, registrar chamados, acompanhar estatísticas e facilitar a comunicação interna. Com isso, o processo de preenchimento fica mais prático e o tratamento das reclamações se torna mais ágil, organizado e rastreável.`,
        link: "https://victorgabrielpa.github.io/Fale-F-cil-Digital/",
        image: "img/fale-facil.png",
        imageAlt: "Painel de ocorrências do sistema Fale Fácil Digital",
        autores: ["Victor", "Paulo", "Fellipe", "Heber", "João"],
        presentation: "presentation/Fale Fácil.pdf",
        credentials: `Admin: admin | Senha: 123<br>Usuário: user | Senha: 123`,
        videoPitch: "https://youtu.be/y8LveEnLf9c",
        videoPrototipo: "https://youtu.be/FeNhgxdSy8Q"
    }
];

const projetosTccNoite = [
    {
        id: 201,
        title: "TraceMaster",
        unidade: "TCC",
        shortDesc: `Solução de rastreamento e acompanhamento de processos, apresentada por videopitch e demonstração de protótipo.`,
        fullDesc: `O TraceMaster é um projeto da turma da noite voltado ao acompanhamento e à rastreabilidade de processos. Como os slides do projeto ainda não foram anexados nesta atualização, o cadastro foi feito com as informações enviadas de videopitch e vídeo do protótipo. A descrição completa pode ser complementada posteriormente com problema, público-alvo, integrantes e funcionalidades detalhadas assim que a apresentação for disponibilizada.`,
        link: "",
        image: "",
        imageAlt: "",
        autores: [],
        presentation: "",
        credentials: ``,
        videoPitch: "https://www.youtube.com/watch?v=cTl_qTayCs4",
        videoPrototipo: "https://youtu.be/DyU0bvNXzms"
    },
    {
        id: 202,
        title: "Hidronexus",
        unidade: "TCC",
        shortDesc: `Site interativo para ampliar a visibilidade do projeto Guardiãs das Águas, com conteúdos educativos e assistente virtual GuardIA.`,
        fullDesc: `O Hidronexus, desenvolvido pela Nexus Soluções Digitais, propõe uma plataforma digital para fortalecer a divulgação do projeto Guardiãs das Águas. A solução reúne informações organizadas, conteúdos educativos e uma assistente virtual chamada GuardIA, capaz de responder dúvidas sobre saneamento básico, preservação da água e sobre o próprio projeto. O objetivo é ampliar a visibilidade das ações ambientais, facilitar o acesso a informações claras e incentivar a conscientização da comunidade sobre o uso responsável dos recursos hídricos.`,
        link: "pages/hidronexus/index.html",
        image: "img/hidronexus.png",
        imageAlt: "Tela de apresentação do projeto Hidronexus",
        autores: ["Raphaela Vieira", "Matheus Oliveira", "Jade Dias", "Lívia Rodrigues", "Isabela Utsch", "Nicolas De Souza"],
        presentation: "presentation/Hidronexus.pdf",
        credentials: ``,
        videoPitch: "https://www.youtube.com/watch?v=fY6FYLrfND0",
        videoPrototipo: "https://youtu.be/jpjLlP-ZOzo"
    },
    {
        id: 203,
        title: "Tec&Nova",
        unidade: "TCC",
        shortDesc: `Sistema web para organização de chamados, suporte técnico e acompanhamento visual de demandas em empresas.`,
        fullDesc: `O Tec&Nova é um sistema web leve criado para organizar pedidos de ajuda, chamados de suporte e solicitações internas que antes poderiam se perder em e-mails, anotações ou registros manuais. A proposta central é garantir que nenhum pedido de conserto ou suporte seja esquecido, permitindo que colaboradores abram chamados rapidamente e que a equipe de TI acompanhe as solicitações de forma profissional. O diferencial está no painel visual em formato de cartões coloridos, que mostra demandas pendentes, em andamento e finalizadas, além de gráficos automáticos para apoiar a gestão da produtividade.`,
        link: "https://0001150903.github.io/Trabalho-de-Conclus-o-de-Curso/",
        image: "img/tecnova.png",
        imageAlt: "Tela de apresentação do projeto Tec&Nova",
        autores: [],
        presentation: "presentation/Tec&Nova.pdf",
        credentials: `Usuário: admin | Senha: 123`,
        videoPitch: "https://www.youtube.com/watch?v=DQM4jcZ6bAQ",
        videoPrototipo: "https://www.youtube.com/watch?v=MfzAFx3xy-s"
    },
    {
        id: 204,
        title: "Fluxo Digital",
        unidade: "TCC",
        shortDesc: `Portal web para digitalização de processos operacionais, APR, perfis de acesso e solicitações via WhatsApp.`,
        fullDesc: `O Fluxo Digital transforma processos manuais lentos em soluções digitais rápidas, funcionando diretamente no navegador do celular, tablet ou computador. O sistema trabalha com perfis de acesso, diferenciando Operador e Coordenador, e oferece recursos como envio de informações, gerenciamento, aprovação, registro de ocorrências, Análise Preliminar de Risco (APR) digital e solicitação de ferramentas via WhatsApp. A proposta combina segurança do trabalho e eficiência operacional para reduzir papel, organizar fluxos e garantir que as atividades comecem no momento certo.`,
        link: "pages/fluxo-digital.html",
        image: "img/fluxo-digital.png",
        imageAlt: "Tela de apresentação do projeto Fluxo Digital",
        autores: ["Heitor", "Alexandre", "Kayky", "Mateus", "Yara", "Silas"],
        presentation: "presentation/Fluxo Digital.pdf",
        credentials: `Digite qualquer nome completo e selecione o perfil desejado para acessar.`,
        videoPitch: "https://youtu.be/-wCSDFF5CpA",
        videoPrototipo: "https://youtu.be/66-WCRF4P0g"
    }
];

const introView = document.getElementById('intro-view');
const categoryView = document.getElementById('category-view');
const categoryTitleText = document.getElementById('category-title-text');
const hubView = document.getElementById('hub-view');
const projectView = document.getElementById('project-view');
const projectContainer = document.getElementById('project-container');
const gridContainer = document.getElementById('grid-container');
const hubTitleText = document.getElementById('hub-title-text');

let currentClassData = [];
let currentTurno = '';
let currentUnit = 'design';

// Seleção de turma e transição para a escolha da unidade
function selectClass(turno) {
    currentTurno = turno;
    currentUnit = '';

    if (turno === 'noite') {
        currentClassData = projetosNoite;
        categoryTitleText.innerText = "Turma da Noite";
    } else if (turno === 'tarde') {
        currentClassData = projetosTarde;
        categoryTitleText.innerText = "Turma da Tarde";
    }

    introView.classList.add('hidden');
    categoryView.classList.remove('hidden');
}

// Seleção da unidade após o turno
function selectCategory(unidade) {
    currentUnit = unidade;

    if (unidade === 'design') {
        currentClassData = currentTurno === 'noite' ? projetosNoite : projetosTarde;
        hubTitleText.innerText = currentTurno === 'noite'
            ? "Design Thinking - Turma da Noite"
            : "Design Thinking - Turma da Tarde";
        renderHub(currentClassData);
    } else if (unidade === 'tcc') {
        currentClassData = currentTurno === 'noite' ? projetosTccNoite : projetosTccTarde;
        hubTitleText.innerText = currentTurno === 'noite'
            ? "TCC - Turma da Noite"
            : "TCC - Turma da Tarde";
        renderHub(currentClassData);
    }

    categoryView.classList.add('hidden');
    hubView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Renderização dos cards baseada nos dados da turma
function renderHub(projetos) {
    gridContainer.innerHTML = '';

    if (!projetos || projetos.length === 0) {
        gridContainer.innerHTML = `<div class="project-empty">&gt; Nenhum projeto cadastrado para esta seleção no momento.</div>`;
        return;
    }

    projetos.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => showProject(proj.id, projetos);
        card.innerHTML = `
            ${proj.unidade ? `<span class="project-tag">${proj.unidade}</span>` : ''}
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
                <a href="${proj.presentation}" target="_blank" rel="noopener noreferrer" class="btn-acessar">Abrir Apresentação</a>
                <iframe src="${proj.presentation}" class="presentation-frame" title="Apresentação do Projeto"></iframe>
            </div>
        `;
    }
    

    let credentialsHTML = '';
    if (proj.credentials && proj.credentials.trim() !== '') {
        credentialsHTML = `
            <div class="project-credentials">
                <strong>&gt; CREDENCIAIS_DE_TESTE:</strong><br>${proj.credentials}
            </div>
        `;
    }

    let videosHTML = '';
    if (proj.videoPitch || proj.videoPrototipo) {
        videosHTML = `
            <div class="project-videos">
                <strong>&gt; VIDEOS_DO_PROJETO:</strong><br>
                ${proj.videoPitch ? `<a href="${proj.videoPitch}" target="_blank" rel="noopener noreferrer" class="btn-acessar">Assistir Pitch</a>` : ''}
                ${proj.videoPrototipo ? `<a href="${proj.videoPrototipo}" target="_blank" rel="noopener noreferrer" class="btn-acessar">Vídeo do Protótipo</a>` : ''}
            </div>
        `;
    }
    // Tratamento para esconder o botão caso o link esteja em branco
    let linkHTML = '';
    if (proj.link && proj.link !== "") {
        linkHTML = `<a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="btn-acessar">Acessar Protótipo</a>`;
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
                ${videosHTML}
                ${credentialsHTML}
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
    categoryView.classList.add('hidden');
    hubView.classList.add('hidden');
    projectView.classList.add('hidden');
    introView.classList.remove('hidden');
    window.scrollTo(0, 0);
}






