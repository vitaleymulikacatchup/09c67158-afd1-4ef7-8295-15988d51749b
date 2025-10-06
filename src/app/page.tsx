"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759756079338-b0e43106.jpg"
          logoAlt="MemePulse Logo"
          buttonText="Buy MEME"
        />
      </div>
      <div id="hero" data-section="hero">
        <BillboardHero
          title="Welcome to MemePulse"
          subtitle="The fun memecoin with clear buy steps!"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="MemePulse is all about fun and community. Join us on this amazing journey to redefine memecoins!"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          steps={[
            { position: 'left', title: 'Step 1', description: 'Connect your wallet.' },
            { position: 'center', title: 'Step 2', description: 'Choose your amount.' },
            { position: 'right', title: 'Step 3', description: 'Confirm your purchase.' },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Explore our innovative tokenomics model that supports our community and growth."
          kpiItems={[
            { value: '10M', description: 'Total Supply' },
            { value: '1M', description: 'Liquidity' },
            { value: '500K', description: 'Marketing' },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759756079338-b0e43106.jpg"
          logoAlt="MemePulse Logo"
          logoText="MemePulse"
          items={[
            { label: 'Privacy Policy', onClick: () => {} },
            { label: 'Terms of Service', onClick: () => {} },
            { label: 'Contact', onClick: () => {} },
          ]}
          copyrightText="© 2023 MemePulse"
        />
      </div>
    </SiteThemeProvider>
  );
}
