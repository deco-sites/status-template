type Status = "ok" | "warning" | "error";

interface Component {
  /**@title  Nome do Componente */
  name: string;
  /**@title Descrição do Componente */
  description: string;
  /**@title Itens do Componente */
  status: Status;
  /**@title Itens do Componente */
  items: {
    /**@title Nome do Item */
    name: string;
    /**@title Descrição do Item */
    description: string;
    /**@title Status do Item */
    status: Status;
  }[];
}

export interface Props {
  /**@title Título da Seção */
  title: string;
  /**@title Componentes do Sistema */
  components: Component[];
}

/**@title Detalhes de Componentes do Sistema */
export default function Section({
  title = "System status",
  components = [
    {
      name: "Storefront",
      description: "This is a description",
      status: "ok",
      items: [
        {
          name: "Component 1",
          description: "This is a description",
          status: "ok",
        },
        {
          name: "Component 2",
          description: "This is a description",
          status: "warning",
        },
        {
          name: "Component 3",
          description: "This is a description",
          status: "error",
        },
      ],
    },
    {
      name: "Admin",
      description: "This is a description",
      status: "warning",
      items: [
        {
          name: "Component 1",
          description: "This is a description",
          status: "ok",
        },
        {
          name: "Component 2",
          description: "This is a description",
          status: "warning",
        },
        {
          name: "Component 3",
          description: "This is a description",
          status: "error",
        },
      ],
    },
    {
      name: "Checkout",
      description: "This is a description",
      status: "error",
      items: [
        {
          name: "Component 1",
          description: "This is a description",
          status: "ok",
        },
        {
          name: "Component 2",
          description: "This is a description",
          status: "warning",
        },
        {
          name: "Component 3",
          description: "This is a description",
          status: "error",
        },
      ],
    },
  ],
}: Props) {
  const warningIcon = (
    <svg class="w-4 h-4 flex-none text-yellow-600" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13422 2.19165C8.67333 1.27161 7.36032 1.27141 6.89915 2.19124L6.89914 2.19125L1.63614 12.6883L0.965694 12.3521L1.63614 12.6883C1.2194 13.5194 1.82373 14.4985 2.75356 14.4985H13.2748C14.2044 14.4985 14.8087 13.5198 14.3924 12.6887L14.3924 12.6887L9.13423 2.19166L9.13422 2.19165ZM5.55824 1.51894C6.57287 -0.504757 9.46145 -0.504181 10.4754 1.51983L10.4754 1.51984L15.7336 12.0169L15.7336 12.0169C16.6495 13.8454 15.32 15.9985 13.2748 15.9985H2.75356C0.707937 15.9985 -0.621611 13.8446 0.295244 12.016L5.55824 1.51895L5.55824 1.51894ZM8.01342 4.99851C8.56571 4.99851 9.01342 5.44623 9.01342 5.99851V7.99851C9.01342 8.5508 8.56571 8.99851 8.01342 8.99851C7.46114 8.99851 7.01342 8.5508 7.01342 7.99851V5.99851C7.01342 5.44623 7.46114 4.99851 8.01342 4.99851ZM9.01342 11.9985C9.01342 12.5508 8.56571 12.9985 8.01342 12.9985C7.46114 12.9985 7.01342 12.5508 7.01342 11.9985C7.01342 11.4462 7.46114 10.9985 8.01342 10.9985C8.56571 10.9985 9.01342 11.4462 9.01342 11.9985Z" fill="currentColor"></path>
    </svg>
  );
  const errorIcon = (
    <svg class="w-4 h-4 flex-none text-red-600" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13422 2.19165C8.67333 1.27161 7.36032 1.27141 6.89915 2.19124L6.89914 2.19125L1.63614 12.6883L0.965694 12.3521L1.63614 12.6883C1.2194 13.5194 1.82373 14.4985 2.75356 14.4985H13.2748C14.2044 14.4985 14.8087 13.5198 14.3924 12.6887L14.3924 12.6887L9.13423 2.19166L9.13422 2.19165ZM5.55824 1.51894C6.57287 -0.504757 9.46145 -0.504181 10.4754 1.51983L10.4754 1.51984L15.7336 12.0169L15.7336 12.0169C16.6495 13.8454 15.32 15.9985 13.2748 15.9985H2.75356C0.707937 15.9985 -0.621611 13.8446 0.295244 12.016L5.55824 1.51895L5.55824 1.51894ZM8.01342 4.99851C8.56571 4.99851 9.01342 5.44623 9.01342 5.99851V7.99851C9.01342 8.5508 8.56571 8.99851 8.01342 8.99851C7.46114 8.99851 7.01342 8.5508 7.01342 7.99851V5.99851C7.01342 5.44623 7.46114 4.99851 8.01342 4.99851ZM9.01342 11.9985C9.01342 12.5508 8.56571 12.9985 8.01342 12.9985C7.46114 12.9985 7.01342 12.5508 7.01342 11.9985C7.01342 11.4462 7.46114 10.9985 8.01342 10.9985C8.56571 10.9985 9.01342 11.4462 9.01342 11.9985Z" fill="currentColor"></path>
    </svg>
  );
  const okIcon = (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 -mr-0.5 text-green-600">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C6.27609 1.5 4.62279 2.18482 3.40381 3.40381C2.18482 4.62279 1.5 6.27609 1.5 8C1.5 8.85359 1.66813 9.69883 1.99478 10.4874C2.32144 11.2761 2.80022 11.9926 3.40381 12.5962C4.00739 13.1998 4.72394 13.6786 5.51256 14.0052C6.30117 14.3319 7.14641 14.5 8 14.5C8.85359 14.5 9.69883 14.3319 10.4874 14.0052C11.2761 13.6786 11.9926 13.1998 12.5962 12.5962C13.1998 11.9926 13.6786 11.2761 14.0052 10.4874C14.3319 9.69883 14.5 8.85359 14.5 8C14.5 6.27609 13.8152 4.62279 12.5962 3.40381C11.3772 2.18482 9.72391 1.5 8 1.5ZM2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 9.05058 15.7931 10.0909 15.391 11.0615C14.989 12.0321 14.3997 12.914 13.6569 13.6569C12.914 14.3997 12.0321 14.989 11.0615 15.391C10.0909 15.7931 9.05058 16 8 16C6.94943 16 5.90914 15.7931 4.93853 15.391C3.96793 14.989 3.08601 14.3997 2.34315 13.6569C1.60028 12.914 1.011 12.0321 0.608964 11.0615C0.206926 10.0909 0 9.05058 0 8C5.96046e-08 5.87827 0.842855 3.84344 2.34315 2.34315ZM10.947 5.85856C11.2399 6.15145 11.2399 6.62633 10.947 6.91922L7.72477 10.1414C7.43188 10.4343 6.95701 10.4343 6.66411 10.1414L5.053 8.53033C4.76011 8.23744 4.76011 7.76256 5.053 7.46967C5.3459 7.17678 5.82077 7.17678 6.11366 7.46967L7.19444 8.55045L9.88634 5.85856C10.1792 5.56567 10.6541 5.56567 10.947 5.85856Z" fill="currentColor"></path>
    </svg>
  );
  return (
    <div className="w-full border rounded">
      <h2 className="bg-gray-100 text-2xl p-4">{title}</h2>
      {components.map((component) => (
        <details className="border-b last:border-b-0">
          <summary className="font-bold text-base px-4 py-4 list-none flex gap-2 items-center cursor-pointer">
            {component.status === "warning" && warningIcon}
            {component.status === "error" && errorIcon}
            {component.status === "ok" && okIcon}
            <span className="text-black font-black">{component.name}</span>
            <div className="tooltip" data-tip={component.description}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
              </svg>
            </div>
            <span className="font-normal text-gray-600">{component.items.length} Componentes</span>
          </summary>
          <ul className="p-4 flex flex-col gap-4">
            {component.items.map((item) => (
              <li className="flex gap-2 items-center">
                {item.status === "warning" && warningIcon}
                {item.status === "error" && errorIcon}
                {item.status === "ok" && okIcon}
                {item.name}
                <div className="tooltip" data-tip={item.description}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
