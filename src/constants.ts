export enum ArrowKeys {
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  ARROW_LEFT = "ArrowLeft",
  ARROW_RIGHT = "ArrowRight",
}

let VK_RED = 82; // r on keyboard
let VK_GREEN = 71; // g on keyboard
let VK_YELLOW = 89; // y on keyboard
let VK_BLUE = 66; // b on keyboard
let VK_UP = 38; // up on keyboard
let VK_DOWN = 40; // down on keyboard
let VK_LEFT = 37; // down on keyboard
let VK_RIGHT = 39; // down on keyboard?
let VK_ENTER = 13; // enter on keyboard
let VK_BACK = 8; // back on keyboard
let VK_PLAY = 80; // p on keyboard
let VK_PAUSE = 16; // SHIFT on keyboard
let VK_STOP = 83; // s on keyboard
let VK_SKIP_FORWARD = 190; // . on keyboard
let VK_SKIP_BACK = 188; // , on keyboard
let VK_PLAY_PAUSE = 32; // space on keyboard
let VK_REWIND = 219; // [ on keyboard
let VK_FAST_FWD = 221; // ] on keyboard

const VK_0 = 48; // 0 on keyboard
const VK_1 = 49; // 1 on keyboard
const VK_2 = 50; // 2 on keyboard
const VK_3 = 51; // 3 on keyboard
const VK_4 = 52; // 4 on keyboard
const VK_5 = 53; // 5 on keyboard
const VK_6 = 54; // 6 on keyboard
const VK_7 = 55; // 7 on keyboard
const VK_8 = 56; // 8 on keyboard
const VK_9 = 57; // 9 on keyboard

export enum KeyCode {
  RED = VK_RED,
  GREEN = VK_GREEN,
  YELLOW = VK_YELLOW,
  BLUE = VK_BLUE,
  UP = VK_UP,
  DOWN = VK_DOWN,
  LEFT = VK_LEFT,
  RIGHT = VK_RIGHT,
  ENTER = VK_ENTER,
  BACK = VK_BACK,
  PLAY = VK_PLAY,
  PAUSE = VK_PAUSE,
  STOP = VK_STOP,
  SKIP_FORWARD = VK_SKIP_FORWARD,
  SKIP_BACK = VK_SKIP_BACK,
  PLAY_PAUSE = VK_PLAY_PAUSE,
  REWIND = VK_REWIND,
  FAST_FWD = VK_FAST_FWD,
  ZERO = VK_0,
  ONE = VK_1,
  TWO = VK_2,
  THREE = VK_3,
  FOUR = VK_4,
  FIVE = VK_5,
  SIX = VK_6,
  SEVEN = VK_7,
  EIGHT = VK_8,
  NINE = VK_9,
}

/**
 * Standard key names.
 * @enum
 */
export enum KeyName {
  Unidentified = "Unidentified",
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  Backspace = "Backspace",
  Enter = "Enter",
  GoBack = "GoBack",
  Space = " ",
  ColorF0Red = "ColorF0Red",
  ColorF1Green = "ColorF1Green",
  ColorF2Yellow = "ColorF2Yellow",
  ColorF3Blue = "ColorF3Blue",
  MediaPlay = "MediaPlay",
  MediaPause = "MediaPause",
  MediaStop = "MediaStop",
  MediaTrackNext = "MediaTrackNext",
  MediaTrackPrevious = "MediaTrackPrevious",
  MediaPlayPause = "MediaPlayPause",
  MediaRewind = "MediaRewind",
  MediaFastForward = "MediaFastForward",

  Digit0 = "0",
  Digit1 = "1",
  Digit2 = "2",
  Digit3 = "3",
  Digit4 = "4",
  Digit5 = "5",
  Digit6 = "6",
  Digit7 = "7",
  Digit8 = "8",
  Digit9 = "9",

  KeyA = "A",
  KeyB = "B",
  KeyC = "C",
  KeyD = "D",
  KeyE = "E",
  KeyF = "F",
  KeyG = "G",
  KeyH = "H",
  KeyI = "I",
  KeyJ = "J",
  KeyK = "K",
  KeyL = "L",
  KeyM = "M",
  KeyN = "N",
  KeyO = "O",
  KeyP = "P",
  KeyQ = "Q",
  KeyR = "R",
  KeyS = "S",
  KeyT = "T",
  KeyU = "U",
  KeyV = "V",
  KeyW = "W",
  KeyX = "X",
  KeyY = "Y",
  KeyZ = "Z",

  GamePadCenter = "GamePadCenter",
  GamepadDPadRight = "GamepadDPadRight",
  GamepadDPadLeft = "GamepadDPadLeft",
  GamepadDPadDown = "GamepadDPadDown",
  GamepadDPadUp = "GamepadDPadUp",
  GamepadRightThumbstick = "GamepadRightThumbstick",
  GamepadLeftThumbstick = "GamepadLeftThumbstick",
  GamepadMenu = "GamepadMenu",
  GamepadView = "GamepadView",
  GamepadRightTrigger = "GamepadRightTrigger",
  GamepadLeftTrigger = "GamepadLeftTrigger",
  GamepadRightBumper = "GamepadRightBumper",
  GamepadLeftBumper = "GamepadLeftBumper",
  GamepadY = "GamepadY",
  GamepadX = "GamepadX",
  GamepadB = "GamepadB",
  GamepadA = "GamepadA",
  GamepadLeftThumbstickUp = "GamepadLeftThumbstickUp",
  GamepadRightThumbstickUp = "GamepadRightThumbstickUp",
  GamepadLeftThumbstickDown = "GamepadLeftThumbstickDown",
  GamepadRightThumbstickDown = "GamepadRightThumbstickDown",
  GamepadLeftThumbstickLeft = "GamepadLeftThumbstickLeft",
  GamepadRightThumbstickLeft = "GamepadRightThumbstickLeft",
  GamepadLeftThumbstickRight = "GamepadLeftThumbstickRight",
  GamepadRightThumbstickRight = "GamepadRightThumbstickRight",
}

export const appIds = {
  searchInput: "q",
  searchSubmit: "q-submit",
  backToTop: "back-to-top",
};

export function appIdSelector(key: keyof typeof appIds): string {
  return `#${appIds[key]}`;
}
