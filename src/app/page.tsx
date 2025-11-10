"use client"
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Activity, Award, Calendar, CreditCard, Globe, Heart, Instagram, Linkedin, Mail, MessageCircle, Package, Settings, Sparkles, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="dotGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Classes", id: "feature" },
            { name: "Instructors", id: "team" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="FlexCore Studio"
          button={{
            text: "Book Class",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Body & Mind"
          description="Experience the power of Pilates with expert instruction, modern equipment, and a supportive community. Build strength, improve flexibility, and find your balance."
          tag="Premium Pilates Studio"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Journey",
              href: "contact"
            },
            {
              text: "View Classes",
              href: "feature"
            }
          ]}
          imageSrc="https://pixabay.com/get/gbd02d87a0e52569c15bfdcf6bd5628a0f91556efd54dad8b02cfe9c65356ffe62702e18abd204daf098d18e326b0af0f438732442720d36789fa58d88a01dd1a_1280.jpg"
          imageAlt="Modern pilates studio with equipment and natural lighting"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose FlexCore Studio"
          description="We believe in the transformative power of Pilates to strengthen not just your body, but your mind and spirit. Our approach combines traditional techniques with modern innovation."
          tag="Our Philosophy"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Expert Instruction",
              description: "Certified instructors with years of experience guide you safely through each movement",
              icon: Award
            },
            {
              title: "Modern Equipment",
              description: "State-of-the-art reformers and props to enhance your practice and results",
              icon: Settings
            },
            {
              title: "Personalized Approach",
              description: "Small class sizes and individual attention to meet your unique fitness goals",
              icon: Users
            },
            {
              title: "Welcoming Community",
              description: "A supportive environment where everyone feels comfortable and encouraged",
              icon: Heart
            }
          ]}
          imageSrc="https://pixabay.com/get/gf617451401dad57ba109439ddaf82ea94f875805ebb92963b9134d5530a6396f8151efcabc3df465006ae570ecf5df214dee241bc015f8969ef640d9532ff848_1280.jpg"
          imageAlt="Professional pilates equipment in studio"
          imagePosition="left"
          buttons={[
            {
              text: "Learn More",
              href: "team"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Class Offerings"
          description="From beginner-friendly sessions to advanced challenges, find the perfect class for your fitness journey."
          tag="Classes"
          tagIcon={Activity}
          features={[
            {
              title: "Core Strength",
              description: "Build a strong foundation with targeted core exercises using mat work and light equipment",
              imageSrc: "https://pixabay.com/get/gdf2f6f3224e7543d325c6bf416b47f25a1d580b4f5faccb10db2e2f0c914adcdceac61e9473031aaa3693fef49842156eecf8574a52af27dadf67fbd078334ab_1280.jpg",
              imageAlt: "Pilates core strengthening exercises",
              button: {
                text: "Book Now",
                href: "contact"
              }
            },
            {
              title: "Flexibility & Flow",
              description: "Improve mobility and range of motion through gentle stretching and flowing movements",
              imageSrc: "https://pixabay.com/get/g32d8709b735d2fd4c969e3db17a562e5e1a0bcff57f7067921362abd6fc24c08fb5fcba253eb5b7fa132228c873c44b82cd1d17b96642db855350e7754440fef_1280.jpg",
              imageAlt: "Pilates flexibility and stretching",
              button: {
                text: "Book Now",
                href: "contact"
              }
            },
            {
              title: "Balance & Stability",
              description: "Enhance coordination and proprioception with challenging balance-focused routines",
              imageSrc: "https://pixabay.com/get/g53f205322d06518a33d33fc45c629e3f5f675df1eaffd39041c72f90010441b84e6f39af50562f737618a8e46c8e3e0806cfd01de0b6fe4ab9b51036b2d6a3d0_1280.jpg",
              imageAlt: "Pilates balance and stability training",
              button: {
                text: "Book Now",
                href: "contact"
              }
            },
            {
              title: "Mindful Movement",
              description: "Connect mind and body through breath-centered, meditative Pilates practice",
              imageSrc: "https://pixabay.com/get/gdb74292ec6b8a704fe9a400bd30de671059a723d67d5948d169773e14417ca362a99fedb76ea8686a6195297330c1ac32bb08f3ba6af8b50ff5754404ee8f97a_1280.jpg",
              imageAlt: "Mindful pilates movement practice",
              button: {
                text: "Book Now",
                href: "contact"
              }
            }
          ]}
          buttons={[
            {
              text: "View Schedule",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Your Instructors"
          description="Our certified Pilates instructors bring passion, expertise, and personalized attention to every class."
          tag="Expert Team"
          tagIcon={Star}
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Lead Instructor",
              description: "Comprehensive Pilates certified with 8 years of experience. Specializes in rehabilitation and athletic performance.",
              imageSrc: "https://pixabay.com/get/g6745a018b682f1f40c93b9696ed841d6e73142a9e83721f002990c1af9b5e27075eff75c7917f547835bb4b5ff9789806356ccb85101e4a6cace77d4f9f01fe2_1280.jpg",
              imageAlt: "Sarah Mitchell, Lead Pilates Instructor",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/sarah_pilates"
                },
                {
                  icon: Mail,
                  url: "mailto:sarah@flexcorestudio.com"
                }
              ]
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Senior Instructor",
              description: "Former dancer turned Pilates expert. Brings creativity and precision to movement with 6 years of teaching experience.",
              imageSrc: "https://pixabay.com/get/ga8b1a9477605b172a0eb63a0243641b1bb1147a3b30108bb60928fcd57187d85e032660891f7301b56665c55627869fa9b4e82277bba78ff0c995c38b1ecde52_1280.jpg",
              imageAlt: "Marcus Rodriguez, Senior Pilates Instructor",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/marcus_moves"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/marcusrodriguez"
                }
              ]
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Wellness Coach",
              description: "Integrates mindfulness and breathwork into Pilates practice. Certified in both classical and contemporary methods.",
              imageSrc: "https://pixabay.com/get/g20d0ec0c485ecdb3e08aaa312750bc9193dd699fce76155945a5569e1a07e764432035bc9b5655108b659741b9d93aa65e61aff03a4f53b87394617caf194955_1280.jpg",
              imageAlt: "Emma Thompson, Pilates Wellness Coach",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/emma_wellness"
                },
                {
                  icon: Globe,
                  url: "https://emmathompsonwellness.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Membership Options"
          description="Choose the plan that fits your lifestyle and commitment to wellness. All memberships include access to our community and resources."
          tag="Pricing"
          tagIcon={CreditCard}
          plans={[
            {
              id: "drop-in",
              badge: "Flexible",
              badgeIcon: Calendar,
              price: "$35",
              subtitle: "Perfect for trying classes or occasional visits",
              buttons: [
                {
                  text: "Book Single Class",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "Single class access",
                "Use of all studio equipment",
                "Complimentary water and towel",
                "Valid for 30 days from purchase"
              ]
            },
            {
              id: "unlimited",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$149/mo",
              subtitle: "Unlimited classes for serious practitioners",
              buttons: [
                {
                  text: "Start Membership",
                  href: "contact"
                },
                {
                  text: "Contact Us",
                  href: "contact"
                }
              ],
              features: [
                "Unlimited monthly classes",
                "Priority booking for popular times",
                "10% discount on workshops",
                "Guest pass (2 per month)",
                "Complimentary mat storage"
              ]
            },
            {
              id: "package",
              badge: "Great Value",
              badgeIcon: Package,
              price: "$280",
              subtitle: "Ten-class package for regular practice",
              buttons: [
                {
                  text: "Purchase Package",
                  href: "contact"
                },
                {
                  text: "Ask Questions",
                  href: "contact"
                }
              ],
              features: [
                "10 classes to use flexibly",
                "Valid for 4 months",
                "Transferable to family/friends",
                "5% discount on additional packages",
                "Free equipment orientation"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real stories from real people who have transformed their lives through Pilates at FlexCore Studio."
          tag="Client Stories"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "Marketing Director",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g1c90b6ba123bbae9a509c8e0e3a7ea36930249156e7cb1403012bd6d0738411357f2b5fae1251d9c0309749528724a43159d7d35f84d8935325d176dfbd1bc07_1280.jpg",
              imageAlt: "Jennifer Walsh testimonial"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Physical Therapist",
              company: "Wellness Center",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g2e0b7f8a5e5fcbbe07d85d999e563f948a88606a30ec0dfd59f61f19b8b5b13c4dc2530097e3feef0c575f8188855e80da189234640cf1e0b41ddb5ea7abab9d_1280.jpg",
              imageAlt: "David Chen testimonial"
            },
            {
              id: "3",
              name: "Lisa Morgan",
              role: "Graphic Designer",
              company: "Creative Studio",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g2c0b2cb178b46fee6ddabff864bceb2bd4e3837ca83f86c3dcb2b184db9098d9adfa2c1d56e91673cc2816bab6379f271c2048f715af81935c1a435c4507c373_1280.jpg",
              imageAlt: "Lisa Morgan testimonial"
            },
            {
              id: "4",
              name: "Rachel Kim",
              role: "Yoga Instructor",
              company: "Mindful Movement",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gdfcfd95920cab09d10d69198e80739409cbf05f5fbcc12adc29ef56d6db7ac68c3664070321f7c1f1c6a63cd34463aa1d43cd6b15a2e0059542f6b4608d2719a_1280.jpg",
              imageAlt: "Rachel Kim testimonial"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Your Pilates Journey?"
          description="Get in touch to book your first class, ask questions, or learn more about our membership options. We're here to help you succeed."
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
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "experience",
              type: "text",
              placeholder: "Pilates Experience Level",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your fitness goals or any questions you have...",
            rows: 4,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://pixabay.com/get/g587b03a7760b966bb9fe85ca5c8ad949c3a1ca73b36a53b7b318632f0f49542dfc4202c03b603fcb77610bbd4a1b656cdd0609400049d1422a5ed775ae2cb25f_1280.jpg"
          imageAlt="FlexCore Studio interior with equipment"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Studio",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Instructors",
                  href: "team"
                },
                {
                  label: "Class Schedule",
                  href: "feature"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                }
              ]
            },
            {
              title: "Classes",
              items: [
                {
                  label: "Core Strength",
                  href: "feature"
                },
                {
                  label: "Flexibility & Flow",
                  href: "feature"
                },
                {
                  label: "Balance Training",
                  href: "feature"
                },
                {
                  label: "Mindful Movement",
                  href: "feature"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Book a Class",
                  href: "contact"
                },
                {
                  label: "Contact Form",
                  href: "contact"
                },
                {
                  label: "(555) 123-FLEX",
                  href: "tel:5551233539"
                },
                {
                  label: "info@flexcorestudio.com",
                  href: "mailto:info@flexcorestudio.com"
                }
              ]
            }
          ]}
          logoText="FlexCore Studio"
          copyrightText="© 2025 | FlexCore Studio"
        />
      </div>
    </ThemeProvider>
  );
}