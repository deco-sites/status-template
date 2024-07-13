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
}

export default function Section(props: Props) {
  if (props.link) {
    return (
      <header className="py-4">
        <a href={props.link} target={props.openInNewTab ? "_blank" : "_self"}>
          <img src={props.url} alt={props.altText} />
        </a>
      </header>
    );
  }
  return (
    <header className="py-4">
      <img src={props.url} alt={props.altText} />
    </header>
  );
}
