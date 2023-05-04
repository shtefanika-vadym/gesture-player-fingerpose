import * as fp from 'fingerpose'

import { PLAYER_CONSTANTS } from 'features/player/constants/player.constants'

export const IncreaseGesture = new fp.GestureDescription(PLAYER_CONSTANTS.INCREASE)

IncreaseGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl)
IncreaseGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0)
IncreaseGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl)
IncreaseGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0)
IncreaseGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 1.0)

for (const finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  IncreaseGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0)
}
