// deno-lint-ignore-file no-explicit-any
import { BlogPostPage } from "apps/blog/types.ts";
import { RequestURLParam } from "apps/website/functions/requestToParam.ts";
import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";

interface Props {
  /**@title Endpoint da API da Incident que retorna as informações */
  url: string;
  /**@title Slug do incidente */
  slug: RequestURLParam;
}

function parseText(text: any) {
  let html = text.text;
  if (text.marks) {
    text.marks.forEach((mark: any) => {
      if (mark.type === "bold") {
        html = "<strong>" + html + "</strong>";
      } else if (mark.type === "italic") {
        html = "<em>" + html + "</em>";
      }
    });
  }
  return html;
}

function parseLineBreak() {
  return "<br>";
}

function parseParagraph(paragraph: any) {
  let text = "";
  paragraph.content.forEach((content: any) => {
    if (content.type === "text") {
      text += parseText(content);
    } else if (content.type === "lineBreak") {
      text += parseLineBreak();
    } else if (content.type === "paragraph") {
      text += parseParagraph(content);
    }
  });
  return "<p>" + text + "</p>";
}

function parseDocument(document: any) {
  let text = "";
  document.content.forEach((content: any) => {
    if (content.type === "paragraph") {
      text += parseParagraph(content);
    }
  });
  return text;
}

function parseStatus(status: any) {
  let text = "";
  if (status === "resolved") {
    text = "Resolvido";
  } else if (status === "monitoring") {
    text = "Monitoramento";
  } else if (status === "identified") {
    text = "Identificado";
  } else if (status === "investigating") {
    text = "Investigando";
  }
  return text;
}

export function getContent(incident: any) {
  const status = parseStatus(incident.status);
  const lastUpdate = incident.updates[incident.updates.length - 1];
  const othersUpdates = incident.updates.slice(0, incident.updates.length - 1).reverse();
  let text = `<h2>Ultima Atualização:</h2>`;
  text += "<p>Status Atual:" + status + "</p>";

  const parsedDate = moment(lastUpdate.published_at).format("DD/MM/YYYY HH:mm");
  text += "<p>Última Atualização: " + parsedDate + "</p>";
  text += parseDocument(lastUpdate.message);
  text += "<h2>Atualizações Anteriores:</h2>";
  const updates = othersUpdates.map((update: any) => {
    let localText = "";
    const parsedDate = moment(update.published_at).format("DD/MM/YYYY HH:mm");
    localText += `<p>Status: ${parseStatus(update.to_status)} - Atualização: ${parsedDate}</p>`;
    localText += parseDocument(update.message);
    return localText;
  });
  text += updates.join("<br><hr><br>");
  return text;
}

export default async function loader({ url = "https://status.rdstation.com/proxy/status.rdstation.com", slug = "01J2KPJ6EBA85HTWT55CDB3W8T" }: Props): Promise<BlogPostPage> {
  if (slug === ":slug") slug = "01J2KPJ6EBA85HTWT55CDB3W8T";
  const newUrl = `${url}/incidents/${slug}`;
  const response = await fetch(newUrl);
  const data = await response.json<any>();
  const incident = data.incident;
  const name = incident.name;
  const id = incident.id;
  const date = moment(incident.published_at).toDate();
  const message = incident.updates[incident.updates.length - 1].message_string;
  const hasDots = message.length > 500;
  const excerpt = hasDots ? message.substring(0, 500) + "..." : message;

  return {
    "@type": "BlogPostPage",
    post: {
      title: name,
      excerpt: excerpt,
      authors: [],
      categories: [],
      date: date.toISOString(),
      slug: id,
      content: getContent(incident),
    },
  };
}
