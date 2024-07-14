// deno-lint-ignore-file no-explicit-any
import { Component } from "site/sections/StatusDetails.tsx";

interface Props {
  /**@title Endpoint da API da Incident que retorna as informações */
  url: string;
}

export default async function loader({ url = "https://status.rdstation.com/proxy/status.rdstation.com" }: Props): Promise<Component[]> {
  const response = await fetch(url);
  const data = await response.json<any>();
  const componentsAffected = data.summary.affected_components;
  console.log(data.summary.structure.items.length);
  const parsedData = data.summary.structure.items.map((item: any) => {
    const section = item.group || item.component;

    const name = section.name;
    const description = section.description;
    const sectionComponents = section.components || [];
    const items = sectionComponents.map((subComponent: any) => {
      const name = subComponent.name;
      const description = subComponent.description;
      const status = componentsAffected.find((component: any) => component.component_id === subComponent.component_id)?.status;
      const myStatus = status === "degraded_performance" ? "warning" : status === "full_outage" ? "error" : "ok";
      return {
        name: name,
        description: description,
        status: myStatus,
      };
    });
    const status = items.some((item: any) => item.status === "error") ? "error" : items.some((item: any) => item.status === "warning") ? "warning" : "ok";
    return {
      name: name,
      description: description,
      items: items,
      status,
    };
  });

  return parsedData;
}
