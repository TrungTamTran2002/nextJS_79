import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl text-red-700">
      <Image
        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
        alt="lat mat"
        width={500}
        height={500}
      />

    <Image src="/images/react-js-co-ban-phan-1-63738082145.3856.jpg" alt="lat mat" width={500} height={500} />
    </div>
  );
}
