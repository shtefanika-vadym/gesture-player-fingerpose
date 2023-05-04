import * as fp from 'fingerpose'

import { PLAYER_CONSTANTS } from 'features/player/constants/player.constants'

export const PauseGesture = new fp.GestureDescription(PLAYER_CONSTANTS.PAUSE)

for (const finger of [
  fp.Finger.Thumb,
  fp.Finger.Index,
  fp.Finger.Middle,
  fp.Finger.Ring,
  fp.Finger.Pinky,
]) {
  PauseGesture.addCurl(finger, fp.FingerCurl.NoCurl)
  PauseGesture.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0)
  PauseGesture.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0)
  PauseGesture.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1.0)
}
