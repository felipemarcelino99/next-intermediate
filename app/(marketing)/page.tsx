import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import peopleImg from "@/public/people.png";

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="font-display mx-auto w-xl text-5xl font-black">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <Link href="/vagas">
        <Button className="mt-12 cursor-pointer" variant={"outline"}>
          Busque Uma Vaga
        </Button>
      </Link>
      <Image
        src={peopleImg}
        alt="Ilustração de pessoas"
        className="mx-auto mt-12"
      />
    </section>
  );
}
