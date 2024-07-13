import { BlogPost } from "apps/blog/types.ts";

export interface Props {
  /**@title Título da Seção */
  title: string;
  /**@title Blog com os incidentes */
  components: BlogPost[];
}

export default function Section({ title = "Past Incidents", components = [] }: Props) {
  const dateFormater = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {components.map((component) => (
        <a href={`/incidents/${component.slug}`} className="py-2 flex flex-col gap-2 cursor-pointer">
          <h3 className="font-bold border-b last:border-b-0 py-2">{component.title}</h3>
          <p className=" font-bold ">{dateFormater(component.date)}</p>
          <span>{component.excerpt}</span>
        </a>
      ))}
    </div>
  );
}
