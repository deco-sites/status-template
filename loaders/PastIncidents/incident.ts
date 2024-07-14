// deno-lint-ignore-file no-explicit-any
import { BlogPost } from "apps/blog/types.ts";
import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";
import { getContent } from "site/loaders/IncidentPage/incident.ts";

interface Props {
  /**@title Endpoint da API da Incident que retorna as informações */
  url: string;
}

export default async function loader({ url = "https://status.rdstation.com/proxy/status.rdstation.com" }: Props): Promise<BlogPost[]> {
  const monthStart = moment().startOf("month").toISOString(true);
  const monthEnd = moment().endOf("month").toISOString(true);
  const newUrl = `${url}/incidents?start_at=${monthStart}&end_at=${monthEnd}`;
  const response = await fetch(newUrl);
  const data = await response.json<any>();

  const posts: BlogPost[] = data.incidents.map((incident: any) => {
    const name = incident.name;
    const id = incident.id;
    const date = moment(incident.published_at).toDate();
    const message = incident.updates[incident.updates.length - 1].message_string;
    const hasDots = message.length > 500;
    const excerpt = hasDots ? message.substring(0, 500) + "..." : message;
    return {
      title: name,
      excerpt: excerpt,
      authors: [],
      categories: [],
      date: date.toISOString(),
      slug: id,
      content: getContent(incident),
    };
  });
  return posts;
}
