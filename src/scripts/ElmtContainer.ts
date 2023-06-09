class ElmtContainer {
  public readonly canvas: HTMLCanvasElement;
  public readonly selectShape: HTMLSelectElement;
  public readonly rotateXObject: HTMLInputElement;
  public readonly rotateYObject: HTMLInputElement;
  public readonly rotateZObject: HTMLInputElement;
  public readonly buttonTranslateLeft: HTMLButtonElement;
  public readonly buttonTranslateRight: HTMLButtonElement;
  public readonly buttonTranslateUp: HTMLButtonElement;
  public readonly buttonTranslateDown: HTMLButtonElement;
  public readonly buttonTranslateOut: HTMLButtonElement;
  public readonly buttonTranslateIn: HTMLButtonElement;
  public readonly scaleFactor: HTMLInputElement;
  public readonly scaleButton: HTMLButtonElement;
  public readonly buttonShrink: HTMLButtonElement;
  public readonly buttonEnlarge: HTMLButtonElement;
  public readonly cameraRotateX: HTMLInputElement;
  public readonly cameraRotateY: HTMLInputElement;
  public readonly cameraRotateZ: HTMLInputElement;
  public readonly buttonZoomIn: HTMLButtonElement;
  public readonly buttonZoomOut: HTMLButtonElement;
  public readonly shaderOn: HTMLInputElement;
  public readonly animationOn: HTMLInputElement;
  public readonly buttonReset: HTMLButtonElement;
  public readonly buttonProjOrthographic: HTMLButtonElement;
  public readonly buttonProjPerspective: HTMLButtonElement;
  public readonly buttonProjOblique: HTMLButtonElement;
  public readonly horizontalCamera: HTMLInputElement;
  public readonly verticalCamera: HTMLInputElement;
  public readonly buttonSave: HTMLButtonElement;
  public readonly loadInput: HTMLInputElement;
  public readonly helpBtn: HTMLButtonElement;
  public readonly modalContainer: HTMLDivElement;
  public readonly modalBackdrop: HTMLDivElement;
  public readonly modalBody: HTMLDivElement;

  constructor() {
    const canvas = document.getElementById("canvas");
    const selectShape = document.getElementById("shape");

    const rotateXObject = document.getElementById("rotateX");
    const rotateYObject = document.getElementById("rotateY");
    const rotateZObject = document.getElementById("rotateZ");

    const buttonTranslateLeft = document.getElementById(
      "button-translate-left"
    );
    const buttonTranslateRight = document.getElementById(
      "button-translate-right"
    );
    const buttonTranslateUp = document.getElementById("button-translate-up");
    const buttonTranslateDown = document.getElementById(
      "button-translate-down"
    );
    const buttonTranslateOut = document.getElementById("button-translate-out");
    const buttonTranslateIn = document.getElementById("button-translate-in");
    const scaleFactor = document.getElementById("scale");
    const scaleButton = document.getElementById("button-scale");
    const buttonShrink = document.getElementById("button-shrink");
    const buttonEnlarge = document.getElementById("button-enlarge");

    const cameraRotateX = document.getElementById("cameraX");
    const cameraRotateY = document.getElementById("cameraY");
    const cameraRotateZ = document.getElementById("cameraZ");

    const buttonZoomIn = document.getElementById("button-zoom-in");
    const buttonZoomOut = document.getElementById("button-zoom-out");
    const shaderOn = document.getElementById("shader");
    const animationOn = document.getElementById("animation");
    const buttonReset = document.getElementById("button-reset");

    const buttonProjOrthographic = document.getElementById(
      "button-proj-orthographic"
    );
    const buttonProjPerspective = document.getElementById(
      "button-proj-perspective"
    );
    const buttonProjOblique = document.getElementById("button-proj-oblique");

    const horizontalCamera = document.getElementById("camera-horizontal");
    const verticalCamera = document.getElementById("camera-vertical");

    const buttonSave = document.getElementById("save");
    const loadInput = document.getElementById("load");
    const helpBtn = document.getElementById("help");

    const modalContainer = document.getElementById("modal-container");
    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalBody = document.getElementById("modal-body");

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error("Canvas not found");
    }
    if (!(selectShape instanceof HTMLSelectElement)) {
      throw new Error("Select not found");
    }
    if (!(rotateXObject instanceof HTMLInputElement)) {
      throw new Error("Rotate X not found");
    }
    if (!(rotateYObject instanceof HTMLInputElement)) {
      throw new Error("Rotate Y not found");
    }
    if (!(rotateZObject instanceof HTMLInputElement)) {
      throw new Error("Rotate Z not found");
    }
    if (!(buttonTranslateLeft instanceof HTMLButtonElement)) {
      throw new Error("Button translate left not found");
    }
    if (!(buttonTranslateRight instanceof HTMLButtonElement)) {
      throw new Error("Button translate right not found");
    }
    if (!(buttonTranslateUp instanceof HTMLButtonElement)) {
      throw new Error("Button translate up not found");
    }
    if (!(buttonTranslateDown instanceof HTMLButtonElement)) {
      throw new Error("Button translate down not found");
    }
    if (!(buttonTranslateOut instanceof HTMLButtonElement)) {
      throw new Error("Button translate out not found");
    }
    if (!(buttonTranslateIn instanceof HTMLButtonElement)) {
      throw new Error("Button translate in not found");
    }
    if (!(scaleFactor instanceof HTMLInputElement)) {
      throw new Error("Scale factor not found");
    }
    if (!(scaleButton instanceof HTMLButtonElement)) {
      throw new Error("Scale button not found");
    }
    if (!(buttonShrink instanceof HTMLButtonElement)) {
      throw new Error("Button shrink not found");
    }
    if (!(buttonEnlarge instanceof HTMLButtonElement)) {
      throw new Error("Button enlarge not found");
    }
    if (!(cameraRotateX instanceof HTMLInputElement)) {
      throw new Error("Camera rotate X not found");
    }
    if (!(cameraRotateY instanceof HTMLInputElement)) {
      throw new Error("Camera rotate Y not found");
    }
    if (!(cameraRotateZ instanceof HTMLInputElement)) {
      throw new Error("Camera rotate Z not found");
    }
    if (!(buttonZoomIn instanceof HTMLButtonElement)) {
      throw new Error("Button zoom in not found");
    }
    if (!(buttonZoomOut instanceof HTMLButtonElement)) {
      throw new Error("Button zoom out not found");
    }
    if (!(shaderOn instanceof HTMLInputElement)) {
      throw new Error("Shader on not found");
    }
    if (!(animationOn instanceof HTMLInputElement)) {
      throw new Error("Animation on not found");
    }
    if (!(buttonReset instanceof HTMLButtonElement)) {
      throw new Error("Button reset not found");
    }
    if (!(buttonProjOrthographic instanceof HTMLButtonElement)) {
      throw new Error("Button proj orthographic not found");
    }
    if (!(buttonProjPerspective instanceof HTMLButtonElement)) {
      throw new Error("Button proj perspective not found");
    }
    if (!(buttonProjOblique instanceof HTMLButtonElement)) {
      throw new Error("Button proj oblique not found");
    }
    if (!(horizontalCamera instanceof HTMLInputElement)) {
      throw new Error("Horizontal camera not found");
    }
    if (!(verticalCamera instanceof HTMLInputElement)) {
      throw new Error("Horizontal camera not found");
    }
    if (!(buttonSave instanceof HTMLButtonElement)) {
      throw new Error("save not found");
    }
    if (!(loadInput instanceof HTMLInputElement)) {
      throw new Error("Load not found");
    }
    if (!(helpBtn instanceof HTMLButtonElement)) {
      throw new Error("Help not found");
    }
    if (!(modalContainer instanceof HTMLDivElement)) {
      throw new Error("Modal container not found");
    }
    if (!(modalBackdrop instanceof HTMLDivElement)) {
      throw new Error("Modal backdrop not found");
    }
    if (!(modalBody instanceof HTMLDivElement)) {
      throw new Error("Modal body not found");
    }

    this.canvas = canvas;
    this.selectShape = selectShape;
    this.rotateXObject = rotateXObject;
    this.rotateYObject = rotateYObject;
    this.rotateZObject = rotateZObject;
    this.buttonTranslateLeft = buttonTranslateLeft;
    this.buttonTranslateRight = buttonTranslateRight;
    this.buttonTranslateUp = buttonTranslateUp;
    this.buttonTranslateDown = buttonTranslateDown;
    this.buttonTranslateOut = buttonTranslateOut;
    this.buttonTranslateIn = buttonTranslateIn;
    this.scaleFactor = scaleFactor;
    this.scaleButton = scaleButton;
    this.buttonShrink = buttonShrink;
    this.buttonEnlarge = buttonEnlarge;
    this.cameraRotateX = cameraRotateX;
    this.cameraRotateY = cameraRotateY;
    this.cameraRotateZ = cameraRotateZ;
    this.buttonZoomIn = buttonZoomIn;
    this.buttonZoomOut = buttonZoomOut;
    this.shaderOn = shaderOn;
    this.animationOn = animationOn;
    this.buttonReset = buttonReset;
    this.buttonProjOrthographic = buttonProjOrthographic;
    this.buttonProjPerspective = buttonProjPerspective;
    this.buttonProjOblique = buttonProjOblique;
    this.horizontalCamera = horizontalCamera;
    this.verticalCamera = verticalCamera;
    this.buttonSave = buttonSave;
    this.loadInput = loadInput;
    this.helpBtn = helpBtn;
    this.modalContainer = modalContainer;
    this.modalBackdrop = modalBackdrop;
    this.modalBody = modalBody;
  }
}
