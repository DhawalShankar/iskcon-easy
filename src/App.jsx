import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, MapPin, Phone, Mail, Clock, Users, BookOpen, Home, Star, ArrowRight, CheckCircle, Heart, Award, Target } from 'lucide-react';
import RotatingBackground from "./RotatingBackground";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    document.body.classList.add('overflow-x-hidden');
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locations = [
  {
    city: "Kanpur",
    students: "Address: ISKCON Hare Krishna Dham, Mainavati Marg, Bithur Road, Kanpur, UP, 208001",
    programs: "Email: kanpur@iskconeasy.com | Phone: +91 7080007010"
  },
  {
    city: "Etawah",
    students: "Address: Behind Divine Light Public Inter College, Near NH-2, Adda Jalim, Etawah, UP, 206001",
    programs: "Email: info@iskconetawah.com | Phone: +91 90260 56290"
  },
  {
    city: "Orai",
    students: "Address: Beside Dr. Devendra Clinic, Ramnagar, Jhansi Road, Orai, UP, 281001",
    programs: "Email: harekrishnaiskconorai@gmail.com | Phone: +91 72690 91444"
  },
  {
    city: "Lucknow",
    students: "Address: Sri Sri Radharaman Bihari ISKCON Temple, Sushant Golf City, Shaheedpath, Lucknow, UP, 226030",
    programs: "Email: info@iskconlucknowofficial.org | Phone: +91 99822 78969"
  }
];


  const programs = [
  {
    title: 'Xpression',
    description: 'Creative workshops and performances that channel youth talents into devotional expression, building confidence and purpose.',
    icon: <BookOpen className="w-8 h-8" />,
    duration: '3-6 months',
    features: ['Creative expression', 'Devotional arts', 'Confidence building']
  },
  {
    title: 'Bhagavad Gita Course',
    description: 'In-depth study of the Bhagavad Gita, providing practical wisdom for life, decision-making, and self-realization.',
    icon: <Target className="w-8 h-8" />,
    duration: 'Ongoing',
    features: ['Spiritual wisdom', 'Practical lessons', 'Inner peace and clarity']
  },
  {
    title: 'Youth Leadership & Life Skills ',
    description: 'Training in ethics, empathy, communication, and service, shaping responsible and spiritually grounded leaders.',
    icon: <Heart className="w-8 h-8" />,
    duration: 'Integrated',
    features: ['Meditation & chanting', 'Character building', 'Community service']
  }
];

  const activities = [
  {
    title: "Value Education",
    description: "Gita Contests and youth spiritual learning programs",
    image: "/images/value-education.jpg", // replace with your image path
    buttonText: "Know more..."
  },
  {
    title: "Cow Protection",
    description: "Protect our mother cows through seva and awareness",
    image: "/images/cow-protection.jpg",
    buttonText: "Know more..."
  },
  {
    title: "Food for Life",
    description: "Action against hunger, feeding the underprivileged",
    image: "/images/food-for-life.jpg",
    buttonText: "Know more..."
  }
];

  const NavBar = () => (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrollY > 200 ? ' backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25 mt-5 mb-5">
          <div className="flex items-center space-x-2">
          
         <div className="mt-6 mb-6 w-80 h-auto bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg pt-2.5 pb-2.5">
              <img  
                src="/images/easy-logo.png" 
                alt="IE Logo" 
                className="h-auto w-70 object-contain bg-white"
              />
            </div>

{/*           
            <span className={`text-xl font-bold transition-colors ${
              scrollY > 100 ? 'text-gray-800' : 'text-white'
            }`}>ISKCON EASY</span> */}
          </div>

          <div className="hidden md:flex space-x-20 ">
  {['Home', 'About', 'Programs', 'Locations', 'Contact'].map((item) => (
   <a 
  key={item}
  href={`#${item.toLowerCase()}`}
  className={`px-6 py-2 rounded-xl font-extrabold tracking-wide
             text-white visited:text-white active:text-white
             no-underline 
             backdrop-blur-md bg-red-600/80 
             border border-white/20 shadow-lg 
             transition-colors hover:text-green-500 hover:bg-white/20'
      }`}
>
  {item}
</a>

  ))}
</div>


          <button
            className={`md:hidden p-2 transition-colors ${
              scrollY > 100 ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {['Home', 'About', 'Programs', 'Locations', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-black hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section id="home" className=" w-screen relative min-h-screen flex items-center justify-end ">
      <div className="w-full min-h-[120vh] relative pt-50">
        {/* Background with gradient overlay */}
        <RotatingBackground />

        {/*Background shapes*/}
{/* <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
<div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" /> */}

{/* Foreground content */}
<div className=" 
relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
  

   
            <div className="mt-150 flex flex-col sm:flex-row gap-4 justify-center items-end ">
              <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Find Center Near You
              </button>
              <button className="px-8 py-4  bg-red-600 text-white rounded-full font-bold hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300">
                Donate
              </button>
            </div>
  
          

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-40 h-40 text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );

  const About = () => (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-6">ISKCON Empowering Aspiring Stressed Youth (EASY) <br /> - An ISKCON Initative by Sri Sri Radha Madhav Temple </h2>
          <h3 className='text-3xl md:text-3xl font-semibold text-gray-500 mb-6'></h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between traditional wisdom and modern skills, creating pathways for holistic development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🌸Xpression: Igniting Inner Potential</h3>
                <p className="text-gray-600">Xpression is a dynamic platform designed to channel the creative energies of youth into meaningful expressions of spirituality. Through workshops, performances, and collaborative projects, participants discover their unique talents and learn to use them in service to the Divine. This program nurtures confidence, discipline, and a deep sense of purpose, guiding young hearts towards self-realization and devotion.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">📖 Bhagavad Gita Course: Wisdom for Life</h3>
                <p className="text-gray-600">The Bhagavad Gita course offers a profound journey into timeless wisdom, providing practical insights for navigating life's challenges. By delving into the teachings of Lord Krishna, students gain clarity on duty, purpose, and the path to inner peace. This course empowers youth to make informed, spiritually grounded decisions, fostering resilience and a compassionate outlook in the face of modern-day pressures.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🌿 Holistic Development through Spirituality</h3>
                <p className="text-gray-600">
At ISKCON Easy, spirituality is not just a practice but a way of life. The integration of devotional activities, ethical teachings, and community service cultivates a balanced and harmonious lifestyle. Youth are encouraged to explore their spiritual identity, develop empathy, and contribute positively to society, leading to personal growth and collective well-being.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-red-500 to-red-800 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Empowering Youth</h3>
                  <p className="text-lg opacity-90">Across Uttar Pradesh</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🎓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Programs = () => (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to equip you with both technical skills and spiritual wisdom
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-800 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex items-center text-sm text-orange-600 font-semibold mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  Duration: {program.duration}
                </div>

                <div className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-red-500 to-red-800 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Locations = () => (
    <section id="locations" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Centers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Training centers strategically located across Uttar Pradesh for easy accessibility
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-10 h-6 text-white" />
                </div>
                <span className="text-2xl">🏛️</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {location.city}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                 
                  <span className="font-semibold text-black">{location.students}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  
                  <span className="font-semibold text-green-600">{location.programs}</span>
                </div>
              </div>
              
              <button className="w-full mt-6 py-3 bg-gradient-to-r from-purple-500 to-purple-900 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <span>Visit Center</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

const Activities = () => (
  <section className="py-20 bg-orange-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Activities</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the key programs and initiatives run by ISKCON Easy to transform lives
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100">
            <img
              src={activity.image}
              alt={activity.title}
              className="rounded-t-2xl w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{activity.title}</h3>
              <p className="text-gray-600 mb-6">{activity.description}</p>
              <button className="py-2 px-6 bg-red-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300">
                {activity.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
  const Contact = () => (
    <section id="contact" className="py-20 bg-gradient-to-br from-red-400 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Connect with Us!</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to transform your life? Contact us to learn more about our programs 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="opacity-90">+91-7080007010</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="opacity-90">info@iskconeasy.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Locations</h3>
                <p className="opacity-90">Kanpur • Lucknow • Etawah • Orai</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              
              <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                <option value="" className="text-gray-800">Select Preferred Location</option>
                <option value="kanpur" className="text-gray-800">Kanpur</option>
                <option value="lucknow" className="text-gray-800">Lucknow</option>
                <option value="prayagraj" className="text-gray-800">Etawah</option>
                <option value="varanasi" className="text-gray-800">Orai</option>
              </select>
              
              <textarea
                placeholder="Tell us about your interests and spiritual goals..."
                rows="4"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full py-4 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-70 h-10 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center">
             
                  <img  
                    src="/images/easy-logo.png" 
                    alt="IE Logo" 
                    className=" bg-white h-auto w-60 object-contain rounded-2xl"
                  />
                

              </div>
              <span className="text-xl font-bold">ISKCON EASY</span>
            </div>
            <p className="text-black leading-relaxed">
             ISKCON EASY stands as a sanctuary for the modern youth—tired of noise, pressure, and shallow pursuits. We transform stress into strength, loneliness into belonging, and wandering ambition into purposeful direction. Here, money becomes a tool for service, energy a force for creativity, and life itself a celebration of bhakti.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-black">
             <li><a href="#" className="hover:text-orange-800 transition-colors">Discover Your Self Course</a></li>
<li><a href="#" className="hover:text-orange-800 transition-colors">Bhagavad Gita Course</a></li>
<li><a href="#" className="hover:text-orange-800 transition-colors">Vedic Lifestyle Training</a></li>
<li><a href="#" className="hover:text-orange-800 transition-colors">Skill Training Centers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Centers</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-orange-700 transition-colors">Kanpur</a></li>
              <li><a href="#" className="hover:text-orange-700 transition-colors">Lucknow</a></li>
              <li><a href="#" className="hover:text-orange-800 transition-colors">Orai</a></li>
              <li><a href="#" className="hover:text-orange-800 transition-colors">Etawah</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-black">
              <li><a href="https://www.facebook.com/iskconkanpur/" className="hover:text-orange-800 transition-colors">Facebook</a></li>
<li><a href="https://www.instagram.com/iskconeasyofficial/" className="hover:text-orange-800 transition-colors">Instagram</a></li>
<li><a href="https://www.instagram.com/iskcon_kanpur/" className="hover:text-orange-800 transition-colors">Twitter</a></li>
<li><a href="https://www.facebook.com/ISKCONKNP/" className="hover:text-orange-800 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-black">
          <p>&copy; 2025 ISKCON Easy. All rights reserved. Empowering minds, enriching lives.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className=" w-full min-h-screen bg-white">
      <NavBar />
      <Hero />
      <About />
      <Programs />
      <Locations />
      <Activities />
      <Contact />
      <Footer />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;