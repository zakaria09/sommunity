import Image from "next/image";
import logo from '@/public/sommunity-logo.jpg'

export default function Home() {
  return (
    <section className="overflow-hidden">
      <div className="h-screen">
        <div className="flex justify-center h-full">
          <div className="bg-white px-6 py-8 self-center rounded-lg shadow-md">
            <div className="flex gap-0 md:gap-4">
              <h1 className="text-2xl font-bold self-center">
                Welcome to the Sommunity
              </h1>
              <div className="w-18">
                <Image
                  className="h-full w-full"
                  src={logo}
                  alt="Sommunity logo"
                />
              </div>
            </div>
            <div className="my-3">
              <div className="font-(family-name:--new-roman)">
                <h2 className="text-xl font-semibold text-slate-950">
                  Sommunity
                </h2>
                <p className="text-lg font-medium leading-loose text-slate-800 mb-1">
                  [Som-m-unity] noun.
                </p>
                <div className=" max-w-72 border-t-1 border-slate-700 border-solid"></div>
                <p className="italic max-w-72 mt-1 font-medium">
                  A strong Somali community that builds the next generation
                  whilst supporting the previous generation of Somali's living
                  in Leeds and West Yorkshire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
