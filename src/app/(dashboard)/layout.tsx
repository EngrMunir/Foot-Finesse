import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Foot Finesse",
  description: "It is an e-commerce website",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* left side */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32}/>
        <span className="hidden lg:block font-bold">Foot Finesse</span>
      </Link>
        <Link href="/admin" className="">
            <span className="hidden lg:block">Admin</span>
        </Link>
        <Link href="addShoe" className="">
            <span className="hidden lg:block">Add Shoe</span>
        </Link>
        <Link href="" className="allUser">
            <span className="hidden lg:block">All User</span>
        </Link>
    </div>
    {/* right side */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
      {children}
    </div>
  </div>
}