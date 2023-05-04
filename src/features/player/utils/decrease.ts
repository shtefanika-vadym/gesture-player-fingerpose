import * as fp from 'fingerpose'

import { PLAYER_CONSTANTS } from 'features/player/constants/player.constants'

export const DecreaseGesture = new fp.GestureDescription(PLAYER_CONSTANTS.DECREASE)

DecreaseGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl)
DecreaseGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0)
DecreaseGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl)
DecreaseGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0)
DecreaseGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0)

for (const finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  DecreaseGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0)
}
