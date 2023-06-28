const spotifyColor = "#1DB954";

Blockly.Blocks['import_spotify'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from spotify import Spotify");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(spotifyColor);
    }
};

Blockly.Blocks['spotify_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("spotify"), "spotify")
          .appendField(" = Spotify()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(spotifyColor);
    }
};

Blockly.Blocks['spotify_get_song'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("song"), "song")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("spotify"), "spotify")
          .appendField(".get_song(");
      this.appendValueInput("parameters")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(spotifyColor);
    }
};  

Blockly.Blocks['spotify_play_song'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("song"), "song")
          .appendField(".play()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(spotifyColor);
    }
};  

Blockly.Blocks['spotify_get_feature'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("song"), "song")
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([["name","name"], ["artists","artists"], ["danceability","danceability"], ["energy","energy"], ["key","key"], ["loudness","loudness"], ["speechiness","speechiness"], ["acousticness","acousticness"], ["instrumentalness","instrumentalness"], ["liveness","liveness"], ["valence","valence"], ["tempo","tempo"]]), "feature");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(spotifyColor);
    }
};  