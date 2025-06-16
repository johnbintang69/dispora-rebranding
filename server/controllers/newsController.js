import db from '../config/db.js';

export const createNews = async (req, res) => {
  const { judul, isi, gambar, tanggal, status } = req.body;
  const id_admin = req.session.admin?.id;

  if (!id_admin) return res.status(401).json({ message: 'Unauthorized' });

  try {
    await db.query(
      'INSERT INTO berita (judul, isi, gambar, tanggal, status, id_admin) VALUES (?, ?, ?, ?, ?, ?)',
      [judul, isi, gambar, tanggal, status, id_admin]
    );
    res.status(201).json({ message: 'Berita berhasil ditambahkan' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menambahkan berita' });
  }
};

export const deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM berita WHERE id_berita = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Berita tidak ditemukan' });
    }

    res.json({ message: 'Berita berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menghapus berita' });
  }
};


export const getAllNews = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM berita ORDER BY tanggal DESC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil berita' });
  }
};
