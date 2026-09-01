/**
 * Alto escalão do Poder Executivo do Maranhão (agentes políticos).
 *
 * Nomes e cargos são de fonte pública (Governo do MA / imprensa estadual,
 * secretariado empossado em abr/2026). Os valores de subsídio partem da
 * lei estadual de reajuste dos agentes políticos (vigência jun/2024,
 * amplamente noticiada) e são aproximados para fins de demonstração -
 * na produção virão da Folha de Pagamento oficial (SIAFEM) via Edge Function.
 *
 * O portal atual da Transparência do MA já divulga a remuneração nominal
 * de Governador, Vice e Secretários; esta camada reproduz esse recorte
 * enquanto a API de remuneração não está plugada.
 *
 * Fontes:
 *  - Relação dos titulares de secretarias/autarquias (Governo do MA, abr/2026)
 *  - Reajuste dos subsídios de agentes políticos - Lei estadual (2024)
 */

import type { Servidor } from "./servidores"

// Subsídio bruto mensal (parcela única) por nível de agente político.
export const SUBSIDIO_GOVERNADOR = 33006
export const SUBSIDIO_VICE = 31289
export const SUBSIDIO_SECRETARIO = 28245

// Teto do RGPS usado como base de contribuição previdenciária do RPPS
// para agentes políticos do Executivo estadual (aproximado, 2026).
const BASE_PREVIDENCIA = 8157

/**
 * Monta um registro de agente político no formato `Servidor` (mesmo shape
 * usado em /detalhe e /servidor). Regime de subsídio: parcela única, sem
 * gratificações nem adicional por tempo de serviço.
 */
function agentePolitico(params: {
  nome: string
  cargoNivel: string
  orgao: string
  lotacao: string
  admissao: string
  subsidio: number
}): Servidor {
  const { nome, cargoNivel, orgao, lotacao, admissao, subsidio } = params

  const vencimento = subsidio
  const gratificacao = 0
  const adicionalTempo = 0
  const outrosProventos = 0
  const totalProventos = vencimento

  const previdencia = Math.round(BASE_PREVIDENCIA * 0.14)
  const irpf = Math.round(Math.max(0, totalProventos - previdencia) * 0.275 - 896)
  const outrosDescontos = 0
  const totalDescontos = previdencia + irpf
  const liquido = totalProventos - totalDescontos

  return {
    nome,
    cargoNivel,
    orgao,
    lotacao,
    admissao,
    vencimento,
    gratificacao,
    adicionalTempo,
    outrosProventos,
    previdencia,
    irpf,
    outrosDescontos,
    totalProventos,
    totalDescontos,
    liquido,
  }
}

// ─── Governadoria ──────────────────────────────────────────────────────
export const GOVERNADOR = agentePolitico({
  nome: "Carlos Brandão",
  cargoNivel: "Governador do Estado",
  orgao: "GOV",
  lotacao: "Palácio dos Leões, São Luís",
  admissao: "01/01/2023",
  subsidio: SUBSIDIO_GOVERNADOR,
})

export const VICE_GOVERNADOR = agentePolitico({
  nome: "Felipe Camarão",
  cargoNivel: "Vice-Governador do Estado (acumula a Secretaria de Educação)",
  orgao: "SEDUC",
  lotacao: "Vice-Governadoria / SEDUC, São Luís",
  admissao: "01/01/2023",
  subsidio: SUBSIDIO_VICE,
})

