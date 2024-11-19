app.get('/api/movies/:id', async (req, res) => {
  const movieId = req.params.id;
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR' // Define o idioma como português
      }
    });
    res.json(response.data); // Retorna os dados do filme
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error.message);
    res.status(500).send('Erro ao buscar detalhes do filme.');
  }
});
