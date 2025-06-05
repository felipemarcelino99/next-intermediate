import Image from "next/image";
import maintenanceImg from "./maintenance.svg";

export default function ManutencaoPage() {
  return (
    <div className="w-full space-y-12 text-center">
      <p className="text-4xl font-light">Website em manutenção!</p>
      <a
        href="https://storyset.com/work"
        title=" Work illustrations by Storyset"
        className="mx-auto block max-w-120"
      >
        <Image src={maintenanceImg} alt="Imagem de manutenção" />
      </a>
      <p className="text-2xl font-thin text-gray-600">
        Estamos realizando a manutenção no momento, por favor, volte mais tarde!
      </p>
    </div>
  );
}
