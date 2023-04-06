function Song(title, artist) {
    this.title = title;
    this.artist = artist;
    this.isPlaying = false;
  }
  
   function Playlist() {
    this.songs = [];
    this.currentSongIndex = 0;
  }
  
  Playlist.prototype.add = function(song) {
    this.songs.push(song);
  };
  
  Playlist.prototype.play = function() {
    this.songs[this.currentSongIndex].isPlaying = true;
    console.log(this.songs[this.currentSongIndex].title + " started to play");
  };
  Playlist.prototype.stop = function() {
    this.songs[this.currentSongIndex].isPlaying = false;
    console.log(this.songs[this.currentSongIndex].title + " stopped");
  };
  
    Playlist.prototype.next = function() {
    this.stop();
    this.currentSongIndex++;
    if (this.currentSongIndex === this.songs.length) {
      this.currentSongIndex = 0;
    }
    this.play();
  };
  
  const AramAsatryan = new Song("Aram Asatryan", "Tariner");
  const Tata = new Song("Tata", "Chanaparh");
  const playlist = new Playlist();
  playlist.add(AramAsatryan);
  playlist.add(Tata);
  
  playlist.play(); 
  playlist.next(); 
  playlist.next(); 
  
  playlist.stop()