/*
 * Whitecat Blocky Environment, sensor blocks
 *
 * Copyright (C) 2015 - 2016
 * IBEROXARXA SERVICIOS INTEGRALES, S.L. & CSS IBÉRICA, S.L.
 * 
 * Author: Jaume Olivé (jolive@iberoxarxa.com / jolive@whitecatboard.org)
 * 
 * All rights reserved.  
 *
 * Permission to use, copy, modify, and distribute this software
 * and its documentation for any purpose and without fee is hereby
 * granted, provided that the above copyright notice appear in all
 * copies and that both that the copyright notice and this
 * permission notice and warranty disclaimer appear in supporting
 * documentation, and that the name of the author not be used in
 * advertising or publicity pertaining to distribution of the
 * software without specific, written prior permission.
 *
 * The author disclaim all warranties with regard to this
 * software, including all implied warranties of merchantability
 * and fitness.  In no event shall the author be liable for any
 * special, indirect or consequential damages or any damages
 * whatsoever resulting from loss of use, data or profits, whether
 * in an action of contract, negligence or other tortious action,
 * arising out of or in connection with the use or performance of
 * this software.
 */
'use strict';

goog.provide('Blockly.Blocks.sensor');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.sensor.HUE = 290;


Blockly.Blocks['sensor_acquire'] = {
  createSensorIfNeeded: function() {
	// Get index for sensor
	var index = this.workspace.sensorIndexOf(this.name);

	// Sensor must be created
	if (index == -1) {
	  this.workspace.createSensor(
		  Blockly.Sensors.createSetupStructure(this.sid, this.name, this.interface, this.pin)
	  );
  
	  //Get index for sensor
	  index = this.workspace.sensorIndexOf(this.name);
	}
	
  	return index;		
  },
		
  /**
   * Mutator block for container.
   * @this Blockly.Block
   */
  init: function() {
      this.setHelpUrl(Blockly.Msg.SENSOR_ACQUIRE_HELPURL);
      this.setColour(Blockly.Blocks.sensor.HUE);
      this.appendDummyInput()
		  .appendField("", "NAME");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setTooltip(Blockly.Msg.SENSOR_ACQUIRE_TOOLTIP);
   },
   mutationToDom: function() {
     var container = document.createElement('mutation');

     container.setAttribute('interface', this.interface);
     container.setAttribute('pin', this.pin);
     container.setAttribute("sid", this.sid);
     container.setAttribute("name", this.name);
	 
     return container;
   },
   domToMutation: function(xmlElement) {
     this.interface = xmlElement.getAttribute('interface');
     this.pin = xmlElement.getAttribute('pin');
     this.sid = xmlElement.getAttribute("sid");
     this.name = xmlElement.getAttribute("name");
	 
	 this.updateShape_();
   },
   updateShape_: function() {	 
     if (typeof this.workspace.sensors == "undefined") return;

     this.createSensorIfNeeded();

	 this.getField("NAME").setText(Blockly.Msg.SENSOR_ACQUIRE.replace("%1",this.name).replace("%2",this.sid));
   }
};

Blockly.Blocks['sensor_read'] = {
  createSensorIfNeeded: Blockly.Blocks['sensor_acquire'].createSensorIfNeeded,
	
  /**
   * Mutator block for container.
   * @this Blockly.Block
   */
  init: function() {
      this.setHelpUrl(Blockly.Msg.SENSOR_READ_HELPURL);
      this.setColour(Blockly.Blocks.sensor.HUE);
	  
      this.appendDummyInput()
	      .appendField(Blockly.Msg.SENSOR_READ1)
	      .appendField(new Blockly.FieldDropdown([['magnitude','']]),"PROVIDES")
	  	  .appendField(Blockly.Msg.SENSOR_READ2, "NAME");
      this.setOutput(true);
      this.setTooltip(Blockly.Msg.SENSOR_READ_TOOLTIP);
  },
  mutationToDom: Blockly.Blocks['sensor_acquire'].mutationToDom,
  domToMutation: Blockly.Blocks['sensor_acquire'].domToMutation,
  updateShape_: function() {
	if (typeof this.workspace.sensors == "undefined") return;
	  
	var index = Blockly.getMainWorkspace().sensorIndexOf(this.name);	

	// Build provides option list
  	var provides = [];
	this.workspace.sensors.provides[index].forEach(function(item, index) {
		provides.push([item.id, item.id]);
	});

    this.getField("NAME").setText(Blockly.Msg.SENSOR_READ2.replace("%1",this.name).replace("%2",this.sid));
	this.getField("PROVIDES").menuGenerator_ = provides;
  }  
};

Blockly.Blocks['sensor_set'] = {
  createSensorIfNeeded: Blockly.Blocks['sensor_acquire'].createSensorIfNeeded,

  /**
   * Mutator block for container.
   * @this Blockly.Block
   */
  init: function() {
      this.setHelpUrl(Blockly.Msg.SENSOR_SET_HELPURL);
      this.setColour(Blockly.Blocks.sensor.HUE);
	  
      this.appendDummyInput()
	      .appendField(Blockly.Msg.SENSOR_SET1)	  
	      .appendField(new Blockly.FieldDropdown([['','']]),"SETTINGS")
	      .appendField(Blockly.Msg.SENSOR_SET2);	  
	  
	  this.appendValueInput("VALUE");
	  
      this.appendDummyInput()
		  .appendField("", "NAME");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);

      this.setTooltip(Blockly.Msg.SENSOR_SET_TOOLTIP);
  },
  mutationToDom: Blockly.Blocks['sensor_acquire'].mutationToDom,
  domToMutation: Blockly.Blocks['sensor_acquire'].domToMutation,
  updateShape_: function() {
  	if (typeof this.workspace.sensors == "undefined") return;

	var index = Blockly.getMainWorkspace().sensorIndexOf(this.name);	

	// Build settings option list
  	var settings = [];
	this.workspace.sensors.settings[index].forEach(function(item, index) {
		settings.push([item.id, item.id]);
	});

    this.getField("NAME").setText(Blockly.Msg.SENSOR_SET3.replace("%1",this.name).replace("%2",this.sid));
	this.getField("SETTINGS").menuGenerator_ = settings;
  }  
};