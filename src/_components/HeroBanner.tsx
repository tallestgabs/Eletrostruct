import Image from "next/image";
import heroBanner from "~/assets/hero-banner.jpg";

export function HeroBanner() {
  return (
    <section className="w-full">
      <Image
        src={heroBanner}
        alt="Banner Eletrostruct"
        className="h-auto w-full object-cover"
      />
    </section>
  );
}
