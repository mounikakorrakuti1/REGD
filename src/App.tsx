import React, { useState } from 'react';
import { Users, Award, BookOpen, Code, Mail, Phone, User, Calendar, Heart, Download, Send, Star, Trophy, Target, Zap } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  year: string;
  gender: string;
  department: string;
  interests: string[];
  volunteerWillingness: string;
  expectations: string;
  paymentMode: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    year: '',
    gender: '',
    department: '',
    interests: [],
    volunteerWillingness: '',
    expectations: '',
    paymentMode: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Dance', 'Management', 'Tech Support', 'Artwork', 'Photography', 
    'Writing', 'Event Planning', 'Social Media', 'Public Speaking', 'Music'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
  };

  const downloadCertificate = () => {
    // Simulate certificate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'ACE_Registration_Certificate.pdf';
    link.click();
    alert('Certificate download started!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ACE PROGRAM
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Advancing Computing Excellence at SRKREC
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Code className="w-6 h-6 text-blue-300" />
                <span>Innovation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Users className="w-6 h-6 text-purple-300" />
                <span>Community</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span>Excellence</span>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Register Now
            </button>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
      </section>

      {/* Department Information Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Computer Science & Engineering</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading innovation in technology education and research at SRKREC
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Department Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Star className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Established 1995</h4>
                    <p className="text-gray-600">30+ years of excellence in computer science education</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Award className="w-8 h-8 text-blue-500" />
                  <div>
                    <h4 className="font-semibold text-gray-800">NAAC A+ Accredited</h4>
                    <p className="text-gray-600">Recognized for academic excellence and infrastructure</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Users className="w-8 h-8 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-gray-800">5000+ Alumni</h4>
                    <p className="text-gray-600">Successful graduates in top tech companies worldwide</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <BookOpen className="w-8 h-8 text-purple-500" />
                  <div>
                    <h4 className="font-semibold text-gray-800">50+ Research Publications</h4>
                    <p className="text-gray-600">Annual contributions to international journals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center transform hover:scale-105 transition-transform">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Head of Department"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-blue-600 font-semibold mb-4">Head of Department</p>
              <div className="text-gray-600 space-y-2">
                <p><strong>Experience:</strong> 25+ years in academia and industry</p>
                <p><strong>Specialization:</strong> Machine Learning, Data Science</p>
                <p><strong>PhD:</strong> IIT Madras</p>
                <p><strong>Publications:</strong> 120+ international papers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Join ACE Program</h2>
            <p className="text-xl text-blue-200">Register now to be part of our excellence community</p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <User className="inline w-5 h-5 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Phone className="inline w-5 h-5 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Mail className="inline w-5 h-5 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Calendar className="inline w-5 h-5 mr-2" />
                    Year of Study *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Department *</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="CSE">Computer Science & Engineering</option>
                    <option value="ECE">Electronics & Communication Engineering</option>
                    <option value="EEE">Electrical & Electronics Engineering</option>
                    <option value="MECH">Mechanical Engineering</option>
                    <option value="CIVIL">Civil Engineering</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 font-semibold mb-3">
                  <Heart className="inline w-5 h-5 mr-2" />
                  Interests (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Willingness to Volunteer for Events *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="volunteerWillingness"
                      value="Yes"
                      checked={formData.volunteerWillingness === 'Yes'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="volunteerWillingness"
                      value="No"
                      checked={formData.volunteerWillingness === 'No'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="volunteerWillingness"
                      value="Maybe"
                      checked={formData.volunteerWillingness === 'Maybe'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="text-gray-700">Maybe</span>
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  <Target className="inline w-5 h-5 mr-2" />
                  Expectations from ACE
                </label>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Share your expectations and goals for joining the ACE program..."
                />
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 font-semibold mb-2">Payment Mode *</label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMode"
                      value="Online"
                      checked={formData.paymentMode === 'Online'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="text-gray-700">Online</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMode"
                      value="Offline"
                      checked={formData.paymentMode === 'Offline'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="text-gray-700">Offline</span>
                  </label>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Registration</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Registration Successful!</h3>
              <p className="text-gray-600 mb-8">
                Thank you for registering for the ACE program. You will receive a confirmation email shortly.
              </p>
              <button
                onClick={downloadCertificate}
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
              >
                <Download className="w-5 h-5" />
                <span>Download Certificate</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ACE Information Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">About ACE Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advancing Computing Excellence through innovation, collaboration, and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation Hub</h3>
              <p className="text-gray-600">
                Foster creativity and innovation through cutting-edge projects, hackathons, and research opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Building</h3>
              <p className="text-gray-600">
                Connect with like-minded peers, build lasting relationships, and create a supportive learning environment.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence Achievement</h3>
              <p className="text-gray-600">
                Strive for excellence in academics, professional development, and personal growth through structured programs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Faculty Coordinators</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Faculty Coordinator 1"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-bold text-gray-800">Dr. Priya Sharma</h4>
                <p className="text-blue-600 font-semibold mb-2">Program Coordinator</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Specialization:</strong> Artificial Intelligence</p>
                  <p><strong>Experience:</strong> 15+ years</p>
                  <p><strong>Email:</strong> priya.sharma@srkrec.edu</p>
                </div>
              </div>

              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Faculty Coordinator 2"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-bold text-gray-800">Prof. Arun Kumar</h4>
                <p className="text-blue-600 font-semibold mb-2">Technical Coordinator</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Specialization:</strong> Software Engineering</p>
                  <p><strong>Experience:</strong> 12+ years</p>
                  <p><strong>Email:</strong> arun.kumar@srkrec.edu</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">Program Highlights</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Weekly technical workshops</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Industry expert guest lectures</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Hands-on project development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Competitive programming training</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Research paper publications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Internship placement assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Leadership development programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Alumni mentorship network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">SRKREC - Computer Science & Engineering</h3>
          <p className="text-gray-400 mb-6">Advancing Computing Excellence Program</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <p>Email: ace@srkrec.edu</p>
            <p>Phone: +91 98765 43210</p>
            <p>Campus: SRKREC, Bhimavaram</p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500">&copy; 2024 SRKREC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;