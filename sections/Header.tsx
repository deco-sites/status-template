import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**@title URL da Imagem */
  url: ImageWidget;

  /**@title Texto alternativo da Seção */
  altText: string;

  /**@title Link ao Clicar */
  link?: string;

  /**@title Abrir em Nova Aba */
  openInNewTab?: boolean;

  /**@title Link do Botão de Reportar */
  reportLink?: string;

  /**@title Link do Botão de Inscrever */
  subscribeLink?: string;

  /**@title Exibir Ir Home */
  showGoHome?: boolean;

  /**@title Home Path */
  homePath?: string;
}

export default function Section(props: Props) {
  const reportProblemLink = props.reportLink ? (
    <a class="btn bg-transparent hover:bg-secondary border-secondary" href={props.reportLink}>
      Reportar Problema
    </a>
  ) : null;

  const subscribeLink = props.subscribeLink ? (
    <a class="btn bg-transparent border-secondary hover:bg-primary hover:border-primary hover:text-white" href={props.subscribeLink}>
      Increva-se
    </a>
  ) : null;

  const image = props.link ? (
    <a href={props.link} target={props.openInNewTab ? "_blank" : "_self"}>
      <Image width={87} src={props.url} alt={props.altText} class="w-[87px]" sizes="(max-width: 640px) 100vw, 30vw" decoding="async" loading="lazy" />
    </a>
  ) : (
    <img src={props.url} alt={props.altText} />
  );

  const voltar =
    props.showGoHome && props.homePath ? (
      <a href={props.homePath} hx-boost="false" hx-push-url={props.homePath} className="btn bg-transparent border-secondary hover:bg-primary hover:border-primary hover:text-white mb-4 rounded-md">
        Ir para home
      </a>
    ) : null;

  return (
    <header className="py-4 flex justify-between items-center" hx-boost="true" hx-target="section[data-manifest-key='site/sections/Container.tsx']" hx-swap="outerHTML" hx-select="section[data-manifest-key='site/sections/Container.tsx']" hx-push-url="true">
      {image}
      <div class="flex gap-2">
        {voltar}
        {reportProblemLink}
        {subscribeLink}
      </div>
    </header>
  );
}
