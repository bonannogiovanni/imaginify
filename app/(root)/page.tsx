// import { Collection } from "@/components/shared/Collection"
// import { navLinks } from "@/constants"
// import { getAllImages } from "@/lib/actions/image.actions"
import { UserButton } from "@clerk/nextjs";
import { Divide } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const Home = async ({ searchParams }: SearchParamProps) => {
const Home = async () => {
  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Imaginify
        </h1>
      </section>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default Home;
