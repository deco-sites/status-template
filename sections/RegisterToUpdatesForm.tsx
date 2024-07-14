import { SectionProps } from "deco/blocks/section.ts";
import { useSection } from "deco/hooks/useSection.ts";

export interface Props {
  /**@title URL do Firebase API */
  url: string;

  /** @title Descrição de Sucesso */
  successMessage: string;

  /** @title Descrição de Erro */
  errorMessage: string;

  /** @title Title do Formulário */
  formTitle: string;

  /** @title Descrição do Formulário */
  formDescription: string;
}

export async function loader(props: Props, req: Request) {
  const contentType = req.headers.get("content-type")?.toLowerCase() || "";
  if (!contentType.includes("application/x-www-form-urlencoded")) return { status: "SEND", formTitle: props.formTitle, formDescription: props.formDescription };
  const method = req.method.toLowerCase();
  if (method !== "post") return { status: "SEND", formTitle: props.formTitle, formDescription: props.formDescription };
  const email = (await req.formData()).get("email");
  if (!email) return { status: "SEND", formTitle: props.formTitle, formDescription: props.formDescription };
  const response = await fetch(props.url, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) return { status: "ERROR", errorMessage: props.errorMessage };
  return { status: "SUCCESS", successMessage: props.successMessage };
}

export default function Section(props: SectionProps<typeof loader>) {
  if (props.status === "SUCCESS") {
    return (
      <div className="alert alert-success">
        <div className="flex-1">
          <label className="text-xl">Sucesso</label> <br />
          <label>{props.successMessage}</label>
        </div>
      </div>
    );
  }

  if (props.status === "ERROR") {
    return (
      <div className="alert alert-error">
        <div className="flex-1">
          <label className="text-xl">Erro</label>
          <br />
          <label>{props.errorMessage}</label>
        </div>
      </div>
    );
  }

  return (
    <form id="sendForm" className="flex flex-col gap-4 group" hx-post={useSection<typeof Section>({ props })} hx-trigger="submit" hx-swap="outerHTML" hx-target="closest section" hx-indicator="#sendForm">
      <h2 className="text-2xl">{props.formTitle}</h2>
      <p>{props.formDescription}</p>
      <label class="form-control w-full group-[.htmx-request]:pointer-events-none">
        <div class="label pt-0">
          <span class="label-text">Qual é seu email?</span>
        </div>
        <input name="email" type="text" pattern="[^@]+@[^\.]+\..+" placeholder="Digite seu e-mail favorito aqui:" class="input input-bordered w-full focus:outline-none group-[.htmx-request]:pointer-events-none" />
      </label>
      <button class="btn btn-primary group-[.htmx-request]:btn-disabled group-[.htmx-request]:pointer-events-none">
        <span className="btnText group-[.htmx-request]:hidden">Increva-se</span>
        <span className="loading loading-spinner loading-xs hidden group-[.htmx-request]:block"></span>
      </button>
    </form>
  );
}
