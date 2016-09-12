import app from './app';

app.listen(8080, function() {
  const host = this.address().address;
  const port = this.address().port;
  console.log(`Shard listening at http://${host}:${port}`);
});
