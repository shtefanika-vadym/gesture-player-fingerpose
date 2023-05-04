import * as fp from 'fingerpose'

import { PLAYER_CONSTANTS } from 'features/player/constants/player.constants'

export const FullscreenGesture = new fp.GestureDescription(PLAYER_CONSTANTS.FULL_SCREEN)

FullscreenGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl)
FullscreenGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)
FullscreenGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0)
FullscreenGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0)

FullscreenGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl)
FullscreenGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownRight, 1.0)
FullscreenGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownLeft, 1.0)
FullscreenGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 1.0)
FullscreenGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 1.0)

for (const finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
  FullscreenGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0)
}
