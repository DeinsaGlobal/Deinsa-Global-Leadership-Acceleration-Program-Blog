import ContactInfoFooter from '../atoms/contactInfoFooter';
import FooterDepartmentsLinks from '../molecules/footerDepartmentsLinks';
import DeinsaInfoFooter from '../atoms/deinsaInfoFooter';
import NewsletterFooter from '../molecules/newsletterFooter';

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-around bg-[#F5F5F5] px-8 py-4 dark:bg-[#484848]">
      <div className="mr-8 flex flex-col items-center">
        <DeinsaInfoFooter />
      </div>
      <div className="mr-8">
        <ContactInfoFooter />
      </div>
      <div className="mr-8">
        <FooterDepartmentsLinks />
      </div>
      <div className="mr-8">
        <NewsletterFooter />
      </div>
    </footer>
  );
}
