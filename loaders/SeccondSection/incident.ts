import { StatusReponse } from "site/sections/SecondSection.tsx";

export interface Props {
  /**@title Endpoint da API da Incident que retorna as informações */
  url?: string;
}

export default async function loader({ url = "https://status.rdstation.com/proxy/status.rdstation.com" }: Props): Promise<StatusReponse> {
  const response = await fetch(url);
  // deno-lint-ignore no-explicit-any
  const data = await response.json<any>();
  const isOk = data.summary.ongoing_incidents.length === 0;
  if (isOk) {
    return {
      title: "Sistema estável",
      subtitle: "Não há incidentes em andamento",
      status: "ok",
    };
  }
  const lastIncident = data.summary.ongoing_incidents[0];
  const name = lastIncident.name as string;
  const isError = lastIncident.affected_components.some((component: { status: string }) => component.status === "full_outage");

  return {
    title: "Estamos enfrentando problemas no momento",
    subtitle: name,
    status: isError ? "error" : "warning",
  };
}
