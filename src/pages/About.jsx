import {
  FaBolt,
  FaBuilding,
  FaHome,
  FaIndustry,
} from 'react-icons/fa';

const About = () => {
  const services = [
    { title: "Residential Electrical Services", icon: <FaHome size={28} /> },
    { title: "Commercial Electrical Services", icon: <FaBuilding size={28} /> },
    { title: "Industrial Electrical Services", icon: <FaIndustry size={28} /> },
    { title: "Specialty Services", icon: <FaBolt size={28} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-[72px] bg-[#0F151B] text-[#d0d0d0]">
      <main className="flex-grow px-6 py-20 max-w-6xl mx-auto">
        {/* About Us Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#B3001E] mb-4">About Us</h1>
          <p className="text-lg text-[#d0d0d0] max-w-3xl mx-auto">
            At Powerflow Electrical Services, we are passionate about providing
            top-notch electrical services that prioritize safety, efficiency,
            and customer satisfaction. With years of experience in the
            electrical industry, we have built a reputation as a trusted and
            reliable contractor, committed to excellence in every project we
            undertake.
          </p>
        </section>

        {/* Get in Touch CTA */}
        <section className="mb-16 text-center">
          <button className="bg-[#017ea4] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#B3001E] transition">
            Get in Touch
          </button>
        </section>

        {/* Why We Are the Best */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#B3001E] mb-10 text-center">
            Why We Are the Best for the Job
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Experienced & Certified Professionals",
                desc: "Our electricians are fully licensed and certified, with extensive experience handling all types of electrical work. We stay up-to-date with the latest industry standards and technology to provide the most effective solutions.",
              },
              {
                title: "Commitment to Safety",
                desc: "Safety is our top priority. We adhere to strict safety protocols and regulations, ensuring that every project is executed with the highest level of care and precision. We take no shortcuts when it comes to your safety and peace of mind.",
              },
              {
                title: "High-Quality Workmanship",
                desc: "We believe in doing the job right the first time. Our attention to detail and dedication to quality mean you can count on our work to last, saving you time and money in the long run.",
              },
              {
                title: "Prompt & Reliable Service",
                desc: "We understand the importance of your time and are committed to completing projects on schedule. Our team is punctual, professional, and always ready to respond to your needs quickly and efficiently.",
              },
              {
                title: "Customer Satisfaction Guaranteed",
                desc: "Your satisfaction is at the core of what we do. We take pride in delivering exceptional customer service and building lasting relationships with our clients. We listen to your needs, provide honest recommendations, and work tirelessly to achieve the best results.",
              },
              {
                title: "Advanced Technology & Solutions",
                desc: "From smart home installations to energy-efficient upgrades, we use the latest technology to deliver innovative solutions. Our forward-thinking approach ensures you get the most value from your electrical systems.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-[#017ea4] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#d0d0d0]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Statement */}
        <section className="mb-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            We are a team of professionals with decades of combined experience.
          </h3>
        </section>

        {/* Services with Gear Background on Left */}
        <section className="mt-20">
          <div className="service-hover-wrapper flex flex-col md:flex-row gap-10 items-start">
            {/* Left Column */}
            <div className="md:w-1/2 relative">
              <h2 className="text-3xl font-semibold text-white mb-4">
                What We Do Best
              </h2>
              <p className="text-[#a5a5a5] text-base max-w-sm relative z-10">
                Our electrical services are tailored to residential, commercial,
                and industrial needs, along with cutting-edge specialty
                solutions.
              </p>

              {/* Gear Image */}
              <img
                src="/gear.png"
                alt="Gear"
                className="gear-spin w-44 md:w-60 opacity-5 mt-6 ml-2 select-none pointer-events-none"
              />
            </div>

            {/* Right Column: Service Cards */}
            <div className="flex-1 space-y-6 w-full">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="service-item flex items-center gap-4 bg-gradient-to-b from-[#1a222c] to-[#121920] rounded-xl p-5 shadow-md"
                >
                  <div className="bg-[#017ea4] p-3 rounded-full text-white shadow-md">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {service.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