// ─── Secretariado (recorte do primeiro escalão) ────────────────────────
export const SECRETARIOS: Servidor[] = [
  {
    nome: "Marcellus Alves",
    cargoNivel: "Secretário de Estado da Fazenda",
    orgao: "SEFAZ",
    lotacao: "SEFAZ, Sede São Luís",
    admissao: "02/01/2023",
  },
  {
    nome: "Aparício Bandeira",
    cargoNivel: "Secretário de Estado da Infraestrutura",
    orgao: "SINFRA",
    lotacao: "SINFRA, Sede São Luís",
    admissao: "02/01/2023",
  },
  {
    nome: "Tiago Fernandes",
    cargoNivel: "Secretário de Estado da Saúde",
    orgao: "SES",
    lotacao: "SES, Sede São Luís",
    admissao: "15/05/2024",
  },
  {
    nome: "Raul Mochel",
    cargoNivel: "Secretário de Estado da Transparência e Controle",
    orgao: "STC",
    lotacao: "STC, Sede São Luís",
    admissao: "02/01/2023",
  },
  {
    nome: "Sebastião Madeira",
    cargoNivel: "Secretário-Chefe da Casa Civil",
    orgao: "CASA CIVIL",
    lotacao: "Casa Civil, Palácio dos Leões",
    admissao: "02/01/2023",
  },
  {
    nome: "Márcio Machado",
    cargoNivel: "Secretário de Estado de Governo",
    orgao: "SEGOV",
    lotacao: "SEGOV, Sede São Luís",
    admissao: "04/04/2026",
  },
  {
    nome: "Rodrigo Maia",
    cargoNivel: "Procurador-Geral do Estado (equiparado a Secretário de Estado)",
    orgao: "PGE",
    lotacao: "PGE, Sede São Luís",
    admissao: "02/01/2023",
  },
  {
    nome: "Joslene Rodrigues",
    cargoNivel: "Secretária de Estado das Cidades e Desenvolvimento Urbano",
    orgao: "SECID",
    lotacao: "SECID, Sede São Luís",
    admissao: "02/01/2023",
  },
  {
    nome: "Murilo Andrade",
    cargoNivel: "Secretário de Estado de Administração Penitenciária",
    orgao: "SEAP",
    lotacao: "SEAP, Sede São Luís",
    admissao: "02/01/2023",
  },
  {
    nome: "Guilberth Garcês",
    cargoNivel: "Secretário de Estado de Gestão, Patrimônio e Assistência aos Servidores",
    orgao: "SEGEP",
    lotacao: "SEGEP, Sede São Luís",
    admissao: "04/04/2026",
  },
  {
    nome: "Vinícius Ferro",
    cargoNivel: "Secretário de Estado do Planejamento e Orçamento",
    orgao: "SEPLAN",
    lotacao: "SEPLAN, Sede São Luís",
    admissao: "04/04/2026",
  },
  {
    nome: "Pedro Chagas",
    cargoNivel: "Secretário de Estado do Meio Ambiente e Recursos Naturais",
    orgao: "SEMA",
    lotacao: "SEMA, Sede São Luís",
    admissao: "04/04/2026",
  },
  {
    nome: "Diego Rolim",
    cargoNivel: "Secretário de Estado da Agricultura, Pecuária e Pesca",
    orgao: "SAGRIMA",
    lotacao: "SAGRIMA, Sede São Luís",
    admissao: "04/04/2026",
  },
  {
    nome: "Naldir Lopes",
    cargoNivel: "Secretário de Estado de Esporte e Lazer",
    orgao: "SEDEL",
    lotacao: "SEDEL, Sede São Luís",
    admissao: "02/01/2023",
  },
].map((s) =>
  agentePolitico({ ...s, subsidio: SUBSIDIO_SECRETARIO })
)

/**
 * Lista completa do alto escalão (Governador + Vice + Secretários),
 * usada quando o cidadão consulta o cargo "Governador" ou "Secretário
 * de Estado" em /detalhe e /servidor.
 */
export const AUTORIDADES: Servidor[] = [GOVERNADOR, VICE_GOVERNADOR, ...SECRETARIOS]

/**
 * Resolve a lista de autoridades a partir do termo buscado como cargo.
 * Retorna `null` quando o termo não é um cargo de agente político.
 */
export function autoridadesPorCargo(termo: string): Servidor[] | null {
  const t = termo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")

  if (t.includes("vice")) return [VICE_GOVERNADOR]
  if (t.includes("governador")) return [GOVERNADOR, VICE_GOVERNADOR]
  if (t.includes("secretario de estado") || t === "secretario" || t.includes("secretariado")) {
    return SECRETARIOS
  }
  return null
}

