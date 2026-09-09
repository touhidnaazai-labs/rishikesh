import Link from "next/link";
import type { Metadata } from "next";
import { BedDouble, Snowflake, Droplets, MapPin, PhoneCall } from "lucide-react";
import Hero from "@/components/Hero";
import BookingInquiryPanel from "@/components/BookingInquiryPanel";
import PropertyImage from "@/components/PropertyImage";
import Reveal, { RevealStagger, RevealStaggerItem } from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import FaqAccordion from "@/components/FaqAccordion";
import CountUp from "@/components/CountUp";
import ImageMarquee from "@/components/ImageMarquee";
import { BookStayButton, WhatsAppButton, CallButton } from "@/components/CtaButtons";
import { hotel } from "@/data/hotel";
import { rooms } from "@/data/rooms";
import { faqs } from "@/data/faq";
import { guideArticles } from "@/data/guide";
import { galleryImages } from "@/data/gallery";
import { FaqStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Hotel Chandreshwar — Your Comfortable Stay in Rishikesh",
  description:
    "Hotel Chandreshwar offers AC & Non-AC double-bed rooms with attached bathrooms and hot water in Chandreshwar Nagar, Rishikesh. Book directly by phone or WhatsApp.",
  alternates: { canonical: "/" },
};

const trustStats = [
  { value: 10, label: "Rooms" },
  { value: 7, label: "AC Rooms" },
  { value: 3, label: "Non-AC Rooms" },
];

const whyStay = [
  { title: "Comfortable Double-Bed Rooms", icon: BedDouble },
  { title: "AC & Non-AC Options", icon: Snowflake },
  { title: "Attached Bathrooms & Hot Water", icon: Droplets },
  { title: "Convenient Rishikesh Location", icon: MapPin },
  { title: "Direct Booking, No Middlemen", icon: PhoneCall },
];

