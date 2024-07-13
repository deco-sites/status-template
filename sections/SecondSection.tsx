export interface Props {
  // *@title* title
  title: string;
  // *@subtitle* title
  subtitle: string;
}

export default function Post({ title, subtitle }: Props) {
//cor manipulavel pelo admin de acordo com o nivel do status ou feature
  return (
    <div class="w-full space-y-2 flex justify-center items-center flex-col border border-gray-200 rounded">
      <div class="w-full p-5 flex items-center gap-2 bg-gradient-to-r from-green-200 from-10% to-green-100 to-90%">
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6929 0.209376C13.9915 0.496471 14.0008 0.971254 13.7137 1.26983L4.57909 10.7698C4.43471 10.92 4.23438 11.0033 4.0261 10.9999C3.81782 10.9965 3.62035 10.9066 3.481 10.7517L0.192536 7.09788C-0.0845584 6.79 -0.0595997 6.31578 0.248283 6.03868C0.556165 5.76159 1.03038 5.78655 1.30748 6.09443L4.05662 9.14904L12.6325 0.230169C12.9196 -0.0684094 13.3943 -0.0777188 13.6929 0.209376Z" fill="#17AB2E" />
        </svg>
        <h2 class="">{title}</h2>
      </div>
      <div class="w-full flex px-2 py-3 items-center">
        <p>{subtitle}</p>
      </div>
    </div>
  )
}