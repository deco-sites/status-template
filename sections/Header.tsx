import { ImageWidget } from "apps/admin/widgets.ts";

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
}

export default function Section(props: Props) {
  const reportProblemLink = props.reportLink ? (
    <a class="btn btn-secondary" hx-get={props.reportLink} hx-trigger="click" hx-target="section[data-manifest-key='site/sections/Container.tsx']" hx-swap="outerHTML" hx-select="section[data-manifest-key='site/sections/Container.tsx']" hx-indicator="true" hx-push-url="true">
      Reportar Problema
    </a>
  ) : null;

  const subscribeLink = props.subscribeLink ? (
    <a class="btn btn-primary" hx-get={props.subscribeLink} hx-trigger="click" hx-target="section[data-manifest-key='site/sections/Container.tsx']" hx-swap="outerHTML" hx-select="section[data-manifest-key='site/sections/Container.tsx']" hx-indicator="true" hx-push-url="true">
      Increva-se
    </a>
  ) : null;

  const image = props.link ? (
    <a href={props.link} target={props.openInNewTab ? "_blank" : "_self"}>
      <img src={props.url} alt={props.altText} />
    </a>
  ) : (
    <img src={props.url} alt={props.altText} />
  );

  return (
    <header className="py-4 flex justify-between">
      {image}
      <div class="flex gap-2">
        {reportProblemLink}
        {subscribeLink}
      </div>
    </header>
  );
}
