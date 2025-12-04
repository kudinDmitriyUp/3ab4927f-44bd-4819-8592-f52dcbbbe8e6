"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitGlobeKpi from '@/components/sections/hero/HeroSplitGlobeKpi';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeSpacing"
      background="none"
      cardStyle="gradient-mesh"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" },
            { name: "FAQs", id: "faqs" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885866409-0sopd4je.jpg"
          logoAlt="Carson Loquaci Farm"
          brandName="Carson Loquaci Farm"
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitGlobeKpi
          title="Sustainable Agriculture from Carson Loquaci Farm"
          description="Growing premium crops with modern farming techniques. We deliver fresh, high-quality produce to markets worldwide."
          kpis={[
            { value: "25 Years", label: "Farming Excellence" },
            { value: "500+ Acres", label: "Prime Farmland" },
            { value: "Global Reach", label: "International Markets" }
          ]}
          tag="Premium Farm Products"
          tagIcon={Leaf}
          buttons={[
            { text: "Explore Our Products", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          globePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="Carson Loquaci Farm has been dedicated to sustainable agriculture for over two decades. We combine traditional farming wisdom with innovative techniques to produce the finest crops. Our commitment to soil health, water conservation, and crop rotation ensures long-term productivity while protecting the environment. We partner with local communities and global markets to deliver fresh, nutritious produce that makes a difference."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Our Farming Methods"
          description="We use cutting-edge agricultural practices combined with traditional knowledge"
          tag="Sustainable Practices"
          features={[
            {
              title: "Crop Rotation",
              description: "Rotating crops annually to maintain soil fertility and reduce pest buildup naturally",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885871164-tsnv9tnc.jpg",
              imageAlt: "Healthy soil management"
            },
            {
              title: "Precision Irrigation",
              description: "Smart water management systems that reduce waste while maximizing crop yield",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885870562-3611u4vb.jpg",
              imageAlt: "Agricultural irrigation system"
            },
            {
              title: "Organic Soil Enhancement",
              description: "Natural composting and cover crops to build healthy, nutrient-rich soil",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885869768-upgyiwn0.jpg",
              imageAlt: "Sustainable farming practices"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Premium Products"
          description="Fresh, high-quality crops grown with care and dedication"
          tag="Fresh Produce"
          products={[
            {
              id: "1",
              name: "Organic Wheat",
              price: "$45/bushel",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885867750-wyr3jhxq.jpg",
              imageAlt: "Golden wheat harvest"
            },
            {
              id: "2",
              name: "Fresh Vegetables",
              price: "$12/lb",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885868571-fynm24kt.jpg",
              imageAlt: "Organic vegetables mix"
            },
            {
              id: "3",
              name: "Sweet Corn",
              price: "$8/dozen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885869270-8k23t02b.jpg",
              imageAlt: "Fresh corn ears"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Partners Say"
          description="Hear from businesses and customers who trust Carson Loquaci Farm"
          tag="Customer Reviews"
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              handle: "Produce Manager, Fresh Market Co.",
              testimonial: "The quality of crops from Carson Loquaci Farm is consistently outstanding. Their reliable delivery and premium produce make them our top supplier.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885872059-z9ru6ak7.jpg",
              imageAlt: "Maria Rodriguez"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "Farm Operations Director",
              testimonial: "Working with Carson has transformed our supply chain. Their sustainable practices align perfectly with our environmental values.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885872702-xom5gbmi.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Sarah Mitchell",
              handle: "Restaurant Owner, Farm to Table",
              testimonial: "Our customers taste the difference. Carson's fresh vegetables bring authentic flavor that makes our dishes exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885873382-0wnmdxh8.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "4",
              name: "David Thompson",
              handle: "Agricultural Distributor",
              testimonial: "Thirty years in this business, and I can say without hesitation that Carson Loquaci Farm is among the best. Consistent quality, fair pricing, always professional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885874163-1uvr01o3.jpg",
              imageAlt: "David Thompson"
            },
            {
              id: "5",
              name: "Elena Vasquez",
              handle: "Wholesale Buyer",
              testimonial: "The yield quality and consistency is remarkable. We've expanded our orders multiple times because demand keeps growing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885874861-8kybtcr4.jpg",
              imageAlt: "Elena Vasquez"
            },
            {
              id: "6",
              name: "Robert Kim",
              handle: "Agricultural Cooperative Manager",
              testimonial: "Carson's commitment to sustainable practices while maintaining profitability shows smart business. We recommend them to all our members.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885875595-ma7nnul9.jpg",
              imageAlt: "Robert Kim"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our farm, products, and services"
          tag="Help Center"
          faqs={[
            {
              id: "1",
              title: "What makes your farm sustainable?",
              content: "We use organic soil management, crop rotation, precision irrigation, and natural pest control methods. Our practices focus on long-term soil health and environmental stewardship while maintaining profitability."
            },
            {
              id: "2",
              title: "Do you ship internationally?",
              content: "Yes, we ship premium crops to select international markets. Delivery times vary by location, typically 5-14 business days depending on destination. Contact us for specific export inquiries."
            },
            {
              id: "3",
              title: "What is your minimum order for wholesale?",
              content: "Minimum wholesale orders are typically 500 pounds. Custom volumes and seasonal agreements available. Please reach out to discuss your specific needs."
            },
            {
              id: "4",
              title: "Are your crops certified organic?",
              content: "We maintain rigorous organic standards and are in the process of completing full organic certification. All our practices follow organic farming principles for soil and environmental health."
            },
            {
              id: "5",
              title: "How can I schedule a farm visit?",
              content: "We welcome educational visits and partnerships. Please contact us with your group size and preferred dates. Farm tours are available April through October by appointment."
            },
            {
              id: "6",
              title: "What payment methods do you accept?",
              content: "We accept bank transfers, checks, credit cards, and purchase orders for established accounts. Flexible payment terms available for qualified wholesale partners."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch With Us"
          description="Have questions about our products or services? Reach out to the Carson Loquaci Farm team. We respond to inquiries within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company or Organization",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your inquiry... Are you interested in wholesale, partnerships, farm visits, or something else?",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764885866409-0sopd4je.jpg"
          logoAlt="Carson Loquaci Farm Logo"
          logoText="Carson Loquaci Farm"
        />
      </div>
    </ThemeProvider>
  );
}