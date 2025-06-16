import React from "react";
import { FaGraduationCap, FaUsers, FaFutbol, FaLightbulb } from "react-icons/fa";

const programs = [
  {
    icon: <FaGraduationCap className="text-4xl text-gold mb-3" />,
    title: "Program Beasiswa",
    desc: "Dukungan pendidikan untuk pemuda berprestasi dan kurang mampu di Kota Semarang.",
  },
  {
    icon: <FaUsers className="text-4xl text-gold mb-3" />,
    title: "Pelatihan Kepemimpinan",
    desc: "Mengembangkan jiwa kepemimpinan dan soft skill generasi muda melalui pelatihan intensif.",
  },
  {
    icon: <FaFutbol className="text-4xl text-gold mb-3" />,
    title: "Event Olahraga",
    desc: "Beragam kompetisi dan event olahraga untuk mendorong gaya hidup sehat dan sportivitas.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-gold mb-3" />,
    title: "Kreativitas Pemuda",
    desc: "Fasilitasi ruang dan dukungan bagi pemuda untuk berinovasi dan berkarya di berbagai bidang.",
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 font-title">Program Unggulan</h2>
      <p className="max-w-2xl mx-auto text-gray-700 font-body mb-10">Berbagai program inovatif untuk mendukung pengembangan kepemudaan dan olahraga di kota.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {programs.map((item, idx) => (
          <div key={idx} className="bg-[#f9fafb] rounded-xl shadow-md p-6 flex flex-col items-center border border-gray-100 hover:shadow-lg transition-shadow">
            {item.icon}
            <h3 className="text-lg font-bold text-navy mb-2 font-title">{item.title}</h3>
            <p className="text-gray-700 font-body text-sm text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
