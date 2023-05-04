import * as fp from 'fingerpose'

import { PLAYER_CONSTANTS } from 'features/player/constants/player.constants'

export const PlayGesture = new fp.GestureDescription(PLAYER_CONSTANTS.PLAY)

PlayGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0)
PlayGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)
PlayGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.9)
PlayGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.9)

for (const finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  PlayGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0)
  PlayGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9)
}

PlayGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0)
PlayGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0)
PlayGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0)
PlayGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0)