// ─── Registros para a "Consulta específica" (Eixo → Gestão Pública / Pessoal) ──

const cpfMascarado = (miolo: string) => `***.${miolo}-**`

/**
 * Linhas de "Quadro de Pessoal" (mesmo shape de DADOS_PESSOAL).
 */
export const PESSOAL_AUTORIDADES = AUTORIDADES.map((a, i) => ({
  id: `pes-agp-${i + 1}`,
  matricula: `AGP-${String(1000 + i)}`,
  nome: a.nome.toUpperCase(),
  cpf: cpfMascarado(["481.202", "330.918", "205.774", "612.409", "118.663", "740.155", "902.318", "451.870", "336.921", "774.502", "059.114", "628.330", "417.845", "990.226", "553.701", "284.663"][i] ?? "000.000"),
  cargo: a.cargoNivel,
  orgao: a.orgao,
  vinculo: "Agente Político",
  admissao: a.admissao,
  mes: "Fevereiro",
  remuneracaoBruta: a.totalProventos,
  remuneracaoLiquida: a.liquido,
  situacao: "Ativo",
  ano: 2026,
}))

/**
 * Linhas de "Tabela de Remuneração" (mesmo shape de DADOS_REMUNERACAO).
 */
export const REMUNERACAO_AUTORIDADES = [
  {
    id: "rem-agp-1",
    codigoCargo: "AGP-0001",
    denominacao: "Governador do Estado",
    grupo: "Agentes Políticos",
    poder: "Executivo",
    qtdServidores: 1,
    vencimentoBase: SUBSIDIO_GOVERNADOR,
    gratificacoes: 0,
    salarioMedioBruto: SUBSIDIO_GOVERNADOR,
    cargaHoraria: "Dedicação exclusiva",
    ano: 2026,
  },
  {
    id: "rem-agp-2",
    codigoCargo: "AGP-0002",
    denominacao: "Vice-Governador do Estado",
    grupo: "Agentes Políticos",
    poder: "Executivo",
    qtdServidores: 1,
    vencimentoBase: SUBSIDIO_VICE,
    gratificacoes: 0,
    salarioMedioBruto: SUBSIDIO_VICE,
    cargaHoraria: "Dedicação exclusiva",
    ano: 2026,
  },
  {
    id: "rem-agp-3",
    codigoCargo: "AGP-0003",
    denominacao: "Secretário de Estado",
    grupo: "Agentes Políticos",
    poder: "Executivo",
    qtdServidores: 24,
    vencimentoBase: SUBSIDIO_SECRETARIO,
    gratificacoes: 0,
    salarioMedioBruto: SUBSIDIO_SECRETARIO,
    cargaHoraria: "Dedicação exclusiva",
    ano: 2026,
  },
]

/**
 * Diárias e viagens de agentes políticos (mesmo shape de DADOS_DIARIAS).
 * Valores em linha com a tabela de diárias do Estado para autoridades.
 */
