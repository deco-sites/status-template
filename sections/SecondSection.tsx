type Status = "ok" | "warning" | "error";
export interface Props {
  /**@title Titulo*/
  title: string;
  /**@title Subtitulo*/
  subtitle: string;
  /**@title Status*/
  status: Status;
}

const okIcon = (
  <svg class="w-5 h-5 flex-none text-green-600" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6929 0.209376C13.9915 0.496471 14.0008 0.971254 13.7137 1.26983L4.57909 10.7698C4.43471 10.92 4.23438 11.0033 4.0261 10.9999C3.81782 10.9965 3.62035 10.9066 3.481 10.7517L0.192536 7.09788C-0.0845584 6.79 -0.0595997 6.31578 0.248283 6.03868C0.556165 5.76159 1.03038 5.78655 1.30748 6.09443L4.05662 9.14904L12.6325 0.230169C12.9196 -0.0684094 13.3943 -0.0777188 13.6929 0.209376Z" fill="#17AB2E" />
  </svg>
);

const warningIcon = (
  <svg class="w-5 h-5 flex-none text-yellow-600" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13422 2.19165C8.67333 1.27161 7.36032 1.27141 6.89915 2.19124L6.89914 2.19125L1.63614 12.6883L0.965694 12.3521L1.63614 12.6883C1.2194 13.5194 1.82373 14.4985 2.75356 14.4985H13.2748C14.2044 14.4985 14.8087 13.5198 14.3924 12.6887L14.3924 12.6887L9.13423 2.19166L9.13422 2.19165ZM5.55824 1.51894C6.57287 -0.504757 9.46145 -0.504181 10.4754 1.51983L10.4754 1.51984L15.7336 12.0169L15.7336 12.0169C16.6495 13.8454 15.32 15.9985 13.2748 15.9985H2.75356C0.707937 15.9985 -0.621611 13.8446 0.295244 12.016L5.55824 1.51895L5.55824 1.51894ZM8.01342 4.99851C8.56571 4.99851 9.01342 5.44623 9.01342 5.99851V7.99851C9.01342 8.5508 8.56571 8.99851 8.01342 8.99851C7.46114 8.99851 7.01342 8.5508 7.01342 7.99851V5.99851C7.01342 5.44623 7.46114 4.99851 8.01342 4.99851ZM9.01342 11.9985C9.01342 12.5508 8.56571 12.9985 8.01342 12.9985C7.46114 12.9985 7.01342 12.5508 7.01342 11.9985C7.01342 11.4462 7.46114 10.9985 8.01342 10.9985C8.56571 10.9985 9.01342 11.4462 9.01342 11.9985Z" fill="currentColor"></path>
  </svg>
);

const errorIcon = (
  <svg class="w-5 h-5 flex-none text-red-600" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13422 2.19165C8.67333 1.27161 7.36032 1.27141 6.89915 2.19124L6.89914 2.19125L1.63614 12.6883L0.965694 12.3521L1.63614 12.6883C1.2194 13.5194 1.82373 14.4985 2.75356 14.4985H13.2748C14.2044 14.4985 14.8087 13.5198 14.3924 12.6887L14.3924 12.6887L9.13423 2.19166L9.13422 2.19165ZM5.55824 1.51894C6.57287 -0.504757 9.46145 -0.504181 10.4754 1.51983L10.4754 1.51984L15.7336 12.0169L15.7336 12.0169C16.6495 13.8454 15.32 15.9985 13.2748 15.9985H2.75356C0.707937 15.9985 -0.621611 13.8446 0.295244 12.016L5.55824 1.51895L5.55824 1.51894ZM8.01342 4.99851C8.56571 4.99851 9.01342 5.44623 9.01342 5.99851V7.99851C9.01342 8.5508 8.56571 8.99851 8.01342 8.99851C7.46114 8.99851 7.01342 8.5508 7.01342 7.99851V5.99851C7.01342 5.44623 7.46114 4.99851 8.01342 4.99851ZM9.01342 11.9985C9.01342 12.5508 8.56571 12.9985 8.01342 12.9985C7.46114 12.9985 7.01342 12.5508 7.01342 11.9985C7.01342 11.4462 7.46114 10.9985 8.01342 10.9985C8.56571 10.9985 9.01342 11.4462 9.01342 11.9985Z" fill="currentColor"></path>
  </svg>
);

export default function Section({ title, subtitle, status = "ok" }: Props) {
  const gradientFrom = status === "ok" ? "from-green-200" : status === "warning" ? "from-yellow-200" : "from-red-200";
  const gradientTo = status === "ok" ? "from-green-200" : status === "warning" ? "from-yellow-200" : "from-red-200";
  const statusIcom = status === "ok" ? okIcon : status === "warning" ? warningIcon : errorIcon;

  return (
    <div className="w-full space-y-2 flex justify-center items-center flex-col border border-gray-200 rounded">
      <div className={`w-full p-5 flex items-center gap-2 bg-gradient-to-r ${gradientFrom} from-10% ${gradientTo} to-90%`}>
        {statusIcom}
        <h2 className="text-2xl">{title}</h2>
      </div>
      <div className="w-full flex px-2 py-3 items-center">
        <p>{subtitle}</p>
      </div>
    </div>
  )
}