export default function HomePage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />
      <Hero />

      {/* Hero booking panel — overlaps hero on desktop */}
      <section className="relative z-20 container-editorial -mt-10 md:-mt-14">
        <BookingInquiryPanel compact />
      </section>

      {/* Trust strip */}
      <section className="container-editorial py-16 md:py-24">
        <Reveal>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center border-y border-charcoal/10 py-10">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-4xl md:text-5xl text-terracotta">
                  <CountUp value={stat.value} />
                </dd>
                <dd className="mt-2 text-xs tracking-[0.2em] text-charcoal/60">{stat.label.toUpperCase()}</dd>
              </div>
            ))}
            <div>
              <dt className="sr-only">Booking</dt>
              <dd className="font-display text-4xl md:text-5xl text-terracotta">Direct</dd>
              <dd className="mt-2 text-xs tracking-[0.2em] text-charcoal/60">BOOKING</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* Introduction */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <PropertyImage
                src="/images/property/intro-1.jpg"
                alt="Introduction to Hotel Chandreshwar, Rishikesh"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs tracking-[0.25em] text-terracotta mb-4">ABOUT THE HOTEL</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">
              A Comfortable Base for Your Rishikesh Journey
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              Hotel Chandreshwar offers a straightforward and welcoming stay for
              travelers looking for comfortable accommodation in Rishikesh. With 10
              double-bed rooms, including 7 AC rooms and 3 Non-AC rooms, guests can
              choose according to their needs.
            </p>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              All rooms include attached bathrooms and hot water. The hotel is
              located in Chandreshwar Nagar, near Durga Mandir and Dayanand Ashram
              Road — a convenient base for exploring Rishikesh.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm tracking-wide text-charcoal border-b border-charcoal/40 pb-1 hover:border-terracotta hover:text-terracotta transition-colors"
            >
              Read Our Story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Living photo strip */}
      <section className="pb-24 md:pb-32">
        <ImageMarquee
          images={galleryImages.slice(0, 8).map((img) => ({ src: img.src, alt: img.alt }))}
        />
      </section>

      {/* Rooms */}
      <section className="bg-[#efe9dd] py-24 md:py-32">
        <div className="container-editorial">
          <Reveal className="max-w-2xl mb-16 md:mb-20">
            <p className="text-xs tracking-[0.25em] text-terracotta mb-4">ROOMS</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">
              Simple, Comfortable Rooms — AC or Non-AC
            </h2>
          </Reveal>
          <div className="space-y-20 md:space-y-28">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={0.1}>
                <RoomCard room={room} reverse={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why stay here */}
      <section id="why-stay" className="container-editorial py-24 md:py-32">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] text-terracotta mb-4">WHY STAY HERE</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">
            Simple Comfort. Convenient Location. Personal Hospitality.
          </h2>
        </Reveal>
        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-charcoal/10 border border-charcoal/10">
          {whyStay.map((item) => (
            <RevealStaggerItem
              key={item.title}
              hover
              className="relative bg-ivory p-8 flex flex-col gap-4 hover:shadow-lg hover:z-10 transition-shadow duration-300"
            >
              <item.icon className="size-6 text-terracotta" aria-hidden />
              <p className="text-sm text-charcoal leading-snug">{item.title}</p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </section>

      {/* Rishikesh editorial section */}
      <section className="relative bg-charcoal text-ivory py-24 md:py-32 overflow-hidden">
        <div className="container-editorial grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-terracotta mb-4">THE DESTINATION</p>
            <h2 className="font-display text-4xl md:text-5xl text-balance">Stay Close to Rishikesh</h2>
            <p className="mt-6 text-ivory/70 leading-relaxed">
              Rishikesh is a place people come to for many different reasons — to
              experience the Ganga, explore the ghats, spend time with family, visit
              spiritual destinations, or simply take a break from everyday life. Hotel
              Chandreshwar is set in Chandreshwar Nagar, near Durga Mandir and
              Dayanand Ashram Road, a short walk from the everyday rhythm of the
              town — a comfortable, practical base whichever of those journeys
              brings you here.
            </p>
            <p className="mt-4 text-ivory/60 text-sm leading-relaxed">
              Exact distances to specific ghats are being confirmed with the owner
              and will be published once verified — for now, see our{" "}
              <Link href="/location" className="underline hover:text-terracotta">
                location page
              </Link>{" "}
              for directions.
            </p>
            <Link
              href="/guide"
              className="mt-6 inline-block text-sm tracking-wide text-ivory border-b border-ivory/40 pb-1 hover:border-terracotta hover:text-terracotta transition-colors"
            >
              Explore the Rishikesh Guide
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <PropertyImage
                src="/images/property/location-1.svg"
                alt="Chandreshwar Nagar neighbourhood, Rishikesh"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Guide teaser */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] text-terracotta mb-4">RISHIKESH GUIDE</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">
            Planning Your Trip to Rishikesh
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {guideArticles.slice(0, 3).map((article) => (
            <Reveal key={article.slug}>
              <Link href={`/guide/${article.slug}`} className="group block">
                <p className="text-xs tracking-[0.2em] text-terracotta mb-3">GUIDE</p>
                <h3 className="font-display text-2xl text-charcoal group-hover:text-terracotta transition-colors">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">{article.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link
            href="/guide"
            className="inline-block text-sm tracking-wide text-charcoal border-b border-charcoal/40 pb-1 hover:border-terracotta hover:text-terracotta transition-colors"
          >
            View All Guides
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-[#efe9dd] py-24 md:py-32">
        <div className="container-editorial max-w-3xl">
          <Reveal className="mb-14">
            <p className="text-xs tracking-[0.25em] text-terracotta mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-editorial py-24 md:py-32 text-center">
        <Reveal className="max-w-xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">
            Ready for a Comfortable Stay in Rishikesh?
          </h2>
          <p className="mt-5 text-charcoal/70 leading-relaxed">
            Call, WhatsApp, or send a booking enquiry — {hotel.owner} and the Hotel
            Chandreshwar team will confirm availability and tariff directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <BookStayButton size="lg" />
            <WhatsAppButton variant="ghost" size="lg" />
            <CallButton variant="secondary" size="lg" className="!border-charcoal !text-charcoal hover:!bg-charcoal hover:!text-ivory" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
