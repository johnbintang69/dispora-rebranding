import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PAGE_SIZE = 9;

// Dummy/mock data fallback
const mockNews = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title: `Judul Berita ${i + 1}`,
  content: `Ini adalah isi berita ke-${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod, nibh eu facilisis cursus, nisi erat dictum urna, a dictum erat nisi euismod erat. `.repeat(2),
  published_at: `2024-06-${(i % 30 + 1).toString().padStart(2, '0')}`
}));

function minDelay(promise, ms) {
  return Promise.all([
    promise,
    new Promise(resolve => setTimeout(resolve, ms))
  ]).then(([result]) => result);
}

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`/api/news?page=${page}&limit=${PAGE_SIZE}`)
      .then(res => {
        setNews(res.data.data);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch(() => {
        // fallback ke mock data jika gagal fetch
        const paged = mockNews.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);
        setNews(paged);
        setTotalPages(Math.ceil(mockNews.length / PAGE_SIZE));
        setLoading(false);
        setError('Gagal memuat data dari server, menampilkan data dummy.');
      });
  }, [page]);

  // Tambahkan log di sini
  console.log("NewsList Rendered", news, loading, error);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`/api/news?page=${page}&limit=${PAGE_SIZE}`)
      .then(res => {
        setNews(res.data.data);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch(() => {
        // fallback ke mock data jika gagal fetch
        const paged = mockNews.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);
        setNews(paged);
        setTotalPages(Math.ceil(mockNews.length / PAGE_SIZE));
        setLoading(false);
        setError('Gagal memuat data dari server, menampilkan data dummy.');
      });
  }, [page]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-[70vh]">
      <h1 className="text-2xl md:text-3xl font-bold text-navy mb-6 text-center">Daftar Berita</h1>
      {error && <div className="text-center text-red-600 mb-4 text-sm">{error}</div>}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-400 mb-4"></div>
          <div className="text-navy font-semibold">Memuat...</div>
        </div>
      ) : !Array.isArray(news) || news.length === 0 ? (
        <div className="text-center py-10 text-gray-500">Belum ada berita.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Array.isArray(news) && news.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <div>
                  <div className="text-xs text-gray-400 mb-2">{item.published_at}</div>
                  <div className="font-bold text-lg mb-2 text-navy line-clamp-2">{item.title}</div>
                  <div className="text-gray-700 mb-4 line-clamp-3">{item.content.slice(0, 100)}{item.content.length > 100 && '...'}</div>
                </div>
                <Link to={`/berita/${item.id}`} className="inline-block mt-auto bg-[#152a4e] text-white px-4 py-2 rounded hover:bg-yellow-400 hover:text-navy transition-colors duration-200 font-semibold text-sm text-center">Baca Selengkapnya</Link>
              </div>
            ))}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-navy font-bold disabled:opacity-50"
                onClick={() => setPage(page-1)}
                disabled={page === 1}
              >Sebelumnya</button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 rounded font-bold ${page === i+1 ? 'bg-yellow-400 text-navy' : 'bg-gray-100 text-navy hover:bg-gray-200'}`}
                  onClick={() => setPage(i+1)}
                >{i+1}</button>
              ))}
              <button
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-navy font-bold disabled:opacity-50"
                onClick={() => setPage(page+1)}
                disabled={page === totalPages}
              >Berikutnya</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}