/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Heart, 
  Activity, 
  Users, 
  Calendar,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "スポーツ外傷・障害",
      description: "捻挫、肉離れ、骨折、脱臼など、スポーツ現場での急なケガから、使いすぎによる慢性的な痛みまで専門的に対応します。",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "トレーナー活動",
      description: "競技現場での応急処置やリハビリ指導、パフォーマンス向上のためのコンディショニングサポートを行っています。",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "保険診療・交通事故",
      description: "日常生活でのケガや交通事故によるむち打ちなど、各種健康保険・自賠責保険を適用した施術が可能です。",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const businessHours = [
    { day: "月・火・木・金", morning: "9:00 - 12:30", afternoon: "15:00 - 20:00" },
    { day: "水", morning: "9:00 - 12:30", afternoon: "休診" },
    { day: "土", morning: "9:00 - 14:00", afternoon: "休診" },
    { day: "日・祝", morning: "休診", afternoon: "休診" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-serif tracking-wider text-brand-primary">山形接骨院</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium hover:text-brand-accent transition-colors">当院について</a>
              <a href="#services" className="text-sm font-medium hover:text-brand-accent transition-colors">施術内容</a>
              <a href="#access" className="text-sm font-medium hover:text-brand-accent transition-colors">アクセス</a>
              <a href="tel:023-633-1395" className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all">
                <Phone className="w-4 h-4" /> 023-633-1395
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-200 px-4 py-6 space-y-4"
          >
            <a href="#about" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>当院について</a>
            <a href="#services" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>施術内容</a>
            <a href="#access" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>アクセス</a>
            <a href="tel:023-633-1395" className="flex items-center gap-2 text-brand-primary font-bold text-lg">
              <Phone className="w-5 h-5" /> 023-633-1395
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070" 
            alt="Sports Training" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              スポーツの感動を、<br />
              <span className="text-brand-accent">最高のコンディション</span>で。
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              スポーツ外傷・障害の専門家として、<br />
              競技復帰からパフォーマンス向上まで全力でサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#access" className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-center hover:bg-brand-secondary transition-all flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" /> 予約・お問い合わせ
              </a>
              <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                施術内容を見る <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=2070" 
                alt="Sports Trainer Activity" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div>
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Sports Specialist</span>
              <h2 className="text-4xl font-bold mb-8 text-brand-primary">スポーツの怪我に強い理由</h2>
              <p className="text-gray-600 leading-loose mb-6">
                山形接骨院は、多くのアスリートを支えてきたスポーツトレーナーとしての経験を活かし、スポーツ現場特有の怪我や痛みの解決を得意としています。
              </p>
              <p className="text-gray-600 leading-loose mb-8">
                単に痛みを取るだけでなく、競技特性に合わせたリハビリテーションや、再発防止のためのフォームチェック、コンディショニング指導まで一貫して行います。部活動に励む学生からプロを目指す方まで、幅広くサポートしております。
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-brand-accent pl-4">
                  <div className="text-3xl font-bold text-brand-primary mb-1">15+</div>
                  <div className="text-sm text-gray-500">経験年数</div>
                </div>
                <div className="border-l-4 border-brand-accent pl-4">
                  <div className="text-3xl font-bold text-brand-primary mb-1">10,000+</div>
                  <div className="text-sm text-gray-500">累計施術数</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
            <h2 className="text-4xl font-bold text-brand-primary">施術内容</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-primary">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info & Access Section */}
      <section id="access" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Business Hours */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-brand-primary flex items-center gap-3">
                <Clock className="w-8 h-8" /> 診療時間
              </h2>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-brand-secondary">
                    <tr>
                      <th className="px-6 py-4 font-bold text-brand-primary">曜日</th>
                      <th className="px-6 py-4 font-bold text-brand-primary">午前</th>
                      <th className="px-6 py-4 font-bold text-brand-primary">午後</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {businessHours.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium">{row.day}</td>
                        <td className="px-6 py-4">{row.morning}</td>
                        <td className={`px-6 py-4 ${row.afternoon === '休診' ? 'text-red-400' : ''}`}>{row.afternoon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                ※ 土曜日は14:00までの受付となります。<br />
                ※ 祝日は不定休となりますので、事前にお問い合わせください。
              </p>
            </div>

            {/* Access Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-brand-primary flex items-center gap-3">
                <MapPin className="w-8 h-8" /> アクセス
              </h2>
              <div className="space-y-6 mb-8">
                <div>
                  <div className="font-bold text-lg mb-1">所在地</div>
                  <p className="text-gray-600">〒990-2402 山形県山形市小立３丁目７－２７</p>
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">バスでお越しの方</div>
                  <p className="text-gray-600">「小立1丁目」バス停留所から 徒歩5分</p>
                  <p className="text-gray-600">「平清水」バス停留所」から 徒歩7分</p>
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">お車でお越しの方</div>
                  <p className="text-gray-600">山形自動車道「山形蔵王IC」から 3.8km</p>
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">お電話</div>
                  <a href="tel:023-633-1395" className="text-2xl font-bold text-brand-primary hover:text-brand-accent transition-colors">
                    023-633-1395
                  </a>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-inner border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9549.42195238122!2d140.32550454139712!3d38.229179626484495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bb5bf66efdcb1%3A0xc6606050772a62a2!2z5bGx5b2i5o6l6aqo6Zmi!5e1!3m2!1sja!2sjp!4v1774485886956!5m2!1sja!2sjp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-serif tracking-wider">山形接骨院</span>
            </div>
            
            <div className="flex gap-8 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">プライバシーポリシー</a>
              <a href="#" className="hover:opacity-100 transition-opacity">お問い合わせ</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm opacity-60">
            © 2026 山形接骨院 All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a 
          href="tel:023-633-1395" 
          className="w-16 h-16 bg-brand-accent text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
