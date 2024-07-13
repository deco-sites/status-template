import { Section } from "deco/blocks/section.ts";

export interface Props {
  /**@title Máxima Largura */
  maxWidth?: "max-w-screen-sm" | "max-w-screen-md" | "max-w-screen-lg" | "max-w-screen-xl" | "max-w-screen-2xl";

  /**@title Seções */
  sections: Section[];
}

export default function Container({ maxWidth = "max-w-screen-xl", sections }: Props) {
  return (
    <div className={`container mx-auto px-4 flex flex-col gap-4 ${maxWidth}`} hx-boost="true" hx-target="section[data-manifest-key='site/sections/Container.tsx']" hx-swap="outerHTML" hx-select="section[data-manifest-key='site/sections/Container.tsx']" hx-indicator="true" hx-push-url="true">
      {sections.map(({ Component, props }, index) => (
        <Component key={index.toString()} {...props} />
      ))}
    </div>
  );
}
