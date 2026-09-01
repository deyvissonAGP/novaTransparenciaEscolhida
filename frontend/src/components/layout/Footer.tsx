import {  ExternalLink, Info } from "lucide-react"
import { Link } from "react-router-dom"
import { Logo } from "@/components/layout/Logo"

export function Footer() {
  return (
    <footer
      className="mt-12 border-t border-border bg-muted/40"
      role="contentinfo"
    >
      <div className="container-page px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Coluna 1: marca */}
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              O futuro Portal da Transparência do Maranhão. Construído para o
              cidadão, do celular para o desktop, sem jargão e em até 3 passos.
            </p>
          </div>

          {/* Coluna 2: equipe */}

          {/* Coluna 3: links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Fontes oficiais
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.transparencia.ma.gov.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  Portal da Transparência MA
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://dados.ma.gov.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  Portal de Dados Abertos MA
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Info className="size-3.5" aria-hidden="true" />
                  Sobre o Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer institucional */}
        <div className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            Este protótipo foi construído para o Hackathon da Transparência
            Maranhense 2026 (STC + SECTI + EGMA + FAPEMA). Os dados oficiais
            permanecem sob a guarda da Secretaria de Transparência e Controle
            do Estado do Maranhão. Esta nova versão é uma proposta de evolução do
            atual Portal da Transparência, mantendo o compliance Selo Diamante
            e aderente à LAI (Lei 12.527/2011), Lei de Transparência (LC
            131/2009), LGPD e e-MAG.
          </p>
        </div>
      </div>
    </footer>
  )
}
