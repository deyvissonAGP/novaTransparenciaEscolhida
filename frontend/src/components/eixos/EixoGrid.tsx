import { EIXOS } from "@/data/eixos"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import {
  Users,
  Heart,
  GraduationCap,
  Shield,
  Home,
  HandHeart,
  Hammer,
  Drama,
  Leaf,
  UserCheck,
  Landmark,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

const ICONS: Record<string, LucideIcon> = {
  Users,
  Heart,
  GraduationCap,
  Shield,
  Home,
  HandHeart,
  Hammer,
  Drama,
  Leaf,
  UserCheck,
  Landmark,
}

/**
 * Grid de 9 eixos temáticos.
 * Visual moderno, limpo (clean) e minimalista com ícones estilizados e navegação direta.
 */
export function EixoGrid() {
  return (
    <section
      aria-labelledby="eixos-titulo"
      className="container-page px-4 py-10"
    >
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <div>
          <h2 id="eixos-titulo" className="text-xl font-bold tracking-tight md:text-2xl">
            Por onde começar
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            9 eixos da vida do cidadão. Sem jargão. Em até 3 toques.
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {EIXOS.map((eixo) => {
          const Icon = ICONS[eixo.icone] ?? Users
          return (
            <li key={eixo.slug}>
              <Link
                to={`/eixo/${eixo.slug}`}
                className={cn(
                  "group relative flex h-full flex-col justify-between rounded-2xl border p-5 sm:p-6",
                  "bg-[#FBFBFA] dark:bg-card/95 border-border/80 shadow-sm",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-1 hover:shadow-md hover:bg-card",
                  eixo.tema.borderColor
                )}
                aria-label={`Acessar eixo ${eixo.nome}`}
              >
                {/* Linha Superior: Ícone no estilo suave/accent + Seta de ação no canto direito */}
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105",
                      eixo.tema.iconBg,
                      eixo.tema.iconColor
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </div>

                  <ArrowRight
                    className="size-5 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>

                {/* Conteúdo Inferior: Título em destaque + Descrição simples */}
                <div className="mt-5">
                  <h3 className="font-sans text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
                    {eixo.nome}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {eixo.descricaoCidada}
                  </p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
