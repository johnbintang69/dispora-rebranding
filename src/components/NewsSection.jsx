import React from "react";
import { motion } from "framer-motion";

const news = [
  {
    title: "DISPORA Gelar Festival Olahraga Pemuda 2025",
    date: "10 Juni 2025",
    summary: "Festival olahraga tahunan sukses menarik ratusan peserta muda dari berbagai sekolah di kota.",
  },
  {
    title: "Pelatihan Kepemimpinan Pemuda Berbasis Digital",
    date: "2 Juni 2025",
    summary: "DISPORA Kota mengadakan pelatihan kepemimpinan untuk membekali pemuda menghadapi era digital.",
  },
  {
    title: "Lomba Foto Galeri DISPORA Kota",
    date: "25 Mei 2025",
    summary: "Ajang lomba foto galeri DISPORA Kota mengapresiasi kreativitas generasi muda.",
  },
];

export default function NewsSection() {
  return (
    <section id="berita" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-navy text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Berita Terkini
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-gold font-semibold mb-2">{item.date}</span>
              <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 flex-1">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
