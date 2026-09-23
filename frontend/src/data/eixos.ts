/**
 * Estrutura dos 9 eixos temáticos do Portal da Transparência do Maranhão.
 * Cada eixo possui sua identidade visual própria com ícones claros, paleta suave e métricas-chave.
 */

export type TemaEixo = {
  iconBg: string
  iconColor: string
  borderColor: string
}

export type Eixo = {
  slug: string
  nome: string
  descricaoCidada: string
  icone: string
  destaque: boolean
  metricaValor: string
  metricaRotulo: string
  tema: TemaEixo
}

export const EIXOS: Eixo[] = [
  {
    slug: "gestao-publica",
    nome: "Gestão Pública",
    descricaoCidada: "Servidores, salários, fornecedores, contratos, licitações e diárias",
    icone: "Users",
    destaque: true,
    metricaValor: "72%",
    metricaRotulo: "consultas frequentes",
    tema: {
      iconBg: "bg-emerald-500/15 dark:bg-emerald-500/20 border border-emerald-500/25",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    },
  },
  {
    slug: "saude",
    nome: "Saúde e Bem-Estar",
    descricaoCidada: "Hospitais, medicamentos, programas de saúde e escalas",
    icone: "Heart",
    destaque: false,
    metricaValor: "R$ 5,2 bi",
    metricaRotulo: "orçamento em saúde",
    tema: {
      iconBg: "bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-500/25",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      borderColor: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
    },
  },
  {
    slug: "pessoal",
    nome: "Pessoal",
    descricaoCidada: "Servidores, cargos, remunerações, proventos e quadro funcional",
    icone: "UserCheck",
    destaque: false,
    metricaValor: "138 mil",
    metricaRotulo: "vínculos de servidores",
    tema: {
      iconBg: "bg-blue-500/15 dark:bg-blue-500/20 border border-blue-500/25",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    },
  },
  {
    slug: "seguranca",
    nome: "Segurança Pública",
    descricaoCidada: "Polícia, bombeiros, defesa civil e viaturas",
    icone: "Shield",
    destaque: false,
    metricaValor: "R$ 2,8 bi",
    metricaRotulo: "segurança e defesa",
    tema: {
      iconBg: "bg-red-500/15 dark:bg-red-500/20 border border-red-500/25",
      iconColor: "text-red-600 dark:text-red-400",
      borderColor: "hover:border-red-500/50 hover:shadow-red-500/10",
    },
  },
  {
    slug: "habitacao",
    nome: "Habitação e Cidade",
    descricaoCidada: "Programas habitacionais e regularização fundiária",
    icone: "Home",
    destaque: false,
    metricaValor: "85 mil",
    metricaRotulo: "famílias e títulos",
    tema: {
      iconBg: "bg-amber-500/15 dark:bg-amber-500/20 border border-amber-500/25",
      iconColor: "text-amber-600 dark:text-amber-400",
      borderColor: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    },
  },
  {
    slug: "programas-sociais",
    nome: "Programas Sociais",
    descricaoCidada: "Maranhão Livre da Fome, auxílios e benefícios",
    icone: "HandHeart",
    destaque: false,
    metricaValor: "1,2 mi",
    metricaRotulo: "beneficiários ativos",
    tema: {
      iconBg: "bg-pink-500/15 dark:bg-pink-500/20 border border-pink-500/25",
      iconColor: "text-pink-600 dark:text-pink-400",
      borderColor: "hover:border-pink-500/50 hover:shadow-pink-500/10",
    },
  },
  {
    slug: "obras",
    nome: "Obras e Infraestrutura",
    descricaoCidada: "Mapa de obras, status, fotos, valores e prazos",
    icone: "Hammer",
    destaque: false,
    metricaValor: "1.420",
    metricaRotulo: "obras mapeadas",
    tema: {
      iconBg: "bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/25",
      iconColor: "text-orange-600 dark:text-orange-400",
      borderColor: "hover:border-orange-500/50 hover:shadow-orange-500/10",
    },
  },
  {
    slug: "emendas-parlamentares",
    nome: "Emendas Parlamentares",
    descricaoCidada: "Recursos indicados por deputados, destinação municipal e repasses",
    icone: "Landmark",
    destaque: false,
    metricaValor: "R$ 840 mi",
    metricaRotulo: "repasses indicados",
    tema: {
      iconBg: "bg-indigo-500/15 dark:bg-indigo-500/20 border border-indigo-500/25",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      borderColor: "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
    },
  },
  {
    slug: "meio-ambiente",
    nome: "Meio Ambiente",
    descricaoCidada: "SEMA, recursos hídricos, fiscalização e áreas protegidas",
    icone: "Leaf",
    destaque: false,
    metricaValor: "217",
    metricaRotulo: "municípios monitorados",
    tema: {
      iconBg: "bg-teal-500/15 dark:bg-teal-500/20 border border-teal-500/25",
      iconColor: "text-teal-600 dark:text-teal-400",
      borderColor: "hover:border-teal-500/50 hover:shadow-teal-500/10",
    },
  },
]
