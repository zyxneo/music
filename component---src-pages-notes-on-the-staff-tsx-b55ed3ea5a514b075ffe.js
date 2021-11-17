/*! For license information please see component---src-pages-notes-on-the-staff-tsx-b55ed3ea5a514b075ffe.js.LICENSE.txt */
(self.webpackChunkmusic=self.webpackChunkmusic||[]).push([[14],{1860:function(e,t){var n;!function(r){"use strict";function i(){if(i.prototype._singleton)throw new Error("WebMidi is a singleton, it cannot be instantiated directly.");(i.prototype._singleton=this)._inputs=[],this._outputs=[],this._userHandlers={},this._stateChangeQueue=[],this._processingStateChange=!1,this._midiInterfaceEvents=["connected","disconnected"],this._nrpnBuffer=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],this._nrpnEventsEnabled=!0,this._nrpnTypes=["entry","increment","decrement"],this._notes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],this._semitones={C:0,D:2,E:4,F:5,G:7,A:9,B:11},Object.defineProperties(this,{MIDI_SYSTEM_MESSAGES:{value:{sysex:240,timecode:241,songposition:242,songselect:243,tuningrequest:246,sysexend:247,clock:248,start:250,continue:251,stop:252,activesensing:254,reset:255,midimessage:0,unknownsystemmessage:-1},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MESSAGES:{value:{noteoff:8,noteon:9,keyaftertouch:10,controlchange:11,channelmode:11,nrpn:11,programchange:12,channelaftertouch:13,pitchbend:14},writable:!1,enumerable:!0,configurable:!1},MIDI_REGISTERED_PARAMETER:{value:{pitchbendrange:[0,0],channelfinetuning:[0,1],channelcoarsetuning:[0,2],tuningprogram:[0,3],tuningbank:[0,4],modulationrange:[0,5],azimuthangle:[61,0],elevationangle:[61,1],gain:[61,2],distanceratio:[61,3],maximumdistance:[61,4],maximumdistancegain:[61,5],referencedistanceratio:[61,6],panspreadangle:[61,7],rollangle:[61,8]},writable:!1,enumerable:!0,configurable:!1},MIDI_CONTROL_CHANGE_MESSAGES:{value:{bankselectcoarse:0,modulationwheelcoarse:1,breathcontrollercoarse:2,footcontrollercoarse:4,portamentotimecoarse:5,dataentrycoarse:6,volumecoarse:7,balancecoarse:8,pancoarse:10,expressioncoarse:11,effectcontrol1coarse:12,effectcontrol2coarse:13,generalpurposeslider1:16,generalpurposeslider2:17,generalpurposeslider3:18,generalpurposeslider4:19,bankselectfine:32,modulationwheelfine:33,breathcontrollerfine:34,footcontrollerfine:36,portamentotimefine:37,dataentryfine:38,volumefine:39,balancefine:40,panfine:42,expressionfine:43,effectcontrol1fine:44,effectcontrol2fine:45,holdpedal:64,portamento:65,sustenutopedal:66,softpedal:67,legatopedal:68,hold2pedal:69,soundvariation:70,resonance:71,soundreleasetime:72,soundattacktime:73,brightness:74,soundcontrol6:75,soundcontrol7:76,soundcontrol8:77,soundcontrol9:78,soundcontrol10:79,generalpurposebutton1:80,generalpurposebutton2:81,generalpurposebutton3:82,generalpurposebutton4:83,reverblevel:91,tremololevel:92,choruslevel:93,celestelevel:94,phaserlevel:95,databuttonincrement:96,databuttondecrement:97,nonregisteredparametercoarse:98,nonregisteredparameterfine:99,registeredparametercoarse:100,registeredparameterfine:101},writable:!1,enumerable:!0,configurable:!1},MIDI_NRPN_MESSAGES:{value:{entrymsb:6,entrylsb:38,increment:96,decrement:97,paramlsb:98,parammsb:99,nullactiveparameter:127},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MODE_MESSAGES:{value:{allsoundoff:120,resetallcontrollers:121,localcontrol:122,allnotesoff:123,omnimodeoff:124,omnimodeon:125,monomodeon:126,polymodeon:127},writable:!1,enumerable:!0,configurable:!1},octaveOffset:{value:0,writable:!0,enumerable:!0,configurable:!1}}),Object.defineProperties(this,{supported:{enumerable:!0,get:function(){return"requestMIDIAccess"in navigator}},enabled:{enumerable:!0,get:function(){return void 0!==this.interface}.bind(this)},inputs:{enumerable:!0,get:function(){return this._inputs}.bind(this)},outputs:{enumerable:!0,get:function(){return this._outputs}.bind(this)},sysexEnabled:{enumerable:!0,get:function(){return!(!this.interface||!this.interface.sysexEnabled)}.bind(this)},nrpnEventsEnabled:{enumerable:!0,get:function(){return!!this._nrpnEventsEnabled}.bind(this),set:function(e){return this._nrpnEventsEnabled=e,this._nrpnEventsEnabled}},nrpnTypes:{enumerable:!0,get:function(){return this._nrpnTypes}.bind(this)},time:{enumerable:!0,get:function(){return performance.now()}}})}var a=new i;function o(e){var t=this;this._userHandlers={channel:{},system:{}},this._midiInput=e,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return t._midiInput.connection}},id:{enumerable:!0,get:function(){return t._midiInput.id}},manufacturer:{enumerable:!0,get:function(){return t._midiInput.manufacturer}},name:{enumerable:!0,get:function(){return t._midiInput.name}},state:{enumerable:!0,get:function(){return t._midiInput.state}},type:{enumerable:!0,get:function(){return t._midiInput.type}}}),this._initializeUserHandlers(),this._midiInput.onmidimessage=this._onMidiMessage.bind(this)}function s(e){var t=this;this._midiOutput=e,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return t._midiOutput.connection}},id:{enumerable:!0,get:function(){return t._midiOutput.id}},manufacturer:{enumerable:!0,get:function(){return t._midiOutput.manufacturer}},name:{enumerable:!0,get:function(){return t._midiOutput.name}},state:{enumerable:!0,get:function(){return t._midiOutput.state}},type:{enumerable:!0,get:function(){return t._midiOutput.type}}})}i.prototype.enable=function(e,t){this.enabled||(this.supported?navigator.requestMIDIAccess({sysex:t}).then(function(t){var n,r=[],i=[];this.interface=t,this._resetInterfaceUserHandlers(),this.interface.onstatechange=function(e){r.push(e)};for(var a=t.inputs.values(),o=a.next();o&&!o.done;o=a.next())i.push(o.value.open());for(var s=t.outputs.values(),u=s.next();u&&!u.done;u=s.next())i.push(u.value.open());function c(){clearTimeout(n),this._updateInputsAndOutputs(),this.interface.onstatechange=this._onInterfaceStateChange.bind(this),"function"==typeof e&&e.call(this),r.forEach(function(e){this._onInterfaceStateChange(e)}.bind(this))}n=setTimeout(c.bind(this),200),Promise&&Promise.all(i).catch((function(e){})).then(c.bind(this))}.bind(this),function(t){"function"==typeof e&&e.call(this,t)}.bind(this)):"function"==typeof e&&e(new Error("The Web MIDI API is not supported by your browser.")))},i.prototype.disable=function(){if(!this.supported)throw new Error("The Web MIDI API is not supported by your browser.");this.enabled&&(this.removeListener(),this.inputs.forEach((function(e){e.removeListener()}))),this.interface&&(this.interface.onstatechange=void 0),this.interface=void 0,this._inputs=[],this._outputs=[],this._nrpnEventsEnabled=!0,this._resetInterfaceUserHandlers()},i.prototype.addListener=function(e,t){if(!this.enabled)throw new Error("WebMidi must be enabled before adding event listeners.");if("function"!=typeof t)throw new TypeError("The 'listener' parameter must be a function.");if(!(0<=this._midiInterfaceEvents.indexOf(e)))throw new TypeError("The specified event type is not supported.");return this._userHandlers[e].push(t),this},i.prototype.hasListener=function(e,t){if(!this.enabled)throw new Error("WebMidi must be enabled before checking event listeners.");if("function"!=typeof t)throw new TypeError("The 'listener' parameter must be a function.");if(!(0<=this._midiInterfaceEvents.indexOf(e)))throw new TypeError("The specified event type is not supported.");for(var n=0;n<this._userHandlers[e].length;n++)if(this._userHandlers[e][n]===t)return!0;return!1},i.prototype.removeListener=function(e,t){if(!this.enabled)throw new Error("WebMidi must be enabled before removing event listeners.");if(void 0!==t&&"function"!=typeof t)throw new TypeError("The 'listener' parameter must be a function.");if(0<=this._midiInterfaceEvents.indexOf(e))if(t)for(var n=0;n<this._userHandlers[e].length;n++)this._userHandlers[e][n]===t&&this._userHandlers[e].splice(n,1);else this._userHandlers[e]=[];else{if(void 0!==e)throw new TypeError("The specified event type is not supported.");this._resetInterfaceUserHandlers()}return this},i.prototype.toMIDIChannels=function(e){var t;if("all"===e||void 0===e)t=["all"];else{if("none"===e)return[];t=Array.isArray(e)?e:[e]}return-1<t.indexOf("all")&&(t=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),t.map((function(e){return parseInt(e)})).filter((function(e){return 1<=e&&e<=16}))},i.prototype.getInputById=function(e){if(!this.enabled)throw new Error("WebMidi is not enabled.");e=String(e);for(var t=0;t<this.inputs.length;t++)if(this.inputs[t].id===e)return this.inputs[t];return!1},i.prototype.getOutputById=function(e){if(!this.enabled)throw new Error("WebMidi is not enabled.");e=String(e);for(var t=0;t<this.outputs.length;t++)if(this.outputs[t].id===e)return this.outputs[t];return!1},i.prototype.getInputByName=function(e){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var t=0;t<this.inputs.length;t++)if(~this.inputs[t].name.indexOf(e))return this.inputs[t];return!1},i.prototype.getOctave=function(e){if(null!=e&&0<=e&&e<=127)return Math.floor(Math.floor(e)/12-1)+Math.floor(a.octaveOffset)},i.prototype.getOutputByName=function(e){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var t=0;t<this.outputs.length;t++)if(~this.outputs[t].name.indexOf(e))return this.outputs[t];return!1},i.prototype.guessNoteNumber=function(e){var t=!1;if(e&&e.toFixed&&0<=e&&e<=127?t=Math.round(e):0<=parseInt(e)&&parseInt(e)<=127?t=parseInt(e):("string"==typeof e||e instanceof String)&&(t=this.noteNameToNumber(e)),!1===t)throw new Error("Invalid input value ("+e+").");return t},i.prototype.noteNameToNumber=function(e){"string"!=typeof e&&(e="");var t=e.match(/([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)/i);if(!t)throw new RangeError("Invalid note name.");var n=a._semitones[t[1].toUpperCase()],r=12*(parseInt(t[3])+1-Math.floor(a.octaveOffset))+n;if(-1<t[2].toLowerCase().indexOf("b")?r-=t[2].length:-1<t[2].toLowerCase().indexOf("#")&&(r+=t[2].length),r<0||127<r)throw new RangeError("Invalid note name or note outside valid range.");return r},i.prototype._updateInputsAndOutputs=function(){this._updateInputs(),this._updateOutputs()},i.prototype._updateInputs=function(){for(var e=0;e<this._inputs.length;e++){for(var t=!0,n=this.interface.inputs.values(),r=n.next();r&&!r.done;r=n.next())if(this._inputs[e]._midiInput===r.value){t=!1;break}t&&this._inputs.splice(e,1)}this.interface&&this.interface.inputs.forEach(function(e){for(var t=!0,n=0;n<this._inputs.length;n++)this._inputs[n]._midiInput===e&&(t=!1);t&&this._inputs.push(new o(e))}.bind(this))},i.prototype._updateOutputs=function(){for(var e=0;e<this._outputs.length;e++){for(var t=!0,n=this.interface.outputs.values(),r=n.next();r&&!r.done;r=n.next())if(this._outputs[e]._midiOutput===r.value){t=!1;break}t&&this._outputs.splice(e,1)}this.interface&&this.interface.outputs.forEach(function(e){for(var t=!0,n=0;n<this._outputs.length;n++)this._outputs[n]._midiOutput===e&&(t=!1);t&&this._outputs.push(new s(e))}.bind(this))},i.prototype._onInterfaceStateChange=function(e){this._updateInputsAndOutputs();var t={timestamp:e.timeStamp,type:e.port.state};this.interface&&"connected"===e.port.state?"output"===e.port.type?t.port=this.getOutputById(e.port.id):"input"===e.port.type&&(t.port=this.getInputById(e.port.id)):t.port={connection:"closed",id:e.port.id,manufacturer:e.port.manufacturer,name:e.port.name,state:e.port.state,type:e.port.type},this._userHandlers[e.port.state].forEach((function(e){e(t)}))},i.prototype._resetInterfaceUserHandlers=function(){for(var e=0;e<this._midiInterfaceEvents.length;e++)this._userHandlers[this._midiInterfaceEvents[e]]=[]},o.prototype.on=o.prototype.addListener=function(e,t,n){var r=this;if(void 0===t&&(t="all"),Array.isArray(t)||(t=[t]),t.forEach((function(e){if("all"!==e&&!(1<=e&&e<=16))throw new RangeError("The 'channel' parameter is invalid.")})),"function"!=typeof n)throw new TypeError("The 'listener' parameter must be a function.");if(void 0!==a.MIDI_SYSTEM_MESSAGES[e])this._userHandlers.system[e]||(this._userHandlers.system[e]=[]),this._userHandlers.system[e].push(n);else{if(void 0===a.MIDI_CHANNEL_MESSAGES[e])throw new TypeError("The specified event type is not supported.");if(-1<t.indexOf("all")){t=[];for(var i=1;i<=16;i++)t.push(i)}this._userHandlers.channel[e]||(this._userHandlers.channel[e]=[]),t.forEach((function(t){r._userHandlers.channel[e][t]||(r._userHandlers.channel[e][t]=[]),r._userHandlers.channel[e][t].push(n)}))}return this},o.prototype.hasListener=function(e,t,n){var r=this;if("function"!=typeof n)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===t&&(t="all"),t.constructor!==Array&&(t=[t]),void 0!==a.MIDI_SYSTEM_MESSAGES[e]){for(var i=0;i<this._userHandlers.system[e].length;i++)if(this._userHandlers.system[e][i]===n)return!0}else if(void 0!==a.MIDI_CHANNEL_MESSAGES[e]){if(-1<t.indexOf("all")){t=[];for(var o=1;o<=16;o++)t.push(o)}return!!this._userHandlers.channel[e]&&t.every((function(t){var i=r._userHandlers.channel[e][t];return i&&-1<i.indexOf(n)}))}return!1},o.prototype.removeListener=function(e,t,n){var r=this;if(void 0!==n&&"function"!=typeof n)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===t&&(t="all"),t.constructor!==Array&&(t=[t]),void 0!==a.MIDI_SYSTEM_MESSAGES[e])if(void 0===n)this._userHandlers.system[e]=[];else for(var i=0;i<this._userHandlers.system[e].length;i++)this._userHandlers.system[e][i]===n&&this._userHandlers.system[e].splice(i,1);else if(void 0!==a.MIDI_CHANNEL_MESSAGES[e]){if(-1<t.indexOf("all")){t=[];for(var o=1;o<=16;o++)t.push(o)}if(!this._userHandlers.channel[e])return this;t.forEach((function(t){var i=r._userHandlers.channel[e][t];if(i)if(void 0===n)r._userHandlers.channel[e][t]=[];else for(var a=0;a<i.length;a++)i[a]===n&&i.splice(a,1)}))}else{if(void 0!==e)throw new TypeError("The specified event type is not supported.");this._initializeUserHandlers()}return this},o.prototype._initializeUserHandlers=function(){for(var e in a.MIDI_CHANNEL_MESSAGES)Object.prototype.hasOwnProperty.call(a.MIDI_CHANNEL_MESSAGES,e)&&(this._userHandlers.channel[e]={});for(var t in a.MIDI_SYSTEM_MESSAGES)Object.prototype.hasOwnProperty.call(a.MIDI_SYSTEM_MESSAGES,t)&&(this._userHandlers.system[t]=[])},o.prototype._onMidiMessage=function(e){if(0<this._userHandlers.system.midimessage.length){var t={target:this,data:e.data,timestamp:e.timeStamp,type:"midimessage"};this._userHandlers.system.midimessage.forEach((function(e){e(t)}))}e.data[0]<240?(this._parseChannelEvent(e),this._parseNrpnEvent(e)):e.data[0]<=255&&this._parseSystemEvent(e)},o.prototype._parseNrpnEvent=function(e){var t,n,r=e.data[0]>>4,i=15&e.data[0],o=1+i;if(1<e.data.length&&(t=e.data[1],n=2<e.data.length?e.data[2]:void 0),a.nrpnEventsEnabled&&r===a.MIDI_CHANNEL_MESSAGES.controlchange&&(t>=a.MIDI_NRPN_MESSAGES.increment&&t<=a.MIDI_NRPN_MESSAGES.parammsb||t===a.MIDI_NRPN_MESSAGES.entrymsb||t===a.MIDI_NRPN_MESSAGES.entrylsb)){var s={target:this,type:"controlchange",data:e.data,timestamp:e.timeStamp,channel:o,controller:{number:t,name:this.getCcNameByNumber(t)},value:n};if(s.controller.number===a.MIDI_NRPN_MESSAGES.parammsb&&s.value!=a.MIDI_NRPN_MESSAGES.nullactiveparameter)a._nrpnBuffer[i]=[],a._nrpnBuffer[i][0]=s;else if(1===a._nrpnBuffer[i].length&&s.controller.number===a.MIDI_NRPN_MESSAGES.paramlsb)a._nrpnBuffer[i].push(s);else if(2!==a._nrpnBuffer[i].length||s.controller.number!==a.MIDI_NRPN_MESSAGES.increment&&s.controller.number!==a.MIDI_NRPN_MESSAGES.decrement&&s.controller.number!==a.MIDI_NRPN_MESSAGES.entrymsb)if(3===a._nrpnBuffer[i].length&&a._nrpnBuffer[i][2].number===a.MIDI_NRPN_MESSAGES.entrymsb&&s.controller.number===a.MIDI_NRPN_MESSAGES.entrylsb)a._nrpnBuffer[i].push(s);else if(3<=a._nrpnBuffer[i].length&&a._nrpnBuffer[i].length<=4&&s.controller.number===a.MIDI_NRPN_MESSAGES.parammsb&&s.value===a.MIDI_NRPN_MESSAGES.nullactiveparameter)a._nrpnBuffer[i].push(s);else if(4<=a._nrpnBuffer[i].length&&a._nrpnBuffer[i].length<=5&&s.controller.number===a.MIDI_NRPN_MESSAGES.paramlsb&&s.value===a.MIDI_NRPN_MESSAGES.nullactiveparameter){a._nrpnBuffer[i].push(s);var u=[];a._nrpnBuffer[i].forEach((function(e){u.push(e.data)}));var c=a._nrpnBuffer[i][0].value<<7|a._nrpnBuffer[i][1].value,l=a._nrpnBuffer[i][2].value;6===a._nrpnBuffer[i].length&&(l=a._nrpnBuffer[i][2].value<<7|a._nrpnBuffer[i][3].value);var h="";switch(a._nrpnBuffer[i][2].controller.number){case a.MIDI_NRPN_MESSAGES.entrymsb:h=a._nrpnTypes[0];break;case a.MIDI_NRPN_MESSAGES.increment:h=a._nrpnTypes[1];break;case a.MIDI_NRPN_MESSAGES.decrement:h=a._nrpnTypes[2];break;default:throw new Error("The NPRN type was unidentifiable.")}var f={timestamp:s.timestamp,channel:s.channel,type:"nrpn",data:u,controller:{number:c,type:h,name:"Non-Registered Parameter "+c},value:l};a._nrpnBuffer[i]=[],this._userHandlers.channel[f.type]&&this._userHandlers.channel[f.type][f.channel]&&this._userHandlers.channel[f.type][f.channel].forEach((function(e){e(f)}))}else a._nrpnBuffer[i]=[];else a._nrpnBuffer[i].push(s)}},o.prototype._parseChannelEvent=function(e){var t,n,r=e.data[0]>>4,i=1+(15&e.data[0]);1<e.data.length&&(t=e.data[1],n=2<e.data.length?e.data[2]:void 0);var o={target:this,data:e.data,timestamp:e.timeStamp,channel:i};r===a.MIDI_CHANNEL_MESSAGES.noteoff||r===a.MIDI_CHANNEL_MESSAGES.noteon&&0===n?(o.type="noteoff",o.note={number:t,name:a._notes[t%12],octave:a.getOctave(t)},o.velocity=n/127,o.rawVelocity=n):r===a.MIDI_CHANNEL_MESSAGES.noteon?(o.type="noteon",o.note={number:t,name:a._notes[t%12],octave:a.getOctave(t)},o.velocity=n/127,o.rawVelocity=n):r===a.MIDI_CHANNEL_MESSAGES.keyaftertouch?(o.type="keyaftertouch",o.note={number:t,name:a._notes[t%12],octave:a.getOctave(t)},o.value=n/127):r===a.MIDI_CHANNEL_MESSAGES.controlchange&&0<=t&&t<=119?(o.type="controlchange",o.controller={number:t,name:this.getCcNameByNumber(t)},o.value=n):r===a.MIDI_CHANNEL_MESSAGES.channelmode&&120<=t&&t<=127?(o.type="channelmode",o.controller={number:t,name:this.getChannelModeByNumber(t)},o.value=n):r===a.MIDI_CHANNEL_MESSAGES.programchange?(o.type="programchange",o.value=t):r===a.MIDI_CHANNEL_MESSAGES.channelaftertouch?(o.type="channelaftertouch",o.value=t/127):r===a.MIDI_CHANNEL_MESSAGES.pitchbend?(o.type="pitchbend",o.value=((n<<7)+t-8192)/8192):o.type="unknownchannelmessage",this._userHandlers.channel[o.type]&&this._userHandlers.channel[o.type][i]&&this._userHandlers.channel[o.type][i].forEach((function(e){e(o)}))},o.prototype.getCcNameByNumber=function(e){if(!(0<=(e=Math.floor(e))&&e<=119))throw new RangeError("The control change number must be between 0 and 119.");for(var t in a.MIDI_CONTROL_CHANGE_MESSAGES)if(Object.prototype.hasOwnProperty.call(a.MIDI_CONTROL_CHANGE_MESSAGES,t)&&e===a.MIDI_CONTROL_CHANGE_MESSAGES[t])return t},o.prototype.getChannelModeByNumber=function(e){if(!(120<=(e=Math.floor(e))&&status<=127))throw new RangeError("The control change number must be between 120 and 127.");for(var t in a.MIDI_CHANNEL_MODE_MESSAGES)if(Object.prototype.hasOwnProperty.call(a.MIDI_CHANNEL_MODE_MESSAGES,t)&&e===a.MIDI_CHANNEL_MODE_MESSAGES[t])return t},o.prototype._parseSystemEvent=function(e){var t=e.data[0],n={target:this,data:e.data,timestamp:e.timeStamp};t===a.MIDI_SYSTEM_MESSAGES.sysex?n.type="sysex":t===a.MIDI_SYSTEM_MESSAGES.timecode?n.type="timecode":t===a.MIDI_SYSTEM_MESSAGES.songposition?n.type="songposition":t===a.MIDI_SYSTEM_MESSAGES.songselect?(n.type="songselect",n.song=e.data[1]):t===a.MIDI_SYSTEM_MESSAGES.tuningrequest?n.type="tuningrequest":t===a.MIDI_SYSTEM_MESSAGES.clock?n.type="clock":t===a.MIDI_SYSTEM_MESSAGES.start?n.type="start":t===a.MIDI_SYSTEM_MESSAGES.continue?n.type="continue":t===a.MIDI_SYSTEM_MESSAGES.stop?n.type="stop":t===a.MIDI_SYSTEM_MESSAGES.activesensing?n.type="activesensing":t===a.MIDI_SYSTEM_MESSAGES.reset?n.type="reset":n.type="unknownsystemmessage",this._userHandlers.system[n.type]&&this._userHandlers.system[n.type].forEach((function(e){e(n)}))},s.prototype.send=function(e,t,n){if(!(128<=e&&e<=255))throw new RangeError("The status byte must be an integer between 128 (0x80) and 255 (0xFF).");void 0===t&&(t=[]),Array.isArray(t)||(t=[t]);var r=[];return t.forEach((function(e){var t=Math.floor(e);if(!(0<=t&&t<=255))throw new RangeError("Data bytes must be integers between 0 (0x00) and 255 (0xFF).");r.push(t)})),this._midiOutput.send([e].concat(r),parseFloat(n)||0),this},s.prototype.sendSysex=function(e,t,n){if(!a.sysexEnabled)throw new Error("Sysex message support must first be activated.");return n=n||{},e=[].concat(e),t.forEach((function(e){if(e<0||127<e)throw new RangeError("The data bytes of a sysex message must be integers between 0 (0x00) and 127 (0x7F).")})),t=e.concat(t,a.MIDI_SYSTEM_MESSAGES.sysexend),this.send(a.MIDI_SYSTEM_MESSAGES.sysex,t,this._parseTimeParameter(n.time)),this},s.prototype.sendTimecodeQuarterFrame=function(e,t){return t=t||{},this.send(a.MIDI_SYSTEM_MESSAGES.timecode,e,this._parseTimeParameter(t.time)),this},s.prototype.sendSongPosition=function(e,t){t=t||{};var n=(e=Math.floor(e)||0)>>7&127,r=127&e;return this.send(a.MIDI_SYSTEM_MESSAGES.songposition,[n,r],this._parseTimeParameter(t.time)),this},s.prototype.sendSongSelect=function(e,t){if(t=t||{},!(0<=(e=Math.floor(e))&&e<=127))throw new RangeError("The song number must be between 0 and 127.");return this.send(a.MIDI_SYSTEM_MESSAGES.songselect,[e],this._parseTimeParameter(t.time)),this},s.prototype.sendTuningRequest=function(e){return e=e||{},this.send(a.MIDI_SYSTEM_MESSAGES.tuningrequest,void 0,this._parseTimeParameter(e.time)),this},s.prototype.sendClock=function(e){return e=e||{},this.send(a.MIDI_SYSTEM_MESSAGES.clock,void 0,this._parseTimeParameter(e.time)),this},s.prototype.sendStart=function(e){return e=e||{},this.send(a.MIDI_SYSTEM_MESSAGES.start,void 0,this._parseTimeParameter(e.time)),this},s.prototype.sendContinue=function(e){return e=e||{},this.send(a.MIDI_SYSTEM_MESSAGES.continue,void 0,this._parseTimeParameter(e.time)),this},s.prototype.sendStop=function(e){return e=e||{},this.send(a.MIDI_SYSTEM_MESSAGES.stop,void 0,this._parseTimeParameter(e.time)),this},s.prototype.sendActiveSensing=function(e){return e=e||{},this.send(a.MIDI_SYSTEM_MESSAGES.activesensing,[],this._parseTimeParameter(e.time)),this},s.prototype.sendReset=function(e){return e=e||{},this.send(a.MIDI_SYSTEM_MESSAGES.reset,void 0,this._parseTimeParameter(e.time)),this},s.prototype.stopNote=function(e,t,n){if("all"===e)return this.sendChannelMode("allnotesoff",0,t,n);var r=64;return(n=n||{}).rawVelocity?!isNaN(n.velocity)&&0<=n.velocity&&n.velocity<=127&&(r=n.velocity):!isNaN(n.velocity)&&0<=n.velocity&&n.velocity<=1&&(r=127*n.velocity),this._convertNoteToArray(e).forEach(function(e){a.toMIDIChannels(t).forEach(function(t){this.send((a.MIDI_CHANNEL_MESSAGES.noteoff<<4)+(t-1),[e,Math.round(r)],this._parseTimeParameter(n.time))}.bind(this))}.bind(this)),this},s.prototype.playNote=function(e,t,n){var r,i=64;if((n=n||{}).rawVelocity?!isNaN(n.velocity)&&0<=n.velocity&&n.velocity<=127&&(i=n.velocity):!isNaN(n.velocity)&&0<=n.velocity&&n.velocity<=1&&(i=127*n.velocity),r=this._parseTimeParameter(n.time),this._convertNoteToArray(e).forEach(function(e){a.toMIDIChannels(t).forEach(function(t){this.send((a.MIDI_CHANNEL_MESSAGES.noteon<<4)+(t-1),[e,Math.round(i)],r)}.bind(this))}.bind(this)),!isNaN(n.duration)){n.duration<=0&&(n.duration=0);var o=64;n.rawVelocity?!isNaN(n.release)&&0<=n.release&&n.release<=127&&(o=n.release):!isNaN(n.release)&&0<=n.release&&n.release<=1&&(o=127*n.release),this._convertNoteToArray(e).forEach(function(e){a.toMIDIChannels(t).forEach(function(t){this.send((a.MIDI_CHANNEL_MESSAGES.noteoff<<4)+(t-1),[e,Math.round(o)],(r||a.time)+n.duration)}.bind(this))}.bind(this))}return this},s.prototype.sendKeyAftertouch=function(e,t,n,r){var i=this;if(r=r||{},t<1||16<t)throw new RangeError("The channel must be between 1 and 16.");(isNaN(n)||n<0||1<n)&&(n=.5);var o=Math.round(127*n);return this._convertNoteToArray(e).forEach((function(e){a.toMIDIChannels(t).forEach((function(t){i.send((a.MIDI_CHANNEL_MESSAGES.keyaftertouch<<4)+(t-1),[e,o],i._parseTimeParameter(r.time))}))})),this},s.prototype.sendControlChange=function(e,t,n,r){if(r=r||{},"string"==typeof e){if(void 0===(e=a.MIDI_CONTROL_CHANGE_MESSAGES[e]))throw new TypeError("Invalid controller name.")}else if(!(0<=(e=Math.floor(e))&&e<=119))throw new RangeError("Controller numbers must be between 0 and 119.");if(!(0<=(t=Math.floor(t)||0)&&t<=127))throw new RangeError("Controller value must be between 0 and 127.");return a.toMIDIChannels(n).forEach(function(n){this.send((a.MIDI_CHANNEL_MESSAGES.controlchange<<4)+(n-1),[e,t],this._parseTimeParameter(r.time))}.bind(this)),this},s.prototype._selectRegisteredParameter=function(e,t,n){var r=this;if(e[0]=Math.floor(e[0]),!(0<=e[0]&&e[0]<=127))throw new RangeError("The control65 value must be between 0 and 127");if(e[1]=Math.floor(e[1]),!(0<=e[1]&&e[1]<=127))throw new RangeError("The control64 value must be between 0 and 127");return a.toMIDIChannels(t).forEach((function(){r.sendControlChange(101,e[0],t,{time:n}),r.sendControlChange(100,e[1],t,{time:n})})),this},s.prototype._selectNonRegisteredParameter=function(e,t,n){var r=this;if(e[0]=Math.floor(e[0]),!(0<=e[0]&&e[0]<=127))throw new RangeError("The control63 value must be between 0 and 127");if(e[1]=Math.floor(e[1]),!(0<=e[1]&&e[1]<=127))throw new RangeError("The control62 value must be between 0 and 127");return a.toMIDIChannels(t).forEach((function(){r.sendControlChange(99,e[0],t,{time:n}),r.sendControlChange(98,e[1],t,{time:n})})),this},s.prototype._setCurrentRegisteredParameter=function(e,t,n){var r=this;if((e=[].concat(e))[0]=Math.floor(e[0]),!(0<=e[0]&&e[0]<=127))throw new RangeError("The msb value must be between 0 and 127");return a.toMIDIChannels(t).forEach((function(){r.sendControlChange(6,e[0],t,{time:n})})),e[1]=Math.floor(e[1]),0<=e[1]&&e[1]<=127&&a.toMIDIChannels(t).forEach((function(){r.sendControlChange(38,e[1],t,{time:n})})),this},s.prototype._deselectRegisteredParameter=function(e,t){var n=this;return a.toMIDIChannels(e).forEach((function(){n.sendControlChange(101,127,e,{time:t}),n.sendControlChange(100,127,e,{time:t})})),this},s.prototype.setRegisteredParameter=function(e,t,n,r){var i=this;if(r=r||{},!Array.isArray(e)){if(!a.MIDI_REGISTERED_PARAMETER[e])throw new Error("The specified parameter is not available.");e=a.MIDI_REGISTERED_PARAMETER[e]}return a.toMIDIChannels(n).forEach((function(){i._selectRegisteredParameter(e,n,r.time),i._setCurrentRegisteredParameter(t,n,r.time),i._deselectRegisteredParameter(n,r.time)})),this},s.prototype.setNonRegisteredParameter=function(e,t,n,r){var i=this;if(r=r||{},!(0<=e[0]&&e[0]<=127&&0<=e[1]&&e[1]<=127))throw new Error("Position 0 and 1 of the 2-position parameter array must both be between 0 and 127.");return t=[].concat(t),a.toMIDIChannels(n).forEach((function(){i._selectNonRegisteredParameter(e,n,r.time),i._setCurrentRegisteredParameter(t,n,r.time),i._deselectRegisteredParameter(n,r.time)})),this},s.prototype.incrementRegisteredParameter=function(e,t,n){var r=this;if(n=n||{},!Array.isArray(e)){if(!a.MIDI_REGISTERED_PARAMETER[e])throw new Error("The specified parameter is not available.");e=a.MIDI_REGISTERED_PARAMETER[e]}return a.toMIDIChannels(t).forEach((function(){r._selectRegisteredParameter(e,t,n.time),r.sendControlChange(96,0,t,{time:n.time}),r._deselectRegisteredParameter(t,n.time)})),this},s.prototype.decrementRegisteredParameter=function(e,t,n){if(n=n||{},!Array.isArray(e)){if(!a.MIDI_REGISTERED_PARAMETER[e])throw new TypeError("The specified parameter is not available.");e=a.MIDI_REGISTERED_PARAMETER[e]}return a.toMIDIChannels(t).forEach(function(){this._selectRegisteredParameter(e,t,n.time),this.sendControlChange(97,0,t,{time:n.time}),this._deselectRegisteredParameter(t,n.time)}.bind(this)),this},s.prototype.setPitchBendRange=function(e,t,n,r){var i=this;if(r=r||{},!(0<=(e=Math.floor(e)||0)&&e<=127))throw new RangeError("The semitones value must be between 0 and 127");if(!(0<=(t=Math.floor(t)||0)&&t<=127))throw new RangeError("The cents value must be between 0 and 127");return a.toMIDIChannels(n).forEach((function(){i.setRegisteredParameter("pitchbendrange",[e,t],n,{time:r.time})})),this},s.prototype.setModulationRange=function(e,t,n,r){var i=this;if(r=r||{},!(0<=(e=Math.floor(e)||0)&&e<=127))throw new RangeError("The semitones value must be between 0 and 127");if(!(0<=(t=Math.floor(t)||0)&&t<=127))throw new RangeError("The cents value must be between 0 and 127");return a.toMIDIChannels(n).forEach((function(){i.setRegisteredParameter("modulationrange",[e,t],n,{time:r.time})})),this},s.prototype.setMasterTuning=function(e,t,n){var r=this;if(n=n||{},(e=parseFloat(e)||0)<=-65||64<=e)throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");var i=Math.floor(e)+64,o=e-Math.floor(e),s=(o=Math.round((o+1)/2*16383))>>7&127,u=127&o;return a.toMIDIChannels(t).forEach((function(){r.setRegisteredParameter("channelcoarsetuning",i,t,{time:n.time}),r.setRegisteredParameter("channelfinetuning",[s,u],t,{time:n.time})})),this},s.prototype.setTuningProgram=function(e,t,n){var r=this;if(n=n||{},!(0<=(e=Math.floor(e))&&e<=127))throw new RangeError("The program value must be between 0 and 127");return a.toMIDIChannels(t).forEach((function(){r.setRegisteredParameter("tuningprogram",e,t,{time:n.time})})),this},s.prototype.setTuningBank=function(e,t,n){var r=this;if(n=n||{},!(0<=(e=Math.floor(e)||0)&&e<=127))throw new RangeError("The bank value must be between 0 and 127");return a.toMIDIChannels(t).forEach((function(){r.setRegisteredParameter("tuningbank",e,t,{time:n.time})})),this},s.prototype.sendChannelMode=function(e,t,n,r){if(r=r||{},"string"==typeof e){if(!(e=a.MIDI_CHANNEL_MODE_MESSAGES[e]))throw new TypeError("Invalid channel mode message name.")}else if(!(120<=(e=Math.floor(e))&&e<=127))throw new RangeError("Channel mode numerical identifiers must be between 120 and 127.");if((t=Math.floor(t)||0)<0||127<t)throw new RangeError("Value must be an integer between 0 and 127.");return a.toMIDIChannels(n).forEach(function(n){this.send((a.MIDI_CHANNEL_MESSAGES.channelmode<<4)+(n-1),[e,t],this._parseTimeParameter(r.time))}.bind(this)),this},s.prototype.sendProgramChange=function(e,t,n){var r=this;if(n=n||{},e=Math.floor(e),isNaN(e)||e<0||127<e)throw new RangeError("Program numbers must be between 0 and 127.");return a.toMIDIChannels(t).forEach((function(t){r.send((a.MIDI_CHANNEL_MESSAGES.programchange<<4)+(t-1),[e],r._parseTimeParameter(n.time))})),this},s.prototype.sendChannelAftertouch=function(e,t,n){var r=this;n=n||{},e=parseFloat(e),(isNaN(e)||e<0||1<e)&&(e=.5);var i=Math.round(127*e);return a.toMIDIChannels(t).forEach((function(e){r.send((a.MIDI_CHANNEL_MESSAGES.channelaftertouch<<4)+(e-1),[i],r._parseTimeParameter(n.time))})),this},s.prototype.sendPitchBend=function(e,t,n){var r=this;if(n=n||{},isNaN(e)||e<-1||1<e)throw new RangeError("Pitch bend value must be between -1 and 1.");var i=Math.round((e+1)/2*16383),o=i>>7&127,s=127&i;return a.toMIDIChannels(t).forEach((function(e){r.send((a.MIDI_CHANNEL_MESSAGES.pitchbend<<4)+(e-1),[s,o],r._parseTimeParameter(n.time))})),this},s.prototype._parseTimeParameter=function(e){var t,n=parseFloat(e);return"string"==typeof e&&"+"===e.substring(0,1)?n&&0<n&&(t=a.time+n):n>a.time&&(t=n),t},s.prototype._convertNoteToArray=function(e){var t=[];return Array.isArray(e)||(e=[e]),e.forEach((function(e){t.push(a.guessNoteNumber(e))})),t},void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},8607:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5785),i=n(9703);function a(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var o=function e(t,n){function r(e,r,i){if("undefined"!=typeof document){"number"==typeof(i=a({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var s in i)i[s]&&(o+="; "+s,!0!==i[s]&&(o+="="+i[s].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+o}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},i=0;i<n.length;i++){var a=n[i].split("="),o=a.slice(1).join("=");try{var s=decodeURIComponent(a[0]);if(r[s]=t.read(o,s),e===s)break}catch(u){}}return e?r[e]:r}},remove:function(e,t){r(e,"",a({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,a({},this.attributes,t))},withConverter:function(t){return e(a({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),s=o,u=n(7294),c=n(1860),l=n.n(c),h=n(5525),f=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],p=n(5900),d=n.n(p),m=function(){var e=(0,u.useState)([]),t=e[0],n=e[1],a=(0,u.useState)(s.get("selectedMidiInputDevice")),o=a[0],c=a[1],p=(0,u.useState)(!1),m=p[0],E=p[1],_=(0,u.useState)(""),S=_[0],M=_[1],I=(0,u.useState)(""),y=I[0],b=I[1],g=(0,u.useState)({}),v=g[0],N=g[1],w=(0,u.useState)(!1),A=w[0],D=w[1],T=(0,u.useState)(0),C=T[0],R=T[1],G={midiKey:"C",steps:[2,2,1,2,2,2,1]};function P(e){var t=[e.midiKey],n=function(e){var t=f.indexOf(e),n=f.length,i=f.slice(t,n);return i.concat.apply(i,(0,r.Z)(f.slice(0,t)))}(e.midiKey);return e.steps.reduce((function(e,r){return t.push(n[e]),e+r})),t}function H(){R(C+1),function(e){var t=e.scale,n=e.cleff,r=6,i=18;"bass"===n&&(r=13,i=34);var a=Math.floor(Math.random()*(i-r+1)+r),o=60-a,s=Math.floor(o/7)-2,u=t[o%7];b(u+s),N({noteIndex:a,cleff:n})}({scale:P(G),cleff:Math.random()>.5?"treble":"bass"})}function O(e){s.set("selectedMidiInputDevice",e,{expires:365});var t=l().getInputById(e);c(e),t&&m&&t.addListener("noteon","all",(function(e){console.log(e),M(e.note.name+e.note.octave)}))}return(0,u.useEffect)((function(){D(y===S)}),[A]),(0,u.useEffect)((function(){y===S&&H()}),[S,C]),(0,u.useEffect)((function(){l().enable((function(e){e?console.log("WebMidi could not be enabled.",e):(console.log("WebMidi enabled!"),E(!0),H()),l().inputs.length&&n(l().inputs),l().addListener("connected",(function(e){o&&O(o)})),l().addListener("disconnected",(function(e){}))}))}),[t]),m?u.createElement(h.Ar,{className:"home"},u.createElement(h.HJ,{title:"TODO"}),u.createElement("h1",null,"learn notes"),u.createElement("section",null,u.createElement("div",{className:"requestedKeyName"},u.createElement(i.FormattedMessage,{id:"staff.requestedKey",defaultMessage:"Requested Key"}),u.createElement("span",{className:"keyName"},y)),u.createElement("div",{className:"lastKeyName"},u.createElement(i.FormattedMessage,{id:"staff.pressedKey",defaultMessage:"Pressed Key"}),u.createElement("span",{className:"keyName"},S)),u.createElement("div",{className:"practiceCount"},u.createElement(i.FormattedMessage,{id:"staff.pressedKey",defaultMessage:"Pressed Key"}),u.createElement("span",{className:"counter"},C)),u.createElement(h.OU,{note:v}),u.createElement("div",{className:d()("result",A?"success":"result error")},A?"success":"error")),u.createElement("section",{className:"devices"},u.createElement("h3",null,"Available devices"),u.createElement("div",{className:"inputDeviceList"},t.map((function(e){return u.createElement("div",{className:"inputDeviceList__item",key:e.id,id:e.id},u.createElement("input",{type:"radio",id:e.name,name:"midiInput",value:e.id,checked:e.id===o,onChange:function(){return O(e.id)}}),u.createElement("label",{htmlFor:e.name},e.name))}))))):u.createElement("div",null,"Error TODO")}}}]);
//# sourceMappingURL=component---src-pages-notes-on-the-staff-tsx-b55ed3ea5a514b075ffe.js.map