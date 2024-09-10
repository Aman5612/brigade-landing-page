import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronRightIcon } from "lucide-react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Clock } from "lucide-react";
import { Linkedin, Instagram, Youtube, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function LandingPage() {
  const events = [
    {
      date: "7th June",
      title:
        "Ignite Your Urban Tech Startup's Success with REAP's Accelerator Programme!",
      image: "/assets/images/rect-10.svg",
    },
    {
      date: "10th June",
      title: "Join us to learn more about AI in real estate",
      image: "/assets/images/rect-11.svg",
    },
    {
      date: "10th June",
      title: "Join us to learn more about AI in real estate",
      image: "/assets/images/rect-12.svg",
    },
    {
      date: "7th June",
      title:
        "Ignite Your Urban Tech Startup's Success with REAP's Accelerator Programme!",
      image: "/assets/images/rect-13.svg",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <header className="container px-4 py-6 min-w-[100vw]">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg"
              alt="REAP Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <div className="hidden md:flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                HOME
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                PORTFOLIO
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                JOBS
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                INVESTORS
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                COMMUNITY
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                NEWS
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100">
              SIGN UP
            </button>
            <button className="px-4 py-2 text-white bg-yellow-400 rounded hover:bg-yellow-500">
              APPLY NOW
            </button>
          </div>
        </nav>
      </header>

      <main className="container px-4 py-12 min-w-[100vw]">
        <div className="grid md:grid-cols-2 gap-8 items-center ml-[49px] mr-[119px] p-0">
          <div className="w-full flex flex-col gap-[24px]">
            <h1 className="text-[64px] md:text-5xl font-semibold w-[1112px]">
              Creating the World&apos;s Largest Early Stage Startup{" "}
              <span className="text-yellow-400">Ecosystem</span>
            </h1>
            <div className="flex flex-col gap-[15px] w-[411px]">
              <p className="text-[24px] text-gray-600 font-semibold">
                Building the future. Restoring the past
              </p>
              <p className="text-[#706F6F]">
                Building a business is a team sport. As investors, we don&apos;t
                just put money in startups but do whatever it takes to help our
                teams win.
              </p>
            </div>
            <div className="flex gap-[18px] w-[417px] justify-between">
              <div>
                <p className="text-[32px] font-bold">220</p>
                <p className="text-gray-600 text-[24px]">Awards</p>
              </div>
              <div>
                <p className="text-[32px] font-bold">350</p>
                <p className="text-gray-600 text-[24px]">Incubated</p>
              </div>
              <div>
                <p className="text-[32px] font-bold">12k</p>
                <p className="text-[#706F6F] text-[24px]">Happy Customers</p>
              </div>
            </div>
            <div className="relative px-10 py-4 rounded-[8px] border-[#508D3A] border-[1px] bg-[#F8F8F7]">
              <input
                type="text"
                placeholder="Search for any service"
                className="w-full placeholder:text-[#706F6F] placeholder:text-[20px] bg-[#F8F8F7] rounded-md focus:outline-none"
              />
              <button className="absolute right-[40px] top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-yellow-400 rounded-[28px] p-8 w-[548px] h-[337px] absolute top-[220px] right-[86px]">
            <h2 className="text-[32px] font-bold mb-2">Urban Tech</h2>
            <p className="mb-4 text-[16px]">
              Urban Tech, short for{" "}
              <span className="font-bold text-white">Urban Technology</span>
              <br /> refers to the innovative
              <span className=" text-white"> application of</span>
              <br />
              advanced technologies{" "}
              <span className=" text-white">to address and</span> <br />
              enhance various aspects{" "}
              <span className=" text-white">of urban living ands</span>
              <br /> infrastructure.
            </p>
            <Link
              href="#"
              className="text-black font-semibold flex items-center"
            >
              Know more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Image
                src="/placeholder.svg"
            //   src="/assets/images/building.svg"
              alt="Urban Tech"
              width={320}
              height={372}
            //   className="mt-4 rounded-lg absolute top-[-40px] right-[15px]"
            />
          </div>
        </div>
      </main>

      <div className="container min-w-[100vw] px-4 py-8">
        <div className="flex justify-between items-center mb-6 ml-10 mr-14.5 border-b-[0.5px] border-[#000000]">
          <h2 className="text-[48px] text-[#404040] font-serif border-b-4 rounded-none border-[#FFC10E] z-10">
            Featured News
          </h2>
          <Link
            href="/news"
            className="text-black hover:text-orange-600 flex items-center"
          >
            View all
            <ChevronRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="flex  mx-[40px] gap-6">
          <div className="md:col-span-2 w-[510px]">
            <Image
              //   src="/placeholder.svg?height=400&width=800"
              src="/assets/images/rectangle.svg"
              alt="Futuristic cityscape"
              width={494}
              height={219}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              What to expect from Apple&apos;s AI-powered iOS 18 at WWDC 2024
            </h3>
            <p className="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-sm text-gray-500">
              <span>Ajay Sharma</span>
              <span className="mx-2">•</span>
              <span>11th June - 5 min read</span>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Image
                  // src="/placeholder.svg?height=100&width=100"
                  src="/assets/images/small-rect-1.svg"
                  alt="Article thumbnail"
                  width={145}
                  height={140}
                  className="rounded-lg"
                />
                <div className="w-[204px]">
                  <h4 className="font-bold mb-1">
                    What to expect from Apple&apos;s AI-powered iOS 18 at WWDC
                    2024
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do...
                  </p>
                  <div className="text-xs text-gray-500">
                    <span>Ajay Sharma</span>
                    <span className="mx-2">•</span>
                    <span>11th June - 5 min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[20px]">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Image
                  // src="/placeholder.svg?height=100&width=100"
                  src="/assets/images/very-small-rect-1.svg"
                  alt="Article thumbnail"
                  width={105}
                  height={109}
                  className="rounded-lg"
                />
                <div className="w-[204px]">
                  <h4 className="font-bold mb-1">
                    What to expect from Apple&apos;s
                  </h4>
                  <div className="text-xs text-gray-500">
                    <span>Ajay Sharma</span>
                    <span className="mx-2">•</span>
                    <span>11th June - 5 min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-6xl min-w-[100vw] px-4 py-12 bg-[#F5F5EF] pl-[61px] pr-[92px]">
        <div className="flex justify-between items-start mb-8 relative">
          <div className="w-full flex gap-[86px]">
            <h2 className="text-4xl font-bold flex items-center gap-2 mb-4">
              <ArrowDown className="w-10 h-10 text-yellow-400 inline-block mr-2" />
              <span className="inline-block">Our Portfolio</span>
            </h2>
            <p className="text-[24px] text-[#404040]">
              BrigadeREAP&apos;s exponential growth has been driven by
              partnering with generational companies to transform market
              segments across the country.
            </p>
          </div>
          <a
            href="#"
            className="text-black hover:text-blue-800 flex items-center absolute right-[42px] bottom-0"
          >
            View all
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Image
            // src="/placeholder.svg?height=80&width=200"
            src="/assets/images/rect-1.svg"
            alt="Aegeus"
            width={226}
            height={107}
            className="object-contain"
          />
          <Image
            // src="/placeholder.svg?height=80&width=200"
            src="/assets/images/rect-2.svg"
            alt="Birds Eye Energy"
            width={226}
            height={107}
            className="object-contain"
          />
          <Image
            // src="/placeholder.svg?height=80&width=200"
            src="/assets/images/rect-3.svg"
            alt="WEGOT"
            width={226}
            height={107}
            className="object-contain"
          />
          <Image
            // src="/placeholder.svg?height=80&width=200"
            src="/assets/images/rect-4.svg"
            alt="Natura"
            width={226}
            height={107}
            className="object-contain"
          />
          <Image
            // src="/placeholder.svg?height=80&width=200"
            src="/assets/images/rect-5.svg"
            alt="Potholeraja"
            width={226}
            height={107}
            className="object-contain"
          />
          <Image
            // src="/placeholder.svg?height=80&width=200"
            src="/assets/images/rect-6.svg"
            alt="Troncart"
            width={226}
            height={107}
            className="object-contain"
          />
          <Image
            // src="/placeholder.svg?height=80&width=200"
            src="/assets/images/rect-7.svg"
            alt="ECOSTP"
            width={226}
            height={107}
            className="object-contain"
          />
          <Image
            // src="/placeholder.svg?height=80&width=200"
            src="/assets/images/rect-8.svg"
            alt="Smarter Dharma"
            width={226}
            height={107}
            className="object-contain"
          />
        </div>
      </section>

      <div className="max-w-4xl min-w-[100vw] p-6 space-y-8">
        <section className="space-y-4 mx-[83px]">
          <h2 className="text-[48px] font-bold flex items-center">
            Who We Are
            <span className="text-yellow-400 ml-1">?</span>
          </h2>
          <p className="text-[#404040] text-[24px]">
            Innovating the Future of Real Estate, proudly a part of Brigade
          </p>
          <p className="text-gray-600 text-[20px]">
            Group. Brigade Group is a leading property developer in South India,
            renowned for its exceptional residential, commercial, hospitality,
            retail, and foundation projects. With a diverse portfolio spanning
            property development, property management services, hospitality, and
            education, Brigade Group is committed to delivering excellence in
            every endeavor.
          </p>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="flex items-center justify-center w-[192] h-[47px]">
                <span className="text-[64px] font-bold">$112m</span>
              </div>
              <p className="text-sm text-gray-500">Committed Capital</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-[64px] font-bold">$1.2b</span>
              </div>
              <p className="text-sm text-gray-500">
                Raised seed series Portfolio
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-[64px] font-bold">3</span>
              </div>
              <p className="text-sm text-gray-500">Unicorns</p>
            </div>
          </div>
        </section>

        <section className="space-y-4 ml-[58px] mr-[46px] border-b-1 border-[#000000]">
          <h2 className="text-[48px] font-bold border-b-[4px] border-[#FFC10E] w-[882px]">
            Connect with the Proptech Community
          </h2>
          <p className="text-[#404040] text-[28px]">
            Discover the latest events, conferences, and meetups in the proptech
            industry
          </p>
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex ">
            <Image
              //   src="/placeholder.svg?height=200&width=400"
              src="/assets/images/rect-9.svg"
              alt="BrigadeREAP Disrupt 2024 event"
              width={625}
              height={308}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                BrigadeREAP Disrupt 2024
              </h3>
              <p className="text-gray-600 mt-2">
                Disrupt is where you&apos;ll find innovation for every stage of
                your startup journey. Whether you&apos;re a budding founder with
                a revolutionary idea, a seasoned startup looking to scale, or an
                investor seeking the next big disrupt - this event offers
                unparalleled resources, connections, and expert insights to
                propel your venture forward.
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="bg-yellow-400 text-white px-4 py-2 rounded-md flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-md">
                  Get Tickets
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-[32px] font-medium mb-4">Upcoming Events</h2>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 gap-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg ${
                    index === 3 ? "col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    height={247}
                    width={
                      index === 3
                        ? 687
                        : index === 2
                        ? 430
                        : index === 1
                        ? 489
                        : index === 0
                        ? 687
                        : 739
                    }
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
                    <div className="text-white">
                      <p className="font-bold">{event.date}</p>
                      <p className="text-sm mt-1">{event.title}</p>
                    </div>
                    <Button className="self-start bg-yellow-500 hover:bg-yellow-600 text-black">
                      Join event
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <h2 className="text-[48px] border-b-[4px] font-bold mb-4 border-[#FFC10E] w-[580px]">
            Find your next opportunity
          </h2>
          <p className="text-[#928F8Fs] mb-4 text-[24px]">
            Search through our comprehensive job listings and discover your
            dream role
          </p>
          <div className="flex justify-between items-center mb-4 absolute right-0 top-[20px]">
            <div className="flex-1" />
            <Button variant="outline" className="flex items-center gap-2">
              View all <Clock className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((_, index) => (
              <Card key={index}>
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">NT</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Natura Technologies</h3>
                      <p className="text-sm text-gray-600">11 - 50 employees</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    LayLine is a marketplace facilitated by a 3D genAI empowered
                    tool nurturing remote collaboration arno
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                      ACTIVELY HIRING
                    </span>
                    <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">
                      GROWING FAST
                    </span>
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                      RECENTLY FUNDED
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      3 Open positions
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[48px] font-serif border-b-[4px] border-[#FFC10E]">
              Awards & <span className="text-yellow-400">Recognitions</span>
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <Image
                    // src="/placeholder.svg?height=150&width=300"
                    src="/assets/images/rect-14.svg"
                    alt={`Trench talk on Tuesday #${i}`}
                    className="w-full h-auto mb-2"
                    height={215}
                    width={378}
                  />
                  <h3 className="font-bold mb-1">
                    Trench talk on Tuesday #{i}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Brigade REAP joins hands with CRE. This partnership will be
                    nurtured jointly by CRE and Brigade REAP
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-serif">
              More from BrigadeREAP Community
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-gray-900 text-white">
                <CardContent className="p-4">
                  <Image
                    // src="/placeholder.svg?height=150&width=300"
                    src="/assets/images/rect-16.svg"
                    alt="Community member"
                    className="w-full h-auto mb-2 rounded-full"
                    height={300}
                    width={300}
                  />
                  <p className="text-sm mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p className="font-bold">Kavya Sharma</p>
                  <p className="text-xs">Head of Community at Brigade</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">Want to Learn More?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Launch at BrigadeREAP",
              "Newsletter",
              "Check latest news and blogs",
              "Search for jobs",
              "Co-founder matching",
              "Apply at BrigadeREAP",
            ].map((title, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex items-center gap-4">
                  <Image
                    // src="/placeholder.svg?height=50&width=50"
                    src="/assets/images/rect-17.svg"
                    alt={title}
                    className="w-12 h-12 object-cover rounded"
                    height={300}
                    width={300}
                  />
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-xs text-gray-600">
                      Discover new BR companies and products
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">
                BRIGADE<span className="text-yellow-500">REAP</span>
              </h2>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-yellow-500">
                HOME
              </a>
              <a href="#" className="hover:text-yellow-500">
                ACCELERATOR
              </a>
              <a href="#" className="hover:text-yellow-500">
                MARKET ACCESS
              </a>
              <a href="#" className="hover:text-yellow-500">
                INVESTMENTS
              </a>
              <a href="#" className="hover:text-yellow-500">
                ABOUT US
              </a>
              <a href="#" className="hover:text-yellow-500">
                CONTACT US
              </a>
            </nav>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-500">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Input
                type="email"
                placeholder="Signup for newsletter"
                className="bg-gray-800 border-gray-700 text-gray-300 mr-2"
              />
              <Button
                variant="outline"
                size="icon"
                className="bg-yellow-500 hover:bg-yellow-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              className="bg-transparent border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
            >
              DOWNLOAD BROCHURE
            </Button>
          </div>
          <div className="text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-2 md:mb-0">
              <span className="mr-4">DISCLAIMER</span>
              <span className="mr-4">PRIVACY POLICIES</span>
              <span>SITE MAP</span>
            </div>
            <div>
              © 2023 ALL RIGHTS RESERVED BY BRIGADE REAP. THE CONTENT ON THIS
              WEBSITE IS THE EXCLUSIVE PROPERTY OF BRIGADE REAP.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
