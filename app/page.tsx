import { SlidesDeck } from "@/components/slides-deck";
import { S01Hero } from "@/components/slides/s01-hero";
import { S02Problem } from "@/components/slides/s02-problem";
import { SCockpit } from "@/components/slides/s-cockpit";
import { SRadar } from "@/components/slides/s-radar";
import { S03Solution } from "@/components/slides/s03-solution";
import { S04HowItWorks } from "@/components/slides/s04-how-it-works";
import { S05Product } from "@/components/slides/s05-product";
import { SSuperpowers } from "@/components/slides/s-superpowers";
import { S06Differentiator } from "@/components/slides/s06-differentiator";
import { S07Market } from "@/components/slides/s07-market";
import { S08Cities } from "@/components/slides/s08-cities";
import { S09BusinessModel } from "@/components/slides/s09-business-model";
import { S10Traction } from "@/components/slides/s10-traction";
import { S11Financials } from "@/components/slides/s11-financials";
import { S12Expansion } from "@/components/slides/s12-expansion";
import { S13Team } from "@/components/slides/s13-team";
import { S14Investment } from "@/components/slides/s14-investment";
import { S15CTA } from "@/components/slides/s15-cta";

export default function Page() {
  return (
    <SlidesDeck>
      <S01Hero />
      <S02Problem />
      <SCockpit />
      <SRadar />
      <S03Solution />
      <S04HowItWorks />
      <S05Product />
      <SSuperpowers />
      <S06Differentiator />
      <S07Market />
      <S08Cities />
      <S09BusinessModel />
      <S10Traction />
      <S11Financials />
      <S12Expansion />
      <S13Team />
      <S14Investment />
      <S15CTA />
    </SlidesDeck>
  );
}
