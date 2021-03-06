var MSG = {
  title: "Codi",
  blocks: "Blocs",
  linkTooltip: "Desa i enllaça als blocs.",
  runTooltip: "Executa el programa",
  badCode: "Error de programa:\n %1",
  timeout: "S'ha superat el nombre màxim d'iteracions d'execució.",
  trashTooltip: "Descarta tots els blocs",
  catLogic: "Lògica",
  catLoops: "Bucles",
  catMath: "Matemàtiques",
  catText: "Text",
  catLists: "Llistes",
  catColour: "Color",
  catVariables: "Variables",
  catFunctions: "Procediments",
  listVariable: "llista",
  textVariable: "text",
  httpRequestError: "Hi ha hagut un problema amb la sol·licitud.",
  linkAlert: "Comparteix els teus blocs amb aquest enllaç: %1",
  hashError: "Ho sentim, '%1' no es correspon amb cap fitxer desat de Blockly.",
  xmlError: "No s'ha pogut carregar el teu fitxer desat.  Potser va ser creat amb una versió diferent de Blockly?",
  badXml: "Error d'anàlisi XML:\n%1\n\nSeleccioneu 'Acceptar' per abandonar els vostres canvis, o 'Cancel·lar' per continuar editant l'XML.",

  // WHITECAT
  blockEditorTooltip: "Editor de blocs",
  previewButtonTooltip: "Veure el codi generat",
  developerModeTooltipOn: "Activa el mode de desenvolupador",
  developerModeTooltipOff: "Desactiva el mode de desenvolupador",
  catIO: "Entrada / Sortida",
  catControl: "Control",
  catExceptions: "Excepcions",
  catThreads: "Fils",
  editor: "Lua",
  board: "Placa",
  console: "Consola",	
  status: "Estat",
  fileSystem: "Arxius",
  boardConnected: "Placa conectada",
  boardDisconnected: "Placa desconectada",
  information: "Informació",
  sendingCode: "Enviant codi ...",
  retrievingDirectory: "Obtenint directori ...",
  downloadingFile: "Descarregant l'arxiu",
  sendingFile: "Enviant l'arxiu",
  DELETE_EDIT_CODE: "Vols esborrar el codi que estàs editant actualment?",
  catIODigital: 'Digital',
  catIOAnalog: 'Analògic',
  catIOPwm: 'PWM',
  boardInBootloaderMode: 'La placa està arrancant i encara no disposa d\'un firmware. Vols instal·lar ara el firmware?',
  firmwareUpgraded: 'El firmware s\'ha actualitzat',
  installNow: 'Si, actualitza ara',
  newFirmwareInstructions: 'Si us plau, desconecta qualsevol maquinari connectat a la placa abans d\'actualitzar el firmware.<br><br>Això és necessari perquè algunes plaques exposen els strapping pins, que són pins especials que poden interferir en el procés d\'actualització si no tenen el valor lògic esperat quan es reinicia la placa.',
	upgrade: 'Actualitzar ...',
  notNow: 'Ara no',	
  downloadingFirmware: 'Descarregant el firmware',
  rebooting: 'Reiniciant ...',
  newFirmware: 'Una nova versió del firmware està disponible per a la placa. Vols actualitzar-la?',
  firmwareNoNewVersion: 'No hi ha una nova versió disponible.',
  warning: "Avís",
  switchToCodeWarning: "Estás a punt de canviar de model de programació. El teu espai de treball en blocs serà esborrat. Podràs recuperar-lo després, si decideixes tornar a blocs. Continuar?.",
  switchToBlocksWarning: "Estás a punt de canviar de model de programació. El teu codi Lua serà esborrat. Podràs recuperar-lo després, si decideixes tornar a Lua. Continuar?.",
  yes: 'Sí',
  no: 'No', 
  waitingForBoard: 'Connecta una placa ...',
  target: 'Destí: ',
  loadBlockTitle: 'Selecciona un arxiu per carregar ...',
  loadFromDesktop: 'Carregar des de l\'ordinador ...',
  saveBlockTitle: 'Selecciona un arxiu o carpeta on guardar ...',
  save: 'Guardar',
  saveToBoard: 'Guardar a la placa',
  saveToDesktop: 'Guardar a l\'ordinador ...',
  saveAs: 'Guardar com: ',
  run: 'Executar',
  catComm: "Comunicacions",
  catI2C: "I2C",
  catCan: "CAN",
  runtimeError: "Error en temps d'execució",
  ok: "D'acord",
  youHaveAnError: "Tens un error en el teu codi:",
  value: 'valor',
  catLora: "LoRa",
  catLoraOTAA: "OTAA",
  catLoraABP: "ABP",
  catDelays: "Retards",
  catEvents: "Events",
  item: "Element",
  value: "Valor",
  installedFirmware: "Firmware instal·lat",
  cpuModel: "Model de CPU",
  checkForFirmwareUpdates: "Comprovar si hi han actualitzacions de firmware ...",
  switchToBlocksTooltip: 'Canvia a blocs',
  switchToCodeTooltip: 'Canvia a Lua',
  loadButtonTooltip: 'Carrega un programa',
  saveButtonTooltip: 'Guarda el programa', 
  saveAsButtonTooltip: 'Guarda el programa com ...',
  rebootButtonTooltip: 'Reinicia la placa',
  stopButtonTooltip: 'Atura el programa',
  cancel: 'Cancel·lar',
  error: 'Error',
  youHaveAnErrorInSettings: 'Tens un error a l\'arxiu settings.json:',
  youHaveAnErrorInFile: 'Tens un error a l\'arxiu ',
  missingAdapterId: 'No es troba el id de l\'adaptador',
  missingAdapterPlatform: "No es troba la informacío per a la plataforma ",
  missingAdapterPath: "No es troba la propietat path per a la plataforma ",
  missingAdapterDisplayName: "No es troba la propietat displayName per a la plataforma ",
  missingBoardId: 'No es troba el id de la placa',
  catSensor: "Sensors",
  catOperators: "Operadors",
  catOperatorsBitwise: "Bit a bit",
  catOperatorsNumeric: "Numérics",
  catOperatorsLogic: "Llògics",
  catOperatorsText: "Text",
  catActuators: "Actuadors",
  catServo: "Servo",
  catTFT: "Display TFT",
  catWIFI: "Wi-Fi",
  catNET: "Xarxa",
  catMQTT: "MQTT",
  catSystem: "Sistema",
  attachBoardForUseThisOption: "Si us plau, conecta una placa abans d'utilizar aquesta opció.",
  alert: "Atenció",
  pleaseUpgradeAgent: "Hi ha una nova versió de The Whitecat Create Agent. Si us plau, actualitzi a la nova versió, per assegurar el correcte funcionament de The Whitecat IDE.<br><br><button type=\"button\" class=\"btn btn-success btn-alert-instructions\" data-url=\"wiki/alerts/How-to-update\">Obrir les instruccions per actualitzar ...</button>",
  thisFuntionRequiresUpdateAgent: "Aquesta funció requereix una nova versió de The Whitecat Create Agent. <br><br><button type=\"button\" class=\"btn btn-success btn-alert-instructions\" data-url=\"wiki/alerts/How-to-update\">Obrir les instruccions per actualitzar ...</button>",
  connectABoard: "Connecta una placa",
  downloadingPrerequisites: "Descarregant prerequisits",
  invalidPrerequisites: "Els prerequisits no són vàlids",
  uploadingFramework: "Pujant prerequisits",
  downloadingEsptool: "Descarregant esptool",
  unpackingEsptool: "Desempaquetant esptool",
  downloadingFirmware: "Decarregant firmware",
  unpackingFirmware: "Desempaquetant firmware",
  noBoardAttached: "Cap placa connectada",
  scanningBoards: "Buscant plaques",
  pythonNotFound: "No s'ha trobat python",
  resetingBoard: "Reiniciant placa",
  stoppingProgram: "Aturant el programa",
  cannotConnectToAgent: "No es pot connectar a l'agent",
  corruptedFirmware: "Firmware corrupte",
  flashError: "Error a la flash",
  cloudConsoleOn: "Núvol",
  invalidFirmware: "Sembla que la teva placa no té instal·lat un firmware de Lua RTOS vàlid.<br><br>Vols instal·lar un firmware de Lua RTOS vàlid?.",
  selFirmware: "Seleccioneu el firmware que vols instal·lar a la placa:",
  installThisFirmware: "Instal·lar aquest firmware",
  invalidFirmwareInstructions: 'Si us plau, desconecteu qualsevol maquinari connectat a la placa abans d\'instal·lar el firmware.<br><br>Això és necessari perquè algunes plaques exposen els strapping pins, que són pins especials que poden interferir en el procés d\'instal·lació si no tenen el valor lògic esperat quan es reinicia la placa.'
};
