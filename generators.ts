Blockly.Python['import_spotify'] = function(block) {
    var code = 'from spotify import Spotify\n';
    return code;
};

Blockly.Python['spotify_init'] = function(block) {
    var spotify = Blockly.Python.nameDB_.getName(block.getFieldValue('spotify'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${spotify} = Spotify()\n`;
    return code;
};

Blockly.Python['spotify_get_song'] = function(block) {
    var spotify = Blockly.Python.nameDB_.getName(block.getFieldValue('spotify'), Blockly.VARIABLE_CATEGORY_NAME);
    var parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    var code = `${spotify}.get_song(${parameters})`;
    return [code, 0];
};

Blockly.Python['spotify_play_song'] = function(block) {
    var song = Blockly.Python.nameDB_.getName(block.getFieldValue('song'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${song}.play()\n`;
    return code;
};  

Blockly.Python['spotify_get_feature'] = function(block) {
    var song = Blockly.Python.nameDB_.getName(block.getFieldValue('song'), Blockly.VARIABLE_CATEGORY_NAME);
    var feature = block.getFieldValue('feature');
    var code = `${song}.${feature}`;
    return [code, 0];
};  