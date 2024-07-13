export interface Component {
  /**@title Data */
  data: string;
  /**@title Descrição */
  description: string;
}

export interface Props {
  /**@title Título da Seção */
  title: string;
  /**@title Componentes do Sistema */
  components: Component[];
}

export default function Section({
  title = "Past Incidents",
  components = [
    {
      data: "10, jul, 2024",
      description: "This is a description",
    },
    {
      data: "10, jul, 2024",
      description: "This is a description",
    },
    {
      data: "10, jul, 2024",
      description: "This is a description",
    },
  ],
}: Props) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {components.map(component => (
        <div className="py-2 flex flex-col gap-2">
          <p className=" font-bold py-2 border-b last:border-b-0">{component.data}</p>
          <span>{component.description}</span>
        </div>
      ))}
    </div>
  )
}