export const DIARIAS_AUTORIDADES = [
  {
    id: "dir-agp-1",
    pcd: "PCD-2026/00021",
    servidor: "CARLOS BRANDÃO",
    cargo: "Governador do Estado",
    orgao: "GOV",
    mes: "Fevereiro",
    dataPartida: "05/02/2026",
    dataRetorno: "06/02/2026",
    destino: "Brasília / DF",
    motivo: "Agenda com ministérios para captação de recursos e assinatura de convênios federais de infraestrutura",
    qtdDiarias: 1.5,
    valorTotal: 1800,
    situacao: "Paga",
    ano: 2026,
  },
  {
    id: "dir-agp-2",
    pcd: "PCD-2026/00034",
    servidor: "FELIPE CAMARÃO",
    cargo: "Vice-Governador / Secretário de Educação",
    orgao: "SEDUC",
    mes: "Fevereiro",
    dataPartida: "11/02/2026",
    dataRetorno: "12/02/2026",
    destino: "Brasília / DF",
    motivo: "Reunião no MEC e FNDE sobre repasses do FUNDEB e programa de escolas de tempo integral",
    qtdDiarias: 1.5,
    valorTotal: 1560,
    situacao: "Paga",
    ano: 2026,
  },
  {
    id: "dir-agp-3",
    pcd: "PCD-2026/00052",
    servidor: "MARCELLUS ALVES",
    cargo: "Secretário de Estado da Fazenda",
    orgao: "SEFAZ",
    mes: "Fevereiro",
    dataPartida: "18/02/2026",
    dataRetorno: "19/02/2026",
    destino: "São Paulo / SP",
    motivo: "Reunião do CONFAZ e tratativas sobre reforma tributária e compensação do ICMS",
    qtdDiarias: 1.5,
    valorTotal: 1560,
    situacao: "Paga",
    ano: 2026,
  },
  {
    id: "dir-agp-4",
    pcd: "PCD-2026/00061",
    servidor: "TIAGO FERNANDES",
    cargo: "Secretário de Estado da Saúde",
    orgao: "SES",
    mes: "Fevereiro",
    dataPartida: "20/02/2026",
    dataRetorno: "21/02/2026",
    destino: "Imperatriz",
    motivo: "Vistoria do Hospital Macrorregional e alinhamento da rede de urgência da Região Tocantina",
    qtdDiarias: 1.5,
    valorTotal: 900,
    situacao: "Paga",
    ano: 2026,
  },
  {
    id: "dir-agp-5",
    pcd: "PCD-2026/00078",
    servidor: "APARÍCIO BANDEIRA",
    cargo: "Secretário de Estado da Infraestrutura",
    orgao: "SINFRA",
    mes: "Fevereiro",
    dataPartida: "24/02/2026",
    dataRetorno: "26/02/2026",
    destino: "Balsas / Riachão",
    motivo: "Fiscalização do Anel Viário da Produção e medição de obras de pavimentação no sul do Estado",
    qtdDiarias: 2.5,
    valorTotal: 1500,
    situacao: "Paga",
    ano: 2026,
  },
  {
    id: "dir-agp-6",
    pcd: "PCD-2026/00019",
    servidor: "RAUL MOCHEL",
    cargo: "Secretário de Estado da Transparência e Controle",
    orgao: "STC",
    mes: "Janeiro",
    dataPartida: "22/01/2026",
    dataRetorno: "23/01/2026",
    destino: "Brasília / DF",
    motivo: "Encontro do CONACI e capacitação sobre controle interno e integridade pública",
    qtdDiarias: 1.5,
    valorTotal: 1560,
    situacao: "Paga",
    ano: 2026,
  },
  {
    id: "dir-agp-7",
    pcd: "PCD-2026/00006",
    servidor: "CARLOS BRANDÃO",
    cargo: "Governador do Estado",
    orgao: "GOV",
    mes: "Janeiro",
    dataPartida: "14/01/2026",
    dataRetorno: "15/01/2026",
    destino: "Barreirinhas",
    motivo: "Entrega de obras de mobilidade e agenda de fomento ao turismo nos Lençóis Maranhenses",
    qtdDiarias: 1.5,
    valorTotal: 900,
    situacao: "Paga",
    ano: 2026,
  },
  {
    id: "dir-agp-8",
    pcd: "PCD-2025/01890",
    servidor: "JOSLENE RODRIGUES",
    cargo: "Secretária de Estado das Cidades e Desenvolvimento Urbano",
    orgao: "SECID",
    mes: "Fevereiro",
    dataPartida: "12/02/2025",
    dataRetorno: "13/02/2025",
    destino: "Caxias",
    motivo: "Assinatura de ordem de serviço de saneamento e visita técnica a obras de drenagem urbana",
    qtdDiarias: 1.5,
    valorTotal: 780,
    situacao: "Paga",
    ano: 2025,
  },
]
